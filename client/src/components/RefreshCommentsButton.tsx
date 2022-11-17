import React, { FC, Dispatch } from "react";
import { IconButton } from "@chakra-ui/react";
import { RepeatIcon } from "@chakra-ui/icons";
import { useDispatch } from "react-redux";
import { fetchComments } from "../store/action-creators/fetchComments";
import { useTypedSelector } from "../hooks/useTypedSelector";

export const RefresCommentshButton: FC = ({}) => {
  const dispatch: Dispatch<any> = useDispatch();
  const { story } = useTypedSelector((state) => state.story);
  return (
    <IconButton
      //@ts-ignore
      onClick={() => dispatch(fetchComments(story?.kids))}
      ml={4}
      aria-label="Refresh comments"
      icon={<RepeatIcon />}
      size={"lg"}
    />
  );
};
