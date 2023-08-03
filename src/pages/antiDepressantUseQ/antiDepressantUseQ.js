import React from 'react';
import {StyleSheet, View, Text, Image, TextInpu, TouchableOpacity} from 'react-native';
import BoldRectangle from '/Users/main/KMClone/src/components/boldRectangle.js';
import {useState} from 'react';
import styles from '/Users/main/KMClone/src/pages/antiDepressantUseQ/styles.js';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { connect } from 'react-redux';
import { setSelectedOption } from '../../actions';
import Header from '../../components/header/header';



const AntiDepressantUseQ = ({navigation, selectedOption, setSelectedOption}) => {
  const handleOptionSelection = (option) => {
    setSelectedOption(option);
    navigation.navigate('urinaryIncontinenceQ');
    };

  const renderOptions = () => {
    return (
      <>
      <View style = {{ backgroundColor: '#191924'}}>
      <Header
    title="Do you use any anti-depressants? "
    />
  </View>
    <View >
    <View style = {styles.darkButtonContainer}>
   
    <DarkButton isSelected={selectedOption=== 'No'} onPress={
          () => handleOptionSelection('No')}>
      <Text style = {styles.doYouUseTextStyle}>No</Text>
    </DarkButton>
    
    <View style = {styles.darkButtonContainer}>
   
    <DarkButton isSelected={selectedOption=== 'Yes'} onPress={
          () => handleOptionSelection('Yes')}>
      <Text style = {styles.doYouUseTextStyle}>Yes</Text>
    </DarkButton>
    
    </View>
  </View>
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
  
  
  export default connect(mapStateToProps, mapDispatchToProps)(AntiDepressantUseQ)
  