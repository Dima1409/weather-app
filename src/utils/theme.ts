const breakpoints = {
  mob: 320,
  tab: 768,
  desk: 1280,
};

const theme = {
  fontSizes: {
    extraSmall: 12,
    small: 14,
    base: 16,
    medium: 18,
    large: 20,
    extraLarge: 24,
  },
  fontWeights: {
    normal: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
  },
  mq: {
    mobileOnly: `@media screen and (max-width: ${breakpoints.tab - 0.02}px)`,
    mobile: `@media screen and (min-width: ${breakpoints.mob}px)`,
    tabletOnly: `@media screen and (min-width: ${
      breakpoints.tab
    }px) and (max-width: ${breakpoints.desk - 0.02}px)`,
    tablet: `@media screen and (min-width: ${breakpoints.tab}px)`,
    notDesktop: `@media screen and (max-width: ${breakpoints.desk - 0.02}px)`,
    desktop: `@media screen and (min-width: ${breakpoints.desk}px)`,
  },
};

export interface TTheme {
  name: string;
  accent: string;
  background: string;
  disabled: string;
  dark: string;
  light: string;
  enabled: string;
};

const themes: Record<"light" | "dark", TTheme> = {
  light: {
    name: "light",
    accent: "black",
    background: "rgba(103, 180, 240, .8)",
    disabled: "rgb(195 199 181)",
    dark: "black",
    light: "blue",
    enabled: "rgb(105 119 104)",
  },
  dark: {
    name: "dark",
    accent: "orange",
    background: "rgba(0, 0, 0, .8)",
    disabled: "rgb(195 199 181)",
    dark: "white",
    light: "darkblue",
    enabled: "rgb(105 119 104)",
  },
};

export { theme, themes };
