import { FC } from "react";
import { Divider, Flex } from "@chakra-ui/react";
import { Header } from "./components/Header";
import { Root } from "./pages/Root";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ContentWrapper } from "./components/ContentWrapper";
import { Story } from "./pages/Story";

export const App: FC = () => {
  return (
    <Router>
      <Flex direction={"column"}>
        <Header />
        <ContentWrapper>
          <Switch>
            <Route exact path="/">
              <Root />
            </Route>
            <Route path="/story/:id">
              <Story />
            </Route>
          </Switch>
        </ContentWrapper>
      </Flex>
    </Router>
  );
};
