import React from 'react';
import { StyleSheet } from 'react-native';
import { Dimensions, View, Text } from 'react-native';
import Back from '../goBackIcon/Back';
import { useNavigation } from '@react-navigation/native';


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

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'column',
    backgroundColor: '#edf3fb',
    flex:0.3,
    textAlign: 'center',
    marginTop: Dimensions.get('window').width*0.2,
    marginHorizontal: Dimensions.get('window').width * 0.05,
    
   
  },
  textStyle: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    justifyContent: 'center',
    marginHorizontal: Dimensions.get('window').width * 0.05,
  },
  subTextStyle: {
    fontSize: 17,
    textAlign: 'center',
    marginVertical: Dimensions.get('window').width * 0.01,
    
    marginHorizontal: Dimensions.get('window').width * 0.1,
    fontWeight: '400',
    
  },
});

export default Header;
