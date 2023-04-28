import React from 'react';
import {StyleSheet, View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import BoldRectangle from '../components/boldRectangle';
import RedButton from '../components/redButton';
import {useState} from 'react';
import styles from '.../pages/depressionInfo/styles';

const DepressionInfo = ({navigation}) => {
  

const renderProgressBar = () => {
  return (
    <>
    <View style= {styles.container}>
      <BoldRectangle />
    </View>
    </>
    );
  };

  const renderBackContainer = () => {
    return (
      <>
    <View style={styles.backContainer}>
    <TouchableOpacity onPress={() => {
       navigation.goBack();
     }}>
     <Image style={styles.backImage} source={require('../images/back.png')}/>
     </TouchableOpacity>
     </View>
      </>
  );
    };

    const renderContent = () => {
      return (
        <View style = {styles.contentContainer}>
        <Image style={styles.imageStyle} source={require('../images/b.png')} />
        <Text style ={styles.textsStyle}>Your only limit is your mind</Text>
        <Text style ={styles.textStyle}>People with depression have a 39% 
        higher chance of developing erectile dysfunction than those without depression.</Text>
        <TouchableOpacity onPress={() => navigation.navigate('ejaculationTime')}>
            <RedButton >
                <Text style = {styles.buttonText}>CONTINUE</Text>
            </RedButton>
            </TouchableOpacity>
        </View>
      );
    };

    return (
      <>
      {renderProgressBar()}
      {renderBackContainer()}
      {renderContent()}
      </>
    );
  };

 


export default DepressionInfo;