import React from 'react';
import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';

const styles = StyleSheet.create({

  goal: {
    backgroundColor: 'white',
    justifyContent: 'center',
    width: Dimensions.get('window').width * 0.3,
    height: Dimensions.get('window').width * 0.3,
    marginVertical: Dimensions.get('window').width * 0.03,
    marginHorizontal: Dimensions.get('window').width * 0.03,
    
    borderRadius: 10,
    alignItems: 'center',
    flexDirection: 'column',
    textAlign: 'center',
   

    },
});

export default styles;