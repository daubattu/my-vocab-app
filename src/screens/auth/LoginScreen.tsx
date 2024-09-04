import { Pressable, View } from "react-native";
import { Card, Text } from "../../components/commons";
import TextInput from "../../components/commons/TextInput";
import Button from "../../components/commons/Button";
import { useState } from "react";
import { isValidEmail } from "../../utils";

function LoginScreen({ navigation }: { navigation: any }) {
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState<any>(null)

  function handleChangeEmail(text: any) {
    setEmail(text)
  }

  function handleChangePassword(text: any) {
    setPassword(text)
  }

  function onSubmit() {

  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#000' }}>
      <Card style={{ width: '95%', paddingTop: 24, paddingBottom: 24 }}>
        <Text style={{ fontSize: 24, marginBottom: 16 }}>Đăng nhập</Text>
        <TextInput value={email} onChangeText={handleChangeEmail} prefixIcon="mail" placeholder="Email" />
        <TextInput value={password} onChangeText={handleChangePassword} prefixIcon="lock" placeholder="Mật khẩu" secureTextEntry />
        <Pressable
          style={{ marginBottom: 24, alignItems: 'flex-end' }}
          onPress={() => {
            navigation.navigate('SignUpScreen')
          }}
        >
          <Text>Quên mật khẩu?</Text>
        </Pressable>
        <Button title="Đăng nhập" type="primary" disabled={!email || !password} onPress={onSubmit} />
        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 16 }}>
          <Text>Chưa có tài khoản? </Text>
          <Pressable onPress={() => navigation.navigate('SignUpScreen')}>
            <Text style={{ color: '#22b34f' }}>Đăng ký ngay</Text>
          </Pressable>
        </View>
      </Card>
    </View>
  );
}

export default LoginScreen