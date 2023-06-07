import { ReactNode } from "react";
import { MainContainer } from "./Container.styled";

interface ContainerProps {
  children: ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <MainContainer>{children}</MainContainer>;
};

export default Container;
