import React from 'react';
import {StyleSheet, View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import BoldRectangle from '/Users/main/KMClone/src/components/boldRectangle.js';
import {useState} from 'react';
import styles from '/Users/main/KMClone/src/pages/erectionProblemTimeQ/styles.js';


const ErectionTimeProblemQ = ({navigation}) => {
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
      <>
     
      <View style = {styles.buttonContainer}>
        <View>
        <Text style={styles.doYouStyle}>When do you have erection or ejaculation problem? </Text>
        </View>
        
        <KoyuButon navigation={navigation} select={selected === 'Only with a partner'} setSelect={() => setSelected('Only with a partner')}>
          <Text style = {styles.doYouTextStyle}>Only with a partner</Text>
        </KoyuButon>
        
        <KoyuButon navigation={navigation} select={selected === 'With a partner & solo'} setSelect={() => setSelected('With a partner & solo')}>
          <Text style = {styles.doYouTextStyle}>With a partner & solo</Text>
        </KoyuButon>
        
        <KoyuButon navigation={navigation} select={selected === 'Only when solo'} setSelect={() => setSelected('Only when solo')}>
          <Text style = {styles.doYouTextStyle}>Only when solo</Text>
        </KoyuButon>
      </View>
     </>
        
    );
  };

      return(
        <>
        {renderProgressBar()}
        {renderBackContainer()}
        {renderOptions()}
        </>
      );
}
 
    



  

  const KoyuButon = ({ navigation, children, select, setSelect }) => {
      const handlePress = () => {
        setSelect(!select);
        setTimeout(() => {
          navigation.navigate('masturbationFrequencyQ');
        }, 1300); 
      };
    
      return (
        <View style={styles.koyuButton}>
          <TouchableOpacity
              style={[styles.koyuButon, select ? { backgroundColor: '#4d4f59', width: 350,
              height: 55,
              borderRadius: 8,
              justifyContent: 'center',
              alignItems: 'center',
              margin: 10,
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


export default ErectionTimeProblemQ;