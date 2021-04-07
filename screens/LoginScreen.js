/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {ScrollView, StyleSheet, View, Text} from 'react-native';
import {Button, TextInput} from 'react-native-paper';
import AuthContext from '../store/contexts/AuthContext';

const LoginScreen = props => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const authContext = React.useContext(AuthContext);

  return (
    <ScrollView style={styles.screen}>
      <TextInput
        mode="outlined"
        value={email}
        onChangeText={text => setEmail(text)}
        placeholder="Email"
        style={styles.input}
      />
      <TextInput
        mode="outlined"
        value={password}
        onChangeText={text => setPassword(text)}
        placeholder="Password"
        style={styles.input}
      />
      {authContext.error !== '' && (
        <Text style={{color: 'red'}}> {authContext.errorMessage}</Text>
      )}
      <Button
        onPress={() => authContext.loginUserWithFirebase(email, password)}
        mode="contained"
        // style={{marginTop: 30, marginBottom: 10}}>
        style={styles.button}>
        Login
      </Button>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
        }}>
        <Text>Not registered yet ?</Text>
        <Button onPress={() => props.navigation.navigate('Signup')}>
          Signup
        </Button>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 30,
    flex: 1,
  },
  button: {
    width: '100%',
    backgroundColor: '#b8236b',
    borderRadius: 24,
    marginVertical: 9,
    paddingVertical: 11,
  },
  input: {
    width: 350,
    backgroundColor: '#ede8e8',
    borderRadius: 94,
    paddingHorizontal: 15,
    fontSize: 15,
    color: '#991172',
    marginVertical: 9,
  },
});

export default LoginScreen;
