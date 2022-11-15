import { FC, memo } from "react";

const CommentElem: FC<{ by: string }> = ({ by }) => {
  return <p>{by}</p>;
};

export default memo(CommentElem);
