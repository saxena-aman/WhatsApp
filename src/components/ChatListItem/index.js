import { Text,View,Image,StyleSheet } from "react-native";

const ChatListItem = ({chat}) => {
    return(
        <View style={styles.container}>
            <Image source={{uri:chat.user.image}}
            style={styles.image}/>
            <View style={styles.content}>
                <View style={styles.row}>
                    <Text style={styles.name} numberOfLines={1}>{chat.user.name}</Text>
                    <Text style={styles.subTitle}>{chat.lastMessage.createdAt}</Text>
                </View>
                <Text style={styles.subTitle} numberOfLines={1}>{chat.lastMessage.text}</Text>
            </View>
        </View>
    )
};

const styles=StyleSheet.create({
    image:{
        width:60,
        height:60,
        borderRadius:30,
        marginRight:10,
    },
    container:{
        flexDirection:'row',
        marginHorizontal:10,
        marginVertical:5,
        height:70,

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