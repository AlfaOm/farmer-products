import React from "react";
import Panel from "/src/components/ui/panel/panel";
import { TitleSize } from "/src/components/ui/title/title";
import Tabs from "/src/components/ui/tabs/tabs";
import OptionsList from "/src/components/ui/options-list/options-list";
import { ProductImage, ContentWrapper, ProductTitle, Price } from "./styled";

function ProductCard({ product }) {
  const tabList = [
    {
      title: "Описание",
      content: product.description
    },
    {
      title: "Характеристики",
      content: <OptionsList list={product.specifications} />
    },
    {
      title: "Свойства",
      content: <OptionsList list={product.structure} />
    }
  ];
  return (
    <Panel>
      <ProductImage src={product.image} />
      <ContentWrapper>
        <ProductTitle as="h3" size={TitleSize.SMALL}>
          {product.name}
        </ProductTitle>
        <Tabs maxContentHeight="105px" tabList={tabList} />
        <Price>
          {product.price} руб. / {product.weight} гр.
        </Price>
      </ContentWrapper>
    </Panel>
  );
}

export default ProductCard;
