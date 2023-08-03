import {Text, View, TouchableOpacity} from 'react-native'
import React from 'react'
import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');


const YesNoButton = ({  children, isSelected, onPress }) => {
    return (
      <View style={styles.darkButton}>
        <TouchableOpacity
           style={[styles.darkButton, isSelected ? {backgroundColor: '#4d4f59'} : null]}
          onPress={onPress}
        >
          {children}
        </TouchableOpacity>
      </View>
    );
  };
  
const styles = StyleSheet.create({
    darkButton: {
        backgroundColor: '#222331',
        width: width * 0.4,
        height: width * 0.17,
        borderRadius: width * 0.02,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: width * 0.02,
        marginHorizontal: width * 0.02,
      },

})

export default YesNoButton;