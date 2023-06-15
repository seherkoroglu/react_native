import React from 'react';
import {View, Text, Image} from 'react-native';
import {Dimensions} from 'react-native';
import styles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Goals = (props) => {
    const { selected, setSelect } = props;
  
    const handlePress = () => {
      if (!selected) {
        onSelect();
      }
    };
  
    return (
      <View  style = {styles.container}> 
        <TouchableOpacity
        
          style={[
            styles.container,
            selected ? {
              backgroundColor: '#8ab1ff',
              width: Dimensions.get('window').width * 0.40,
              height: Dimensions.get('window').width * 0.35,
              marginHorizontal: Dimensions.get('window').width * 0.05,
              marginVertical: Dimensions.get('window').width * 0.02,
              paddingHorizontal: Dimensions.get('window').width * 0.04,
              borderRadius: 20,
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: 15,
              lineHeight: 5,
              textAlign: 'center',
              
            } : null
          ]}
          onPress={handlePress}
        >
            {props.children}
        </TouchableOpacity>
      </View>
    );
  }



export default Goals;