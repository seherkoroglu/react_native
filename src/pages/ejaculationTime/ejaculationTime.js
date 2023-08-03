
import React from 'react';
import {StyleSheet, View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import BoldRectangle from '/Users/main/KMClone/src/components/boldRectangle.js';
import RedButton from '/Users/main/KMClone/src/components/redButton.js';
import {useState} from 'react';
import styles from '/Users/main/KMClone/src/pages/ejaculationTime/styles.js';
import {connect} from 'react-redux'
import { continueAction } from '../../actions';

import Header from '../../components/header/header';

const EjaculationTime = ({navigation, continuePressed, continueAction}) => {

  const handleContinue = () => {
    continueAction();
    navigation.navigate('programCreation');
  }


      const renderContent = () => {
        return (
          <>
          <Header/>
      <View style = {styles.contentContainer}>
        <Image style={styles.imageStyle} source={require('/Users/main/KMClone/src/images/yatanadam.png')} />
        <Text style ={styles.textsStyle}>Lasting longer is no longer a dream</Text>
        <Text style ={styles.textStyle}>Men who attended a three-month pelvic exercise 
        program improved the ejaculation time to almost 2.5 minutes, a more than fourfold increase.</Text>
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

  
export default connect(mapStateToProps, mapDispatchToProps)(EjaculationTime);