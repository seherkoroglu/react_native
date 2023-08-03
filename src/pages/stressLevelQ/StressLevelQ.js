import React from 'react';
import {StyleSheet, View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import BoldRectangle from '/Users/main/KMClone/src/components/boldRectangle.js';
import {useState} from 'react';
import styles from '/Users/main/KMClone/src/pages/stressLevelQ/styles.js';
import { Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { setSelectedOption } from '../../actions';

const windowWidth = Dimensions.get('window').width;

const StressLevelQ = ({navigation, selectedOption, setSelectedOption}) => {
  const handleOptionSelection = (option) => {
    setSelectedOption(option);
    navigation.navigate('pornWatchingFrequencyQ');
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
      
      
       const renderContent = () => {
    return (
<View style = {styles.buttonContainer}>
  <View>
<Text style={styles.doYouStyle}>How do you evaluate your
stress level?</Text>
</View>
      
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
    );
  };
   return (
    <>
    {renderProgressBar()}
    {renderBackContainer()}
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
  