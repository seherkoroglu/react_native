import React from 'react';
import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
   
    
 
  },
  textStyle: {
    fontSize: 20,
    textAlign: 'center',
    marginHorizontal: Dimensions.get('window').width * 0.09,
    
  },
  goals: {
    flexWrap: 'wrap',
    justifyContent: 'center',
   
  },
  options: {
    fontSize: 15,
    textAlign: 'center',
    paddingTop: Dimensions.get('window').width * 0.05,
    paddingBottom: Dimensions.get('window').width * 0.02,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 12,
    textAlign: 'center',
    padding: Dimensions.get('window').width * 0.01,
    fontWeight: '500',
    color: '#6b7a99',
    justifyContent: 'center',
    alignItems: 'center',
  },
  progress: {
    alignItems: 'center',
    justifyContent: 'center',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width,
  },
});

export default styles;

