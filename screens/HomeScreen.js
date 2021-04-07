/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet, Linking} from 'react-native';
import {Button} from 'react-native-paper';
import AuthContext from '../store/contexts/AuthContext';
import {NavigationContainer} from '@react-navigation/native';
import {WebView} from 'react-native-webview';
import TabNavigator from '../navigations/TabNavigation';
const HomeScreen = props => {
  const authContext = React.useContext(AuthContext);
  return (
    <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
      <Text style={{fontSize: 30, fontFamily: 'Ubuntu-Bold'}}>
        Welcome to our Place {authContext.authUser.fullName} !
      </Text>

      {/* <WebView source={{uri: 'https://github.com/'}} /> */}
      <Button
        mode="contained"
        style={{marginTop: 130, marginBottom: 10}}
        onPress={() => {
          Linking.openURL('https://github.com/');
        }}>
        GitHub
      </Button>
      <Button
        onPress={() => authContext.logOut()}
        mode="contained"
        style={{marginTop: 10, marginBottom: 10}}>
        Logout
      </Button>

      <TabNavigator />
    </View>
  );
};

const styles = StyleSheet.create({
  bottomTabBar: {
    top: 50,
  },
});

export default HomeScreen;
