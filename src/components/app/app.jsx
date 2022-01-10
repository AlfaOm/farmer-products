import React from "react";
import PageWrapper from "/src/components/layout/page-wrapper/page-wrapper";
import advantagelist from "/src/mocks/advantageList";
import products from "/src/mocks/products";
import { GlobalStyle } from "./styles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AppRoute } from "/src/const";
import MainPage from "/src/components/pages/main-page/main-page";
import Order from "/src/components/pages/order/order";
import ScrollTop from "/src/components/ui/scroll-top/scroll-top";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <ScrollTop />
        <Switch>
          <Route exact path={AppRoute.MAIN}>
            <PageWrapper pageUrl={AppRoute.MAIN}>
              <MainPage advantages={advantagelist} />
            </PageWrapper>
          </Route>
          <Route exact path={AppRoute.ORDER}>
            <PageWrapper pageUrl={AppRoute.ORDER}>
              <Order products={products} />
            </PageWrapper>
          </Route>
        </Switch>
      </Router>
    </>
  );
}
