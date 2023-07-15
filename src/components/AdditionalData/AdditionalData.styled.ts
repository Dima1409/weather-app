import styled from "styled-components";
import Slider from "react-slick";
import { theme } from "utils/theme";

const LoadInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  font-size: ${theme.fontSizes.extraSmall}px;
  padding: 6px 0;
  border-radius: 10px;
  background-color: ${(props) => props.theme.background};
  min-height: 155px;
`;
const SliderWrapper = styled(Slider)`
  margin: 0 1px;
  font-weight: ${theme.fontWeights.medium};

  & > div > div {
    display: flex;
    justify-content: space-between;
    & > div {
      margin: 0 2px;
      flex-grow: 1;
      & > div > div {
        box-shadow: inset 0 0 4px ${(props) => props.theme.text};
      }
    }
  }
  & > ul > li.slick-active > button::before {
    color: ${(props) => props.theme.text};
    
  }
  & > ul > li > button::before {
    color: ${(props) => props.theme.text};
  }
  & > ul {
    position: static;
    margin-bottom: 8px;
  }
`;
const LoadDate = styled.div`
  color: ${(props) => props.theme.text};
  margin: 0;
  padding: 2px;
  text-align: center;
  font-size: ${theme.fontSizes.extraSmall}px;
`;

const LoadTemp = styled(LoadDate)`
   font-size: ${theme.fontSizes.large}px;
   font-weight: ${theme.fontWeights.semiBold};
`;

const Image = styled.img`
  display: block;
  margin: 0 auto;
`;

const Day = styled.p`
text-decoration: underline;
margin: 0;
`

export { LoadInfo, SliderWrapper, LoadDate, LoadTemp, Image, Day };
