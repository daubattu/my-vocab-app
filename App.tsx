import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/Feather';

import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';
import StatisticScreen from './screens/StatisticScreen';

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Trang chủ',
            tabBarIcon: () => {
              return <Icon name='home' size={24} />
            } 
          }}
        />
        <Tab.Screen
          name="Home1"
          component={HomeScreen}
          options={{
            title: 'Luyện tập',
            tabBarIcon: () => {
              return <Icon name='archive' size={24} />
            } 
          }}
        />
        <Tab.Screen
          name="Details"
          component={StatisticScreen}
          options={{
            title: 'Thống kê',
            tabBarIcon: () => {
              return <Icon name='trending-up' size={24} />
            } 
          }}
        />
        <Tab.Screen
          name="Setting"
          component={DetailScreen}
          options={{
            title: 'Cài đặt',
            tabBarIcon: () => {
              return <Icon name='settings' size={24} />
            } 
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
