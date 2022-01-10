import React from "react";
import { ReactComponent as LogoImage } from "/src/assets/logo.svg";

import { StyledLogo, LogoText } from "./styles";

function Logo() {
  return (
    <StyledLogo href="/">
      <LogoImage alt="логотип" />
      <LogoText>Фермерские продукты</LogoText>
    </StyledLogo>
  );
}

export default Logo;
