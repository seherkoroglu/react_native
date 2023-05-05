import React, {useState} from 'react';
import {StyleSheet, View, Text, Image, TextInput} from 'react-native';
import LottieView from 'lottie-react-native';
import progress from '/Users/main/KMClone/src/assets/animation/color loading-2.json';
import styles from '/Users/main/KMClone/src/pages/programCreation/styles.js';



const ProgramCreation = ({navigation}) => {
    setTimeout(() => {
      navigation.navigate('kegelPlan');
    }, 2200);

    const renderContent = () => {
  
    return (
      
      <View style= {{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#191924',
       paddingTop: 50,
        paddingLeft: 40,
        paddingRight: 40,
      }}>
        <Text style = {styles.textStyle}>Your customized program is being created</Text>
        <LottieView source={progress} 
        style={{
          width: 300,
          height: 300,
        }}
        autoPlay />
        <View style = {styles.lastView}>
        <View style = {{flexDirection: 'row'}}>
        <Image source = {require('/Users/main/KMClone/src/images/redTick.png')} style = {{width: 20, height: 20, marginRight: 5}}/>
        <Text style = {styles.lastStyle}>Analysis</Text>
        </View>
        <View style = {{flexDirection: 'row'}}>
        <Image source = {require('/Users/main/KMClone/src/images/doneIcon.png')} style = {{width: 20, height: 20, marginRight: 5}}/>
        <Text style = {styles.lastStyle}>Selecting exercises</Text>
        </View>
        <View style = {{flexDirection: 'row'}}>
        <Image source = {require('/Users/main/KMClone/src/images/doneIcon.png')} style = {{width: 20, height: 20, marginRight: 5}}/>
        <Text style = {styles.lastStyle}>Planning your workouts</Text>
        </View>
        <View style = {{flexDirection: 'row'}}>
        <Image source = {require('/Users/main/KMClone/src/images/doneIcon.png')} style = {{width: 20, height: 20, marginRight: 5}}/>
        <Text style = {styles.lastStyle}>DONE!</Text>
        </View>
        </View>
       </View>
    );
  }
  return (
    <>
    {renderContent()}
    </>
  );
};



export default ProgramCreation;