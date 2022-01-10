import React from "react";
import AdvantageCard from "/src/components/ui/advantage-card/advantage-card";
import { Ul, Li } from "/src/components/styled";
import { StyledAdvantages, StyledTitle, StyledButton } from "./styles";
import { AppRoute } from "/src/const";

function Advantages({ advantages }) {
  return advantages && advantages.length ? (
    <StyledAdvantages>
      <StyledTitle as="h2">Почему фермерские продукты лучше?</StyledTitle>
      <Ul $isGridList>
        {advantages.map((advantage) => (
          <Li key={advantage.id}>
            <AdvantageCard {...advantage} />
          </Li>
        ))}
      </Ul>
      <StyledButton link={AppRoute.ORDER}>Купить</StyledButton>
    </StyledAdvantages>
  ) : null;
}

export default Advantages;
