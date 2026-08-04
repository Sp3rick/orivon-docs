import type {PrismTheme} from 'prism-react-renderer';

/**
 * Token colors are controlled by CSS (`src/styles/global.css`) so they adapt
 * perfectly to light and dark themes. This minimal theme prevents the renderer
 * from injecting inline colors while still emitting semantic token classes.
 */
export const cssDrivenTheme: PrismTheme = {
  plain: {
    color: '#e8e8e8',
    backgroundColor: 'transparent',
  },
  styles: [],
};
