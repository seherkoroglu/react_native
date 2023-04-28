import React from 'react';
import {StyleSheet, View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import BoldRectangle from '../components/boldRectangle';
import {useState} from 'react';
import styles from '.../pages/erectionPillsQ/styles';

const ErectionPillsQ = ({navigation}) => {
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
        <View style = {styles.koyuButtonContainer}>
        
        <KoyuButon navigation = {navigation} select={selected === 'No'} setSelect={() => setSelected('No')}>
          <Text style = {styles.haveYouEverTextStyle}>No</Text>
        </KoyuButon>
       
        
        <View style = {styles.acikButtonContainer}>
        
          
        <KoyuButon navigation = {navigation} select={selected === 'Yes'} setSelect={() => setSelected('Yes')}>
          <Text style = {styles.haveYouEverTextStyle}>Yes</Text>
        
        </KoyuButon>
       
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



  const KoyuButon = ({ navigation, children, select, setSelect }) => {
  const handlePress = () => {
      setSelect(!select);
      setTimeout(() => {
        navigation.navigate('enlargementToysQ');
      }, 1300); 
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





export default ErectionPillsQ;
