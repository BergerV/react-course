import { ReactNode, useContext, useMemo } from 'react';
import { Button } from 'react-bootstrap';
import { Theme, ThemeContext } from '../contexts/ThemeContext';

export const Wrapper = ({ children} : { children: ReactNode }) => {
  const { theme, setTheme } = useContext(ThemeContext);

  const oppositeTheme = useMemo(() => {
    return theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
  }, [theme]);

  return (
    <div className={theme} >
      <Button
        className='change_theme_btn'
        variant={oppositeTheme}
        onClick={() => setTheme(oppositeTheme)}
      >{oppositeTheme}</Button>
      {children}
    </div>
  )
}
