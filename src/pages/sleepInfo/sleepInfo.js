import React from 'react';
import {StyleSheet, View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import BoldRectangle from '/Users/main/KMClone/src/components/boldRectangle.js';
import RedButton from '/Users/main/KMClone/src/components/redButton.js';
import {useState} from 'react';
import styles from '/Users/main/KMClone/src/pages/sleepInfo/styles.js';
import { connect } from 'react-redux';
import { continueAction } from '../../actions';
import Header from '../../components/header/header';

const SleepInfo = ({navigation, continuePressed, continueAction}) => {
  const handleContinue = () => {
    continueAction();
    navigation.navigate('depressionInfo')
  }

    const renderContent = () => {
      return (
     <>
      <Header/>
      <View style = {styles.contentContainer}>
        <Image style={styles.imageStyle} source={require('/Users/main/KMClone/src/images/Artboard.png')} />
        <Text style ={styles.textsStyle}>There is time to stay awake, but time to sleep as well</Text>
        <Text style ={styles.textStyle}>Getting less than 8 hours of sound sleep means poorer circulation and
         lower levels of testosterone, leading to erectile dysfunction and relationship issues.</Text>
         <TouchableOpacity onPress={handleContinue}>
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
    {renderContent()}
  </>
  );
  };

  const mapStateToProps = (state) => ({
    continuePressed: state.continuePressed, 
  });
  
  const mapDispatchToProps = (dispatch) => ({
    continueAction: () => dispatch(continueAction()), 
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(SleepInfo);



