import React from 'react';
import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    textAlign: 'center',
  },
  textStyle: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    marginHorizontal: Dimensions.get('window').width * 0.10,
    
  },
  goals: {
    flexWrap: 'wrap',
    justifyContent: 'center',
   
  },
  options: {
    fontSize: 15,
    textAlign: 'center',
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',

  },

});

export default styles;