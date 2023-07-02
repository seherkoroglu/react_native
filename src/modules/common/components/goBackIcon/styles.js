import React from 'react';
import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';


const styles = StyleSheet.create({
  
        back: {
            marginHorizontal: Dimensions.get('window').width * 0.01,
            width: Dimensions.get('window').width * 0.05,
            height: Dimensions.get('window').width * 0.05,
        },

});

export default styles;