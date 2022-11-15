import { FC } from "react";
import { Flex } from "@chakra-ui/react";
import { Header } from "./components/Header";
import { Root } from "./pages/Root";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export const App: FC = () => {
  return (
    <Router>
      <Flex direction={"column"}>
        <Header />
        <Switch>
          <Route path="/">
            <Root />
          </Route>
        </Switch>
      </Flex>
    </Router>
  );
};
