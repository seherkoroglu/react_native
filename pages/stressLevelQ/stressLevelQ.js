import React from 'react';
import {StyleSheet, View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import BoldRectangle from '../components/boldRectangle';
import {useState} from 'react';
import styles from '.../pages/stressLevelQ/styles';

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
       <Image style={styles.backImage} source={require('../images/back.png')}/>
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
      
        <KoyuButon navigation = {navigation} select={selected === 'Low'} setSelect={() => setSelected('Low')}>
          <Text style = {styles.doYouTextStyle}>Low</Text>
        </KoyuButon>
        
        <KoyuButon navigation = {navigation} select={selected === 'Medium'} setSelect={() => setSelected('Medium')}>
          <Text style = {styles.doYouTextStyle}>Medium</Text>
        </KoyuButon>
        
        <KoyuButon navigation = {navigation} select={selected === 'High'} setSelect={() => setSelected('High')}> 
          <Text style = {styles.doYouTextStyle}>High</Text>
        </KoyuButon>
       
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

  const KoyuButon = ({ navigation, children, select, setSelect }) => {
    const handlePress = () => {
      setSelect(!select);
      setTimeout(() => {
        navigation.navigate('pornWatchingFrequencyQ');
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




export default StressLevelQ;