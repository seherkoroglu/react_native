import React from 'react';
import {StyleSheet, View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import BoldRectangle from '/Users/main/KMClone/src/components/boldRectangle.js';
import {useState} from 'react';
import styles from '/Users/main/KMClone/src/pages/stressLevelQ/styles.js';
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

const StressLevelQ = ({navigation}) => {
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
      
      
       const renderContent = () => {
    return (
<View style = {styles.buttonContainer}>
  <View>
<Text style={styles.doYouStyle}>How do you evaluate your
stress level?</Text>
</View>
      
        <DarkButton navigation = {navigation} select={selected === 'Low'} setSelect={() => setSelected('Low')}>
          <Text style = {styles.doYouTextStyle}>Low</Text>
        </DarkButton>
        
        <DarkButton navigation = {navigation} select={selected === 'Medium'} setSelect={() => setSelected('Medium')}>
          <Text style = {styles.doYouTextStyle}>Medium</Text>
        </DarkButton>
        
        <DarkButton navigation = {navigation} select={selected === 'High'} setSelect={() => setSelected('High')}> 
          <Text style = {styles.doYouTextStyle}>High</Text>
        </DarkButton>
       
      </View>
    );
  };
   return (
    <>
    {renderProgressBar()}
    {renderBackContainer()}
    {renderContent()}
    </>
    );
  }

  const DarkButton = ({ navigation, children, select, setSelect }) => {
    const handlePress = () => {
      setSelect(!select);
      setTimeout(() => {
        navigation.navigate('pornWatchingFrequencyQ');
      }, 1300); 
    };
    return (
      <View style={styles.darkButton}>
      <TouchableOpacity
        style={[styles.darkButton, select ? { backgroundColor: '#4d4f59',  width: 0.9 * windowWidth,
        height: 0.15 * windowWidth,
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




export default StressLevelQ;