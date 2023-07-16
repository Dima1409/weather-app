import styled from "styled-components";
import { theme } from "utils/theme";

const InfoSearch = styled.p`
  font-weight: ${theme.fontWeights.normal};
  font-size: ${theme.fontSizes.large};
  text-align: center;
  color: ${(props) => props.theme.text};
  padding: 4px;
  margin: 0;
  margin-bottom: 40px;
`;
const ImageNotFound = styled.img`
width: 220px;
display: block;
margin: 0 auto;
`
export { InfoSearch, ImageNotFound };
