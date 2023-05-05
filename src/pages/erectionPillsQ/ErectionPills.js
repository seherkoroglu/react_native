import React from 'react';
import {StyleSheet, View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import BoldRectangle from '/Users/main/KMClone/src/components/boldRectangle.js';
import {useState} from 'react';
import styles from '/Users/main/KMClone/src/pages/erectionPillsQ/styles.js';
import {Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ErectionPills = ({navigation}) => {
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
        <Text style={styles.haveYouEverStyle}>Have you ever used pills for erection? </Text>
      </View>
      </>
    );
  };

      const renderOptions = () => {
        return (
          <>
      <View >
        <View style = {styles.darkButtonContainer}>
        
        <DarkButton navigation = {navigation} select={selected === 'No'} setSelect={() => setSelected('No')}>
          <Text style = {styles.haveYouEverTextStyle}>No</Text>
        </DarkButton>
       
        
        <View style = {styles.lightButtonContainer}>
        
          
        <DarkButton navigation = {navigation} select={selected === 'Yes'} setSelect={() => setSelected('Yes')}>
          <Text style = {styles.haveYouEverTextStyle}>Yes</Text>
        
        </DarkButton>
       
        </View>
      </View>
      </View>
     
     </>
        
    );
  }

  return (
    <>
    {renderProgressBar()}
    {renderBackContainer()}
    {renderQuestions()}
    {renderOptions()}
    </>
  );
};



  const DarkButton = ({ navigation, children, select, setSelect }) => {
  const handlePress = () => {
      setSelect(!select);
      setTimeout(() => {
        navigation.navigate('enlargementToysQ');
      }, 1300); 
    };
  
    return (
      <View style={styles.darkButton}>
        <TouchableOpacity
           style={[styles.darkButton, select ? {backgroundColor: '#4d4f59',
           width: 0.45 * windowWidth,
          height: 0.10* windowHeight,
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





export default ErectionPills;
