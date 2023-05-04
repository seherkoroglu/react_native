import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

class Texts extends React.Component {
    render() {
        return (
          <Text style={styles.textStyles}>{this.props.children}</Text>
        );
    }
}

const styles = StyleSheet.create({
    
    textStyles: {
        color: 'white',
        marginTop: 8,
        marginBottom: 8,
        fontWeight: 'bold',
        lineHeight: 40,
        fontSize: 18,
        paddingLeft:40,
        paddingRight:40,
        textAlign: 'center',


    },
});

export default Texts;