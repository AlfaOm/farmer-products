import styled from "styled-components";

export const StyledLogo = styled.a`
  display: flex;
  align-items: center;
  height: 44px;
  text-decoration: none;

  &:hover,
  &:active,
  &:visited {
    opacity: 0.8;
  }
`;

export const LogoText = styled.span`
  display: flex;
  margin-left: 25px;
  font-size: 28px;
  font-weight: 700;
  line-height: 44px;
  min-height: 44px;
  color: ${(props) => props.theme.colorText};
`;
