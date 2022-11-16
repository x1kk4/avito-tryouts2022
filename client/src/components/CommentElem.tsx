import { FC, memo } from "react";
import { Comment } from "../types/Comment";

interface CommentElementProps {
  info: Comment;
}

export const CommentElem: FC<CommentElementProps> = ({ info }) => {
  return <p>{info.by}</p>;
};
