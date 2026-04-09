import Link from 'next/link';

interface LogoProps {
  variant?: 'light' | 'dark';
}

export default function Logo({ variant = 'light' }: LogoProps) {
  const isDark = variant === 'dark';
  const titleColor = isDark ? 'text-white' : 'text-navy-900';
  const subtitleColor = isDark ? '#c9a227' : '#a17318';

  return (
    <Link href="/" className="block">
      <div className={`flex flex-col items-center${isDark ? ' w-fit' : ''}`} style={{ lineHeight: 1 }}>
        <span
          className={`font-logo ${titleColor}`}
          style={{
            fontWeight: 700,
            fontSize: '28px',
            letterSpacing: '0.18em',
          }}
        >
          BISMARK
        </span>
        <div
          style={{
            width: '85%',
            height: '1px',
            background: 'linear-gradient(90deg, transparent, #c9a227, transparent)',
            margin: '3.5px 0',
          }}
        />
        <span
          className="font-logo"
          style={{
            fontWeight: isDark ? 700 : 700,
            fontSize: isDark ? '9.5px' : '13px',
            letterSpacing: isDark ? '0.22em' : '0.16em',
            paddingLeft: isDark ? '0.22em' : '0.16em',
            color: subtitleColor,
          }}
        >
          CONSULTING GROUP
        </span>
      </div>
    </Link>
  );
}
