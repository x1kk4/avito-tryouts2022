import { FC } from "react";
import { Flex } from "@chakra-ui/react";
import { Header } from "./components/Header";
import { Root } from "./pages/Root";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ContentWrapper } from "./components/ContentWrapper";

export const App: FC = () => {
  return (
    <Router>
      <Flex direction={"column"}>
        <Header />
        <ContentWrapper>
          <Switch>
            <Route path="/">
              <Root />
            </Route>
          </Switch>
        </ContentWrapper>
      </Flex>
    </Router>
  );
};
