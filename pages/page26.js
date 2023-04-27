
import React from 'react';
import {StyleSheet, View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import BoldRectangle from '../components/boldRectangle';
import RedButton from '../components/redButton';
import {useState} from 'react';

const Page26 = ({navigation}) => {
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
        <Image style={styles.imageStyle} source={require('../images/yatanadam.png')} />
        <Text style ={styles.textsStyle}>Lasting longer is no longer a dream</Text>
        <Text style ={styles.textStyle}>Men who attended a three-month pelvic exercise 
        program improved the ejaculation time to almost 2.5 minutes, a more than fourfold increase.</Text>
        <TouchableOpacity onPress={() => navigation.navigate('page27')}>

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
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: 'center',
    alignItems:'center',
    paddingBottom:150,
    
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
      width:210,
      height: 100,
      paddingRight:100,
     },

    textStyle: {
      color: 'white',
      fontSize: 17,
      fontWeight: '300',
      lineHeight: 27,
      paddingLeft: 20,
      paddingRight: 20,
      paddingBottom: 140,
       textAlign:'center',
      
      },
      textsStyle: {
        color: 'white',
        fontSize: 20,
        fontWeight: '600',
        lineHeight: 27,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 40,
        paddingBottom: 30,
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
          paddingTop: 6,
      
          },
      
        backImage: {
          width: 25,
          height: 25,
          marginLeft: 20,
          marginBottom: 10,
          justifyContent: 'flex-start',
        },



});

export default Page26;