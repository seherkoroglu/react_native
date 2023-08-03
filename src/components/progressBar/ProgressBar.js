import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import BoldRectangle from '../boldRectangle';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { connect } from 'react-redux';

export default function ProgressBar ({navigation}){

    const renderProgressBar = () => {
        return (
          <>
          <View>
            <BoldRectangle />
          </View>
          </>
          );
        };
    
          const renderBackContainer = () => {
            return (
          <View style = {{flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#191924'}}>
          <TouchableOpacity onPress={() => {
              navigation.goBack();
            }}>
          <Image 
          style={styles.backImage} source={require('/Users/main/KMClone/src/images/back.png')}/>
          </TouchableOpacity>
            <Text style ={styles.textStyle}>2/19</Text>
          </View>
            );
          };

        return (
           <View  style= {styles.container}>
             {renderProgressBar()}
            {renderBackContainer()}
           </View>
         
           
        )
}


    