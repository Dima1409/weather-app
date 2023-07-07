import styled from 'styled-components';
import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi";

const SvgMoon = styled(HiOutlineMoon)`
color: ${(props) => props.theme.text};
`
const SvgSun = styled(HiOutlineSun)`
color: ${(props) => props.theme.text};
`

const Toggle = styled.label` 
  position: relative;
  display: inline-block;
  width: 40px;
  height: 20px;
  margin: 0 0.25rem;
  & > input[type="checkbox"] {
    display: none;
    &:checked + span::before {
      transform: translateX(20px);
      background-color: ${(props) => props.theme.enabled};
    }
    &:checked + span {
      background-color: ${(props) => props.theme.text};
    }
  }
  & > span {
  position: absolute;
  cursor: pointer;
  background-color: ${(props) => props.theme.accent};
  border-radius: 20px;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transition: background-color 0.2s ease;
  &::before {
  position: absolute;
  content: "";
  left: 2px;
  top: 2px;
  width: 16px;
  height: 16px;
  background-color: ${(props) => props.theme.enabled};
  border-radius: 50%;
  transition: transform 0.3s ease;
  }
  }
`
const ThemeSwitch = styled.div`
display: flex;
align-items: center;
`

export { Toggle, ThemeSwitch, SvgMoon, SvgSun};