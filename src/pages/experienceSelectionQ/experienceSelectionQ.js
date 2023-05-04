import React from 'react';
import {StyleSheet, View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import BoldRectangle from '/Users/main/KMClone/src/components/boldRectangle.js';
import RedButton from '/Users/main/KMClone/src/components/redButton.js';
import {useState} from 'react';
import styles from '/Users/main/KMClone/src/pages/experienceSelectionQ/styles.js';


const ExperienceSelectionQ = ({navigation}) => {

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
      <View style = {styles.buttonContainer}>
        <View>
        <Text style={styles.doYouStyle}>Select the ones you experience</Text>
        </View>
      
        <KoyuButon>
         <Text style = {styles.doYouTextStyle}>I don't enjoy sex/I am more satisfied when I 
watch porn</Text>
        </KoyuButon>

      
        <KoyuButon style ={styles.koyuButon}>
          <Text style = {styles.doYouTextStyle}>I spend money on porn</Text>
        </KoyuButon>

      
        <KoyuButon>
          <Text style = {styles.doYouTextStyle}>I involve in risky behaviours to watch porn (such as at work)</Text>
        </KoyuButon>

      
        <KoyuButon>
          <Text style = {styles.doYouTextStyle}>I feel frustrated after watching but continue to do so</Text>
        </KoyuButon>

       
        <KoyuButon>
          <Text style = {styles.doYouTextStyle}>None</Text>
        </KoyuButon>
        
         <View style = {styles.redButtonContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('antiDepressantUseQ')}>
            <RedButton >
                <Text style = {styles.buttonText}>CONTINUE</Text>
            </RedButton>
          </TouchableOpacity>
        </View>
        </View>
        );
    };
        
    return (
      <>
      {renderProgressBar()}
      {renderBackContainer()}
      {renderOptions()}
      </>
    );
  }

const KoyuButon = (props ) => {
  const [select, setSelect] = useState(false);
  return (
    <View style={styles.koyuButon}>
    <TouchableOpacity
      style={[styles.koyuButon, select ? { backgroundColor: '#4d4f59', width: 350,
      height: 55,
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