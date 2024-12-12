import { Pressable, View } from "react-native";
import Icon from 'react-native-vector-icons/Feather';
import { createStackNavigator } from "@react-navigation/stack";
import { Card, Text } from "../../components/commons";
import StudyStory from "./StudyStory";
import StudyListen from "./StudyListen";
import StudyListenDetail from "./StudyListenDetail";
import StudySpeaking from "./StudySpeaking";

const Stack = createStackNavigator();

function Index({ navigation }: { navigation: any }) {  
  return (
    <View style={{ flex: 1, backgroundColor: '#000' }}>
      <Pressable onPress={() => navigation.navigate('StudyListen')}>
        <Card style={{ flexDirection: 'row', marginTop: 8 }}>
          <Icon name="headphones" size={20} color={"#fff"} />
          <Text style={{ marginLeft: 8 }}>Luyện nghe chép chính tả</Text>
        </Card>
      </Pressable>
      <Pressable onPress={() => navigation.navigate('StudySpeaking')}>
        <Card style={{ flexDirection: 'row', marginTop: 8 }}>
          <Icon name="mic" size={20} color={"#fff"} />
          <Text style={{ marginLeft: 8 }}>Luyện nói shadowing</Text>
        </Card>
      </Pressable>
      <Pressable
        style={{ width: 'auto' }}
        onPress={() => navigation.navigate('StudyStory')}
      >
        <Card style={{ flexDirection: 'row', marginTop: 8 }}>
          <Icon name="book-open" size={20} color={"#fff"} />
          <Text style={{ marginLeft: 8 }}>Luyện đọc truyện chêm</Text>
        </Card>
      </Pressable>
    </View>
  )
}

export default function StudyScreen() {
  return (
    <Stack.Navigator screenOptions={{ animationEnabled: false, headerStyle: { backgroundColor: '#0a121c', borderBottomColor: 'red' }, headerTintColor: '#fff' }} initialRouteName="StudyScreen">
      <Stack.Screen name="StudyScreen" component={Index} options={{ headerShown: false }} />
      <Stack.Screen name="StudyStory" component={StudyStory} options={{ title: 'Luyện đọc truyện chêm' }} />
      <Stack.Screen name="StudyListen" component={StudyListen} options={{ title: 'Luyện nghe chép chính tả' }} />
      <Stack.Screen name="StudyListenDetail" component={StudyListenDetail} options={{ title: 'Luyện nghe chép chính tả' }} />
      <Stack.Screen name="StudySpeaking" component={StudySpeaking} options={{ title: 'Luyện nói shadowing' }} />
    </Stack.Navigator>
  )
}