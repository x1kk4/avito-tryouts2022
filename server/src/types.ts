type NewsComponentId = number;

type NewsApiResponse = {
  status: number;
  data: NewsComponentId[];
};

export { NewsComponentId, NewsApiResponse };
