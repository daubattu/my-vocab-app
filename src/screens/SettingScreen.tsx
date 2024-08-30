import { Pressable, View } from "react-native";
import Text from "../components/commons/Text";

export default function SettingScreen({ navigation }: { navigation: any }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Setting Screen</Text>
        <Pressable
          onPress={() => {
            navigation.navigate('LoginScreen')
          }}
        >
          <Text>Log out</Text>
        </Pressable>
      </View>
    );
}