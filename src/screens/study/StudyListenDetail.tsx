import { View } from "react-native";
import { Card, Text } from "../../components/commons";
import Icon from "react-native-vector-icons/Feather";
import TextInput from "../../components/commons/TextInput";
import { getArrayRange } from "../../utils";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";
import Button from "../../components/commons/Button";

import RNFS from 'react-native-fs';

const listSentences = getArrayRange(0, 40)

function StudyListenDetail({ route }: { route?: any}) {
  async function handleDownload() {
    const url = 'https://www.example.com/example.pdf';
    const filePath = RNFS.DocumentDirectoryPath + '/example.pdf';

    console.log('RNFS.DocumentDirectoryPath', RNFS.DocumentDirectoryPath)

    RNFS.downloadFile({
      fromUrl: url,
      toFile: filePath,
      background: true, // Enable downloading in the background (iOS only)
      discretionary: true, // Allow the OS to control the timing and speed (iOS only)
      progress: (res) => {
        // Handle download progress updates if needed
        const progress = (res.bytesWritten / res.contentLength) * 100;
        console.log(`Progress: ${progress.toFixed(2)}%`);
      },
    })
      .promise.then((response) => {
        console.log('File downloaded!', response);
      })
      .catch((err) => {
        console.log('Download error:', err);
      });
  }

  return (
    <View style={{ backgroundColor: '#000', flex: 1 }}>
      <Card style={{ marginTop: 8 }}>
        <Text>Level {route.params.level} - Unit {route.params.unit}</Text>
        <Text>A Picnic by the River</Text>
      </Card>
      <Card>
        <Button title="Tải xuống" onPress={handleDownload} />
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