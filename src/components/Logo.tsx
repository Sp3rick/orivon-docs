import {cn} from '@/lib/utils';

interface LogoProps {
  size?: number;
  className?: string;
}

/**
 * Orivon mark: an orbit rendered as a split ring with a companion body.
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
        r="11.2"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeDasharray="60 10.3"
      />
      <circle cx="25.1" cy="9.1" r="3" fill="currentColor" />
      <circle cx="8.6" cy="23.4" r="1.6" fill="currentColor" opacity="0.55" />
    </svg>
  );
}
