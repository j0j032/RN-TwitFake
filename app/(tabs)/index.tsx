import {FlatList, Pressable, StyleSheet, View} from 'react-native';
import Tweet from "../../components/Tweet";
import tweets from '../../assets/data/tweets';
import {Entypo} from "@expo/vector-icons";
import {useRouter} from "expo-router";

export default function TabOneScreen() {
    const router = useRouter()
    return (
        <View style={styles.page} >
            <FlatList data={tweets} renderItem={({item}) => <Tweet tweet={item} />} />
            <Pressable style={styles.floatingButton} onPress={() => router.push('/new-tweet')} >
                <Entypo name="plus" size={30} color="white" />
            </Pressable >
        </View >
    );
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: 'white',
    },
    floatingButton: {
        backgroundColor: '#1C9BF0',
        width: 60,
        height: 60,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 20,
        right: 20,

        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    }
});
