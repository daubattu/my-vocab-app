import React, { useState } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthStackNavigation from './src/navigations/authStack.navigation';
import AppStackNavigation from './src/navigations/appStack.navigation';
import RootNavigation from './src/navigations';

const Stack = createStackNavigator();

function App() {
  const [isSigned, setIsSigned] = useState<boolean>(false)

  return <RootNavigation />
  // (
  //   <NavigationContainer>
  //     <Stack.Navigator screenOptions={{ headerShown: false, animationEnabled: false }}>
  //       <Stack.Screen name="AuthStackNavigation" component={AuthStackNavigation} />
  //       <Stack.Screen name="AppStackNavigation" component={AppStackNavigation} />
  //     </Stack.Navigator>
  //   </NavigationContainer>
  // );
}

export default App;
