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
import Header from '../../components/header/header';
import DarkButton from '../../components/DarkButton';

const { width, height } = Dimensions.get('window');

const ChronicDiseasesQ = ({navigation}) => {
  const [select, setSelect] = useState(false);
  const [selected, setSelected] = useState('');


    const renderOptions = () => {
      return (
        <>
                 <View style = {{ backgroundColor: '#191924'}}>
      <Header
    title="Do you have any chronic diseases?"
    />
  </View>
      <View style = {styles.buttonContainer}>
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
    </>
      );
    };

    return (
      <>
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

export default ChronicDiseasesQ;