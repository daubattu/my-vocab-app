import { View } from "react-native";
import { Card, Text } from "../../components/commons";

function StudyListenDetail({ route }: { route?: any}) {
  return (
    <View style={{ backgroundColor: '#000', flex: 1 }}>
      <Card style={{ marginTop: 8 }}>
        <Text>Level {route.params.level} - Unit {route.params.unit}</Text>
      </Card>
    </View>
  )
}

export default StudyListenDetail