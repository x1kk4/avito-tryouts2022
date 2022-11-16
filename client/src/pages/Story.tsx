import { Box, Center, Flex, Heading, Link, Spinner } from "@chakra-ui/react";
import React, { FC, ReactNode, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NewsService from "../api/NewsService";
import { NewsItem } from "../types/NewsItems";
import { Text } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { calcTime } from "../components/NewsCard";
import CommentsService from "../api/CommentsService";
import { Comment } from "../types/Comment";
import { CommentElem } from "../components/CommentElem";

interface StoryProps {
  children?: JSX.Element | JSX.Element[];
}

type Id = {
  id: string;
};

export const Story: FC<StoryProps> = () => {
  const { id }: Id = useParams();
  const [storyData, setStoryData] = useState<NewsItem>({
    deleted: true,
    dead: true,
    by: "init",
    descendants: 0,
    id: 0,
    kids: [],
    score: 0,
    time: 0,
    title: "init",
    type: "init",
    url: "init",
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [comments, setComments] = useState<Comment[]>([] as Comment[]);

  const fetchData = async (id: string) => {
    try {
      setIsLoading(true);
      const response = await NewsService.getNewsItem(parseInt(id));
      setStoryData(response.data);
      response.data.kids && fetchComments(response.data.kids);
      setIsLoading(false);
    } catch (e) {
      console.error(e);
    }
  };

  const fetchComments = (ids: number[]) => {
    ids.map(async (id) => {
      const response = await CommentsService.getComment(id);
      //@ts-ignore
      setComments((old) => [...old, response.data]);
    });
  };

  useEffect(() => {
    fetchData(id);
  }, []);

  if (isLoading) {
    return (
      <Box position="fixed" z-zindex={100} left="1%" top="93%">
        <Spinner thickness="4px" speed="1.5s" color="gray.500" size="xl" />
      </Box>
    );
  }
  if ((storyData && storyData.deleted) || (storyData && storyData.dead)) {
    return (
      <Center>
        <Box>
          {" "}
          <Text>S0rry! THis story is not available :c</Text>
        </Box>
      </Center>
    );
  }

  return (
    <Box
      width={"100%"}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      pt={10}
    >
      <Flex direction={"column"} gap={5}>
        <Box ml={24}>
          <Text as={"kbd"}>
            {calcTime(storyData && storyData.time)}
            {` by ${storyData.by}`}
          </Text>
        </Box>
        <Center>
          <Box>
            <Link href={storyData?.url} isExternal>
              <Text fontSize="2xl" pt={10} as="kbd">
                {storyData.title} <ExternalLinkIcon mx="2px" />
              </Text>
            </Link>
          </Box>
        </Center>
        <Text ml={24}>{`Comments(${comments && comments.length}):`}</Text>
        <Box>
          {comments &&
            comments.map((comment) => <CommentElem info={comment} />)}
        </Box>
      </Flex>
    </Box>
  );
};
