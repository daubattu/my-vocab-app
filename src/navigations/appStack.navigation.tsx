import Icon from 'react-native-vector-icons/Feather';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import StudyScreen from '../screens/study';
import StatisticScreen from '../screens/StatisticScreen';
import SettingScreen from '../screens/SettingScreen';

const Tab = createBottomTabNavigator();

function AppStackNavigation({ navigation }: { navigation?: any }) {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName='Home'
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarHideOnKeyboard: true,
          tabBarIcon: ({ focused }) => {
            let iconName = '';

            if (route.name === 'Home') {
              iconName = 'home'
            } else if (route.name === 'Study') {
              iconName = 'archive';
            } else if (route.name === 'Details') {
              iconName = 'trending-up'
            } else if (route.name === 'Setting') {
              iconName = 'settings'
            } else {
              iconName = ''
            }

            return <Icon name={iconName} color={focused ? '#22b34f' : '#fff'} size={24} />;
          },
          tabBarStyle: {
            backgroundColor: '#0a121c',
            borderTopWidth: 0,
            paddingBottom: 5
          },
          tabBarActiveTintColor: '#22b34f',
          tabBarInactiveTintColor: '#fff',
        })}
        sceneContainerStyle={{ backgroundColor: '#000' }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}

          options={{ title: 'Trang chủ' }}
        />
        <Tab.Screen
          name="Study"
          component={StudyScreen}
          options={{ title: 'Học tập' }}
        />
        <Tab.Screen
          name="Details"
          component={StatisticScreen}
          options={{ title: 'Thống kê' }}
        />
        <Tab.Screen
          name="Setting"
          component={SettingScreen}
          options={{ title: 'Cài đặt' }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default AppStackNavigation