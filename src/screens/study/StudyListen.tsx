import { Pressable, View } from "react-native";
import { Card, Text } from "../../components/commons";
import Icon from 'react-native-vector-icons/Feather';
import { getArrayRange } from "../../utils";
import { useState } from "react";

const units = getArrayRange(1, 40)

function StudyListen({ navigation }: { navigation: any }) {
  const [openLevel, setOpenLevel] = useState<any>(null)

  return (
    <View style={{ backgroundColor: '#000', flex: 1, flexDirection: 'column' }}>
      {
        [1, 2, 3, 4].map((level) => (
          <Pressable
            key={level}
            style={{ marginTop: 8 }}
            onPress={() => {
              setOpenLevel(level === openLevel ? null : level)
            }}
          >
            <Card>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text>Level {level}</Text>
                <Icon name={level === openLevel ? "chevron-up" : "chevron-down"} size={16} color={"#fff"} />
              </View>
              {
                level === openLevel
                ? <View style={{ flexDirection: 'row', marginTop: 8, rowGap: 8, flexWrap: 'wrap', justifyContent: 'space-between' }}>
                    {
                      units.map((unit) => (
                        <Pressable
                          key={unit}
                          style={{ width: '19%', backgroundColor: '#000', padding: 8 }}
                          onPress={() => {
                            console.log('StudyListenDetail')
                            navigation.navigate('StudyListenDetail', { level, unit })
                          }}
                        >
                          <Text>Unit {unit.toString().padStart(2, '0')}</Text>
                        </Pressable>
                      ))
                    }
                  </View>
                : null
              }
            </Card>
          </Pressable>
        ))
      }
    </View>
  )
}

export default StudyListen