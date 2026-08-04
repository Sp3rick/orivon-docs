import {cn} from '@/lib/utils';

interface LogoProps {
  size?: number;
  className?: string;
}

/**
 * Orivon mark: a paper-plane (messaging/send glyph) inside a ring.
 * Pure monochrome so it inherits the current text color in any theme.
 */
export function Logo({size = 24, className}: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
      className={cn('logo-mark', className)}
    >
      <circle
        cx="16"
        cy="16"
        r="12.4"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <path
        d="M22.6 8 9.4 14.6 14.3 16.4 16.6 22.2 19.6 11.9 Z"
        fill="currentColor"
      />
      <path
        d="M9.4 14.6 16.6 22.2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0"
      />
    </svg>
  );
}