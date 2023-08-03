import React from 'react';
import {StyleSheet, View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import BoldRectangle from '/Users/main/KMClone/src/components/boldRectangle.js';
import {useState} from 'react';
import styles from '/Users/main/KMClone/src/pages/sleepQualityQ/styles.js';
import { connect } from 'react-redux';
import { setSelectedOption } from '../../actions';
import Header from '../../components/header/header';
import DarkButton from '../../components/DarkButton';

import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const SleepQualityQ = ({navigation, selectedOption, setSelectedOption}) => {
  const handleOptionSelection = (option) => {
    setSelectedOption(option);
    navigation.navigate('stressLevelQ');
    }

     
     
  const renderOptions = () => {
    return (
      <>
      <View>
      <Header
       title="How do you evaluate your
       sleep quality?" />
       </View>
 <View style = {styles.buttonContainer}>
        <DarkButton isSelected={selectedOption=== 'Bad'} onPress={
          () => handleOptionSelection('Bad')}>
          <Text style = {styles.doYouTextStyle}>Bad</Text>
        </DarkButton>

    
        <DarkButton isSelected={selectedOption=== 'Fair'} onPress={
          () => handleOptionSelection('Fair')}>
          <Text style = {styles.doYouTextStyle}>Fair</Text>
        </DarkButton>

    
        <DarkButton isSelected={selectedOption=== 'Good'} onPress={
          () => handleOptionSelection('Good')}>
          <Text style = {styles.doYouTextStyle}>Good</Text>
        </DarkButton>

    
        <DarkButton isSelected={selectedOption=== 'Very good'} onPress={
          () => handleOptionSelection('Very good')}>
          <Text style = {styles.doYouTextStyle}>Very good</Text>
        </DarkButton>
      </View>
      </>
    );
  }

  return (
    <>
      {renderOptions()}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    selectedOption: state.selectedOption,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setSelectedOption: (option) => dispatch(setSelectedOption(option)),
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(SleepQualityQ)
