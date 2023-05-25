import React from 'react';
import {Image, StyleSheet} from "react-native";
import {Text, View} from "./Themed";
import {TweetType} from "../types";

type TweetProps = {
    tweet: TweetType
}

const Tweet = ({tweet}: TweetProps) => {
    return (
        <View style={styles.container} >
            <Image source={tweet.user.image} style={styles.userImage} alt={`${tweet.user.name}`} />
            <View style={styles.mainContainer} >
                <Text style={styles.name} >{tweet.user.name}</Text >
                <Text style={styles.content} >{tweet.content}</Text >
            </View >
        </View >
    );
};


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 10,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: 'lightgrey',
        backgroundColor: 'white',
    },
    userImage: {
        width: 50,
        height: 50,
        borderRadius: 50,
    },
    mainContainer: {
        flex: 1,
        marginLeft: 10,
    },
    name: {
        fontWeight: '600',
    },
    content: {
        marginTop: 5,
        lineHeight: 20,
    }
});

export default Tweet;
