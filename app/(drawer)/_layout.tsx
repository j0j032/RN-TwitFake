import {withLayoutContext} from "expo-router";
import {createDrawerNavigator, DrawerContentScrollView, DrawerItemList} from "@react-navigation/drawer";
import {Text} from "react-native";
import React from "react";

// docs: https://reactnavigation.org/docs/drawer-navigator

const DrawerNavigator = createDrawerNavigator().Navigator

// define tabs to be used in the drawer and be the first screen to render
export const unstable_settings = {
    initialRouteName: '(tabs)',
};

const Drawer = withLayoutContext(DrawerNavigator)

function CustomDrawerContent(props: any) {
    return (
        <DrawerContentScrollView {...props}>
            <Text >Hello World</Text >
            <DrawerItemList {...props} />
        </DrawerContentScrollView >
    );
}

export default function DrawerLayout() {
    return (
        <Drawer drawerContent={(props) => <CustomDrawerContent {...props}/>} >
            <Drawer.Screen name="(tabs)" options={{headerShown: false, title: 'Home'}} />
            <Drawer.Screen name="bookmarks" options={{title: 'Bookmarks'}} />
            <Drawer.Screen name="twitter-blue" options={{title: 'Twitter Blue'}} />
        </Drawer >
    )
}
