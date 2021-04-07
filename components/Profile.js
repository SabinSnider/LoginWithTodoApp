import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const Profile = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}> Profile Here.</Text>

      <Button
        onPress={() => navigation.navigate("Test")}
        title="New Screen To..!"
      ></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#7b16ef",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
});

export default Profile;
