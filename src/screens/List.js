import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {DATA} from '../config/travel';
import {SPACING, GLOBAL_STYLE} from '../config/index';
import Icon from '../Components/Icon';
import MarketingSlider from '../Components/MarketingSlider';
import {SharedElement} from 'react-navigation-shared-element';

export default function List({navigation}) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Text style={GLOBAL_STYLE.Title}>Salon at Home</Text>
      <Text
        style={[
          {textAlign: 'center', textTransform: 'uppercase'},
          GLOBAL_STYLE.itemTitle,
        ]}>
        Trending packages
      </Text>

      <MarketingSlider />
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'center',
          marginVertical: 20,
        }}>
        {DATA.map(item => {
          return (
            <TouchableOpacity
              key={item.id}
              style={{padding: SPACING}}
              onPress={() => navigation.push('Detail', {item})}>             
              <>
                <SharedElement id={`item.${item.id}.icon`}>
                  <Icon uri={item.imageUri} />
                </SharedElement>
                <Text
                  style={{
                    fontSize: 10,
                    textAlign: 'center',
                    fontWeight: 'bold',
                  }}>
                  {item.title}
                </Text>
              </>
            </TouchableOpacity>
          );
        })}
      </View>
    </SafeAreaView>
  );
}
