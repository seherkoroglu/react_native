import React from 'react';
import { View, Text, Image, TextInput} from 'react-native';
import BoldRectangle from '/Users/main/KMClone/src/components/boldRectangle.js';
import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

class Rectangle extends React.Component {
    render() {
        return (
            <View style ={styles.rectangle}>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    rectangle: {
        backgroundColor: '#fa473a',
        width : width * 0.89,
        height: width * 0.015,
        borderRadius: 5,
        borderColor: '#4d4f59',
      
         opacity: 0.2,
    },

});

export default Rectangle;
