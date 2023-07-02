import React from 'react';
import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';
import styles from '../../../../../modules/common/components/goals/styles';

const style = StyleSheet.create({
  
      textStyle: {
        fontSize: 20,
        textAlign: 'center',
        paddingTop: Dimensions.get('window').width * 0.2,
        marginHorizontal: Dimensions.get('window').width * 0.2,
        
      },
    image: {
        width: Dimensions.get('window').width * 0.4,
        height: Dimensions.get('window').width * 0.2,
        resizeMode: 'contain',
        
    },

    goal: {
    backgroundColor: 'white',
    justifyContent: 'center',
    width: Dimensions.get('window').width * 0.25,
    height: Dimensions.get('window').width * 0.50,
    marginHorizontal: Dimensions.get('window').width * 0.02,
    marginVertical: Dimensions.get('window').width * 0.02,
    paddingHorizontal: Dimensions.get('window').width * 0.04,
    borderRadius: 20,
    alignItems: 'center',
    },

  
  

});

export default style;