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
import {useState} from 'react';
import styles from '/Users/main/KMClone/src/pages/urinaryIncontinenceQ/styles.js';
import {Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const UrinaryIncontinenceQ = ({navigation}) => {
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
<View >
<Text style={styles.haveYouEverStyle}>Do you have urinary incontinence? </Text>
</View>
    );
  };

  const renderOptions = () => {
    return (
<View >
<View style = {styles.darkButtonContainer}>

<DarkButton navigation = {navigation} select={selected === 'No'} setSelect={() => setSelected('No')}>
  <Text style = {styles.haveYouEverTextStyle}>No</Text>
</DarkButton>

<View style = {styles.darkButtonContainer}>

<DarkButton navigation = {navigation} select={selected === 'Yes'} setSelect={() => setSelected('Yes')}>
  <Text style = {styles.haveYouEverTextStyle}>Yes</Text>
</DarkButton>

</View>
</View>
</View>
    );
  };
     
  return (
    <>
      {renderProgressBar()} 
      {renderBackContainer()}
      {renderQuestion()}
      {renderOptions()}
      </>
  );
  }


  const DarkButton = ({ navigation, children, select, setSelect }) => {
    const handlePress = () => {
      setSelect(!select);
      setTimeout(() => {
        navigation.navigate('digestionProblemQ');
      }, 1300); 
    };
    return (
      <View style={styles.darkButton}>
      <TouchableOpacity
        style={[styles.darkButton, select ? { backgroundColor: '#4d4f59', width: screenWidth * 0.46,
        height: screenHeight * 0.09,
        borderRadius: 8,
        margin: 8,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#71727a',
        borderWidth: 1,} : null]}
        onPress={handlePress}>
        {children}
      </TouchableOpacity>
      </View>
  
   
      );
    }




export default UrinaryIncontinenceQ;
