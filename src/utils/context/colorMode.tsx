import {createContext, ReactNode, useEffect, useState} from 'react';
type ThemeContextProps = {
  colorMode: string | undefined;
  setColorMode: ((value: string) => void) | undefined;
}

const themeContext: ThemeContextProps = {
  colorMode: undefined,
  // TODO: can remove value: string?
  setColorMode: undefined,
};

export const ThemeContext = createContext(themeContext);
interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeProvider = ({children}: ThemeProviderProps) => {
  // TODO: Scary use of ! (better way? is it guaranteed to be set?)
  // const [colorMode, rawSetColorMode] = useState<string>(document.body.dataset.theme!);
  const [colorMode, rawSetColorMode] = useState<string | undefined>(undefined);


  useEffect(() => {
    const initialColorMode = document.body.dataset.theme;

    if (initialColorMode) {
      window.localStorage.setItem('color-mode', initialColorMode);
      rawSetColorMode(initialColorMode);
    }
  }, []);

  // useEffect(() => {
  //   document.body.dataset.theme = colorMode;
  // }, [])

  function setColorMode(newValue: string) {
    rawSetColorMode(newValue);
    localStorage.setItem('color-mode', newValue);
    window.document.body.dataset.theme = newValue;
  }

  return (
    <ThemeContext.Provider value={{colorMode, setColorMode}}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
