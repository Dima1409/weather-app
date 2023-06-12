import styled from 'styled-components';

const Toggle = styled.label` 
  position: relative;
  display: inline-block;
  width: 50px;
  height: 25px;
  margin: 0 0.25rem;
  & > input[type="checkbox"] {
    display: none;
    &:checked + span::before {
      transform: translateX(25px);
      background-color: ${(props) => props.theme.dark};
    }
    &:checked + span {
      background-color: ${(props) => props.theme.light}f;
    }
  }
  & > span {
  position: absolute;
  cursor: pointer;
  background-color: ${(props) => props.theme.background};
  border-radius: 25px;
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
  width: 21px;
  height: 21px;
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

export { Toggle, ThemeSwitch};