import { View } from "react-native";
import { Card, Text } from "../../components/commons";
import Icon from "react-native-vector-icons/Feather";
import TextInput from "../../components/commons/TextInput";
import { getArrayRange } from "../../utils";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";
import Button from "../../components/commons/Button";

const listSentences = getArrayRange(0, 40)

function StudyListenDetail({ route }: { route?: any}) {
  return (
    <View style={{ backgroundColor: '#000', flex: 1 }}>
      <Card style={{ marginTop: 8 }}>
        <Text>Level {route.params.level} - Unit {route.params.unit}</Text>
        <Text>A Picnic by the River</Text>
      </Card>
      <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1, marginTop: 8, marginBottom: 8 }} edges={['top']}>
          <ScrollView>
            <Card>
              {
                listSentences.map((index) => (
                  <View style={{
                    marginBottom: index !== listSentences.length - 1 ? 8 : 0,
                    borderBottomColor: index !== listSentences.length - 1 ? '#697180' : 'none',
                    borderBottomWidth: index !== listSentences.length - 1 ? 0.5 : 0,
                    paddingBottom: index !== listSentences.length - 1 ? 8 : 0
                  }}>
                    <View
                      key={index}
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        width: '100%',
                        alignItems: 'center',
                        justifyContent: 'center',
                        columnGap: 8,
                      }}
                    >
                      <Text style={{ width: 20 }}>{(index + 1).toString().padStart(2, '0')}</Text>
                      <View style={{ flex: 1 }}>
                        <TextInput showMessageError={false} placeholder="Vui lòng nhập những gì bạn nghe được" />
                      </View>
                      <Icon name="play-circle" size={20} color={"#fff"} />
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                      <View style={{ width: 28 }}></View>
                      <Text style={{ fontStyle: 'italic' }}>Hôm nay là thứ 6</Text>
                    </View>
                  </View>
                ))
              }
            </Card>
          </ScrollView>
        </SafeAreaView>
      </SafeAreaProvider>
      <View style={{ marginBottom: 8 }}>
        <Card>
          <Button title="Xác nhận" />
        </Card>
      </View>
    </View>
  )
}

export default StudyListenDetail