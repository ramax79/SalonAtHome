import 'react-native-gesture-handler';

import React from 'react';

import {LogBox, Text, View} from 'react-native';
import {GLOBAL_STYLE} from './src/config/index';
import List from './src/screens/List';
import Detail from './src/screens/Detail';
import {enableScreens} from 'react-native-screens/';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element/';
import {NavigationContainer} from '@react-navigation/native';

enableScreens();
const Stack = createSharedElementStackNavigator();
LogBox.ignoreLogs(['react-native-gesture-handler']);
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="List" headerMode="none">
        <Stack.Screen name="List" component={List} />
        <Stack.Screen
          name="Detail"
          component={Detail}
          options={() => ({
            gestureEnabled: false,
            // какой тип анимации при открытии и закрытии навигации
            transitionSpec: {
              open: {animation: 'timing', config: {duration: 1000}},
              close: {animation: 'timing', config: {duration: 1000}},
            },
            cardStyleInterpolator: ({current: {progress}}) => {
              return {
                cardStyle: {
                  opacity: progress,
                },
              };
            },
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
  // return (
  //   <View style={GLOBAL_STYLE.container}>
  //     <List />
  //   </View>
  // );
}
