import { Dispatch, FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { fetchNewsList } from "../store/action-creators/newsList";
import { fetchNewsItems } from "../store/action-creators/fetchNewsItems";
import { Box, SimpleGrid, Spinner } from "@chakra-ui/react";
import { NewsCard } from "../components/NewsCard";

export const Root: FC = ({}) => {
  const dispatch: Dispatch<any> = useDispatch();
  const { newsList, loading, error } = useTypedSelector(
    (state) => state.newsList
  );

  const { newsItems } = useTypedSelector((state) => state.newsItems);

  useEffect(() => {
    !(newsList.length === 100) && dispatch(fetchNewsList());
  }, []);

  useEffect(() => {
    !(newsItems.length > 0) && dispatch(fetchNewsItems(newsList));
  }, [newsList]);

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <>
      <SimpleGrid columns={4} spacing={4}>
        {loading && (
          <Box position="fixed" z-zindex={100} left="1%" top="93%">
            <Spinner thickness="4px" speed="1.5s" color="gray.500" size="xl" />
          </Box>
        )}
        {newsItems.map((item, key) => (
          <NewsCard info={item} key={key} />
        ))}
      </SimpleGrid>
    </>
  );
};
