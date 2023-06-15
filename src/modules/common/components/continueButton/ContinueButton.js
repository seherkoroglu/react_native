import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ContinueButton = ({ onPress}) => {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onPress} >
        <Text style={styles.buttonText}>CONTINUE</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#1558e6',
    paddingVertical: Dimensions.get('window').width * 0.04,
    paddingHorizontal: Dimensions.get('window').width * 0.3,
    borderRadius: 20,
    marginVertical: Dimensions.get('window').width * 0.1,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ContinueButton;
