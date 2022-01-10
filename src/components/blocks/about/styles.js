import styled from "styled-components";
import { P, Section } from "/src/components/styled";
import fermer from "/src/assets/fermer.svg";

export const StyledSection = styled(Section)`
  display: flex;
  align-items: center;
  position: relative;
  padding-top: 183px;
  padding-bottom: 183px;
  padding-left: ${(props) => props.theme.pagePadding};
  padding-right: ${(props) => props.theme.pagePadding};
  background-color: ${(props) => props.theme.colorForBackgroundAbout};
  box-sizing: border-box;

  &::after {
    content: "";
    position: absolute;
    /* top: 35px; */
    bottom: 0;
    right: ${(props) => props.theme.pagePadding};
    width: 446px;
    height: 563px;
    background-repeat: no-repeat;
    background: url(${fermer});
  }
`;

export const TextWrapper = styled.div`
  width: 637px;
`;

export const Text = styled(P)`
  margin-top: 24px;
  padding-right: 116px;
  max-width: 610px;
  font-size: ${(props) => props.theme.fontSizeDefault};
  line-height: 27px;
  box-sizing: border-box;
`;
