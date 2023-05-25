import {ImageSourcePropType} from "react-native";

export type UserType = {
    id: string;
    name: string;
    username: string;
    image: ImageSourcePropType;

}

export type TweetType = {
    id: string;
    user: UserType;
    createdAt: string;
    content: string;
    image?: ImageSourcePropType;
    numberOfComments?: number;
    numberOfRetweets?: number;
    numberOfLikes?: number;
    impressions?: number;
}
