import React from 'react';
import Icon from '../Components/Icon';
import BackIcon from '../Components/BackIcon';
import Works_Data from '../Components/Works_Data';
import {DATA} from '../config/travel';
import {Animated, Text, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ICON_SIZE, SPACING, width, GLOBAL_STYLE} from '../config/index';
import {SharedElement} from 'react-navigation-shared-element';

const Detail = ({navigation, route}) => {
  const {item} = route.params; 
  const ref = React.useRef();
  const selectedItemIndex = DATA.findIndex(i => i.id === item.id);
  const mountedAnimated = React.useRef(new Animated.Value(0)).current;
  const activeIndex = React.useRef(new Animated.Value(selectedItemIndex)).current; 
  const activeIndexAnimation = React.useRef(
    new Animated.Value(selectedItemIndex),
  ).current; 

  const animation = (toValue, delay) =>
    Animated.timing(mountedAnimated, {
      toValue,
      duration: 300,
      delay,
      useNativeDriver: true,
    });

  React.useEffect(() => {
    Animated.parallel([
      Animated.timing(activeIndexAnimation, {
        toValue: activeIndex,
        duration: 300,
        useNativeDriver: true,
      }),
      animation(1, 200),
    ]).start();
  });

  const size = ICON_SIZE + SPACING * 2;

  const translateY = mountedAnimated.interpolate({
    inputRange: [0, 1], // когда 0 его не видно
    outputRange: [50, 0],
  });
  const translateX = activeIndexAnimation.interpolate({
    inputRange: [-1, 0, 1],
    outputRange: [size, 0, -size],
  });

  return (
    <SafeAreaView style={{flex: 1}}>
      <BackIcon
        onPress={() => {
          animation(0, 500).start(() => {
            navigation.goBack();
          });
        }}
      />
      <Animated.View
        style={{
          flexDirection: 'row',
          flexWrap: 'nowrap',
          marginVertical: 20,
          marginLeft: width / 2 - ICON_SIZE / 2 - SPACING,
          transform: [{translateX}],
        }}>
        {DATA.map((item, index) => {
          const inputRange = [index - 1, index, index + 1];
          const opacity = activeIndexAnimation.interpolate({
            inputRange,
            outputRange: [0.3, 1, 0.3],
            extrapolate: 'clamp',
          });
          return (
            <TouchableOpacity
              style={{padding: SPACING}}
              key={item.id}
              onPress={() => {
                activeIndex.setValue(index);
                ref.current.scrollToIndex({
                  index,
                  animated: true,
                });
              }}>
              <Animated.View style={{alignItems: 'center', opacity}}>
                <SharedElement id={`item.${item.id}.icon`}>
                  <Icon uri={item.imageUri} />
                </SharedElement>
                <Text style={{fontSize: 10}}>{item.title}</Text>
              </Animated.View>
            </TouchableOpacity>
          );
        })}
      </Animated.View>
      <Animated.FlatList
        style={{
          opacity: mountedAnimated,
          transform: [{translateY}],
        }}
        ref={ref}
        data={DATA}
        keyExtractor={item => item.id}
        horizontal
        pagingEnabled
        initialScrollIndex={selectedItemIndex}
        nestedScrollEnabled
        getItemLayout={(data, index) => ({
          length: width,
          offset: width * index,
          index,
        })}
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={ev => {
          const newIndex = Math.round(ev.nativeEvent.contentOffset.x / width);
          activeIndex.setValue(newIndex);
        }}
        renderItem={({item}) => {
          return <Works_Data category={item.title} />;
        }}
      />
    </SafeAreaView>
  );
};
Detail.sharedElements = (route, otherRoute, showing) => {
  return DATA.map(item => `item.${item.id}.icon`);
};

export default Detail;
