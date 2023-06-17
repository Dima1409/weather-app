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
  text: string;
  accent: string;
  background: string;
  disabled: string;
  dark: string;
  enabled: string;
};

const themes: Record<"light" | "dark", TTheme> = {
  light: {
    name: "light",
    accent: "white",
    text: 'rgb(2 33 65)',
    background: "rgba(126, 179, 202, 0.8)",
    disabled: "rgb(119, 119, 119)",
    dark: "rgb(234 255 255)",
    enabled: "rgb(69, 69, 69)",
  },
  dark: {
    name: "dark",
    accent: "orange",
    text: 'rgb(201 243 192)',
    background: "rgba(0, 0, 0, .8)",
    disabled: "rgb(119, 119, 119)",
    dark: "rgb(32 32 32)",
    enabled: "rgb(69, 69, 69)",
  },
};

export { theme, themes };
