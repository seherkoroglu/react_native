import React from 'react';
import {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import BoldRectangle from '/Users/main/KMClone/src/components/boldRectangle.js';
import NotificationPermissions from '/Users/main/KMClone/src/pages/notificationPermissions/notificationPermissions.js';
import styles from '/Users/main/KMClone/src/pages/selectAgeRange/styles.js';
import { connect } from 'react-redux';
import { setSelectedAge } from '../../actions';


const SelectAgeRange = ({navigation, selectedAge, setSelectedAge}) => {

  const handleAgeSelection = (age) => {
    setSelectedAge(age);
    navigation.navigate('notificationPermissions');
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
      <View style = {styles.backContainer}>
      <TouchableOpacity onPress={() => {
          navigation.goBack();
        }}>
      <Image 
      style={styles.backImage} source={require('/Users/main/KMClone/src/images/back.png')}/>
      </TouchableOpacity>
        <Text style ={styles.textStyle}>2/19</Text>
      </View>
        );
      };

  const renderOptions = () => {
    return (
      <View style = {styles.buttonContainer}>
        <Text style={styles.ageStyle}>Select age range</Text>
        <DarkButton isSelected={selectedAge === '18-30'} onPress={() => handleAgeSelection('18-30')}>
          <Text style={styles.ageTextStyle}>18-30</Text>
        </DarkButton>

        <DarkButton isSelected={selectedAge === '31-55'} onPress={() => handleAgeSelection('31-55')}>
          <Text style={styles.ageTextStyle}>31-55</Text>
        </DarkButton>

        <DarkButton isSelected={selectedAge === '55+'} onPress={() => handleAgeSelection('55+')}>
          <Text style={styles.ageTextStyle}>55+</Text>
        </DarkButton>
      </View>
        
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
  const DarkButton = ({children, isSelected, onPress }) => {
  
    return (
      <View style={styles.darkButton}>
        <TouchableOpacity
         style={[styles.darkButton, isSelected ? { backgroundColor: '#4d4f59' } : null]}
          onPress={onPress}
        >
          {children}
        </TouchableOpacity>
      </View>
    );
  };
  
  const mapStateToProps = (state) => {
    return {
      selectedAge: state.selectedAge,
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      setSelectedAge: (age) => dispatch(setSelectedAge(age)),
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(SelectAgeRange);
  