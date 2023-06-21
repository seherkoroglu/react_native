import React from 'react';
import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#edf3fb',
        marginHorizontal: Dimensions.get('window').width*0.05,
    },

        textStyle: {
        fontSize: 20,
        textAlign: 'center',
        color: '#000',
        
    },
});

export default styles;