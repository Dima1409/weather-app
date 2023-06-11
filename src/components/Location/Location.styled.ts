import styled from "styled-components";
import theme from "utils/theme";

const LocationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  border: 1px solid transparent;
  border-radius: 20px;
  background-color: ${theme.colors.background};
  box-shadow: 0 2px 8px ${theme.colors.dark};
`;
const CityWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Image = styled.img`
  width: 120px;
  height: 120px;
  display: block;
  margin: 0;
`;
const DescriptionWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 10px 0;
  flex-wrap: wrap;
`;
const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border: 1px solid transparent;
  border-radius: 20px;
  padding: 4px;
  margin-bottom: 10px;
  width: 80px;
  height: 80px;
  opacity: 0.9;
  background-color: ${theme.colors.background};
  box-shadow: 0 2px 8px ${theme.colors.dark};
  font-size: ${theme.fontSizes.small}px;
  font-weight: ${theme.fontWeights.medium};
  color: white;
`;
const CityMain = styled.p`
  font-size: ${theme.fontSizes.large}px;
  font-weight: ${theme.fontWeights.bold};
  color: white;
  margin: 0;
`;
export {
  LocationWrapper,
  CityWrapper,
  Image,
  Description,
  CityMain,
  DescriptionWrapper,
};
