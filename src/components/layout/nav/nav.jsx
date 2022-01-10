import React from "react";
import Button from "/src/components/ui/button/button";
import { AppRoute } from "/src/const";
import { StyledButton } from "./styled";
import { Ul, Li } from "/src/components/styled";

const buttons = [
  {
    to: AppRoute.MAIN,
    button: (
      <StyledButton minWidth={260} key={AppRoute.MAIN} link={AppRoute.MAIN}>
        Главная
      </StyledButton>
    )
  },
  {
    to: AppRoute.ORDER,
    button: (
      <Button minWidth={260} key={AppRoute.ORDER} link={AppRoute.ORDER}>
        Купить
      </Button>
    )
  }
];

function Nav({ pageUrl }) {
  return (
    <nav>
      <Ul>
        {buttons
          .filter((button) => button.to !== pageUrl)
          .map((button) => (
            <Li key={button.to}>{button.button}</Li>
          ))}
      </Ul>
    </nav>
  );
}

export default Nav;
