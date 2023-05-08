import React from 'react';
import {StyleSheet, View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import BoldRectangle from '/Users/main/KMClone/src/components/boldRectangle.js';
import {useState} from 'react';
import styles from '/Users/main/KMClone/src/pages/prematureEjaculationQ/styles.js';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const PrematureEjaculationQ = ({navigation}) => {
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
        <View style = {styles.doYouContainer}>
        <Text style={styles.doYouStyle}>Do you experience premature ejaculation? </Text>
        </View>
        
        <DarkButton navigation = {navigation} select={selected === 'No'} setSelect={() => setSelected('No')}>
          <Text style = {styles.doYouTextStyle} >No</Text>
        </DarkButton>

        
        <DarkButton navigation = {navigation} select={selected === 'Rarely'} setSelect={() => setSelected('Rarely')}>
          <Text style = {styles.doYouTextStyle}>Rarely</Text>
        </DarkButton>

        
        <DarkButton navigation = {navigation} select={selected === 'Often'} setSelect={() => setSelected('Often')}>
          <Text style = {styles.doYouTextStyle}>Often</Text>
        </DarkButton>

        
        <DarkButton navigation = {navigation} select={selected === 'Always'} setSelect={() => setSelected('Always')}>
          <Text style = {styles.doYouTextStyle}>Always</Text>
        </DarkButton>

      </View>
    );
  }

  return(
    <>
    {renderProgressBar()}
    {renderBackContainer()}
    {renderOptions()}
    </>
  )
}


  const DarkButton = ({ navigation, children, select, setSelect }) => {
      const handlePress = () => {
        setSelect(!select);
        setTimeout(() => {
          navigation.navigate('erectionTimeProblemQ');
        }, 1300); 
      };
    
      return (
        <View style={styles.darkButton}>
          <TouchableOpacity
              style={[styles.darkButton, select ? { backgroundColor: '#4d4f59',  width: 0.9 * width,
              height: 0.13 * width,
              borderRadius: 8,
              justifyContent: 'center',
              alignItems: 'center',
              margin: 5,
              borderRadius: 9,
              justifyContent: 'center',
              alignItems: 'center',
              borderColor: '#71727a',
              borderWidth: 1,} : null]}
            onPress={handlePress}
          >
            {children}
          </TouchableOpacity>
        </View>
      );
    };
  


export default PrematureEjaculationQ;