import React from 'react';
import {StyleSheet, View, Text, Image, TextInpu, TouchableOpacity} from 'react-native';
import BoldRectangle from '/Users/main/KMClone/src/components/boldRectangle.js';
import {useState} from 'react';
import styles from '/Users/main/KMClone/src/pages/antiDepressantUseQ/styles.js';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const AntiDepressantUseQ = ({navigation}) => {
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
   

  const renderQuestion = () => {
      return (
        <>
        <View >
        <Text style={styles.doYouUseStyle}>Do you use any anti-depressants? </Text>
      </View>
      </>
      );
  };


  const renderOptions = () => {
    return (
    <View >
    <View style = {styles.darkButtonContainer}>
   
    <DarkButton navigation ={navigation} select={selected === 'No'} setSelect={() => setSelected('No')}>
      <Text style = {styles.doYouUseTextStyle}>No</Text>
    </DarkButton>
    
    <View style = {styles.darkButtonContainer}>
   
    <DarkButton navigation ={navigation} select={selected === 'Yes'} setSelect={() => setSelected('Yes')}>
      <Text style = {styles.doYouUseTextStyle}>Yes</Text>
    </DarkButton>
    
    </View>
  </View>
  </View>

    );
  };
    

  return (
    <>
    {renderProgressBar()}
    {renderBackContainer()}
    {renderQuestion()}
    {renderOptions()}
    </>
  );
  };


  const DarkButton = ({ navigation, children, select, setSelect }) => {
    const handlePress = () => {
      setSelect(!select);
      setTimeout(() => {
        navigation.navigate('urinaryIncontinenceQ');
      }, 1300); 
    };
    return (
      <View style={styles.darkButton}>
      <TouchableOpacity
        style={[styles.darkButton, select ? { backgroundColor: '#4d4f59',   width: wp('45%'),
        height: hp('9%'),
        borderRadius: wp('2%'),
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


export default AntiDepressantUseQ;
