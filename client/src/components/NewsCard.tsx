import { Card, CardBody, CardFooter, CardHeader } from "@chakra-ui/card";
import {
  LinkBox,
  Heading,
  Text,
  LinkOverlay,
  Box,
  ScaleFade,
  Flex,
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber,
  Center,
} from "@chakra-ui/react";
import React, { FC } from "react";
import { NewsItem } from "../types/NewsItems";

interface NewsCardProps {
  info: NewsItem;
}

export const NewsCard: FC<NewsCardProps> = ({ info }) => {
  const calcTime = (time: number) => {
    if (Math.round((new Date().getTime() / 1000 - time) / 60) > 120) {
      return `${Math.round(
        (new Date().getTime() / 1000 - time) / 3600
      )} hours ago`;
    } else if (Math.round((new Date().getTime() / 1000 - time) / 60) > 60) {
      return `${Math.round(
        (new Date().getTime() / 1000 - time) / 3600
      )} hour ago`;
    } else if (Math.round((new Date().getTime() / 1000 - time) / 60) < 60) {
      return `${Math.round(
        (new Date().getTime() / 1000 - time) / 60
      )} minutes ago`;
    }
  };

  return (
    <ScaleFade initialScale={0.9} in={true}>
      <LinkBox
        as="article"
        maxW="sm"
        p="5"
        borderWidth="1px"
        rounded="md"
        h={"250px"}
      >
        <Flex justify={"space-between"}>
          <Box>
            <Box>{calcTime(info.time)}</Box>
            <Box>
              <Text display={"contents"}>
                <span>by </span>
                <Text as="i">{info.by}</Text>
              </Text>
            </Box>
          </Box>
          <Box>
            <Stat>
              <StatLabel>Score</StatLabel>
              <StatNumber>{info.score}</StatNumber>
            </Stat>
          </Box>
        </Flex>
        <Heading size="md" my="2">
          <LinkOverlay href="#">{info.title}</LinkOverlay>
        </Heading>
        <Text></Text>
      </LinkBox>
    </ScaleFade>
  );
};
