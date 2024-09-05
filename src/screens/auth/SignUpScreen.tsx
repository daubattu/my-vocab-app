import { Pressable, View } from "react-native";
import { ToasterHelper } from "react-native-customizable-toast";
import { Card, Text } from "../../components/commons";
import TextInput from "../../components/commons/TextInput";
import Button from "../../components/commons/Button";
import { useState } from "react";
import { isValidEmail } from "../../utils";
import { createUserWithEmailAndPassword, getAuth, signOut } from "firebase/auth";
import app from "../../configs/firebase.config";

const auth = getAuth(app)

function SignUpScreen({ navigation }: { navigation: any }) {
  const [email, setEmail] = useState<any>(null)
  const [password, setPassword] = useState<any>(null)
  const [confirmPassword, setConfirmPassword] = useState(null)
  const [errors, setErrors] = useState<any>({})
  const [loading, setLoading] = useState<boolean>(false)

  function handleChangeEmail(text: any) {
    setEmail(text)
    setErrors({ ...errors, email: "" })
  }

  function handleChangePassword(text: any) {
    setPassword(text)
    setErrors({ ...errors, password: "" })
  }

  function handleChangeConfirmPassword(text: any) {
    setConfirmPassword(text)
    setErrors({ ...errors, confirmPassword: "" })
  }


  async function onSubmit() {
    setLoading(true)

    let isNext = true;

    let _errors: any = {}

    if (!isValidEmail(email)) {
      _errors.email = "Email không hợp lệ"
      isNext = false;
    }

    if (password && password?.length < 6) {
      _errors.password = "Mật khẩu tối thiểu phải gồm 6 ký tự"
      isNext = false;
    }

    if (password !== confirmPassword) {
      _errors.confirmPassword = "Mật khẩu không trùng khớp"
      isNext = false;
    }

    setErrors(_errors)

    if (!isNext) return

    try {
      await createUserWithEmailAndPassword(auth, email, password)
      ToasterHelper.show({
        text: 'Đăng ký thành công',
        type: 'error',
        timeout: 5000,
      });
    } catch (error: any) {
      ToasterHelper.show({
        text: error.message,
        type: 'error',
        timeout: 5000,
      });
    } finally {
      setLoading(false)
    }
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#000' }}>
      <Card style={{ width: '95%', paddingTop: 24, paddingBottom: 24 }}>
        <Text style={{ fontSize: 24, marginBottom: 16 }}>Đăng ký</Text>
        <TextInput value={email} onChangeText={handleChangeEmail} errorMessage={errors?.email} prefixIcon="mail" placeholder="Email" />
        <TextInput value={password} onChangeText={handleChangePassword} errorMessage={errors?.password} prefixIcon="lock" placeholder="Mật khẩu" secureTextEntry />
        <TextInput value={confirmPassword} onChangeText={handleChangeConfirmPassword} errorMessage={errors?.confirmPassword} prefixIcon="lock" placeholder="Xác nhận mật khẩu" secureTextEntry />
        <Button
          title="Đăng ký"
          type="primary"
          disabled={loading || !email || !password || !confirmPassword || errors?.email || errors?.password || errors?.confirmPassword}
          onPress={onSubmit}
          loading={loading}
        />
        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 16 }}>
          <Text>Đã có tài khoản? </Text>
          <Pressable onPress={() => navigation.navigate('LoginScreen')}>
            <Text style={{ color: '#22b34f' }}>Đăng nhập ngay</Text>
          </Pressable>
        </View>
      </Card>
    </View>
  );
}

export default SignUpScreen