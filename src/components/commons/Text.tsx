import { Text as TextDefault } from "react-native";

export default function Text({ children, style = {}, ...rest }: { children: any, style?: any }) {
    return (
      <TextDefault
        style={{ color: '#fff', ...style }}
        { ...rest }
      >
        {children}
      </TextDefault>
    );
}