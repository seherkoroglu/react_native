import React from 'react';
import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';


const styles = StyleSheet.create({
  
        back: {
            left: Dimensions.get('window').width * 0.05,
            width: Dimensions.get('window').width * 0.06,
            height: Dimensions.get('window').width * 0.06,
        },

});

export default styles;