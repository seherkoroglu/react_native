import { StyleSheet } from 'react-native';
import React from 'react';
import {Dimensions} from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    flex: 1,
  },
  headerBoxWrapper: {
    alignItems: 'center',
    marginBottom: Dimensions.get('window').width * 0.1,
    justifyContent: 'center',
  },
  heading: {
    color: Colors.secondaryBlack,
    fontSize: Dimensions.get('window').width * 0.06,
    marginTop: Dimensions.get('window').width * 0.1,
    paddingHorizontal: Dimensions.get('window').width * 0.05,
    textAlign: 'center',
  },
  subHeading: {
    color: Colors.secondaryGray,
    fontSize: Dimensions.get('window').width * 0.04,
    marginTop: Dimensions.get('window').width * 0.05,
    paddingHorizontal: Dimensions.get('window').width * 0.05,
    textAlign: 'center',
  },

  imageFemale: {
    resizeMode: 'contain',
    position: 'absolute',
    height: Dimensions.get('window').width * 0.42,
    width: Dimensions.get('window').width * 0.20,
  },
  imageFemaleModel: {
    height: Dimensions.get('window').width * 0.42,
    width: Dimensions.get('window').width * 0.20,
  },
  imageMale: {
    resizeMode: 'contain',
    position: 'absolute',
    height: Dimensions.get('window').width * 0.42,
    width: Dimensions.get('window').width * 0.20,
  },
  imageMaleModel: {
    resizeMode: 'contain',
    height: Dimensions.get('window').width * 0.42,
    width: Dimensions.get('window').width * 0.20,
  },
});

export default styles;