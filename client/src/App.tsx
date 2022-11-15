import React, { FC, useEffect, useState } from "react";
import { Flex } from "@chakra-ui/react";
import { Header } from "./components/Header";
import CommentsService from "./api/CommentsService";
import axios from "axios";
import { Comment } from "./types/Comment";
import CommentElem from "./components/CommentElem";
// 2924562, 2922141,
export const App: FC = () => {
  const arr: number[] = [2922097, 2922429, 2922709, 2922573, 2922140];
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    arr.map((id) => {
      CommentsService.getComment(id)
        .then((r) => {
          setComments((old) => [...old, r.data]);
        })
        .catch((err) => {
          console.log(err);
        });
    });
    setLoading(false);
  }, []);

  return (
    <>
      <div>
        {comments?.map((comment) => (
          <CommentElem by={comment.by || ""} />
        ))}
      </div>
    </>
  );
};
