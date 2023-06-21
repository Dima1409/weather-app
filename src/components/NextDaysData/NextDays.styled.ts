import styled from "styled-components";
import { theme } from "utils/theme";
import { FaTemperatureLow, FaTemperatureHigh, FaWind } from "react-icons/fa";
import { LoadDate } from "components/AdditionalData/AdditionalData.styled";

const MainDate = styled(LoadDate)`
  font-size: ${theme.fontSizes.small}px;
`;

const DayOfWeek = styled(LoadDate)`
  font-size: ${theme.fontSizes.medium}px;
  margin: 0;
`;

const MinMaxTemp = styled.span`
  font-size: ${theme.fontSizes.base}px;
  color: ${(props) => props.theme.text};
  margin-left: 4px;
`;

const Rain = styled.p`
  font-size: ${theme.fontSizes.base}px;
  margin: 0;
  text-align: center;
  color: ${(props) => props.theme.text};
`;

const Image = styled.img`
  display: block;
  margin: 0 auto;
`;
const IconLow = styled(FaTemperatureLow)`
  color: ${(props) => props.theme.text};
`;
const IconMax = styled(FaTemperatureHigh)`
  color: ${(props) => props.theme.text};
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
  MainDate,
  DayOfWeek,
  Rain,
  MinMaxTemp,
  Image,
  IconLow,
  IconMax,
  IconWind,
  FewDaysWrapper
};
