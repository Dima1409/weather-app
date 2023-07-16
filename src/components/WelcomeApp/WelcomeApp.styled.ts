import styled from "styled-components";
import { theme } from "utils/theme";
import image from "../../assets/images/randomBg/sunny-desktop.jpg";

const Welcome = styled.div`
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  background-image: url(${image});
  background-size: cover;
  color: ${(props) => props.theme.text};
`;
const WelcomeTitle = styled.h2`
  text-align: center;
  text-transform: capitalize;
  margin-top: 200px;
  font-weight: ${theme.fontWeights.bold};
  font-size: ${theme.fontSizes.extraLarge};
`;
const WelcomeList = styled.ul`
  text-shadow: 0 0 10px ${(props) => props.theme.dark};
  font-weight: ${theme.fontWeights.normal};
  font-size: ${theme.fontSizes.large};
  padding: 0;
  margin: 0 30px 20px;
`;
const WelcomeListItem = styled.li`
  list-style: none;
  box-shadow: 0 0 50px ${(props) => props.theme.dark} inset;
  border-radius: 8px;
  padding: 4px 8px;
  margin-bottom: 10px;
`;
const WelcomeUsing = styled.p`
  font-size: ${theme.fontSizes.base};
  box-shadow: 0 0 30px ${(props) => props.theme.dark} inset;
  border-radius: 8px;
  margin: 0 auto;
  text-align: center;
  width: 80%;
`;
export { Welcome, WelcomeTitle, WelcomeList, WelcomeListItem, WelcomeUsing };
