import React, { useState } from "react";
import { TabListItem, TabButton, Header, Content } from "./styled";

function Tabs({ tabList = [], maxContentHeight }) {
  const [selectIndex, setSelectIndex] = useState(0);

  return (
    <div>
      <Header>
        {tabList.map((tab, index) => (
          <TabListItem key={`tab${index * 10}`}>
            <TabButton
              $isSelect={selectIndex === index}
              {...(selectIndex === index
                ? { as: "span" }
                : {
                    onClick: () => {
                      setSelectIndex(index);
                    }
                  })}
            >
              {tab.title}
            </TabButton>
          </TabListItem>
        ))}
      </Header>
      <Content $maxContentHeight={maxContentHeight}>
        {tabList[selectIndex].content}
      </Content>
    </div>
  );
}

export default Tabs;
