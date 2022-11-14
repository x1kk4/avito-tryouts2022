import React, { FC } from "react";
import { Flex } from "@chakra-ui/react";
import { Header } from "./components/Header";

export const App: FC = () => {
  return (
    <>
      <Flex direction={"column"}>
        <Header />

        <div>NewsItem</div>
        <div>NewsItem</div>
        <div>NewsItem</div>
        <div>NewsItem</div>
        <div>NewsItem</div>
        <div>NewsItem</div>
        <div>NewsItem</div>
      </Flex>
    </>
  );
};
