import { Box } from "@chakra-ui/react";
import React, { FC, ReactNode } from "react";
import { useParams } from "react-router-dom";

interface StoryProps {
  children?: JSX.Element | JSX.Element[];
}

type Id = {
  id: string | undefined;
};

export const Story: FC<StoryProps> = () => {
  const { id }: Id = useParams();
  return <Box>{`Thread: ${id}`}</Box>;
};
