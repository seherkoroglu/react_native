import React from 'react';
import {StyleSheet, View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import BoldRectangle from '/Users/main/KMClone/src/components/boldRectangle.js';
import {useState} from 'react';
import styles from '/Users/main/KMClone/src/pages/sexualDesireQ/styles.js';
import { connect } from 'react-redux';
import { setSelectedOption } from '../../actions';
import Header from '../../components/header/header';
import DarkButton from '../../components/DarkButton';

import {Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const SexualDesireQ = ({navigation, selectedOption, setSelectedOption}) => {
  const handleOptionSelection = (option) => {
    setSelectedOption(option);
    navigation.navigate('erectionPills');
    };

  const renderOptions = () => {
    return (
      <>
      <View style = {{ backgroundColor: '#191924'}}>
      <Header
    title="How is your sexual desire?"
    />
  </View>
      <View style = {styles.buttonContainer}>
        <DarkButton isSelected={selectedOption=== 'Bad'} onPress={
          () => handleOptionSelection('Bad')}>
          <Text style = {styles.havingProblemsTextStyle}>Bad</Text>
        </DarkButton>
        
        <DarkButton isSelected={selectedOption=== 'Fair'} onPress={
          () => handleOptionSelection('Fair')}>
          <Text style = {styles.havingProblemsTextStyle}>Fair</Text>
        </DarkButton>
        
        <DarkButton isSelected={selectedOption=== 'Good'} onPress={
          () => handleOptionSelection('Good')}>
          <Text style = {styles.havingProblemsTextStyle}>Good</Text>
        </DarkButton>
        
        <DarkButton isSelected={selectedOption=== 'Very Good'} onPress={
          () => handleOptionSelection('Very Good')}>
          <Text style = {styles.havingProblemsTextStyle}>Very Good</Text>
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


export default connect(mapStateToProps, mapDispatchToProps)(SexualDesireQ)