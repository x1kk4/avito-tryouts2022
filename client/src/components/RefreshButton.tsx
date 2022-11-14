import React, { FC } from "react";
import { IconButton } from "@chakra-ui/react";
import { RepeatIcon } from "@chakra-ui/icons";

export const RefreshButton: FC = ({}) => {
  return <IconButton aria-label="Refresh news" icon={<RepeatIcon />} />;
};
