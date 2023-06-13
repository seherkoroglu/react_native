import React from 'react';
import { Dimensions } from 'react-native';
import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        justifyContent: 'center',
        width: Dimensions.get('window').width * 0.40,
        height: Dimensions.get('window').width * 0.35,
        marginHorizontal: Dimensions.get('window').width * 0.02,
        marginVertical: Dimensions.get('window').width * 0.02,
        paddingHorizontal: Dimensions.get('window').width * 0.04,
        borderRadius: 20,
        alignItems: 'center',
        
    },


});

export default styles;



