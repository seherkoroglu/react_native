import React from 'react';
import {StyleSheet, View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import BoldRectangle from '/Users/main/KMClone/src/components/boldRectangle.js';
import {useState} from 'react'; 
import styles from '/Users/main/KMClone/src/pages/erectionProblemQ/styles.js';
import {Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { setSelectedOption } from '../../actions';


const { width, height } = Dimensions.get('window');
 
const ErectionProblemQ = ({navigation, selectedOption, setSelectedOption}) => {

  const handleOptionSelection = (option) => {
    setSelectedOption(option);
    navigation.navigate('sexualDesireQ');
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
          <>
      <View style={styles.backContainer}>
    
    <TouchableOpacity onPress={() => {
         navigation.goBack();
       }}>
       <Image style={styles.backImage} source={require('/Users/main/KMClone/src/images/back.png')}/>
       </TouchableOpacity>
       <View>
        <Text style ={styles.textStyle}>3/19</Text>
      </View>
       </View>
        </>
    );
       
      };

  const renderOptions = () => {
    return (
      <>
        <View style = {styles.buttonContainer}>
          <View>
        <Text style={styles.havingProblemsStyle}>Having problems getting an erection?</Text>
      </View>
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
    {renderProgressBar()}
    {renderBackContainer()}
    {renderOptions()}
    </>
  );
};

  const DarkButton = ({ children, isSelected, onPress }) => {
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
  
  export default connect(mapStateToProps, mapDispatchToProps)(ErectionProblemQ);
  
