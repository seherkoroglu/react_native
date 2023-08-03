import {Text, View, TouchableOpacity} from 'react-native'
import React from 'react'
import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');


const DarkButton = ({  children, isSelected, onPress }) => {
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
        width: width * 0.8,
        height: width * 0.13,
        borderRadius: width * 0.02,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: width * 0.03,
        marginBottom: width * 0.01,
      },

})

export default DarkButton;