import React, { Dispatch, FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { fetchNewsList } from "../store/action-creators/newsList";

export const Root: FC = ({}) => {
  const { newsList, error, loading } = useTypedSelector(
    (state) => state.newsList
  );
  const dispatch: Dispatch<any> = useDispatch();

  useEffect(() => {
    dispatch(fetchNewsList());
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <>
      Done
      {/* <div>
        {newsList.map((news) => (
          <div>{news}</div>
        ))}
      </div> */}
    </>
  );
};
