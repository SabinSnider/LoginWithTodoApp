import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { IconFill, IconOutline } from "@ant-design/icons-react-native";

const Tab = ({ tab, icon, onPress, color }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {icon && <IconOutline name={icon} size={20} color="black" color={color} />} 
      <Text style={{ color: color }}>{tab.name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
  },
});

export default Tab;
