import {Moon, Sun} from 'lucide-react';
import {useTheme} from '@/lib/theme';

interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({className}: ThemeToggleProps) {
  const {theme, toggle} = useTheme();
  const isDark = theme === 'dark';
  const label = isDark ? 'Switch to light theme' : 'Switch to dark theme';

  return (
    <button
      type="button"
      onClick={toggle}
      className={`navbar__icon-btn ${className ?? ''}`}
      aria-label={label}
      title={label}
      data-theme-toggle
    >
      <span className="sr-only">{label}</span>
      {isDark ? <Sun size={17} strokeWidth={1.8} /> : <Moon size={17} strokeWidth={1.8} />}
    </button>
  );
}
