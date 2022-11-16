import React, { Dispatch, FC } from "react";
import { IconButton } from "@chakra-ui/react";
import { RepeatIcon } from "@chakra-ui/icons";
import { useDispatch } from "react-redux";

export const RefresCommentshButton: FC = ({}) => {
  return (
    <IconButton
      ml={4}
      aria-label="Refresh comments"
      icon={<RepeatIcon />}
      size={"lg"}
    />
  );
};
