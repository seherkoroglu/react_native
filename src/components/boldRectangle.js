import React from 'react';
import { StyleSheet, View, Text, Image, TextInput} from 'react-native';
import Rectangle from '/Users/main/KMClone/src/components/rectangle.js';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

class BoldRectangle extends React.Component {
    render() {
        return (
            <View style={styles.boldRectangle}>
                <Rectangle/>   
             </View>
        );
    }
}

const styles = StyleSheet.create({

    boldRectangle: {
        backgroundColor: '#fa473a',
        width : width * 0.5,
        height: height * 0.006,
        borderRadius: 5,
        marginTop: width * 0.02,
        flexDirection: 'row',
        borderColor: '#4d4f59',
        borderWidth: 0.6,
        justifyContent: 'flex-start',
      
       
    },

   


   
});

export default BoldRectangle;