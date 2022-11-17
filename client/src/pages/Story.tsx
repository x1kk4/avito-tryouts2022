import { Box, Center, Collapse, Flex, Link, Spinner } from "@chakra-ui/react";
import { Dispatch, FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NewsService from "../api/NewsService";
import { NewsItem } from "../types/NewsItems";
import { Text } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { calcTime } from "../components/NewsCard";
import CommentsService from "../api/CommentsService";
import { Comment } from "../types/Comment";
import { CommentElem } from "../components/CommentElem";
import { useDispatch } from "react-redux";
import { fetchComments } from "../store/action-creators/fetchComments";
import { fetchStory } from "../store/action-creators/fetchStory";
import { useTypedSelector } from "../hooks/useTypedSelector";

interface StoryProps {
  children?: JSX.Element | JSX.Element[];
}

type Id = {
  id: string;
};

export const Story: FC<StoryProps> = ({}) => {
  const dispatch: Dispatch<any> = useDispatch();
  const { story, loading, comments } = useTypedSelector((state) => state.story);

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

  useEffect(() => {
    // fetchData(id)
    dispatch(fetchStory(parseInt(id)));
  }, []);

  useEffect(() => {
    story != null && story.kids && dispatch(fetchComments(story.kids));
  }, [story]);

  if (isLoading) {
    return (
      <Box position="fixed" z-zindex={100} left="1%" top="93%">
        <Spinner thickness="4px" speed="1.5s" color="gray.500" size="xl" />
      </Box>
    );
  }
  if ((story && story.deleted) || (story && story.dead)) {
    return (
      <Center>
        <Box>
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
      {loading && (
        <Box position="fixed" z-zindex={100} left="1%" top="93%">
          <Spinner thickness="4px" speed="1.5s" color="gray.500" size="xl" />
        </Box>
      )}
      <Flex direction={"column"} gap={5}>
        <Box ml={24}>
          <Text as={"kbd"}>
            {story && calcTime(story.time)}
            {` by ${storyData.by}`}
          </Text>
        </Box>
        <Center>
          <Box>
            <Link href={story?.url} isExternal>
              <Text fontSize="2xl" pt={10} as="kbd">
                {story?.title} <ExternalLinkIcon mx="2px" />
              </Text>
            </Link>
          </Box>
        </Center>
        <Text ml={24}>{`Comments(${comments && comments.length}):`}</Text>
        <Box>
          {comments &&
            comments.map((comment) => (
              <Collapse in={true}>
                <CommentElem info={comment} />
              </Collapse>
            ))}
        </Box>
      </Flex>
    </Box>
  );
};
