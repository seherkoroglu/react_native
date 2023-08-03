import React from 'react';
import {StyleSheet, View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import BoldRectangle from '/Users/main/KMClone/src/components/boldRectangle.js';
import {useState} from 'react';
import styles from '/Users/main/KMClone/src/pages/sleepQualityQ/styles.js';
import { connect } from 'react-redux';
import { setSelectedOption } from '../../actions';

import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const SleepQualityQ = ({navigation, selectedOption, setSelectedOption}) => {
  const handleOptionSelection = (option) => {
    setSelectedOption(option);
    navigation.navigate('stressLevelQ');
    };

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
       <View>
        <Text style ={styles.textStyle}>4/19</Text>
      </View>
       </View>
        );
        };

     
     
  const renderOptions = () => {
    return (
 <View style = {styles.buttonContainer}>
        <View>
        <Text style={styles.doYouStyle}>How do you evaluate your
 sleep quality? </Text>
        </View>
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
    );
  }

  return (
    <>
      {renderProgressBar()}
      {renderBackContainer()}
      {renderOptions()}
    </>
  );
};



const DarkButton = ({  children, isSelected, onPress }) => {
  return (
    <View style={styles.darkButton}>
      <TouchableOpacity
         style={[styles.darkButton, isSelected ? {backgroundColor: '#4d4f59'} : null]}
        onPress={onPress}
      >
        {children}
      </TouchableOpacity>
    </View>
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
