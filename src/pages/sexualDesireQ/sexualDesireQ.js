import React from 'react';
import {StyleSheet, View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import BoldRectangle from '/Users/main/KMClone/src/components/boldRectangle.js';
import {useState} from 'react';
import styles from '/Users/main/KMClone/src/pages/sexualDesireQ/styles.js';

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
        <KoyuButon navigation={navigation} select={selected === 'Bad'} setSelect={() => setSelected('Bad')}>
          <Text style = {styles.havingProblemsTextStyle}>Bad</Text>
        </KoyuButon>
        
        <KoyuButon navigation={navigation} select={selected === 'Fair'} setSelect={() => setSelected('Fair')}>
          <Text style = {styles.havingProblemsTextStyle}>Fair</Text>
        </KoyuButon>
        
        <KoyuButon navigation={navigation} select={selected === 'Good'} setSelect={() => setSelected('Good')}>
          <Text style = {styles.havingProblemsTextStyle}>Good</Text>
        </KoyuButon>
        
        <KoyuButon navigation={navigation} select={selected === 'Very Good'} setSelect={() => setSelected('Very Good')}>
          <Text style = {styles.havingProblemsTextStyle}>Very Good</Text>
        </KoyuButon>
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



  const KoyuButon = ({ navigation, children, select, setSelect }) => {
  const handlePress = () => {
      setSelect(!select);
      setTimeout(() => {
        navigation.navigate('ErectionPills');
      }, 1500); 
    };
  
    return (
      <View style={styles.koyuButton}>
        <TouchableOpacity
           style={[styles.koyuButon, select ? {backgroundColor: '#4d4f59',
           borderRadius: 8,
           borderRadius: 9,
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