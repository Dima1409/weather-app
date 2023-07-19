import styled from "styled-components";
import { theme } from "utils/theme";
import { FaWind } from "react-icons/fa";
import { LoadDate } from "components/AdditionalData/AdditionalData.styled";

const DateWrapper = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
margin-bottom: 6px;
`;

const MainDate = styled(LoadDate)`
  font-size: ${theme.fontSizes.small}px;
  text-decoration: underline;
  ${theme.mq.tablet} {
    font-size: ${theme.fontSizes.medium}px;
  }
`;

const DayOfWeek = styled(LoadDate)`
  font-size: ${theme.fontSizes.small}px;
  text-decoration: underline;
  margin: 0;
  ${theme.mq.tablet} {
    font-size: ${theme.fontSizes.medium}px;
  }
`;

const MinMaxTemp = styled.span`
  font-size: ${theme.fontSizes.small}px;
  color: ${(props) => props.theme.text};
  margin-left: 10px;
  ${theme.mq.tablet} {
    font-size: ${theme.fontSizes.large}px;
  }
`;

const Rain = styled.p`
  font-size: ${theme.fontSizes.base}px;
  margin: 0;
  text-align: center;
  color: ${(props) => props.theme.text};
  ${theme.mq.tablet} {
    font-size: ${theme.fontSizes.medium}px;
  }
`;

const Image = styled.img`
  display: block;
  margin: 0 auto;
`;

const IconWind = styled(FaWind)`
  color: ${(props) => props.theme.text};
`;
const FewDaysWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin: 5px 0;
`

export {
  DateWrapper,
  MainDate,
  DayOfWeek,
  Rain,
  MinMaxTemp,
  Image,
  IconWind,
  FewDaysWrapper
};
