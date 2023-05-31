import { StyleSheet, View, FlatList, Text, ActivityIndicator } from "react-native";
import Tweet from "../../../../components/Tweet";
import { Entypo } from "@expo/vector-icons";
import { Link } from "expo-router";
import { getTweets } from "../../../../lib/api/tweets";
import { useQuery } from "@tanstack/react-query";

export default function FeedScreen() {
  const { data: tweets, isLoading, isError } = useQuery(["tweets"], getTweets);

  return isLoading ? (
    <ActivityIndicator />
  ) : isError ? (
    <Text>{"oups an error happened"}</Text>
  ) : (
    <View style={styles.page}>
      <FlatList data={tweets} renderItem={({ item }) => <Tweet tweet={item} />} />

      <Link href="/new-tweet" asChild>
        <Entypo name="plus" size={24} color="white" style={styles.floatingButton} />
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "white",
  },
  floatingButton: {
    backgroundColor: "#1C9BF0",

    borderRadius: 25,
    padding: 15,

    position: "absolute",
    right: 15,
    bottom: 15,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,

    overflow: "hidden",
  },
});
