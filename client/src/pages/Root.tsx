import React, { Dispatch, FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { fetchNewsList } from "../store/action-creators/newsList";
import { fetchNewsItems } from "../store/action-creators/newsItems";
import { Box, ScaleFade, Spinner } from "@chakra-ui/react";

export const Root: FC = ({}) => {
  const { newsList } = useTypedSelector((state) => state.newsList);

  const { newsItems, error, loading } = useTypedSelector(
    (state) => state.newsItems
  );

  const dispatch: Dispatch<any> = useDispatch();

  useEffect(() => {
    dispatch(fetchNewsList());
  }, []);

  useEffect(() => {
    dispatch(fetchNewsItems(newsList));
  }, [newsList]);

  if (loading) {
    return (
      <Spinner
        thickness="4px"
        speed="1.5s"
        emptyColor="gray.400"
        color="green.600"
        size="xl"
      />
    );
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <>
      {newsItems.map((item) => (
        <ScaleFade in={true}>
          <Box
            p="10px"
            color="white"
            bg="teal.400"
            rounded="md"
            shadow="md"
            mb="10px"
          >
            {item.by}
          </Box>
        </ScaleFade>
      ))}
    </>
  );
};
