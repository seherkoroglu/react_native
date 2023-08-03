import React from 'react';
import {StyleSheet, View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import BoldRectangle from '/Users/main/KMClone/src/components/boldRectangle.js';
import {useState} from 'react';
import styles from '/Users/main/KMClone/src/pages/enlargementToysQ/styles.js';
import { Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { setSelectedOption } from '../../actions';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const EnlargementToysQ = ({navigation, selectedOption, setSelectedOption}) => {
  const handleOptionSelection = (option) => {
    setSelectedOption(option);
    navigation.navigate('prematureEjaculationQ');
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
        <Text style ={styles.textStyle}>4/19</Text>
      </View>
       </View>
        </>
    );
  };
     
  const renderQuestions = () => {
    return (
      <>
    <View >
    <Text style={styles.haveYouTriedStyle}>Have you tried to enlarge your penis with a Penis Vacuum Pump and similar tools?   </Text>

  </View>
  </>
    );
  };
     

  const renderOptions = () =>{
    return(
      <View >
     
      <View style = {styles.darkButtonContainer}>
      <DarkButton  isSelected={selectedOption=== 'No'} onPress={
          () => handleOptionSelection('No')}>
        <Text style = {styles.haveYouTriedTextStyle}>No</Text>
      </DarkButton>
      
      <View style = {styles.darkButtonContainer}>
      <DarkButton  isSelected={selectedOption=== 'Yes'} onPress={
          () => handleOptionSelection('yes')}>
        <Text style = {styles.haveYouTriedTextStyle}>Yes</Text>
      </DarkButton>
      </View>
      
    </View>
    </View>
    );
  };
  

  return(
    <>
    {renderProgressBar()}
    {renderBackContainer()}
    {renderQuestions()}
    {renderOptions()}
    </>
  )
   
     
   
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
  
  
  export default connect(mapStateToProps, mapDispatchToProps)(EnlargementToysQ)
