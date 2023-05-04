import React from 'react';
import {StyleSheet, View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import BoldRectangle from '/Users/main/KMClone/src/components/boldRectangle.js';
import {useState} from 'react';
import styles from '/Users/main/KMClone/src/pages/sleepQualityQ/styles.js';

const SleepQualityQ = ({navigation}) => {
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

     
     
  const renderOptions = () => {
    return (
 <View style = {styles.buttonContainer}>
        <View>
        <Text style={styles.doYouStyle}>How do you evaluate your
 sleep quality? </Text>
        </View>
        <KoyuButon navigation = {navigation} select={selected === 'Bad'} setSelect={() => setSelected('Bad')}>
          <Text style = {styles.doYouTextStyle}>Bad</Text>
        </KoyuButon>

    
        <KoyuButon navigation = {navigation} select={selected === 'Fair'} setSelect={() => setSelected('Fair')}>
          <Text style = {styles.doYouTextStyle}>Fair</Text>
        </KoyuButon>

    
        <KoyuButon navigation = {navigation} select={selected === 'Good'} setSelect={() => setSelected('Good')}>
          <Text style = {styles.doYouTextStyle}>Good</Text>
        </KoyuButon>

    
        <KoyuButon navigation = {navigation} select={selected === 'Very good'} setSelect={() => setSelected('Very good')}>
          <Text style = {styles.doYouTextStyle}>Very good</Text>
        </KoyuButon>
      </View>
    );
  }

  return (
    <>
      {renderProgressBar()}
      {renderBackContainer()}
      {renderOptions()}
    </>
  );
};



  const KoyuButon = ({ navigation, children, select, setSelect }) => {
    const handlePress = () => {
      setSelect(!select);
      setTimeout(() => {
        navigation.navigate('stressLevelQ');
      }, 1300); 
    };
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
        onPress={handlePress}>
        {children}
      </TouchableOpacity>
      </View>
  
   
      );
    }




export default SleepQualityQ;