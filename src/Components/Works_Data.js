import React from 'react';
import {FlatList, View, TouchableOpacity, Text} from 'react-native';
import {WORKS_DATA} from '../config/travel';
import {GLOBAL_STYLE, ITEM_WIDTH, SPACING, width} from '../config/index';

export default function Works_Data(category) { 
  return (
    <FlatList
      data={WORKS_DATA}
      keyExtractor={item => item.key}      
      snapToInterval={ITEM_WIDTH + SPACING * 2}      
      decelerationRate={'fast'}      
      style={{
        width: width - SPACING * 2,
        margin: SPACING,
      }}
      renderItem={({item}) => {
        if (item.category === category.category) {
          return (
            <TouchableOpacity>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  backgroundColor: 'rgba(0, 0, 0, 0.05)',
                  padding: 10,
                  marginBottom: 3,
                }}>
                <View style={{width: width * 0.7}}>
                  <Text style={GLOBAL_STYLE.itemTitle}>{item.name}</Text>
                  <Text style={GLOBAL_STYLE.itemText}>$ {item.price}</Text>
                </View>
                <View style={{width: width * 0.3}}>
                  <Text style={GLOBAL_STYLE.itemTitle}>ADD</Text>
                </View>
              </View>
            </TouchableOpacity>
          );
        }        
      }}
    />
  );
}
