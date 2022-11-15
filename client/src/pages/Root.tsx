import React, { Dispatch, FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { fetchNewsList } from "../store/action-creators/newsList";
import { fetchNewsItems } from "../store/action-creators/newsItems";

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
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <>
      Done
      <div>
        {newsItems.map((item) => (
          <div>{item.by}</div>
        ))}
      </div>
    </>
  );
};
