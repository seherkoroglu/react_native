import React from 'react';
import {StyleSheet, View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import BoldRectangle from '/Users/main/KMClone/src/components/boldRectangle.js';
import {useState} from 'react';
import styles from '/Users/main/KMClone/src/pages/pornWatchingFrequencyQ/styles.js';
import {  Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { setSelectedOption } from '../../actions';

const { width, height } = Dimensions.get('window');

const PornWatchingFrequencyQ = ({navigation, selectedOption, setSelectedOption}) => {
  const handleOptionSelection = (option) => {
    setSelectedOption(option);
    navigation.navigate('experienceSelectionQ');
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
        <Text style={styles.doYouStyle}>How often do you watch porn?</Text>
        <DarkButton isSelected={selectedOption=== 'Min. once each day'} onPress={
          () => handleOptionSelection('Min. once each day')}>
          <Text style = {styles.doYouTextStyle}>Min. once each day</Text>
        </DarkButton >
        <DarkButton isSelected={selectedOption=== '1 to 6 times in a week'} onPress={
          () => handleOptionSelection('1 to 6 times in a week')}>
          <Text style = {styles.doYouTextStyle}>1 to 6 times in a week</Text>
        </DarkButton>
        <DarkButton isSelected={selectedOption=== 'Once or twice in a month'} onPress={
          () => handleOptionSelection('Once or twice in a month')}>
          <Text style = {styles.doYouTextStyle}>Once or twice in a month</Text>
        </DarkButton>       
        
       <DarkButton isSelected={selectedOption=== 'Never'} onPress={
          () => handleOptionSelection('Never')}>
          <Text style = {styles.doYouTextStyle}>Never</Text>
        </DarkButton>     
         </View>
    );
  };
     
        
  return (
    <>
    {renderProgressBar()}
    {renderBackContainer()}
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
  
  
  export default connect(mapStateToProps, mapDispatchToProps)(PornWatchingFrequencyQ)
  