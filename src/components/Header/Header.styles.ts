import styled from "styled-components";
import theme from "../../utils/theme";

const MainHeader = styled.header`
  background-color: ${theme.colors.background};
  box-shadow: 0 0 30px ${theme.colors.dark};
  padding: 20px 0;
  font-size: ${theme.fontSizes.medium};
  color: ${theme.colors.accent};
  margin-bottom: 30px;
`;
const HeaderWrapper = styled.div`
display: flex;
  align-items: center;
  justify-content: space-between;
`
export { MainHeader, HeaderWrapper };
