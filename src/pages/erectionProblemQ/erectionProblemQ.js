import React from 'react';
import {StyleSheet, View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import BoldRectangle from '/Users/main/KMClone/src/components/boldRectangle.js';
import {useState} from 'react'; 
import styles from '/Users/main/KMClone/src/pages/erectionProblemQ/styles.js';
import {Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
 
const ErectionProblemQ = ({navigation}) => {
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
        <Text style ={styles.textStyle}>3/19</Text>
      </View>
       </View>
        </>
    );
       
      };

  const renderOptions = () => {
    return (
      <>
        <View style = {styles.buttonContainer}>
          <View>
        <Text style={styles.havingProblemsStyle}>Having problems getting an erection?</Text>
      </View>
        <DarkButton navigation={navigation} select={selected === 'No'} setSelect={() => setSelected('No')}>
          <Text style = {styles.havingProblemsTextStyle}>No</Text>
        </DarkButton>
     

        <DarkButton navigation={navigation} select={selected === 'Rarely'} setSelect={() => setSelected('Rarely')}>
          <Text style = {styles.havingProblemsTextStyle}>Rarely</Text>
        </DarkButton>
        
        <DarkButton navigation={navigation}  select={selected === 'Often'} setSelect={() => setSelected('Often')}>
          <Text style = {styles.havingProblemsTextStyle}>Often</Text>
        </DarkButton>
     
        <DarkButton navigation={navigation} select={selected === 'Always'} setSelect={() => setSelected('Always')}>
          <Text style = {styles.havingProblemsTextStyle}>Always</Text>
        </DarkButton>
      </View>
     </>
        
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





  const DarkButton = ({ navigation, children, select, setSelect }) => {
    const handlePress = () => {
      setSelect(true);
      setTimeout(() => {
        navigation.navigate('sexualDesireQ');
      }, 1500); 
    };
  
    return (
      <View style={styles.darkButton}>
        <TouchableOpacity
           style={[styles.darkButton, select ? {backgroundColor: '#4d4f59',
           width: width * 0.8,
          height: height * 0.07,
          borderRadius: width * 0.02,
           borderColor: '#71727a',
           borderWidth: 1,} : null]}
          onPress={handlePress}
        >
          {children}
        </TouchableOpacity>
      </View>
    );
  };




export default ErectionProblemQ;
