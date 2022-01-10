import styled from "styled-components";
import { Section } from "/src/components/styled";

export const StyledSection = styled(Section)`
  position: absolute;
  justify-content: space-between;
  align-items: center;
  width: ${(props) => props.theme.pageWidth};
  height: ${(props) => props.theme.footerHeight};
  margin: 0 auto;
  bottom: 0;
  left: 0;
  right: 0;
  padding-top: 0;
  padding-bottom: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
`;

export const Copyright = styled.span`
  font-size: 18px;
  line-height: 27px;
  vertical-align: middle;
`;
