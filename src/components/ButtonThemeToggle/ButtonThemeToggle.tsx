// import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi";
import { IconContext } from "react-icons";
import { Toggle, ThemeSwitch, SvgSun, SvgMoon } from "./ButtonThemeToggle.styled";

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
          <SvgSun/>
          <Toggle>
            <input type="checkbox" checked={check} onChange={chooseTheme}/>
            <span />
          </Toggle>
          <SvgMoon/>
        </IconContext.Provider>
      </ThemeSwitch>
    </>
  );
};

export default ButtonThemeToggle;
