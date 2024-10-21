import { createContext } from 'react';

export enum Theme  {
  DARK = 'dark',
  LIGHT = 'light',
}

type ThemeContextValue = {
  theme:  Theme;
  setTheme: (theme: Theme) => void;
};
export const ThemeContext = createContext<ThemeContextValue>({
  theme: Theme.DARK, setTheme: () => { throw new Error('Provide provider')}
});
