import { TriangleDownIcon } from "@chakra-ui/icons";
import { Box, Flex, Spacer, Text, IconButton } from "@chakra-ui/react";
import { FC } from "react";
import { Comment } from "../types/Comment";
import { calcTime } from "../components/NewsCard";

interface CommentElementProps {
  info: Comment;
}

export const CommentElem: FC<CommentElementProps> = ({ info }) => {
  if (info.deleted || info.dead) {
    return (
      <Box
        width={"55%"}
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        ml={24}
        mb={10}
      >
        This comment is not available :c
      </Box>
    );
  }
  return (
    <Flex ml={24} mb={6}>
      <Box width={"60%"} borderWidth="1px" borderRadius="lg" overflow="hidden">
        <Flex direction={"row"}>
          <Flex direction={"column"} padding={3}>
            <Box>
              <Text fontSize={18} as={"kbd"}>
                {`${info.by}:`}
              </Text>
            </Box>
            <Box>
              <Text fontSize={12}>{`${calcTime(info.time)}`}</Text>
            </Box>
          </Flex>
        </Flex>
        <Box p={2}>
          <Text fontSize={12}>{info.text}</Text>
        </Box>
      </Box>
    </Flex>
  );
};
