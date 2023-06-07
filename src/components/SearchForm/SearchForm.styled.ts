import styled from "styled-components";
import theme from "utils/theme";

const InputForm = styled.input`
  padding: 8px;
  border: none;
  outline: none;
  max-width: 150px;
`;

const BtnSubmit = styled.button`
  margin: 0;
  padding: 8px 4px;
  border: 0;
  background-color: ${theme.colors.enabled};
  &:disabled {
    background-color: ${theme.colors.disabled};
  }
`;

export { InputForm, BtnSubmit };
