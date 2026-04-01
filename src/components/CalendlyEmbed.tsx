'use client';

import { useEffect, useRef, useState } from 'react';

interface CalendlyEmbedProps {
  url: string;
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

export default function CalendlyEmbed({ url }: CalendlyEmbedProps) {
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
    if (containerRef.current) observer.observe(containerRef.current);
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

    // Force iframe to fill container whenever Calendly creates or resizes it
    const forceIframeHeight = () => {
      if (!widgetRef.current) return;
      const iframe = widgetRef.current.querySelector('iframe');
      if (iframe) {
        iframe.style.setProperty('height', '100%', 'important');
        iframe.style.setProperty('min-height', '100%', 'important');
        iframe.style.setProperty('position', 'absolute', 'important');
        iframe.style.setProperty('top', '0', 'important');
        iframe.style.setProperty('left', '0', 'important');
        iframe.style.setProperty('width', '100%', 'important');
      }
    };

    // Watch for the iframe being injected into the DOM
    const mutationObserver = new MutationObserver(() => forceIframeHeight());
    mutationObserver.observe(widgetRef.current, { childList: true, subtree: true });

    // Also force on a short interval for the first few seconds (catches async resizes)
    const interval = setInterval(forceIframeHeight, 200);
    setTimeout(() => clearInterval(interval), 5000);

    return () => {
      mutationObserver.disconnect();
      clearInterval(interval);
    };
  }, [scriptReady, url]);

  return (
    <div ref={containerRef}>
      {!isVisible ? (
        <div className="flex flex-col items-center justify-center bg-gray-50 border border-gray-200 rounded-lg" style={{ height: '900px' }}>
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
          style={{ position: 'relative', width: '100%', height: '900px', overflow: 'visible' }}
        />
      )}
    </div>
  );
}
