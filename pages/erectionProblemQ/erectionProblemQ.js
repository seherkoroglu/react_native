import React from 'react';
import {StyleSheet, View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import BoldRectangle from '../components/boldRectangle';
import {useState} from 'react'; 
import styles from '.../pages/erectionProblemQ/styles';
 
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
       <Image style={styles.backImage} source={require('../images/back.png')}/>
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
        <KoyuButon navigation={navigation} select={selected === 'No'} setSelect={() => setSelected('No')}>
          <Text style = {styles.havingProblemsTextStyle}>No</Text>
        </KoyuButon>
     

        <KoyuButon navigation={navigation} select={selected === 'Rarely'} setSelect={() => setSelected('Rarely')}>
          <Text style = {styles.havingProblemsTextStyle}>Rarely</Text>
        </KoyuButon>
        
        <KoyuButon navigation={navigation}  select={selected === 'Often'} setSelect={() => setSelected('Often')}>
          <Text style = {styles.havingProblemsTextStyle}>Often</Text>
        </KoyuButon>
     
        <KoyuButon navigation={navigation} select={selected === 'Always'} setSelect={() => setSelected('Always')}>
          <Text style = {styles.havingProblemsTextStyle}>Always</Text>
        </KoyuButon>
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





  const KoyuButon = ({ navigation, children, select, setSelect }) => {
    const handlePress = () => {
      setSelect(true);
      setTimeout(() => {
        navigation.navigate('sexualDesireQ');
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




export default ErectionProblemQ;
