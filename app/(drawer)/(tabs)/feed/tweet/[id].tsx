import { useQuery } from "@tanstack/react-query";
import Tweet from "../../../../../components/Tweet";
import { useSearchParams } from "expo-router";
import { ActivityIndicator, Text } from "react-native";
import { getSingleTweet } from "../../../../../lib/api/tweets";

export default function TweetScreen() {
  const { id } = useSearchParams();

  const { data: tweet, isLoading, isError } = useQuery(["tweet", id], () => getSingleTweet(id as string));

  return isLoading ? <ActivityIndicator /> : isError ? <Text>{"Not found"}</Text> : <Tweet tweet={tweet} />;
}
