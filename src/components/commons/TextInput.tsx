import { TextInput as TextInputDefault, View } from "react-native";
import Icon from 'react-native-vector-icons/Feather';

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

export default function TextInput({ prefixIcon, suffixIcon, style = {}, placeholder = '', ...rest }: { prefixIcon?: any, suffixIcon?: any, placeholder?: string, style?: any }) {
    return (
      <View style={styles.wrapper}>
        {
          prefixIcon
          ? <Icon style={styles.prefixIcon} name={typeof prefixIcon === "string" ? prefixIcon : prefixIcon.name} color={'#fff'} size={16} />
          : null
        }
        <TextInputDefault
          placeholder={placeholder}
          placeholderTextColor="#697180"
          style={{ color: '#fff', backgroundColor: '#000', padding: 0, paddingLeft: 8, paddingRight: 8, paddingTop: 4, paddingBottom: 4, ...styles.input, ...style }}
          { ...rest }
        />
        {
          suffixIcon
          ? <Icon style={styles.suffixIcon} name={typeof suffixIcon === "string" ? suffixIcon : suffixIcon.name} color={'#fff'} size={16} />
          : null
        }
      </View>
    );
}