import React from 'react';
import {StyleSheet, View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import BoldRectangle from '../components/boldRectangle';
import RedButton from '../components/redButton';
import {useState} from 'react';


const Page16 = ({navigation}) => {
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
        <View>
        <Text style={styles.doYouStyle}>Select the ones you experience</Text>
        </View>
      
        <KoyuButon>
         <Text style = {styles.doYouTextStyle}>I don't enjoy sex/I am more satisfied when I 
watch porn</Text>
        </KoyuButon>

      
        <KoyuButon style ={styles.koyuButon}>
          <Text style = {styles.doYouTextStyle}>I spend money on porn</Text>
        </KoyuButon>

      
        <KoyuButon>
          <Text style = {styles.doYouTextStyle}>I involve in risky behaviours to watch porn (such as at work)</Text>
        </KoyuButon>

      
        <KoyuButon>
          <Text style = {styles.doYouTextStyle}>I feel frustrated after watching but continue to do so</Text>
        </KoyuButon>

       
        <KoyuButon>
          <Text style = {styles.doYouTextStyle}>None</Text>
        </KoyuButon>
        
         <View style = {styles.redButtonContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('page17')}>
            <RedButton >
                <Text style = {styles.buttonText}>CONTINUE</Text>
            </RedButton>
          </TouchableOpacity>
        </View>
        </View>

     </>
        
    );
  }

const KoyuButon = (props ) => {
  const [select, setSelect] = useState(false);
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
      onPress={() => setSelect(!select)}
      
      >
      {props.children}
     
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
    paddingBottom: 10,
   
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
    fontSize: 21,
    fontWeight: 'bold',
    lineHeight: 40,
    paddingLeft: 40,
    paddingRight: 40,
    paddingBottom: 70,
    paddingTop: 50,
    textAlign: 'center',
   },

   buttonContainer: {
    backgroundColor: '#191924',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    paddingTop: 100,
    flexDirection: 'column',
    paddingBottom: 1300,
    
  
  },


  koyuButon: {
    backgroundColor: '#222331',
    width: 350,
    height: 55,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
    paddingLeft : 20,
    paddingRight: 20,
  },

  doYouTextStyle: {
    color: 'white',
    fontSize: 13,
    fontWeight: 'bold',
    AlignItems: 'center',
    justifyContent: 'center',
  },
  redButtonContainer: {
    flex: 1,
    backgroundColor: '#191924',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    flexDirection: 'column',
    paddingTop: 50,
    paddingBottom: 200,
   
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
    backContainer: {
      backgroundColor: '#191924',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      paddingBottom: 90,
      paddingTop: 9,
      
  
      },
  
    backImage: {
      width: 25,
      height: 25,
      marginLeft: 20,
      marginBottom: 10,
      justifyContent: 'flex-start',
    },



});

export default Page16;