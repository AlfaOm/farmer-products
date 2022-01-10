import React from "react";
import Title, { TitleSize } from "/src/components/ui/title/title";
import { StyledCard, CardHeader, Image, Owner, CardText } from "./styles";

function AdvantageCard({ title, about, image, isNegative, owner }) {
  return (
    <StyledCard isNegative={isNegative}>
      <CardHeader>
        <Image width={56} height={56} src={image} alt={title} />
        <div>
          <Owner isNegative={isNegative}>{owner}</Owner>
          <Title as="h3" size={TitleSize.EXTRA_SMALL}>
            {title}
          </Title>
        </div>
      </CardHeader>
      <CardText dangerouslySetInnerHTML={{ __html: about }} />
    </StyledCard>
  );
}

export default AdvantageCard;
