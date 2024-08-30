import { Pressable, View } from "react-native";
import { Text } from "../../components/commons";

function LoginScreen({ navigation }: { navigation: any }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#000' }}>
        <Text>Đăng ký</Text>
        <Pressable
          onPress={() => {
            navigation.navigate('SignUpScreen')
          }}
        >
          <Text>Sign Up</Text>
        </Pressable>

        <Pressable
          onPress={() => {
            navigation.navigate('AppStackNavigation')
          }}
        >
          <Text>AppScreen</Text>
        </Pressable>
      </View>
    );
}

export default LoginScreen