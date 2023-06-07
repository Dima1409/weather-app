import styled from "styled-components";
import theme from "../../utils/theme";

const MainHeader = styled.header`
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${theme.colors.dark};
  background-color: ${theme.colors.background};
  padding: 20px 0;
  justify-content: space-around;
  font-size: ${theme.fontSizes.medium};
  color: ${theme.colors.accent};
`;
export { MainHeader };
