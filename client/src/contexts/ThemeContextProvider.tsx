import { Theme, ThemeContext } from './ThemeContext';
import React, { ReactNode, useState } from 'react';

export const ThemeContextProvider = ({ children }: { children: ReactNode }) => {
  const [ theme, setTheme] = useState(Theme.DARK);
  const setNewTheme = (theme: Theme) => setTheme(theme);

  return (<ThemeContext.Provider value={{ theme, setTheme: setNewTheme }} >
    {children}
  </ThemeContext.Provider>)
}
