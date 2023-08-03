import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
import React from 'react'

const styles = StyleSheet.create({

     container: {
        marginTop: width * 0.15,
        marginLeft: width * 0.06,
        backgroundColor: '#191924',
    
        
     
     },

      backContainer: {
        backgroundColor: '#191924',
        flexDirection: 'row',
        
      },

      backImage: {
        width: width * 0.07,
        height: width * 0.05,
        marginTop: width * 0.02,
      },
      textStyle: {
        backgroundColor: '#191924',
        color: 'white',
        fontSize: width * 0.04,
        fontWeight: 'bold',
        marginLeft: width * 0.69,
        paddingTop: width * 0.02,
       
        
      
      },


})

export default styles;