import styled from "styled-components";
import { Section } from "/src/components/styled";

export const StyledSection = styled(Section)`
  width: ${(props) => props.theme.pageWidth};
  margin: 0 auto;
  position: relative;
  height: 80px;
  padding-top: 0;
  padding-bottom: 0;
  justify-content: space-between;
  align-items: center;

  background-color: ${(props) => props.theme.colorWhite};
  box-sizing: border-box;
`;
