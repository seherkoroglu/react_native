import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';
import React from 'react';


const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection: 'column',
      backgroundColor: '#edf3fb',
      flex:0.3,
      textAlign: 'center',
      marginTop: Dimensions.get('window').width*0.2,
      marginHorizontal: Dimensions.get('window').width * 0.05,
      
     
    },
    textStyle: {
      fontSize: 20,
      textAlign: 'center',
      fontWeight: 'bold',
      justifyContent: 'center',
      marginHorizontal: Dimensions.get('window').width * 0.05,
    },
    subTextStyle: {
      fontSize: 17,
      textAlign: 'center',
      marginVertical: Dimensions.get('window').width * 0.01,
      
      marginHorizontal: Dimensions.get('window').width * 0.1,
      fontWeight: '400',
      
    },
  });

    export default styles;