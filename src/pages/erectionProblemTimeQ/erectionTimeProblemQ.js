import React from 'react';
import {StyleSheet, View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import BoldRectangle from '/Users/main/KMClone/src/components/boldRectangle.js';
import {useState} from 'react';
import styles from '/Users/main/KMClone/src/pages/erectionProblemTimeQ/styles.js';
import { Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { setSelectedOption } from '../../actions';
import Header from '../../components/header/header';
import DarkButton from '../../components/DarkButton';

const { width, height } = Dimensions.get('window');


const ErectionTimeProblemQ = ({navigation, selectedOption, setSelectedOption}) => {
  const handleOptionSelection = (option) => {
    setSelectedOption(option);
    navigation.navigate('masturbationFrequencyQ');
    };

  const renderOptions = () => {
    return (
    
          <View style = {{ backgroundColor: '#191924', flex:1}}>
            <View>
            <Header
            title="When do you have erection or ejaculation problem? " />
            </View>
 

     
      <View style = {styles.buttonContainer}>
        <DarkButton isSelected={selectedOption=== 'Only with a partner'} onPress={
          () => handleOptionSelection('Only with a partner')}>
          <Text style = {styles.doYouTextStyle}>Only with a partner</Text>
        </DarkButton>
        
        <DarkButton isSelected={selectedOption=== 'With a partner & solo'} onPress={
          () => handleOptionSelection('With a partner & solo')}>
          <Text style = {styles.doYouTextStyle}>With a partner & solo</Text>
        </DarkButton>
        
        <DarkButton isSelected={selectedOption=== 'Only when solo'} onPress={
          () => handleOptionSelection('Only when solo')}>
          <Text style = {styles.doYouTextStyle}>Only when solo</Text>
        </DarkButton>
      </View>
      </View>
        
    );
  };

      return(
        <>
        {renderOptions()}
        </>
      );
}

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


export default connect(mapStateToProps, mapDispatchToProps)(ErectionTimeProblemQ)
