import React, { Dispatch, FC } from "react";
import { IconButton } from "@chakra-ui/react";
import { RepeatIcon } from "@chakra-ui/icons";
import { useDispatch } from "react-redux";
import { updateNewsItems } from "../store/action-creators/updateNewsItems";

export const RefreshButton: FC = ({}) => {
  const dispatch: Dispatch<any> = useDispatch();

  return (
    <IconButton
      // @ts-ignore
      onClick={() => dispatch(updateNewsItems())}
      aria-label="Refresh news"
      icon={<RepeatIcon />}
    />
  );
};
