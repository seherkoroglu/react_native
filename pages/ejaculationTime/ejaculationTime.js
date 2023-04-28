
import React from 'react';
import {StyleSheet, View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import BoldRectangle from '../components/boldRectangle';
import RedButton from '../components/redButton';
import {useState} from 'react';
import styles from '.../pages/ejeculationTime/styles';

const EjaculationTime = ({navigation}) => {
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
          <>
      <View style = {styles.contentContainer}>
        <Image style={styles.imageStyle} source={require('../images/yatanadam.png')} />
        <Text style ={styles.textsStyle}>Lasting longer is no longer a dream</Text>
        <Text style ={styles.textStyle}>Men who attended a three-month pelvic exercise 
        program improved the ejaculation time to almost 2.5 minutes, a more than fourfold increase.</Text>
        <TouchableOpacity onPress={() => navigation.navigate('programCreation')}>

            <RedButton >
                <Text style = {styles.buttonText}>CONTINUE</Text>
            </RedButton>
            </TouchableOpacity>
        </View>
        </>
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

  

  

export default EjaculationTime;