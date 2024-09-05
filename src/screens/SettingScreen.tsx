import { Pressable, View } from "react-native";
import Text from "../components/commons/Text";
import { getAuth, signOut } from "firebase/auth";
import app from "../configs/firebase.config";

const auth = getAuth(app)

export default function SettingScreen({ navigation }: { navigation: any }) {
  function handleLogout() {
    signOut(auth)
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Setting Screen</Text>
      <Pressable
        onPress={() => {
          handleLogout()
        }}
      >
        <Text>Log out</Text>
      </Pressable>
    </View>
  );
}