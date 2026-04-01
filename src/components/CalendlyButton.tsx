'use client';

import { ArrowRight } from 'lucide-react';
import { openCalendlyPopup } from '../utils/openCalendlyPopup';

interface CalendlyButtonProps {
  label?: string;
  className?: string;
  showArrow?: boolean;
}

export default function CalendlyButton({
  label = 'SCHEDULE A WALKTHROUGH',
  className = 'inline-flex items-center justify-center gap-2 bg-gold-600 text-navy-900 px-8 py-4 font-display text-lg hover:bg-gold-500 transition-colors',
  showArrow = true,
}: CalendlyButtonProps) {
  return (
    <button onClick={openCalendlyPopup} className={className}>
      {label}
      {showArrow && <ArrowRight className="w-5 h-5" />}
    </button>
  );
}
