import { View } from "react-native";

export default function Card({ children, style = {} }: { children: any, style?: any }) {
    return (
      <View style={{ padding: 8, backgroundColor: '#0a121c', borderRadius: 4, ...style }}>
        {children}
      </View>
    );
}