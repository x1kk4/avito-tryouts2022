import { Flex, Spacer } from "@chakra-ui/react";
import React, { FC } from "react";
import { RefreshButton } from "./RefreshButton";
import { ThemeButton } from "./ThemeButton";

export const Header: FC = ({}) => {
  return (
    <Flex direction={"row"}>
      <RefreshButton />
      <Spacer />
      <div>Header title</div>
      <Spacer />
      <ThemeButton aria-label="1" />
    </Flex>
  );
};
