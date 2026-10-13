import { createContext, useContext } from 'react';

export type Theme = 'dark' | 'light';

export interface ThemeValue {
  theme: Theme;
  toggle: () => void;
}

/**
 * Theme has to be shared rather than per-component: the navbar toggle and the
 * WebGL background must agree, or you get light surfaces over a dark canvas.
 */
export const ThemeContext = createContext<ThemeValue>({ theme: 'dark', toggle: () => {} });

export const useTheme = () => useContext(ThemeContext);
