import React from 'react';
import {SLIDER_DATA} from '../config/travel';
import {ITEM_WIDTH, width, SPACING, GLOBAL_STYLE} from '../config/index';
import {FlatList, View, Text} from 'react-native';

export default function MarketingSlider() {
  return (
    <FlatList
      data={SLIDER_DATA}
      keyExtractor={item => item.color}
      horizontal
      snapToInterval={ITEM_WIDTH + SPACING * 2}
      contentContainerStyle={{paddingRight: width - ITEM_WIDTH - SPACING * 2}}
      decelerationRate={'fast'}
      showsHorizontalScrollIndicator={false}
      renderItem={({item}) => {
        return (
          <View
            style={[GLOBAL_STYLE.itemContainer, {backgroundColor: item.color}]}>
            <Text style={GLOBAL_STYLE.itemTitle}>{item.title}</Text>
            <Text style={GLOBAL_STYLE.itemText}>{item.text}</Text>
          </View>
        );
      }}
    />
  );
}
