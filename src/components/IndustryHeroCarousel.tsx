'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useCallback, useEffect, useRef, useState } from 'react';
import { industries } from '../data/industries';

const SLIDE_INTERVAL_MS = 3000;

export default function IndustryHeroCarousel() {
  const slides = industries.filter((i) => i.heroImage);
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const clearTimer = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  const startTimer = useCallback(() => {
    if (isPaused || slides.length <= 1) return;
    clearTimer();
    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, SLIDE_INTERVAL_MS);
  }, [clearTimer, isPaused, slides.length]);

  useEffect(() => {
    startTimer();
    return clearTimer;
  }, [startTimer, clearTimer]);

  const goTo = (next: number) => {
    setIndex(next);
    startTimer();
  };

  const goPrev = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
    startTimer();
  };

  const goNext = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIndex((prev) => (prev + 1) % slides.length);
    startTimer();
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

      {/* Prev arrow */}
      <button
        type="button"
        onClick={goPrev}
        aria-label="Previous industry"
        className="group absolute left-0 top-0 bottom-0 z-20 flex items-center justify-start w-[72px] cursor-pointer bg-transparent hover:bg-gradient-to-r hover:from-black/40 hover:to-transparent focus-visible:bg-gradient-to-r focus-visible:from-black/40 focus-visible:to-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-600 transition-all duration-200"
      >
        <ChevronLeft
          className="ml-3 w-8 h-8 text-white opacity-0 drop-shadow-md transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100"
        />
      </button>

      {/* Next arrow */}
      <button
        type="button"
        onClick={goNext}
        aria-label="Next industry"
        className="group absolute right-0 top-0 bottom-0 z-20 flex items-center justify-end w-[72px] cursor-pointer bg-transparent hover:bg-gradient-to-l hover:from-black/40 hover:to-transparent focus-visible:bg-gradient-to-l focus-visible:from-black/40 focus-visible:to-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-600 transition-all duration-200"
      >
        <ChevronRight
          className="mr-3 w-8 h-8 text-white opacity-0 drop-shadow-md transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100"
        />
      </button>

      <div className="absolute bottom-4 left-0 right-0 z-20 flex justify-center gap-2 pointer-events-none">
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
            className={`pointer-events-auto h-2 rounded-full transition-all duration-300 ${
              i === index ? 'w-8 bg-gold-600' : 'w-2 bg-white/60 hover:bg-white/90'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
