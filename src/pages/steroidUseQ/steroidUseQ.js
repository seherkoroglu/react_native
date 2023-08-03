/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import BoldRectangle from '/Users/main/KMClone/src/components/boldRectangle.js';
import {useState} from 'react';
import styles from '/Users/main/KMClone/src/pages/steroidUseQ/styles.js';
import {Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { setSelectedOption } from '../../actions';

const { width, height } = Dimensions.get('window');

const SteroidUseQ = ({navigation, selectedOption, setSelectedOption}) => {
  const handleOptionSelection = (option) => {
    setSelectedOption(option);
    navigation.navigate('chronicDiseasesQ');
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

      const renderQuestion = () => {
        return (
       <View >
        <Text style={styles.haveYouEverStyle}>Do you regularly use steroids?</Text>
      </View>
        );
      };

      const renderOptions = () => {
        return (
      <View >
    <View style = {styles.darkButtonContainer}>
        
    <DarkButton isSelected={selectedOption=== 'No'} onPress={
          () => handleOptionSelection('No')}>
  <Text style = {styles.haveYouEverTextStyle}>No</Text>
</DarkButton>

<View style = {styles.darkButtonContainer}>

<DarkButton isSelected={selectedOption=== 'Yes'} onPress={
          () => handleOptionSelection('Yes')}>
  <Text style = {styles.haveYouEverTextStyle}>Yes</Text>
</DarkButton>

        
        </View>
      </View>
      </View>
        );
      };


  return (
    <>
    {renderProgressBar()}
    {renderBackContainer()}
    {renderQuestion()}
    {renderOptions()}
    </>
  );
  }


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
  
  
  export default connect(mapStateToProps, mapDispatchToProps)(SteroidUseQ)
  
