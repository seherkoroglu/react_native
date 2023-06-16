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
  },

  goal: {
    backgroundColor: 'white',
    justifyContent: 'center',
    width: Dimensions.get('window').width * 0.80,
    height: Dimensions.get('window').width * 0.15,
    marginHorizontal: Dimensions.get('window').width * 0.02,
    marginVertical: Dimensions.get('window').width * 0.02,
    paddingHorizontal: Dimensions.get('window').width * 0.04,
    borderRadius: 10,
    alignItems: 'center',
    flexDirection: 'row',
    textAlign: 'center',
   

    },
});

export default styles;