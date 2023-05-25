import React from 'react';
import {Text, View} from "./Themed";
import {EvilIcons} from "@expo/vector-icons";
import {StyleSheet} from "react-native";

type IconButtonProps = {
    iconName: React.ComponentProps<typeof EvilIcons>['name'],
    text?: number | string
}
const IconButton = ({iconName, text}: IconButtonProps) => {
    return (
        <View style={styles.iconContainer} >
            <EvilIcons name={iconName} size={22} color="grey" />
            {text ? <Text style={{fontSize: 12, color: 'grey'}} >{text}</Text > : null}
        </View >
    );
};

const styles = StyleSheet.create({
    iconContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    }
});

export default IconButton;
