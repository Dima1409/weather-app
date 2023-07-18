import { createGlobalStyle } from "styled-components";
import image from "../assets/images/randomBg/sunny-desktop.jpg";
interface Theme {
  dark: string;
}
const Global = createGlobalStyle<{ theme: Theme }>`
body {
    background-color: ${(props) => props.theme.dark};
    background-image: url(${image});
}
`;

export { Global };
