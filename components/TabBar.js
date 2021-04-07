import React, {useState} from 'react';
import {render} from 'react-dom';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import Tab from '../components/Tab';
const {width} = Dimensions.get('screen');

const TabBar = ({state, navigation}) => {
  //uta bata auni ho props bata state, navigation
  //console.log(props)   console.log(state)

  const [selected, setSelected] = useState('Profile');
  const {routes} = state;
  const renderColor = currentTab => (currentTab === selected ? 'red' : 'black');

  const handlePress = activeTab => {
    console.log(activeTab);
    setSelected(activeTab);
    navigation.navigate(activeTab);
    console.log(state.index);
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        {routes.map(route => (
          <Tab
            tab={route}
            // icon={route.params.icon}
            onPress={() => handlePress(route.name)}
            color={renderColor(route.name)}
            key={route.key}></Tab>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    bottom: 20,
    width,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    width: 260,
    height: 50,
    borderRadius: 100,
    elevation: 2,
  },
});

export default TabBar;
