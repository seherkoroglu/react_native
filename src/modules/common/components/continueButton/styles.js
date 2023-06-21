import React from 'react';
import {  StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
    },
    button: {
      backgroundColor: '#1558e6',
      paddingVertical: Dimensions.get('window').width * 0.04,
      paddingHorizontal: Dimensions.get('window').width * 0.3,
      borderRadius: 20,
      marginVertical: Dimensions.get('window').width * 0.02,
    },
    buttonText: {
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold',
    },
  });

  export default styles;
