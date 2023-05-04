import React from 'react';
import {StyleSheet, View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import BoldRectangle from '/Users/main/KMClone/src/components/boldRectangle.js';
import {useState} from 'react';
import styles from '/Users/main/KMClone/src/pages/orgasmPleasureRateQ/styles.js';

const OrgasmPleasureRateQ = ({navigation}) => {
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
        <Text style={styles.doYouStyle}>How do you rate the pleasure you get from orgasm? </Text>
      );
    };

  const renderOptions = () => {
    return (
        <View style = {styles.buttonContainer} >
        
        <KoyuButon navigation = {navigation} select={selected === 'No pleasure'} setSelect={() => setSelected('No pleasure')}> 
          <Text style = {styles.doYouTextStyle}>No pleasure</Text>
        </KoyuButon>
       
        
        <KoyuButon navigation = {navigation} select={selected === 'Normal'} setSelect={() => setSelected('Normal')}>
          <Text style = {styles.doYouTextStyle}>Normal</Text>
        </KoyuButon>
       
        <KoyuButon navigation = {navigation} select={selected === 'Great pleasure'} setSelect={() => setSelected('Great pleasure')}>
          <Text style = {styles.doYouTextStyle}>Great pleasure</Text>
        </KoyuButon>
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
  };

  const KoyuButon = ({ navigation, children, select, setSelect }) => {
    const handlePress = () => {
      setSelect(!select);
      setTimeout(() => {
        navigation.navigate('sleepQualityQ');
      }, 1300); 
    };
  return (
    <View style={styles.koyuButon}>
    <TouchableOpacity
      style={[styles.koyuButon, select ? { backgroundColor: '#4d4f59', width: 350,
      height: 55,
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




export default OrgasmPleasureRateQ;