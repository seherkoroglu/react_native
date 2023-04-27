/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import BoldRectangle from '../components/boldRectangle';
import RedButton from '../components/redButton';
import {useState} from 'react';

const Page21 = ({navigation}) => {
  const [select, setSelect] = useState(false);
  const [selected, setSelected] = useState('');
    return (
      <>
      <View style= {styles.container}>
        <BoldRectangle />
      </View>
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
     
      <View style = {styles.buttonContainer}>
        <Text style={styles.doYouStyle}>Do you have any chronic diseases?</Text>
       
        <KoyuButon select={selected === 'No'} setSelect={() => setSelected('No')}>
          <Text style = {styles.doYouTextStyle}>No</Text>
        </KoyuButon>
        <KoyuButon select={selected === 'Yes'} setSelect={() => setSelected('Yes')}>
          <Text style = {styles.doYouTextStyle}>Yes</Text>
        </KoyuButon>
        <NameInput/>
        <View style = {styles.redButtonContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('page22')}>
            <RedButton >
                <Text style = {styles.buttonText}>CONTINUE</Text>
            </RedButton>
        </TouchableOpacity>
        </View>

       
      </View>
     </>
        
    );
  }

const NameInput  = (props) => {
  return (
      <View style={styles.inputContainer}>
          <TextInput
              style={styles.input}
              placeholder ="Please State" 
              placeholderTextColor="#71727a"
             
              onChangeText={props.onChangeText}
              value={props.value}
          />
      </View>
  );
};

const KoyuButon = ({ navigation, children, select, setSelect }) => {
  return (
    <View style={styles.koyuButon}>
    <TouchableOpacity
      style={[styles.koyuButon, select ? { backgroundColor: '#4d4f59', width: 350,
      height: 60,
      borderRadius: 8,
      margin: 5,
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: '#71727a',
      borderWidth: 1,} : null]}
      onPress={() => setSelect(!select)}>
      {children}
    </TouchableOpacity>
    </View>

 
    );
  }


const styles = StyleSheet.create({
  container: {
    paddingLeft: 20,
    flex: 1,
    backgroundColor: '#191924',
    paddingTop: 100,
    paddingBottom: 16,
  },

  textStyle: {
    backgroundColor: '#191924',
    color: 'white',
    fontSize: 13,
    fontWeight: 'bold',
    paddingLeft: 290,
    paddingBottom: 80,
    
  },

  doYouStyle: {
    backgroundColor: '#191924',
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 40,
   padding: 20,
    textAlign: 'center',
   },

   buttonContainer: {
    backgroundColor: '#191924',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    paddingTop: 100,
    flexDirection: 'column',
    paddingBottom: 1100,
  
  },


  koyuButon: {
    backgroundColor: '#222331',
    width: 350,
    height: 55,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },

  doYouTextStyle: {
    color: 'white',
    fontSize: 13,
    fontWeight: 'bold',
    AlignItems: 'center',
  },
  redButtonContainer: {
    flex: 1,
    backgroundColor: '#191924',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    flexDirection: 'column',
   paddingBottom: 50,
   
  },
    buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 40,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop:7,
    alignItems: 'center',
    justifyContent: 'center',
    },

    inputContainer: {
      backgroundColor: '#222331',
      width: 350,
      height: 55,
      borderRadius: 5,
      marginTop: 20,
      justifyContent: 'flex-start',
      flexDirection: 'row',
      alignItems: 'center',
      borderColor: '#71727a',
      borderWidth: 0.6,
      marginBottom: 200,


  },
  input: {
      color: 'white',
      fontSize: 15,
      fontWeight: '400',
      marginLeft: 15,
  },
  backContainer: {
    backgroundColor: '#191924',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingTop: 5,
    

    },

  backImage: {
    width: 25,
    height: 25,
    marginLeft: 20,
    marginBottom: 10,
    justifyContent: 'flex-start',
  },

  
    


  

});

export default Page21;