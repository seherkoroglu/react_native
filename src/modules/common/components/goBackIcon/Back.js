import React  from 'react';
import {View, Text, Image, TouchableOpacity, Dimensions} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';

const Back = ({navigation}) => {
    return (
        <View style = {styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image style = {styles.back}
                source = {require('../../../../assets/images/back.png')}
                />
            </TouchableOpacity>
        </View>
    );
}

export default Back;