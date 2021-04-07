import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Todo from '../components/Todo';
import TabBar from '../components/TabBar';
import ProfileNavigator from './ProfileNavigator';
import Home from '../components/Home';

const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  return (
    <Tab.Navigator tabBar={props => <TabBar {...props} />}>
      <Tab.Screen name="Home" component={Home} initialParams={{icon: 'home'}} />
      <Tab.Screen
        name="Profile"
        component={ProfileNavigator}
        initialParams={{icon: 'user'}}
      />
      <Tab.Screen name="Todo" component={Todo} initialParams={{icon: 'plus'}} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
