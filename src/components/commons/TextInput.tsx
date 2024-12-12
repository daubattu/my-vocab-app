import { useState } from "react";
import { Pressable, TextInput as TextInputDefault, View } from "react-native";
import Icon from 'react-native-vector-icons/Feather';
import Text from "./Text";

const styles: any = {
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
    borderRadius: 2
  },
  input: {
    paddingLeft: 8,
    flex: 1,
  },
  prefixIcon: {
    paddingLeft: 8,
  },
  suffixIcon: {
    paddingRight: 8,
  }
}

export default function TextInput({ value, onChangeText, errorMessage, showMessageError = true, prefixIcon, suffixIcon, style = {}, secureTextEntry = false, placeholder = '', ...rest }: { value?: any, onChangeText?: any, errorMessage?: any, prefixIcon?: any, suffixIcon?: any, secureTextEntry?: boolean, placeholder?: string, style?: any, showMessageError?: any }) {
  const [secureTextEntryStatus, setSecureTextEntryStatus] = useState(true)

  return (
    <>
      <View style={{ ...styles.wrapper, overflow: "hidden", borderWidth: 1, borderColor: errorMessage ? '#d13438' : 'transparent' }}>
        {
          prefixIcon
            ? <Icon style={styles.prefixIcon} name={typeof prefixIcon === "string" ? prefixIcon : prefixIcon.name} color={'#fff'} size={16} />
            : null
        }
        <TextInputDefault
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor="#697180"
          style={{ color: '#fff', backgroundColor: '#000', padding: 0, paddingLeft: 8, paddingRight: 8, paddingTop: 4, paddingBottom: 4, ...styles.input, ...style }}
          secureTextEntry={secureTextEntry ? secureTextEntryStatus : false}
          {...rest}
        />
        {
          suffixIcon
            ? <Icon style={styles.suffixIcon} name={typeof suffixIcon === "string" ? suffixIcon : suffixIcon.name} color={'#fff'} size={16} />
            : secureTextEntry
              ? <Pressable
                  onPress={() => setSecureTextEntryStatus(!secureTextEntryStatus)}
                >
                  <Icon style={styles.suffixIcon} name={secureTextEntryStatus ? "eye-off" : "eye"} color={'#fff'} size={16} />
                </Pressable>
              : null
        }
      </View>
      {
        showMessageError && errorMessage
        ? <View style={{ height: 24, paddingTop: 2 }}>
            <Text style={{ fontSize: 12, color: '#d13438' }}>{errorMessage}</Text>
          </View>
        : null
      }
    </>
  );
}