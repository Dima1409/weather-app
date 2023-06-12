import { MainHeader, HeaderWrapper } from "./Header.styles";
import { ReactNode } from "react";
import Container from "components/Container/Container";
import { useTheme } from "components/ThemeContext/ThemeContext";
import ButtonThemeToggle from "components/ButtonThemeToggle/ButtonThemeToggle";

interface HeaderProps {
  children: ReactNode;
}

const Header: React.FC<HeaderProps> = ({ children }) => {
  const { currentTheme, switchTheme } = useTheme();
  return (
    <MainHeader>
      <Container>
        <HeaderWrapper>
          <ButtonThemeToggle
            check={currentTheme.name==='dark'}
            chooseTheme={switchTheme}
          ></ButtonThemeToggle>
          {children}
        </HeaderWrapper>
      </Container>
    </MainHeader>
  );
};

export default Header;
