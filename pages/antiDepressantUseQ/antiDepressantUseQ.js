

import React from 'react';
import {StyleSheet, View, Text, Image, TextInpu, TouchableOpacity} from 'react-native';
import BoldRectangle from '../components/boldRectangle';
import {useState} from 'react';
import styles from '.../pages/antiDepressantUseQ/styles';

const AntiDepressantUseQ = ({navigation}) => {
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
       <Image style={styles.backImage} source={require('../images/back.png')}/>
       </TouchableOpacity>
       <View>
        <Text style ={styles.textStyle}>4/19</Text>
      </View>
       </View>
        </>
        );
      };
   

  const renderQuestion = () => {
      return (
        <View >
        <Text style={styles.doYouUseStyle}>Do you use any anti-depressants? </Text>
      </View>
      );
  };


  const renderOptions = () => {
    <View >
    <View style = {styles.koyuButtonContainer}>
   
    <KoyuButon navigation ={navigation} select={selected === 'No'} setSelect={() => setSelected('No')}>
      <Text style = {styles.doYouUseTextStyle}>No</Text>
    </KoyuButon>
    
    <View style = {styles.koyuButtonContainer}>
   
    <KoyuButon navigation ={navigation} select={selected === 'Yes'} setSelect={() => setSelected('Yes')}>
      <Text style = {styles.doYouUseTextStyle}>Yes</Text>
    </KoyuButon>
    
    </View>
  </View>
  </View>
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


  const KoyuButon = ({ navigation, children, select, setSelect }) => {
    const handlePress = () => {
      setSelect(!select);
      setTimeout(() => {
        navigation.navigate('urinaryIncontinenceQ');
      }, 1300); 
    };
    return (
      <View style={styles.koyuButon}>
      <TouchableOpacity
        style={[styles.koyuButon, select ? { backgroundColor: '#4d4f59', width: 180,
        height: 73,
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


export default AntiDepressantUseQ;
