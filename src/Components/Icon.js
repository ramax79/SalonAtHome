import React from 'react';
import {View, Image} from 'react-native';
import {GLOBAL_STYLE} from '../config/index';

export default function Icon({uri}) {
  return (
    <View style={GLOBAL_STYLE.imageContainer}>
      <Image source={{uri}} style={GLOBAL_STYLE.image} />
    </View>
  );
}
