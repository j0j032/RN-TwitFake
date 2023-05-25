import {View, Text, StyleSheet, Image, TextInput, Pressable, SafeAreaView} from "react-native";
import React from "react";
import {Link, useRouter} from "expo-router";

const user = {
    id: 'u1',
    username: 'VadimNotJustDev',
    name: 'Vadim',
    image:
        'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.png',
}

export default function NewTweet() {
    const [tweet, setTweet] = React.useState('')
    const router = useRouter()
    const onTweetPress = () => {
        console.warn({tweet})
        setTweet('')
        router.back()
    }
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: 'white'}} >
            <View style={styles.container} >
                <View style={styles.headerContainer} >
                    <Link href="/" style={{fontSize: 16}} >Cancel</Link >
                    <Pressable onPress={onTweetPress} style={styles.button} ><Text
                        style={styles.buttonTxt} >Tweet</Text ></Pressable >
                </View >
                <View style={styles.inputContainer} >
                    <Image source={{uri: user.image}} style={styles.image} />
                    <TextInput placeholder="What's happening?"
                               multiline
                               value={tweet}
                               numberOfLines={5}
                               style={{flex: 1}}
                               onChange={(e) => setTweet(e.nativeEvent.text)}
                    />
                </View >
            </View >
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
        paddingVertical: 10,
        flex: 1,
    },
    headerContainer: {
        marginVertical: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#1C9BF0',
        borderRadius: 30,
    },
    buttonTxt: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        color: 'white',
        fontWeight: 'bold',
    },
    inputContainer: {
        flexDirection: 'row',

    },
    image: {
        marginRight: 10,
        width: 50,
        aspectRatio: 1,
        borderRadius: 50,
    }
})
