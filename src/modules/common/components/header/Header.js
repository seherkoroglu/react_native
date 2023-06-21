import React from 'react';
import { StyleSheet } from 'react-native';
import { View, Text } from 'react-native';
import Back from '../goBackIcon/Back';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';


const Header = ({ navigation, title, subtitle }) => {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'column' }}>
      <View style={{ flexDirection: 'row'}}>
      <Back navigation={navigation} />
      <Text style={styles.textStyle}>{title}</Text>
      </View>
      <Text style={styles.subTextStyle}>{subtitle}</Text>
      </View>
    </View>
  );
};

export default Header;
