import styled from "styled-components";
import { theme } from "utils/theme";

const LocationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  margin: 0 auto;
  border: 1px solid transparent;
  border-radius: 20px;
  background-color: ${(props) => props.theme.background};
  box-shadow: 0 0 4px ${(props) => props.theme.text};
  ${theme.mq.tablet} {
    width: 50%;
  }
`;
const CityWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Image = styled.img`
  width: 100px;
  height: 100px;
  display: block;
  margin: 0;
`;
const DescriptionWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 8px 0;
  flex-wrap: wrap;
`;
const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border: 1px solid transparent;
  border-radius: 20px;
  padding: 20px 4px;
  margin-bottom: 5px;
  width: 80px;
  opacity: 0.9;
  background-color: ${(props) => props.theme.background};
  box-shadow: 0 0 4px ${(props) => props.theme.text};
  font-size: ${theme.fontSizes.small}px;
  font-weight: ${theme.fontWeights.medium};
  color: white;
  & > span {
    font-weight: ${theme.fontWeights.semiBold};
    font-size: ${theme.fontSizes.medium}px;
    color: ${(props) => props.theme.text};
  }
  & > svg {
    color: ${(props) => props.theme.text};
  }
`;
const SunInfo = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 auto;
  background-color: ${(props) => props.theme.background};
  box-shadow: 0 0 4px ${(props) => props.theme.text};
  border-radius: 20px;
  margin-bottom: 12px;
  padding: 20px 4px;
  ${theme.mq.tablet} {
    width: 80%;
  }
`;
const TextInfo = styled.p`
  font-weight: ${theme.fontWeights.medium};
  color: ${(props) => props.theme.text};
  display: flex;
  padding: 4px;
  margin: 0;
  align-items: center;
  & > span {
    margin-left: 6px;
  }
`;
const CityMain = styled.p`
  font-size: ${theme.fontSizes.large}px;
  font-weight: ${theme.fontWeights.bold};
  color: ${(props) => props.theme.text};
  margin: 0;
`;

export {
  LocationWrapper,
  CityWrapper,
  Image,
  Description,
  CityMain,
  DescriptionWrapper,
  SunInfo,
  TextInfo,
};
