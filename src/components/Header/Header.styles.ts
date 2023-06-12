import styled from "styled-components";
import { theme } from "utils/theme";

const MainHeader = styled.header`
  background-color: ${(props) => props.theme.background};
  box-shadow: 0 0 30px ${(props) => props.theme.dark};
  padding: 20px 0;
  font-size: ${theme.fontSizes.medium};
  color: ${(props) => props.theme.accent};
  margin-bottom: 30px;
`;
const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export { MainHeader, HeaderWrapper };
