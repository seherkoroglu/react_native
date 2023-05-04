import React from 'react';
import {StyleSheet, View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import BoldRectangle from '/Users/main/KMClone/src/components/boldRectangle.js';
import RedButton from '/Users/main/KMClone/src/components/redButton.js';
import {useState} from 'react';
import styles from '/Users/main/KMClone/src/pages/sleepInfo/styles.js';

const SleepInfo = ({navigation}) => {

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
      <View style={styles.backContainer}>
      <TouchableOpacity onPress={() => {
         navigation.goBack();
       }}>
       <Image style={styles.backImage} source={require('/Users/main/KMClone/src/images/back.png')}/>
       </TouchableOpacity>
       </View>
      );
    };


    const renderContent = () => {
      return (
      <View style = {styles.contentContainer}>
        <Image style={styles.imageStyle} source={require('/Users/main/KMClone/src/images/Artboard.png')} />
        <Text style ={styles.textsStyle}>There is time to stay awake, but time to sleep as well</Text>
        <Text style ={styles.textStyle}>Getting less than 8 hours of sound sleep means poorer circulation and
         lower levels of testosterone, leading to erectile dysfunction and relationship issues.</Text>
         <TouchableOpacity onPress={() => navigation.navigate('depressionInfo')}>
           <RedButton >
                <Text style = {styles.buttonText}>CONTINUE</Text>
            </RedButton>
            </TouchableOpacity>
        </View>
    );
  };

  return(
    <>
    {renderProgressBar()}
    {renderBackContainer()}
    {renderContent()}
  </>
  );
  };

 


export default SleepInfo;
