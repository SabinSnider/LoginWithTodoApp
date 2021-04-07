import React from 'react';
import {StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Profile from '../components/Profile';
import Test from '../components/Test';
const Stack = createStackNavigator();

const ProfileNavigator = props => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Profile" component={Profile}></Stack.Screen>
      <Stack.Screen name="Test" component={Test}></Stack.Screen>
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({});

export default ProfileNavigator;
