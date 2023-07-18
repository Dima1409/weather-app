import styled from "styled-components";
import { theme } from "utils/theme";
import image from "../../assets/images/randomBg/sunny-desktop.jpg";

const Welcome = styled.div`
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  margin: 0;
  background-image: url(${image});
  background-size: cover;
  color: ${(props) => props.theme.text};
`;
const WelcomeTitle = styled.h2`
  text-align: center;
  text-transform: capitalize;
  margin: 80px auto 10px auto;
  font-weight: ${theme.fontWeights.bold};
  font-size: ${theme.fontSizes.base}px;
  box-shadow: 0 0 100px ${(props) => props.theme.dark} inset;
  border-radius: 8px;
  width: 70%;
  padding: 4px 8px;
  ${theme.mq.tablet} {
    width: 50%;
    margin: 0 auto;
    font-size: ${theme.fontSizes.extraLarge}px;
    padding: 20px 8px;
    margin: 200px auto 20px auto;
  }
`;
const WelcomeList = styled.ul`
  text-shadow: 0 0 10px ${(props) => props.theme.dark};
  font-weight: ${theme.fontWeights.normal};
  padding: 0;
  margin: 0 20px;
  ${theme.mq.tablet} {
    width: 90%;
    margin: 0 auto;
  }
`;
const WelcomeListItem = styled.li`
  list-style: none;
  box-shadow: 0 0 80px ${(props) => props.theme.dark} inset;
  font-size: ${theme.fontSizes.small}px;
  border-radius: 8px;
  margin-bottom: 10px;
  padding: 4px 8px;
  ${theme.mq.tablet} {
    font-size: ${theme.fontSizes.large}px;
    padding: 20px 8px;
  }
`;
const WelcomeUsing = styled.p`
  font-size: ${theme.fontSizes.base};
  box-shadow: 0 0 70px ${(props) => props.theme.dark} inset;
  border-radius: 8px;
  margin: 0 auto;
  text-align: center;
  width: 70%;
  margin-bottom: 40px;
  padding: 4px 8px;
  ${theme.mq.tablet} {
    width: 40%;
    margin: 0 auto;
  }
`;
export { Welcome, WelcomeTitle, WelcomeList, WelcomeListItem, WelcomeUsing };
