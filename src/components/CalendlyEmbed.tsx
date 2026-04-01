'use client';

import { useEffect, useRef, useState } from 'react';

interface CalendlyEmbedProps {
  url: string;
  minHeight?: number;
}

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (opts: {
        url: string;
        parentElement: HTMLElement;
      }) => void;
    };
  }
}

export default function CalendlyEmbed({ url, minHeight = 700 }: CalendlyEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [scriptReady, setScriptReady] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '300px' }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    if (!document.querySelector('link[href*="calendly"]')) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://assets.calendly.com/assets/external/widget.css';
      document.head.appendChild(link);
    }

    if (window.Calendly) {
      setScriptReady(true);
      return;
    }

    const existing = document.querySelector(
      'script[src="https://assets.calendly.com/assets/external/widget.js"]'
    );

    if (existing) {
      existing.addEventListener('load', () => setScriptReady(true));
      if (window.Calendly) setScriptReady(true);
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    script.onload = () => setScriptReady(true);
    document.head.appendChild(script);
  }, [isVisible]);

  useEffect(() => {
    if (!scriptReady || !widgetRef.current || !window.Calendly) return;

    const brandedUrl = `${url}?hide_gdpr_banner=1&background_color=ffffff&text_color=0c1742&primary_color=c9a227`;

    window.Calendly.initInlineWidget({
      url: brandedUrl,
      parentElement: widgetRef.current,
    });
  }, [scriptReady, url]);

  return (
    <div ref={containerRef} style={{ minHeight: `${minHeight}px` }}>
      {!isVisible ? (
        <div
          className="flex flex-col items-center justify-center rounded-lg bg-gray-50 border border-gray-200"
          style={{ minHeight: `${minHeight}px` }}
        >
          <div className="animate-pulse flex flex-col items-center gap-4">
            <div className="w-16 h-16 bg-navy-900 rounded-lg flex items-center justify-center">
              <svg className="w-8 h-8 text-gold-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
              </svg>
            </div>
            <p className="text-sm text-gray-500 font-medium">Loading scheduler...</p>
          </div>
        </div>
      ) : (
        <div
          ref={widgetRef}
          style={{ minWidth: '320px', minHeight: `${minHeight}px`, width: '100%' }}
        />
      )}
    </div>
  );
}
