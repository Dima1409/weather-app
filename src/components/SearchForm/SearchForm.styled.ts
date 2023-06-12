import styled from "styled-components";
// import theme from "utils/theme";

const Form = styled.form`
  border-radius: 6px;
`;

const InputForm = styled.input`
  padding: 8px;
  border: none;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  outline: none;
  max-width: 120px;
`;

const BtnSubmit = styled.button`
  margin: 0;
  padding: 8px 4px;
  color: ${(props) => props.theme.accent};
  border: 0;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  background-color: ${(props) => props.theme.enabled};
  &:disabled {
    background-color: ${(props) => props.theme.disabled};
  }
`;

export { Form, InputForm, BtnSubmit };
