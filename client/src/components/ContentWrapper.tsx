import { Box, Center } from "@chakra-ui/react";
import React, { FC, ReactNode } from "react";

interface ContentWrapperProps {
  children: ReactNode;
}

export const ContentWrapper: FC<ContentWrapperProps> = ({ children }) => {
  return (
    <Center>
      <Box w={"70%"}>{children}</Box>
    </Center>
  );
};
