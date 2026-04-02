import Link from 'next/link';

interface LogoProps {
  variant?: 'light' | 'dark';
}

export default function Logo({ variant = 'light' }: LogoProps) {
  if (variant === 'light') {
    return (
      <Link href="/" className="block">
        <img
          src="/images/bismark-logo-white-bg.svg"
          alt="Bismark Consulting Group"
          className="h-14 md:h-16 w-auto"
        />
      </Link>
    );
  }

  return (
    <Link href="/" className="block">
      <div className="flex flex-col leading-none">
        <span className="font-display text-4xl md:text-5xl tracking-wider text-white">
          BISMARK
        </span>
        <span className="font-sans text-sm md:text-base tracking-widest text-gray-400 -mt-1">
          CONSULTING
        </span>
      </div>
    </Link>
  );
}
