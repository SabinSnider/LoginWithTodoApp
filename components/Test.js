import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Test = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}> Todo Testing here.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#55a6ef",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
});

export default Test;
