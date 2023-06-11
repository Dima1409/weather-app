import { MainHeader, HeaderWrapper } from "./Header.styles";
import { ReactNode } from "react";
import Container from "components/Container/Container";

interface HeaderProps {
  children: ReactNode;
}

const Header: React.FC<HeaderProps> = ({ children }) => {
  return (
    <MainHeader>
      <Container>
        <HeaderWrapper>
          <span>MyWeather</span>
          {children}
        </HeaderWrapper>
      </Container>
    </MainHeader>
  );
};

export default Header;
