import React from 'react';
import { StyleSheet, View, Text, Image, TextInput} from 'react-native';
import BoldRectangle from '/Users/main/KMClone/src/components/boldRectangle.js';

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
        width: 350,
        height: 6,
        borderRadius: 5,
        borderColor: '#4d4f59',
        borderWidth: 0.6,
         opacity: 0.3,
    },

});

export default Rectangle;
