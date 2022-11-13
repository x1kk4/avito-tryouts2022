export const updateNewsList = (temporary: Number[], current: Number[]) => {
  let additionalItems: Number[] = [];
  if (temporary == current) {
    return { temp: temporary, items: additionalItems };
  } else if (current.includes(temporary[0])) {
    let mark = temporary[0];
    let index = current.indexOf(mark);
    temporary = temporary.slice(0, temporary.length - index);
    additionalItems = current.slice(0, index);
    temporary.unshift(...current.slice(0, index));
  } else {
    console.log("123");
  }

  return { temp: temporary, items: additionalItems };
};
