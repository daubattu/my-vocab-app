import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/auth/LoginScreen";
import SignUpScreen from "../screens/auth/SignUpScreen";

const Stack = createStackNavigator();

function AuthStackNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ animationEnabled: false, headerShown: false, headerStyle: { backgroundColor: '#0a121c', borderBottomColor: 'red' }, headerTintColor: '#fff' }}
        initialRouteName="LoginScreen"
      >
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AuthStackNavigation