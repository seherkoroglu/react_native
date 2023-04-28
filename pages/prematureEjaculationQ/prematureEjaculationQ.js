import React from 'react';
import {StyleSheet, View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import BoldRectangle from '../components/boldRectangle';
import {useState} from 'react';
import styles from '.../pages/prematureEjaculationQ/styles';

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
       <Image style={styles.backImage} source={require('../images/back.png')}/>
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
        
        <KoyuButon navigation = {navigation} select={selected === 'No'} setSelect={() => setSelected('No')}>
          <Text style = {styles.doYouTextStyle} >No</Text>
        </KoyuButon>

        
        <KoyuButon navigation = {navigation} select={selected === 'Rarely'} setSelect={() => setSelected('Rarely')}>
          <Text style = {styles.doYouTextStyle}>Rarely</Text>
        </KoyuButon>

        
        <KoyuButon navigation = {navigation} select={selected === 'Often'} setSelect={() => setSelected('Often')}>
          <Text style = {styles.doYouTextStyle}>Often</Text>
        </KoyuButon>

        
        <KoyuButon navigation = {navigation} select={selected === 'Always'} setSelect={() => setSelected('Always')}>
          <Text style = {styles.doYouTextStyle}>Always</Text>
        </KoyuButon>

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


  const KoyuButon = ({ navigation, children, select, setSelect }) => {
      const handlePress = () => {
        setSelect(!select);
        setTimeout(() => {
          navigation.navigate('erectionTimeProblemQ');
        }, 1300); 
      };
    
      return (
        <View style={styles.koyuButton}>
          <TouchableOpacity
              style={[styles.koyuButon, select ? { backgroundColor: '#4d4f59', width: 350,
              height: 50,
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