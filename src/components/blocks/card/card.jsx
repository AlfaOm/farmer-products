import React from "react";
import { StyledSection } from "./styled";
import CardTrade from "/src/components/ui/card-trade/card-trade";

function CardWrapper({ tradedate }) {
  console.log(tradedate);
  return (
    <StyledSection>
      <CardTrade tradedate={tradedate} />
    </StyledSection>
  );
}

export default CardWrapper;
