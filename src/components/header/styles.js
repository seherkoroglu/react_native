import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';
import React from 'react';


const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: '#191924',
      textAlign: 'center',
      marginTop: Dimensions.get('window').width*0.2,
  
      
     
    },
    textStyle: {
      fontSize: 25,
      textAlign: 'center',
      fontWeight: 'bold',
      justifyContent: 'center',
      marginHorizontal: Dimensions.get('window').width * 0.05,
      color: "white"
    }, 
    progressBar: {
      backgroundColor: '#191924',
      flexDirection: 'row',

    }

  });

    export default styles;