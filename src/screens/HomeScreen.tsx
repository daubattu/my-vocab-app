import { useState } from "react";
import { Text, Card } from "../components/commons";
import TextInput from "../components/commons/TextInput";
import { TextInput as TextDefault } from 'react-native'

export default function HomeScreen() {  
    return (
      <Card>
        <Text style={{ marginBottom: 8 }}>Home Screen</Text>
        <TextInput
          placeholder="Tra từ"
          suffixIcon="search"
        />
        <Text style={{ marginBottom: 8 }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </Text>
        <TextDefault
          onTouchStart={()=>  console.log("Hello...")}
          editable={false}
          multiline={true}
          value={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`}
          style={{ color: '#fff' }}
          onPressIn={(event) => {
            console.log(event)
          }}
          onTouchEnd={(event) => console.log(event)}
          onSelectionChange={(event) => console.log(event.nativeEvent.selection)}
        />
      </Card>
    );
}