import React from 'react';
import {StyleSheet, View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import BoldRectangle from '/Users/main/KMClone/src/components/boldRectangle.js';
import {useState} from 'react';
import styles from '/Users/main/KMClone/src/pages/stressLevelQ/styles.js';
import { Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { setSelectedOption } from '../../actions';
import Header from '../../components/header/header';

const windowWidth = Dimensions.get('window').width;

const StressLevelQ = ({navigation, selectedOption, setSelectedOption}) => {
  const handleOptionSelection = (option) => {
    setSelectedOption(option);
    navigation.navigate('pornWatchingFrequencyQ');
    };
      
       const renderContent = () => {
    return (
      <>
      <View><Header
      title="How do you evulate your stress level?"/></View>
      
      
<View style = {styles.buttonContainer}>
      
        <DarkButton isSelected={selectedOption=== 'Low'} onPress={
          () => handleOptionSelection('Low')}>
          <Text style = {styles.doYouTextStyle}>Low</Text>
        </DarkButton>
        
        <DarkButton isSelected={selectedOption=== 'Medium'} onPress={
          () => handleOptionSelection('Medium')}>
          <Text style = {styles.doYouTextStyle}>Medium</Text>
        </DarkButton>
        
        <DarkButton isSelected={selectedOption=== 'High'} onPress={
          () => handleOptionSelection('High')}>
          <Text style = {styles.doYouTextStyle}>High</Text>
        </DarkButton>
       
      </View>
      </>
    );
  };
   return (
    <>
    {renderContent()}
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
  
  
  export default connect(mapStateToProps, mapDispatchToProps)(StressLevelQ)
  