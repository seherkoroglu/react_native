import React from 'react';
import { StyleSheet, View, Text, Image, TextInput} from 'react-native';
import Rectangle from '/Users/main/KMClone/src/components/rectangle.js';

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
        width: 150,
        height: 6,
        borderRadius: 5,
        marginTop: 5,
        flexDirection: 'row',
        borderColor: '#4d4f59',
        borderWidth: 0.6,
        justifyContent: 'flex-start',
      
       
    },

   


   
});

export default BoldRectangle;