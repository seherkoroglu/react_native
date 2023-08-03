import React from 'react';
import {StyleSheet, View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import BoldRectangle from '/Users/main/KMClone/src/components/boldRectangle.js';
import RedButton from '/Users/main/KMClone/src/components/redButton.js';
import {useState} from 'react';
import styles from '/Users/main/KMClone/src/pages/depressionInfo/styles.js';
import { connect } from 'react-redux';
import { continueAction } from '../../actions';

const DepressionInfo = ({navigation}) => {
  const handleContinue = () => {
    continueAction();
    navigation.navigate('ejaculationTime')
  }
  

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
     <Image style={styles.backImage} source={require('/Users/main/KMClone/src/images/back.png')}/>
     </TouchableOpacity>
     </View>
      </>
  );
    };

    const renderContent = () => {
      return (
        <View style = {styles.contentContainer}>
        <Image style={styles.imageStyle} source={require('/Users/main/KMClone/src/images/b.png')} />
        <Text style ={styles.textsStyle}>Your only limit is your mind</Text>
        <Text style ={styles.textStyle}>People with depression have a 39% 
        higher chance of developing erectile dysfunction than those without depression.</Text>
        <TouchableOpacity onPress={handleContinue}>
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

 


  const mapStateToProps = (state) => ({
    continuePressed: state.continuePressed, 
  });
  
  const mapDispatchToProps = (dispatch) => ({
    continueAction: () => dispatch(continueAction()), 
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(DepressionInfo);
