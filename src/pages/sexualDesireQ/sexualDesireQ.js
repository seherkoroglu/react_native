import React from 'react';
import {StyleSheet, View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import BoldRectangle from '/Users/main/KMClone/src/components/boldRectangle.js';
import {useState} from 'react';
import styles from '/Users/main/KMClone/src/pages/sexualDesireQ/styles.js';

import {Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const SexualDesireQ = ({navigation}) => {
  const [select, setSelect] = useState(false);
  const [selected, setSelected] = useState('');

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

     
      const renderQuestion = () => {
        return (
        <Text style={styles.havingProblemsStyle}>How is your sexual desire? </Text>
        );
      };

  const renderOptions = () => {
    return (
      <View style = {styles.buttonContainer}>
        <DarkButton navigation={navigation} select={selected === 'Bad'} setSelect={() => setSelected('Bad')}>
          <Text style = {styles.havingProblemsTextStyle}>Bad</Text>
        </DarkButton>
        
        <DarkButton navigation={navigation} select={selected === 'Fair'} setSelect={() => setSelected('Fair')}>
          <Text style = {styles.havingProblemsTextStyle}>Fair</Text>
        </DarkButton>
        
        <DarkButton navigation={navigation} select={selected === 'Good'} setSelect={() => setSelected('Good')}>
          <Text style = {styles.havingProblemsTextStyle}>Good</Text>
        </DarkButton>
        
        <DarkButton navigation={navigation} select={selected === 'Very Good'} setSelect={() => setSelected('Very Good')}>
          <Text style = {styles.havingProblemsTextStyle}>Very Good</Text>
        </DarkButton>
      </View>
        
    );
  }

  return (
    <>
    {renderProgressBar()}
    {renderBackContainer()}
    {renderQuestion()}
    {renderOptions()}
    </>
  );
};



  const DarkButton = ({ navigation, children, select, setSelect }) => {
  const handlePress = () => {
      setSelect(!select);
      setTimeout(() => {
        navigation.navigate('erectionPills');
      }, 1500); 
    };
  
    return (
      <View style={styles.darkButton}>
        <TouchableOpacity
           style={[styles.darkButton, select ? {backgroundColor: '#4d4f59',
           width: 0.8 * width,
           height: 0.07 * height,
           borderRadius: 8,
           borderColor: '#71727a',
           borderWidth: 1,} : null]}
          onPress={handlePress}
        >
          {children}
        </TouchableOpacity>
      </View>
    );
  };


export default SexualDesireQ;