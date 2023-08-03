import React from 'react';
import {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import BoldRectangle from '/Users/main/KMClone/src/components/boldRectangle.js';
import NotificationPermissions from '/Users/main/KMClone/src/pages/notificationPermissions/notificationPermissions.js';
import styles from '/Users/main/KMClone/src/pages/selectAgeRange/styles.js';
import { connect } from 'react-redux';
import { setSelectedAge } from '../../actions';
import Header from '../../components/header/header';
import DarkButton from '../../components/DarkButton';


const SelectAgeRange = ({navigation, selectedAge, setSelectedAge}) => {

  const handleAgeSelection = (age) => {
    setSelectedAge(age);
    navigation.navigate('notificationPermissions');
    };
  

  const renderOptions = () => {
    return (
      <>
        <View style = {{ backgroundColor: '#191924'}}>
          <Header
        title="Select age range"
        />
      </View>
      
        <View style = {styles.buttonContainer}>
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
      </>

        
    );
  }

  return (
    <>
    {renderOptions()}
    </>
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
  