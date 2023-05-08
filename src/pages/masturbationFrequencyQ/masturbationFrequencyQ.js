import React from 'react';
import {StyleSheet, View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import BoldRectangle from '/Users/main/KMClone/src/components/boldRectangle.js';
import {useState} from 'react';
import styles from '/Users/main/KMClone/src/pages/masturbationFrequencyQ/styles.js';

import {  Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const MasturbationFrequencyQ = ({navigation}) => {
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
       <Text style ={styles.textStyle}>4/19</Text>
       </View>
        );
      };

     
        
      const renderQuestion = () => {
          return (
      <View style = {styles.textContainer}>
        <Text style={styles.doYouStyle}>How often do you masturbate? </Text>
        </View>
          );
      };

        const renderOptions = () =>{
        return(
          <View style = {styles.buttonContainer}>
          <DarkButton navigation = {navigation}  select={selected === 'Min. once each day'} setSelect={() => setSelected('Min. once each day')}>
            <Text style = {styles.doYouTextStyle}>Min. once each day</Text>
          </DarkButton>
         
         
          <DarkButton navigation = {navigation}  select={selected === '1 to 6 times in a week'} setSelect={() => setSelected('1 to 6 times in a week')}>
            <Text style = {styles.doYouTextStyle}>1 to 6 times in a week</Text>
          </DarkButton>
         
         
          <DarkButton navigation = {navigation}  select={selected === 'Once or twice in a month'} setSelect={() => setSelected('Once or twice in a month')}>
            <Text style = {styles.doYouTextStyle}>Once or twice in a month</Text>
          </DarkButton>
         
         
          <DarkButton navigation = {navigation}  select={selected === 'Never'} setSelect={() => setSelected('Never')}>
            <Text style = {styles.doYouTextStyle}>Never</Text>
          </DarkButton>
         
        </View>

        )
      };

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
        navigation.navigate('orgasmPleasureRateQ');
      }, 1300); 
    };

 
  return (
    <View style={styles.darkButton}>
    <TouchableOpacity
      style={[styles.darkButton, select ? { backgroundColor: '#4d4f59', width: width * 0.9,
      height: width * 0.12,
      borderRadius: 8,
      justifyContent: 'center',
      alignItems: 'center',
      margin: 8,
      borderRadius: 9,
      borderColor: '#71727a',
      borderWidth: 1,} : null]}
      onPress={handlePress}

      >
      {children}
    </TouchableOpacity>
    </View>

 
    );
  }



export default MasturbationFrequencyQ;