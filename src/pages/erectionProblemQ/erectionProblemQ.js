import React from 'react';
import {StyleSheet, View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import BoldRectangle from '/Users/main/KMClone/src/components/boldRectangle.js';
import {useState} from 'react'; 
import styles from '/Users/main/KMClone/src/pages/erectionProblemQ/styles.js';
import {Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { setSelectedOption } from '../../actions';
import Header from '../../components/header/header';
import DarkButton from '../../components/DarkButton';


const { width, height } = Dimensions.get('window');
 
const ErectionProblemQ = ({navigation, selectedOption, setSelectedOption}) => {

  const handleOptionSelection = (option) => {
    setSelectedOption(option);
    navigation.navigate('sexualDesireQ');
    };




  const renderOptions = () => {
    return (
      <>
      <View style = {{ backgroundColor: '#191924'}}>
          <Header
        title="Having problems getting an erection?"
        />
      </View>
        <View style = {styles.buttonContainer}>
     
        <DarkButton isSelected={selectedOption=== 'No'} onPress={
          () => handleOptionSelection('No')
        }>
          <Text style = {styles.havingProblemsTextStyle}>No</Text>
        </DarkButton>
     

        <DarkButton isSelected={selectedOption=== 'Rarely'} onPress={
          () => handleOptionSelection('Rarely')
        }>
          <Text style = {styles.havingProblemsTextStyle}>Rarely</Text>
        </DarkButton>
        
        <DarkButton isSelected={selectedOption=== 'Often'} onPress={
          () => handleOptionSelection('Often')
        }>
          <Text style = {styles.havingProblemsTextStyle}>Often</Text>
        </DarkButton>
     
        <DarkButton isSelected={selectedOption=== 'Always'} onPress={
          () => handleOptionSelection('Always')
        }>
          <Text style = {styles.havingProblemsTextStyle}>Always</Text>
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
  
  export default connect(mapStateToProps, mapDispatchToProps)(ErectionProblemQ);
  
