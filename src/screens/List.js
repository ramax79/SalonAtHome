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
              {/* превращаем в общий элемент и передаем его на следующий экран указываем уникальный индентификатор общего элемента id. тот же самый элемент нужно обернуть в окне детали. так же нужно сообщить об этом индетнификаторе React Navigation Shared Element, смотрим на git Static shared elements config. Нужно создать конфигурацию общих элементов sharedElementsConfig. мы создадим статический sharedElements  перед экспортом нашей функции Detail*/}
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
