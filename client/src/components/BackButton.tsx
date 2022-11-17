import { ArrowBackIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";
import { FC } from "react";
import { useHistory } from "react-router";

export const BackButton: FC = ({}) => {
  const history = useHistory();

  const handleClick = () => {
    history.push("/");
  };

  return (
    <IconButton
      onClick={handleClick}
      ml={8}
      aria-label="Search database"
      size={"lg"}
      icon={<ArrowBackIcon />}
    />
  );
};
