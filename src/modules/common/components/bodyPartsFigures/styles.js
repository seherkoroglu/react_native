import { StyleSheet } from 'react-native';
import {Dimensions} from 'react-native';
import React from 'react';


const styles = StyleSheet.create({
  imageFemale: {
    resizeMode: 'contain',
    position: 'absolute',
    height: Dimensions.get('window').width * 0.7,
    width: Dimensions.get('window').width * 0.4,
    top: Dimensions.get('window').height * 0.1,
  },
  imageFemaleModel: {
    resizeMode: 'contain',

    height: Dimensions.get('window').width * 0.7,
    width: Dimensions.get('window').width * 0.4,
  },
  imageMale: {
    resizeMode: 'contain',
    position: 'absolute',
    height: Dimensions.get('window').width * 0.7,
    width: Dimensions.get('window').width * 0.4,
  },
  imageMaleModel: {
    resizeMode: 'contain',

    height: Dimensions.get('window').width * 0.7,
    width: Dimensions.get('window').width * 0.4,
  },

  imageFemaleResult: {
    resizeMode: 'contain',
    position: 'absolute',
    height: Dimensions.get('window').width * 0.7,
    width: Dimensions.get('window').width * 0.4,
  },
  imageFemaleModelResult: {
    resizeMode: 'contain',

    height: Dimensions.get('window').width * 0.7,
    width: Dimensions.get('window').width * 0.4,
  },

  imageMaleResult: {
    resizeMode: 'contain',
    position: 'absolute',
    height: Dimensions.get('window').width * 0.7,
    width: Dimensions.get('window').width * 0.4,
  },
  imageMaleModelResult: {
    resizeMode: 'contain',

    height: Dimensipns.get('window').width * 0.7,
    width: Dimensions.get('window').width * 0.4,
  },
});

export default styles;