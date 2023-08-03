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
import styles from '/Users/main/KMClone/src/pages/digestionProblemQ/styles.js';
import {Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { setSelectedOption } from '../../actions';
import Header from '../../components/header/header';
import YesNoButton from '../../components/YesNoButton';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const DigestionProblemQ = ({navigation, selectedOption, setSelectedOption}) => {
  const handleOptionSelection = (option) => {
    setSelectedOption(option);
    navigation.navigate('steroidUseQ');
    };
  const renderOptions = () => {
    return (
      <>
   <View >
   <View style = {{ backgroundColor: '#191924'}}>
      <Header
    title="Do you experience digestion problems on a regular basis?"
    />
  </View>
<View style = {styles.darkButtonContainer}>

<YesNoButton isSelected={selectedOption=== 'No'} onPress={
          () => handleOptionSelection('No')}>
  <Text style = {styles.haveYouEverTextStyle}>No</Text>
</YesNoButton>

<View style = {styles.darkButtonContainer}>

<YesNoButton isSelected={selectedOption=== 'Yes'} onPress={
          () => handleOptionSelection('Yes')}>
  <Text style = {styles.haveYouEverTextStyle}>Yes</Text>
</YesNoButton>

</View>
</View>
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


export default connect(mapStateToProps, mapDispatchToProps)(DigestionProblemQ)
