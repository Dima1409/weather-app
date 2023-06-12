import React, { useContext } from "react";
import { themes, TTheme } from "utils/theme";

type TThemeContext = {
  currentTheme: TTheme;
  switchTheme: () => void;
};

export const ThemeContext = React.createContext<TThemeContext>({
  currentTheme: themes.light,
  switchTheme: () => {}
});

export const useTheme = () => useContext(ThemeContext);
