import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import Home from './pages/Home/index';
import Categories from './pages/Categories/index';
import Search from './pages/Search/index';
import User from './pages/User/index';

const Tab = createMaterialBottomTabNavigator();

export default function Routes() {
  return (
    <Tab.Navigator
      barStyle={{ backgroundColor: '#262C39' }}
      initialRouteName="Home"
      activeColor="#ff9900"
      shifting
      inactiveColor="#fff"
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="home" size={22} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Categories"
        component={Categories}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="list" size={22} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="search" size={22} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={User}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="user" size={22} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
