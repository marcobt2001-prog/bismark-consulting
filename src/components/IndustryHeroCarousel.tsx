'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { industries } from '../data/industries';

const SLIDE_INTERVAL_MS = 6000;

export default function IndustryHeroCarousel() {
  const slides = industries.filter((i) => i.heroImage);
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (isPaused || slides.length <= 1) return;

    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, SLIDE_INTERVAL_MS);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused, slides.length]);

  const goTo = (next: number) => {
    setIndex(next);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  if (slides.length === 0) return null;

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label="Featured industries"
      className="relative w-full aspect-[4/3] md:aspect-[21/9] overflow-hidden bg-navy-900"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      {slides.map((industry, i) => {
        const isActive = i === index;
        return (
          <Link
            key={industry.slug}
            href={`/industries/${industry.slug}`}
            aria-hidden={!isActive}
            tabIndex={isActive ? 0 : -1}
            className={`absolute inset-0 transition-opacity duration-300 ${
              isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            <Image
              src={industry.heroImage as string}
              alt={industry.name}
              fill
              priority={i === 0}
              loading={i === 0 ? undefined : 'lazy'}
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 px-6 sm:px-10 lg:px-16 pb-16 md:pb-20">
              <h3 className="font-display text-3xl md:text-5xl text-white tracking-wide">
                {industry.name}
              </h3>
              <p className="mt-2 text-base md:text-lg text-gray-200 max-w-3xl">
                {industry.descriptor}
              </p>
            </div>
          </Link>
        );
      })}

      <div className="absolute bottom-4 left-0 right-0 z-20 flex justify-center gap-2">
        {slides.map((industry, i) => (
          <button
            key={industry.slug}
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              goTo(i);
            }}
            aria-label={`Go to slide ${i + 1} — ${industry.name}`}
            aria-current={i === index}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === index ? 'w-8 bg-gold-600' : 'w-2 bg-white/60 hover:bg-white/90'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
