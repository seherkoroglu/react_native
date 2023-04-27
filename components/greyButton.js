import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {useState} from 'react';

const GreyButton = (props) => {
        
        return (
            <View style={styles.button}> 
            {props.children} 
            </View>
        );
    }


const styles = StyleSheet.create({
    button: {
        backgroundColor: '#222331',
        width: 340,
        height: 80,
        borderRadius: 10,
        marginTop: 20,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
       
      }, 
});

export default GreyButton;
    