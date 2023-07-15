import styled from "styled-components";

const InputForm = styled.input`
  padding: 6px 2px 6px 8px;
  border: none;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  outline: none;
  max-width: 100px;
`;

const BtnSubmit = styled.button`
  margin: 0;
  padding: 6px 4px 6px 2px;
  color: ${(props) => props.theme.text};
  border: 0;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  background-color: ${(props) => props.theme.enabled};
  transition: 0.3s all;
  &:disabled {
    background-color: ${(props) => props.theme.disabled};
  }
  &:hover:not(:disabled),
  &:focus:not(:disabled) {
    cursor: pointer;
  }
`;

export { InputForm, BtnSubmit };
