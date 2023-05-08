import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

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
      marginTop: width * 0.001,
      marginBottom: width * 0.0015,
      fontWeight: 'bold',
      lineHeight: width * 0.05,
      fontSize: width * 0.045,
      paddingLeft: width * 0.1,
      paddingRight: width * 0.08,
      textAlign: 'center',
      justifyContent: 'center',
    },
  });
export default Texts;