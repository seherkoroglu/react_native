import React from 'react';
import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    width: Dimensions.get('window').width * 0.9,
    height: Dimensions.get('window').width * 0.9,
    flexDirection: 'row',
    marginBottom: Dimensions.get('window').width * 0.05,
    alignItems: 'center',
    shadowColor: '#c3cee680',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 15,
    shadowOpacity: 1,
    borderRadius: Dimensions.get('window').width * 0.05,
    elevation: 10,
  },
  buttonText: {
    marginLeft: Dimensions.get('window').width * 0.05,
    color: Colors.secondaryBlack,
    fontSize: width * 0.03,
    fontFamily: Config.fontFamily.PoppinsSemiBold,
    textAlign: 'center',
  },
  imageContainer: {
    width: Dimensions.get('window').width * 0.2,
    height: Dimensions.get('window').width * 0.2,
    marginLeft: Dimensions.get('window').width * 0.05,
    resizeMode: 'contain',
  },
});

export default styles;