import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

export default function ({onPress}) {
  return (
    <Icon
      name="arrow-back-outline"
      size={24}
      style={{padding: 12}}
      color="#333"
      onPress={onPress}
    />
  );
}
