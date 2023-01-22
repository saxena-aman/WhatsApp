import { Text,View,Image,StyleSheet,Pressable} from "react-native";
import { useNavigation } from "@react-navigation/native";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

const ChatListItem = ({chat}) => {
    const navigation=useNavigation();
    return(
        <Pressable onPress={()=>navigation.navigate('Chat', {id:chat.id, name:chat.user.name})} style={styles.container}>
            <Image source={{uri:chat.user.image}}
            style={styles.image}/>
            <View style={styles.content}>
                <View style={styles.row}>
                    <Text style={styles.name} numberOfLines={1}>{chat.user.name}</Text>
                    <Text style={styles.subTitle}>{dayjs(chat.lastMessage.createdAt).fromNow(true)}</Text>
                </View>
                <Text style={styles.subTitle} numberOfLines={1}>{chat.lastMessage.text}</Text>
            </View>
        </Pressable>
    )
};

const styles=StyleSheet.create({
    image:{
        width:60,
        aspectRatio: 1,
        borderRadius:30,
        marginRight:10,
    },
    container:{
        flexDirection:'row',
        marginHorizontal:10,
        marginVertical:5,
        height:70,
        alignItems: "stretch",
    },
    content:{
        flex:1,
        borderBottomColor:'lightgray',
        borderBottomWidth:StyleSheet.hairlineWidth
    },
    row:{
        flexDirection:'row',
        marginBottom:5,
    },
    subTitle:{
        color:'grey',
        
    },
    name:{
        flex:1,
        fontWeight:'bold'
    }
})

export default ChatListItem;