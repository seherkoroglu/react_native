import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

class RedButton extends React.Component {
    render() {
        return (
            <View style={styles.button}> 
            {this.props.children} 
            </View>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#d1262b',
        width: 350,
        height: 60,
        borderRadius: 30,
        alignSelf: 'center',
        justifyContent: 'center',
        marginVertical: 10,
        
       
        
    },
});
 export default RedButton;