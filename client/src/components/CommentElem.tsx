import { Box, Collapse } from "@chakra-ui/react";
import { FC, memo } from "react";
import { Comment } from "../types/Comment";

interface CommentElementProps {
  info: Comment;
}

export const CommentElem: FC<CommentElementProps> = ({ info }) => {
  return <Box>{info.by}</Box>;
};
