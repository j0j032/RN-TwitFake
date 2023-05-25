import React from 'react';
import {Image, StyleSheet} from "react-native";
import {Text, View} from "./Themed";
import {TweetType} from "../types";
import {Entypo} from "@expo/vector-icons";
import IconButton from "./IconButton";

type TweetProps = {
    tweet: TweetType
}

const Tweet = ({tweet}: TweetProps) => {
    return (
        <View style={styles.container} >
            <Image source={{uri: tweet.user.image}} style={styles.userImage} />
            <View style={styles.mainContainer} >
                <View style={styles.tweetHeader} >
                    <Text style={styles.name} >{tweet.user.name}</Text >
                    <Text style={styles.username} >{tweet.user.username} - 2h</Text >
                    <Entypo name="dots-three-horizontal" size={16} color="grey" style={{marginLeft: 'auto'}} />
                </View >
                <Text style={styles.content} >{tweet.content}</Text >
                {tweet.image ? <Image source={{uri: tweet.image}} style={styles.image} /> : null}
                <View style={styles.footer} >
                    <IconButton iconName="comment" text={tweet.numberOfComments} />
                    <IconButton iconName="retweet" text={tweet.numberOfComments} />
                    <IconButton iconName="heart" text={tweet.numberOfComments} />
                    <IconButton iconName="chart" text={tweet.numberOfComments} />
                    <IconButton iconName="share-apple" />
                </View >
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
    tweetHeader: {
        flexDirection: 'row',
    },
    name: {
        fontWeight: '600',
    },
    content: {
        marginTop: 5,
        lineHeight: 20,
    },
    image: {
        width: '100%',
        aspectRatio: 16 / 9,
        marginVertical: 10,
        borderRadius: 15,
    },
    username: {
        color: 'grey',
        marginLeft: 5,
    },
    footer: {
        flexDirection: 'row',
        marginVertical: 5,
        justifyContent: 'space-between',
    },

});

export default Tweet;
