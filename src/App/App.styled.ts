import { createGlobalStyle } from "styled-components";
interface Theme {
  dark: string;
}
const Global = createGlobalStyle<{ theme: Theme }>`
body {
    background-color: ${(props) => props.theme.dark};
}
`;

export { Global };
