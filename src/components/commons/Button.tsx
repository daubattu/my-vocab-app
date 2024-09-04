import React from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';

export default function Button({ title, onPress, type, disabled }: { title: string, onPress?: any, type?: string, disabled?: boolean }) {
  let color = '#343840'
  let textColor = '#fff'

  if (disabled) {
    color = '#000'
  } else {
    if (type === 'primary') {
      color = '#22b34f'
    }
  
    if (type === 'danger') {
      color = '#d13438'
    }
  }

  return (
    <Pressable
      style={{ ...styles.button, backgroundColor: color }}
      onPress={() => {
        if (!disabled && typeof onPress === 'function') {
          onPress()
        }
      }}
    >
      <Text style={{ color: disabled ? '#697180' : textColor }}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    height: 36,
    justifyContent: 'center',
    paddingHorizontal: 32,
    elevation: 3,
  }
});