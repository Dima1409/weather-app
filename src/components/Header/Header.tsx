import { MainHeader } from "./Header.styles";
import {ReactNode} from 'react';

interface HeaderProps {
  children: ReactNode
}

const Header: React.FC<HeaderProps> = ({children}) => {
  return <MainHeader>
    <span>MyWeather</span>
    {children}
    </MainHeader>;
};

export default Header;

