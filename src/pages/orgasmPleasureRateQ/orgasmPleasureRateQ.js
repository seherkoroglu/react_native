import React from 'react';
import {StyleSheet, View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import BoldRectangle from '/Users/main/KMClone/src/components/boldRectangle.js';
import {useState} from 'react';
import styles from '/Users/main/KMClone/src/pages/orgasmPleasureRateQ/styles.js';
import { Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { setSelectedOption } from '../../actions';
import Header from '../../components/header/header';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const OrgasmPleasureRateQ = ({navigation, selectedOption, setSelectedOption}) => {
  const handleOptionSelection = (option) => {
    setSelectedOption(option);
    navigation.navigate('sleepQualityQ');
    };   


  const renderOptions = () => {
    return (
      <>
      <View>
      <Header
       title="How do you rate the pleasure you get from orgasm? " />
       </View>
        <View style = {styles.buttonContainer} >
        
        <DarkButton isSelected={selectedOption=== 'No pleasure'} onPress={
          () => handleOptionSelection('No pleasure')}>
          <Text style = {styles.doYouTextStyle}>No pleasure</Text>
        </DarkButton>
       
        
        <DarkButton isSelected={selectedOption=== 'Normal'} onPress={
          () => handleOptionSelection('Normal')}>
          <Text style = {styles.doYouTextStyle}>Normal</Text>
        </DarkButton>
       
        <DarkButton isSelected={selectedOption=== 'Great pleasure'} onPress={
          () => handleOptionSelection('Great pleasure')}>
          <Text style = {styles.doYouTextStyle}>Great pleasure</Text>
        </DarkButton>
      </View>
      </>
    );
  };

  return (
    <>

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
  
  
  export default connect(mapStateToProps, mapDispatchToProps)(OrgasmPleasureRateQ)
  