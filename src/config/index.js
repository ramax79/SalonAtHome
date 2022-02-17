import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';

const {width, height} = Dimensions.get('window');
const SPACING = 16;
const ICON_SIZE = width / 3 - SPACING * 2;
const ITEM_WIDTH = width * 0.6;
const GLOBAL_STYLE = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#666',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    width: ICON_SIZE,
    height: ICON_SIZE,
    borderRadius: ICON_SIZE / 2,
    backgroundColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {    
    width: ICON_SIZE,
    height: ICON_SIZE,
    borderRadius: ICON_SIZE / 2,
    resizeMode: 'cover',    
  },
  itemContainer: {
    width: width * 0.7,
    height: ITEM_WIDTH * 0.6,
    borderRadius: 16,
    padding: SPACING,
    margin: SPACING,
  },
  itemText: {
    fontSize: 16,
  },
  itemTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  Title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export {ICON_SIZE, SPACING, ITEM_WIDTH, GLOBAL_STYLE, width, height};
