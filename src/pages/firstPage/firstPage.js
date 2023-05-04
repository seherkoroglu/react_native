import React, {useState} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import  {useNavigation} from '@react-navigation/native';
import Texts from '/Users/main/KMClone/src/components/texts.js';
import RedButton from '/Users/main/KMClone/src/components/redButton.js';
import styles from '/Users/main/KMClone/src/pages/firstPage/styles.js';

const FirstPage = ({navigation}) => {
  const [select, setSelect] = useState(false);
  const [selectedButton, setSelectedButton] = useState(null);


  const renderOptions = () => {
  return (
    <>  
    
      <View style={styles.container}>
      
      <Image style={styles.image}  source={require('/Users/main/KMClone/src/images/logo.png')}/>
     
      <Text style={styles.textStyles}>Don't Know Where to Start?</Text>
      <Text style={styles.textStyles}>Choose your goal</Text>
     
      <TouchableOpacity onPress={() => setSelectedButton('button1')}>
        <GreyButton selected={selectedButton === 'button1'} onSelect={() => setSelectedButton('button1')}>
          <SmallButton>
            <Image source={require('/Users/main/KMClone/src/images/thunder.png')}/>       
          </SmallButton>
          <Texts>Get harder erections</Texts>
        </GreyButton>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setSelectedButton('button2')}>
        <GreyButton selected={selectedButton === 'button2'} onSelect={() => setSelectedButton('button2')}>
          <SmallButton>
            <Image source={require('/Users/main/KMClone/src/images/wall-clock.png')}/>       
          </SmallButton>
          <Texts>Last longer during sex</Texts>
        </GreyButton>
      </TouchableOpacity>
     
      <TouchableOpacity onPress={() => setSelectedButton('button3')}>
        <GreyButton selected={selectedButton === 'button3'} onSelect={() => setSelectedButton('button3')}>
          <SmallButton>
            <Image source={require('/Users/main/KMClone/src/images/rise(2).png')}/>
          </SmallButton>
          <Texts>Get brighter orgasms</Texts>
        </GreyButton>
      </TouchableOpacity>
       </View>
      </>
       );
  };


      const renderButton = () => {
        return (
      <View style={styles.style}>
      <TouchableOpacity onPress={() => navigation.navigate('nameInputPage')}>
      <RedButton >
        <Texts>GET STARTED</Texts>
      </RedButton>
      </TouchableOpacity>
      </View>
      
     
    );
  };

  return (
    <>
    {renderOptions()}
    {renderButton()}
    </>
  );
};



  const GreyButton = (props) => {
    const { selected, onSelect } = props;
  
    const handlePress = () => {
      if (!selected) {
        onSelect();
      }
    };
  
    return (
      <View style={styles.button}> 
        <TouchableOpacity
          style={[
            styles.button,
            selected ? {
              backgroundColor: '#d1262b',
              width: 340,
              height: 70,
              borderRadius: 10,
              justifyContent: 'center',
              flexDirection: 'row',
              alignItems: 'center',
            } : null
          ]}
          onPress={handlePress}
        >
          {props.children}
        </TouchableOpacity>
      </View>
    );
  }
  


  

const SmallButton = (props) => {
  return (
<View  style={styles.smallButton}>
  {props.children}
</View>
);
};

export default FirstPage;






