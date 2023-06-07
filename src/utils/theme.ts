const breakpoints = {
  mob: 320,
  tab: 768,
  desk: 1280,
};

const theme = {
  colors: {
    accent: "white",
    background: "teal",
    disabled: "gray",
    dark: "black",
    light: "blue",
    enabled: "green",
  },
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

export default theme;
