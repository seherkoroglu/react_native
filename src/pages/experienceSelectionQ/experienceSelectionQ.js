import React from 'react';
import {StyleSheet, View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import BoldRectangle from '/Users/main/KMClone/src/components/boldRectangle.js';
import RedButton from '/Users/main/KMClone/src/components/redButton.js';
import {useState} from 'react';
import styles from '/Users/main/KMClone/src/pages/experienceSelectionQ/styles.js';
import { Dimensions } from 'react-native';
import Header from '../../components/header/header';


const { width, height } = Dimensions.get('window');




const ExperienceSelectionQ = ({navigation}) => {



     
      const renderOptions = () => {
        return (
          <>
          <View style = {{ backgroundColor: '#191924'}}>
          <Header
        title="Select the ones you experience"
        />
      </View>
      <View style = {styles.buttonContainer}>
      
      
        <DarkButton>
         <Text style = {styles.doYouTextStyle}>I don't enjoy sex/I am more satisfied when I 
watch porn</Text>
        </DarkButton>

      
        <DarkButton style ={styles.darkButton}>
          <Text style = {styles.doYouTextStyle}>I spend money on porn</Text>
        </DarkButton>

      
        <DarkButton>
          <Text style = {styles.doYouTextStyle}>I involve in risky behaviours to watch porn (such as at work)</Text>
        </DarkButton>

      
        <DarkButton>
          <Text style = {styles.doYouTextStyle}>I feel frustrated after watching but continue to do so</Text>
        </DarkButton>

       
        <DarkButton>
          <Text style = {styles.doYouTextStyle}>None</Text>
        </DarkButton>
        
         <View style = {styles.redButtonContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('antiDepressantUseQ')}>
            <RedButton >
                <Text style = {styles.buttonText}>CONTINUE</Text>
            </RedButton>
          </TouchableOpacity>
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
  }

const DarkButton = (props ) => {
  const [select, setSelect] = useState(false);
  return (
    <View style={styles.darkButton}>
    <TouchableOpacity
      style={[styles.darkButton, select ? { backgroundColor: '#4d4f59', width: width * 0.9,
      height: width * 0.12,
      borderRadius: 8,
      margin: 8,
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: '#71727a',
      borderWidth: 1,} : null]}
      onPress={() => setSelect(!select)}
      
      >
      {props.children}
     
    </TouchableOpacity>
    </View>

 
    );
  }


export default ExperienceSelectionQ;