import React from 'react';
import {StyleSheet, View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import BoldRectangle from '/Users/main/KMClone/src/components/boldRectangle.js';
import {useState} from 'react';
import styles from '/Users/main/KMClone/src/pages/erectionProblemTimeQ/styles.js';
import { Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { setSelectedOption } from '../../actions';

const { width, height } = Dimensions.get('window');


const ErectionTimeProblemQ = ({navigation, selectedOption, setSelectedOption}) => {
  const handleOptionSelection = (option) => {
    setSelectedOption(option);
    navigation.navigate('masturbationFrequencyQ');
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
      <>
     
      <View style = {styles.buttonContainer}>
        <View>
        <Text style={styles.doYouStyle}>When do you have erection or ejaculation problem? </Text>
        </View>
        
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
     </>
        
    );
  };

      return(
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


export default connect(mapStateToProps, mapDispatchToProps)(ErectionTimeProblemQ)
