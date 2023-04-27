import React from 'react';
import {StyleSheet, View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import BoldRectangle from '../components/boldRectangle';
import RedButton from '../components/redButton';
import {useState} from 'react';

const Page24 = ({navigation}) => {
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
       </View>
      <View style = {styles.contentContainer}>
        <Image style={styles.imageStyle} source={require('../images/Artboard.png')} />
        <Text style ={styles.textsStyle}>There is time to stay awake, but time to sleep as well</Text>
        <Text style ={styles.textStyle}>Getting less than 8 hours of sound sleep means poorer circulation and
         lower levels of testosterone, leading to erectile dysfunction and relationship issues.</Text>
         <TouchableOpacity onPress={() => navigation.navigate('page25')}>
           <RedButton >
                <Text style = {styles.buttonText}>CONTINUE</Text>
            </RedButton>
            </TouchableOpacity>
        </View>

       
    
     </>
        
    );
  }

 
const styles = StyleSheet.create({
  container: {
    paddingLeft: 20,
    backgroundColor: '#191924',
    paddingTop:90,
    
  
  },
  contentContainer: {
    flex:1,
    backgroundColor:  '#191924',
    paddingLeft: 5,
    paddingRight: 5,
    justifyContent: 'center',
    alignItems:'center',
    paddingBottom:260,
    paddingTop: 10,
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
    
    imageStyle: {
     backgroundColor: '#191924',
      width:150,
      height: 160,
      paddingRight:100,
     },

    textStyle: {
      color: 'white',
      fontSize: 17,
      fontWeight: '300',
      lineHeight: 27,
      paddingLeft: 20,
      paddingRight: 20,
      paddingBottom: 100,
       textAlign:'center',
      
      },
      textsStyle: {
        color: 'white',
        fontSize: 20,
        fontWeight: '600',
        lineHeight: 27,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 30,
        paddingBottom: 20,
       flexDirection:'row',
        textAlign:'center',
        

        },
        backContainer: {
          backgroundColor: '#191924',
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          paddingRight: 400,
          paddingBottom: 150,
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

export default Page24;
