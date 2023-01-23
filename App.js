import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Navigator from "./src/Navigation";
import { Amplify, Auth, API, graphqlOperation } from "aws-amplify";
import { withAuthenticator } from "aws-amplify-react-native";
import awsconfig from "./src/aws-exports";
import { useEffect } from "react";
import { getUser } from "./src/graphql/queries";
import { createUser } from "./src/graphql/mutations";

Amplify.configure({ ...awsconfig, Analytics: { disabled: true } });

function App() {
  useEffect(() => {
    const syncUser = async () => {
      const authUser = await Auth.currentAuthenticatedUser({
        bypassCache: true,
      });
      const userData = await API.graphql(
        graphqlOperation(getUser, { id: authUser.attributes.sub })
      );
      console.log(userData);
      if (userData.data.getUser) {
        //console.log("User Already Exists in DB");
        return;
      }
      const newUser = {
        id: authUser.attributes.sub,
        name: authUser.attributes.phone_number,
        status: "Hey, I am using WhatsApp!!!",
      };
      await API.graphql(graphqlOperation(createUser, { input: newUser }));
    };
    syncUser();
  }, []);

  return (
    <View style={styles.container}>
      <Navigator />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "whitesmoke",
    alignItems: "stretch",
    justifyContent: "center",
  },
});

export default withAuthenticator(App);
