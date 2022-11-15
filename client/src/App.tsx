import React, { FC, useEffect, useState } from "react";
import { Flex } from "@chakra-ui/react";
import { Header } from "./components/Header";
import CommentsService from "./api/CommentsService";
import axios from "axios";
import { Comment } from "./types/Comment";
// 2924562, 2922141,
export const App: FC = () => {
  const arr: Number[] = [2922097, 2922429, 2922709, 2922573, 2922140];
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(false);

  function fetchComments() {
    const commentsData: any = CommentsService.getComments(arr);
    setComments(commentsData);
  }
  useEffect(() => {
    setLoading(true);
    fetchComments();

    setLoading(false);
  }, []);

  useEffect(() => {
    console.log(comments);
  }, [comments]);
  // if (comments) {
  //   return comments.map((comment) => {
  //     <div>
  //       <p>{`by: ${comment.by}`}</p>
  //       <p>{`text: ${comment.text}}`}</p>
  //     </div>;
  //   });
  // } else
  if (loading) {
    return <div>loading...</div>;
  }

  return (
    <>
      <div>
        123
        {comments.map((comment) => (
          <p>{comment.by}</p>
        ))}
      </div>
    </>
  );
};
{
  /* <Flex direction={"column"}>
        <Header />

        <div>NewsItem</div>
        <div>NewsItem</div>
        <div>NewsItem</div>
        <div>NewsItem</div>
        <div>NewsItem</div>
        <div>NewsItem</div>
        <div>NewsItem</div>
      </Flex> */
}
