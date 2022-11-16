import { ArrowBackIcon } from "@chakra-ui/icons";
import {
  Box,
  Center,
  Divider,
  Flex,
  Spacer,
  useColorMode,
  useColorModeValue,
  Text,
} from "@chakra-ui/react";
import { FC } from "react";
import { useLocation } from "react-router";
import { BackButton } from "./BackButton";
import { RefreshButton } from "./RefreshButton";
import { RefresCommentshButton } from "./RefreshCommentsButton";
import { ThemeButton } from "./ThemeButton";

export const Header: FC = ({}) => {
  const location = useLocation();
  const color = useColorModeValue("white", "gray.800");
  return (
    <Box position={"sticky"} top={0} zIndex={100} bg={color} mb={6}>
      <Flex direction={"row"} h={"10vh"}>
        <Center>
          {location.pathname === "/" ? (
            <RefreshButton />
          ) : (
            <Flex>
              <BackButton /> <RefresCommentshButton />
            </Flex>
          )}
        </Center>
        <Spacer />
        <Center>
          <Text as="kbd" fontSize="4xl">
            Hacker News Minimal
          </Text>
        </Center>
        <Spacer />
        <Center>
          <ThemeButton aria-label="1" />
        </Center>
      </Flex>
      <Divider />
    </Box>
  );
};
