import { StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { Button, Input } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import { db } from "../firebase";

const AddChatScreen = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Add a new chat",
      headerBackTitle: "Chats",
    });
  }, [navigation]);
  const creatchat = async () => {
    await db
      .collection("chats")
      .add({ chatName: input })
      .then(() => navigation.goBack())
      .catch((error) => alert(error));
  };
  const [input, setInput] = useState("");
  return (
    <View style={styles.container}>
      <Input
        type="text"
        placeholder="Enter a new chat"
        onChangeText={(text) => setInput(text)}
        value={input}
        leftIcon={
          <Icon name="wechat" type="antdesing" size={24} color="black" />
        }
        onSubmitEditing={creatchat}
      />
      <Button disabled={!input} onPress={creatchat} title="Create new Chat" />
    </View>
  );
};

export default AddChatScreen;

const styles = StyleSheet.create({
  container: { backgroundColor: "white", padding: 30, height: "100%" },
});
