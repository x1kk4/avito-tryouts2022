import { NewsComponentId } from "./types";

export const updateNewsList = (
  temporary: NewsComponentId[],
  current: NewsComponentId[]
): { temp: NewsComponentId[]; items: NewsComponentId[] } => {
  let additionalItems: NewsComponentId[] = [];

  if (temporary == current) {
    return { temp: temporary, items: additionalItems };
  } else if (current.includes(temporary[0])) {
    let mark = temporary[0];

    let index = current.indexOf(mark);

    temporary = temporary.slice(0, temporary.length - index);
    additionalItems = current.slice(0, index);
    temporary.unshift(...current.slice(0, index));
  }
  return { temp: temporary, items: additionalItems };
};
