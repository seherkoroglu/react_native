/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import BoldRectangle from '/Users/main/KMClone/src/components/boldRectangle.js';
import RedButton from '/Users/main/KMClone/src/components/redButton.js';
import {useState} from 'react';
import styles from '/Users/main/KMClone/src/pages/chronicDiseasesQ/styles.js';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const ChronicDiseasesQ = ({navigation}) => {
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
        <>
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
        </>
    );
      };

    const renderOptions = () => {
      return (
      <View style = {styles.buttonContainer}>
      <Text style={styles.doYouStyle}>Do you have any chronic diseases?</Text>
     
      <DarkButton select={selected === 'No'} setSelect={() => setSelected('No')}>
        <Text style = {styles.doYouTextStyle}>No</Text>
      </DarkButton>
      <DarkButton select={selected === 'Yes'} setSelect={() => setSelected('Yes')}>
        <Text style = {styles.doYouTextStyle}>Yes</Text>
      </DarkButton>
      <NameInput/>
      <View style = {styles.redButtonContainer}>
      <TouchableOpacity onPress={() => navigation.navigate('researchResults')}>
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


const NameInput  = (props) => {
  return (
      <View style={styles.inputContainer}>
          <TextInput
              style={styles.input}
              placeholder ="Please State" 
              placeholderTextColor="#71727a"
             
              onChangeText={props.onChangeText}
              value={props.value}
          />
      </View>
  );
};

const DarkButton = ({ navigation, children, select, setSelect }) => {
  return (
    <View style={styles.darkButton}>
    <TouchableOpacity
      style={[styles.darkButton, select ? { backgroundColor: '#4d4f59',    width: width * 0.9,
      height: height * 0.07,
      borderRadius: 8,
      margin: 5,
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: '#71727a',
      borderWidth: 1,} : null]}
      onPress={() => setSelect(!select)}>
      {children}
    </TouchableOpacity>
    </View>

 
    );
  };
export default ChronicDiseasesQ;