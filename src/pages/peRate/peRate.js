import React from 'react';
import {StyleSheet, View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import BoldRectangle from '/Users/main/KMClone/src/components/boldRectangle.js';
import RedButton from '/Users/main/KMClone/src/components/redButton.js';
import {useState} from 'react';
import styles from '/Users/main/KMClone/src/pages/peRate/styles.js';
import { connect } from 'react-redux';
import { continueAction } from '../../actions';
import Header from '../../components/header/header';

const PeRate = ({navigation, continuePressed, continueAction}) => {
  const handleContinue = () => {
    continueAction();
    navigation.navigate('sleepInfo')
  }
    const  renderContent = () => {
      return (
 <>
        <Header/>
        <View style = {styles.contentContainer}>
        <Image style={styles.imageStyle} source={require('/Users/main/KMClone/src/images/man1.png')} />
        <Text style ={styles.textsStyle}>Overcome PE with …..</Text>
        <Text style ={styles.textStyle}>Premature ejaculation (PE) is likely 
        the most common sexual dysfunction in men, with a worldwide prevalence of approximately 30%.</Text>
        <TouchableOpacity onPress={() => navigation.navigate('sleepInfo')}>
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

  )
};

const mapStateToProps = (state) => ({
  continuePressed: state.continuePressed, 
});

const mapDispatchToProps = (dispatch) => ({
  continueAction: () => dispatch(continueAction()), 
});

export default connect(mapStateToProps, mapDispatchToProps)(PeRate);