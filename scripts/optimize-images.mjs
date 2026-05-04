// Re-run after adding new photos to public/images/:
//     node scripts/optimize-images.mjs
//
// Recompresses any .jpg/.jpeg/.png file over 1 MiB or wider than 2400px in
// place: max width 2400px, JPEG quality 82, PNG palette mode. Skips SVGs,
// ICOs, the founder photo, and files already small enough.
//
// Cloudflare Workers has a hard 25 MiB per-asset limit, which is the reason
// this script exists. Keeping all images well under 5 MiB avoids surprises.

import { readdir, stat, rename, unlink } from 'node:fs/promises';
import { join, extname } from 'node:path';
import sharp from 'sharp';

const ROOT = 'public/images';
const MAX_WIDTH = 2400;
const SIZE_THRESHOLD = 1024 * 1024; // 1 MiB
const JPEG_QUALITY = 82;
const SKIP_FILENAMES = new Set(['Luis-Telleria-Professional-Photo.png']);

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await walk(full)));
    } else {
      files.push(full);
    }
  }
  return files;
}

function isOptimizable(filePath) {
  const ext = extname(filePath).toLowerCase();
  return ext === '.jpg' || ext === '.jpeg' || ext === '.png';
}

function fmtSize(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} KiB`;
  return `${(bytes / (1024 * 1024)).toFixed(2)} MiB`;
}

async function processFile(filePath) {
  const fileName = filePath.split(/[\\/]/).pop();
  if (SKIP_FILENAMES.has(fileName)) {
    const { size } = await stat(filePath);
    return { filePath, skipped: true, reason: 'excluded by name', originalSize: size };
  }

  const { size: originalSize } = await stat(filePath);
  const ext = extname(filePath).toLowerCase();
  const image = sharp(filePath);
  const metadata = await image.metadata();
  const originalWidth = metadata.width ?? 0;

  const needsResize = originalWidth > MAX_WIDTH;
  const needsRecompress = originalSize > SIZE_THRESHOLD;

  if (!needsResize && !needsRecompress) {
    return { filePath, skipped: true, reason: 'already small enough', originalSize };
  }

  const tmpPath = `${filePath}.optimized.tmp`;

  let pipeline = sharp(filePath, { failOn: 'none' });
  if (needsResize) {
    pipeline = pipeline.resize({ width: MAX_WIDTH, withoutEnlargement: true });
  }
  if (ext === '.png') {
    pipeline = pipeline.png({ palette: true, quality: 90, compressionLevel: 9 });
  } else {
    pipeline = pipeline.jpeg({ quality: JPEG_QUALITY, mozjpeg: true });
  }

  await pipeline.toFile(tmpPath);
  const { size: newSize } = await stat(tmpPath);

  if (newSize >= originalSize) {
    await unlink(tmpPath);
    return { filePath, skipped: true, reason: 're-encode would not save space', originalSize };
  }

  await unlink(filePath);
  await rename(tmpPath, filePath);

  return {
    filePath,
    skipped: false,
    originalSize,
    newSize,
    originalWidth,
    resized: needsResize,
  };
}

async function main() {
  const all = await walk(ROOT);
  const targets = all.filter(isOptimizable);

  let totalOriginal = 0;
  let totalNew = 0;
  let processed = 0;
  let skipped = 0;
  const reports = [];

  for (const filePath of targets) {
    try {
      const r = await processFile(filePath);
      const rel = filePath.replace(/^public[\\/]/, '');
      if (r.skipped) {
        skipped++;
        totalOriginal += r.originalSize;
        totalNew += r.originalSize;
        reports.push(`SKIP  ${rel} (${fmtSize(r.originalSize)}) — ${r.reason}`);
      } else {
        processed++;
        totalOriginal += r.originalSize;
        totalNew += r.newSize;
        const pct = ((1 - r.newSize / r.originalSize) * 100).toFixed(1);
        const resizeNote = r.resized ? ` [resized from ${r.originalWidth}px wide]` : '';
        reports.push(
          `OPT   ${rel}: ${fmtSize(r.originalSize)} -> ${fmtSize(r.newSize)} (-${pct}%)${resizeNote}`
        );
      }
    } catch (err) {
      console.error(`ERROR processing ${filePath}: ${err.message}`);
      process.exit(1);
    }
  }

  for (const line of reports) console.log(line);
  console.log('');
  console.log(`Processed: ${processed}, Skipped: ${skipped}`);
  console.log(`Total: ${fmtSize(totalOriginal)} -> ${fmtSize(totalNew)} (saved ${fmtSize(totalOriginal - totalNew)})`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
