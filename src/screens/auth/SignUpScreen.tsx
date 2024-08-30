import { Pressable, View } from "react-native";
import { Text } from "../../components/commons";

function SignUpScreen({ navigation }: { navigation: any }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#000' }}>
        <Text>Đăng ký</Text>

        <Pressable
          onPress={() => {
            navigation.navigate('LoginScreen')
          }}
        >
          <Text>Login</Text>
        </Pressable>
      </View>
    );
}

export default SignUpScreen