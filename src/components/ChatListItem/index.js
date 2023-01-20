import { Text,View,Image,StyleSheet } from "react-native";

const ChatListItem = () => {
    return(
        <View style={styles.container}>
            <Image source={{uri:'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/lukas.jpeg'}}
            style={styles.image}/>
            <View style={styles.content}>
                <View style={styles.row}>
                    <Text style={styles.name} numberOfLines={1}>Lukas</Text>
                    <Text style={styles.subTitle}>8:30</Text>
                </View>
                <Text style={styles.subTitle} numberOfLines={1}>Hello!</Text>
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