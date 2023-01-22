import { View, TextInput , StyleSheet} from 'react-native'
import {useState} from 'react'
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
const InputBox = () => {

    const [newMessage,setNewMessage] = useState('');

    const onSend=()=>{
        console.warn('Sending a new message:', newMessage);
        setNewMessage('');
    };
  return (
    <SafeAreaView edges={["bottom"]} style={styles.container}>
        <AntDesign name="plus" size={20} color="royalblue" />
        <TextInput value={newMessage} onChangeText={setNewMessage} style={styles.input}/>
        <MaterialIcons onPress={onSend} style={styles.send} name="send" size={16} color="white" />
    </SafeAreaView>
  )
};
const styles=StyleSheet.create({
    container:{
        flexDirection:'row',
        backgroundColor:'whitesmoke',
        padding:5,
        paddingHorizontal:10,
        alignItems:'center'
    },
    input:{
        flex:1,
        backgroundColor:'white',
        padding:5,
        borderRadius:15,
        paddingHorizontal:10,
        borderColor:'lightgrey',
        borderWidth:StyleSheet.hairlineWidth,
        marginHorizontal:10
    },
    send:{
        backgroundColor:'royalblue',
        padding:7,
        borderRadius:15,
        overflow:'hidden',
        alignItems:'center'
    }
});
export default InputBox;