import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi";
import { IconContext } from "react-icons";
import { Toggle, ThemeSwitch } from "./ButtonThemeToggle.styled";

interface ButtonThemeProps {
  check: boolean;
  chooseTheme: () => void;
}

const ButtonThemeToggle: React.FC<ButtonThemeProps> = ({
  check,
  chooseTheme,
}) => {
  return (
    <>
      <ThemeSwitch>
        <IconContext.Provider value={{ size: "25px" }}>
          <HiOutlineSun />
          <Toggle>
            <input type="checkbox" checked={check} onChange={chooseTheme} />
            <span />
          </Toggle>
          <HiOutlineMoon />
        </IconContext.Provider>
      </ThemeSwitch>
    </>
  );
};

export default ButtonThemeToggle;
