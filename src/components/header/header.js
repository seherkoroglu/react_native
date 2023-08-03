import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import ProgressBar from '../progressBar/ProgressBar';


const Header = ({ title}) => {
  const navigation = useNavigation();
  return (
 <View style = {{backgroundColor: '#191924',paddingBottom: width * 0.02, }}>
      <View style = {styles.progressBar}>
    <ProgressBar navigation={navigation}/>
    </View>
      
      <View style={styles.container}>
  <View style={{ flexDirection: 'row'}}>
  <Text style={styles.textStyle}>{title}</Text>

  </View>
  </View>
  </View>


  
 
  );
};

export default Header;