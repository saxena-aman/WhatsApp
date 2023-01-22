import { View, Text, StyleSheet } from "react-native";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

const Message = ({ message }) => {
  const isMymessage=()=>{
    return message.user.id==='u1';
  }
  return (
    <View style={[
      styles.container,
      {
        backgroundColor:isMymessage()?'#DCF8C5':'white',
        alignSelf:isMymessage()?'flex-end':'flex-start'
      }]}>
      <Text>{message.text}</Text>
      <Text style={styles.time}>{dayjs(message.createdAt).fromNow(true)}</Text>
    </View>
  );
};

const styles=StyleSheet.create({
  container:{
    backgroundColor:'white',
    margin:5,
    padding:10,
    borderRadius:10,
    maxWidth:'80%',
    shadowColor: "#000",
  shadowOffset: {
	  width: 0,
	  height: 1,
  },
  shadowOpacity: 0.18,
  shadowRadius: 1.00,
  elevation: 1,
  },
  time:{
    color:'grey',
    alignSelf:'flex-end'
  }
});
export default Message;