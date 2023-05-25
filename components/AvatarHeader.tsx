import React from 'react';
import {Image, Pressable} from "react-native";
import {useNavigation} from "expo-router";

type AvatarHeaderProps = {
    src?: string;
}
const AvatarHeader = ({src}: AvatarHeaderProps) => {
    const navigation = useNavigation()

    if (!src) return null;
    return (
        // @ts-ignore
        <Pressable onPress={() => navigation.openDrawer()} >
            <Image source={{uri: src}} style={{width: 30, aspectRatio: 1, borderRadius: 40, marginLeft: 15}} />
        </Pressable >
    )
};

export default AvatarHeader;
