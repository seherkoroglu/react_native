import React from 'react';
import {StyleSheet, View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import BoldRectangle from '/Users/main/KMClone/src/components/boldRectangle.js';
import {useState} from 'react';
import styles from '/Users/main/KMClone/src/pages/enlargementToysQ/styles.js';
import { Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { setSelectedOption } from '../../actions';
import Header from '../../components/header/header';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const EnlargementToysQ = ({navigation, selectedOption, setSelectedOption}) => {
  const handleOptionSelection = (option) => {
    setSelectedOption(option);
    navigation.navigate('prematureEjaculationQ');
    };
     

  const renderOptions = () =>{
    return(
      <View style= {{ backgroundColor: '#191924', flex:1}}>

    <View style = {{ backgroundColor: '#191924'}}>
    <Header
  title="Have you ever used pills for erection"
  />
</View>
     
      <View style = {styles.darkButtonContainer}>
      <DarkButton  isSelected={selectedOption=== 'No'} onPress={
          () => handleOptionSelection('No')}>
        <Text style = {styles.haveYouTriedTextStyle}>No</Text>
      </DarkButton>
      <DarkButton  isSelected={selectedOption=== 'Yes'} onPress={
          () => handleOptionSelection('yes')}>
        <Text style = {styles.haveYouTriedTextStyle}>Yes</Text>
      </DarkButton>
      </View>
      
    </View>

    );
  };
  

  return(
    <>
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
