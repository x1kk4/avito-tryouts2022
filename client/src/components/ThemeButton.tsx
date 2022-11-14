import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";
import React, { FC } from "react";

export const ThemeButton: FC = () => {
  return <IconButton aria-label="Change theme" icon={<MoonIcon />} />;
};
