import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { IconButton, IconButtonProps, useColorMode } from "@chakra-ui/react";
import { FC } from "react";

export const ThemeButton: FC<IconButtonProps> = (props) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  return (
    <IconButton
      mr={8}
      fontWeight={"bold"}
      size={"lg"}
      icon={isDark ? <SunIcon /> : <MoonIcon />}
      color={isDark ? "accent" : "black"}
      onClick={toggleColorMode}
      {...props}
    />
  );
};
