import React from 'react';
import {StyleSheet, View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import BoldRectangle from '../components/boldRectangle';
import RedButton from '../components/redButton';
import {useState} from 'react';
import styles from '.../pages/peRate/styles';

const PeRate = ({navigation}) => {

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
       <Image style={styles.backImage} source={require('../images/back.png')}/>
       </TouchableOpacity>
       </View>
      );
    };

    const  renderContent = () => {
      return (
      <View style = {styles.contentContainer}>
        <Image style={styles.imageStyle} source={require('../images/man1.png')} />
        <Text style ={styles.textsStyle}>Overcome PE with …..</Text>
        <Text style ={styles.textStyle}>Premature ejaculation (PE) is likely 
        the most common sexual dysfunction in men, with a worldwide prevalence of approximately 30%.</Text>
        <TouchableOpacity onPress={() => navigation.navigate('sleepInfo')}>
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

  )
};


export default PeRate;