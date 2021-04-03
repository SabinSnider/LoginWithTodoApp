import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Tab = createBottomTabNavigator();

const BottomNavigator = (pros) => {
  return (
    <Tab.Navigator
    tabBarOptions={{
      style: {
        height: 55,
        borderTopWidth: 0,
        elevation: 0,
      },
      showLabel: false,
      activeTintColor: COLORS.primary,
    }}>


    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({});

export default BottomNavigator;
