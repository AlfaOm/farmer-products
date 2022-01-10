import styled from "styled-components";

export const TextInput = styled.input`
  display: flex;
  height: 48px;
  width: 100%;
  background-color: ${(props) => props.theme.backgroundColorGray};
  padding-left: 12px;
  padding-right: 12px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  font-size: 14px;
  box-sizing: border-box;

  ::placeholder {
    color: ${(props) => props.theme.colorText};
  }
`;

export default TextInput;
