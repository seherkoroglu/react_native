import React from 'react';
import {StyleSheet, View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import BoldRectangle from '/Users/main/KMClone/src/components/boldRectangle.js';
import {useState} from 'react';
import styles from '/Users/main/KMClone/src/pages/enlargementToysQ/styles.js';
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const EnlargementToysQ = ({navigation}) => {
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
     
  const renderQuestions = () => {
    return (
      <>
    <View >
    <Text style={styles.haveYouTriedStyle}>Have you tried to enlarge your penis with a Penis Vacuum Pump and similar tools?   </Text>

  </View>
  </>
    );
  };
     

  const renderOptions = () =>{
    return(
      <View >
     
      <View style = {styles.koyuButtonContainer}>
      <KoyuButon navigation= {navigation} select={selected === 'No'} setSelect={() => setSelected('No')}>
        <Text style = {styles.haveYouTriedTextStyle}>No</Text>
      </KoyuButon>
      
      <View style = {styles.koyuButtonContainer}>
      <KoyuButon  navigation= {navigation} select={selected === 'Yes'} setSelect={() => setSelected('Yes')}>
        <Text style = {styles.haveYouTriedTextStyle}>Yes</Text>
      </KoyuButon>
      </View>
      
    </View>
    </View>
    );
  };
  

  return(
    <>
    {renderProgressBar()}
    {renderBackContainer()}
    {renderQuestions()}
    {renderOptions()}
    </>
  )
   
     
   
  }

  const KoyuButon = ({ navigation, children, select, setSelect }) => {
    const handlePress = () => {
      setSelect(!select);
      setTimeout(() => {
        navigation.navigate('prematureEjaculationQ');
      }, 1300); 
    };
  
    return (
      <View style={styles.koyuButton}>
        <TouchableOpacity
           style={[styles.koyuButon, select ? { backgroundColor: '#4d4f59',
           alignItems: 'center',
           justifyContent: 'center',
           alignContent: 'center',
           width: 0.45 * windowWidth,
           height: 0.095 * windowHeight,
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


export default EnlargementToysQ;
