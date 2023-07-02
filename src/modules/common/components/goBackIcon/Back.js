import React from 'react';
import { View, Text, Image, TouchableOpacity, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

const Back = () => {
  const navigation = useNavigation(); // useNavigation hook'unu burada kullanarak navigation objesini alıyoruz

  return (
    <View>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image
          style={styles.back}
          source={require('../../../../assets/images/back.png')}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Back;
