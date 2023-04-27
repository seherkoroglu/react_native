import React, {useState} from 'react';
import {StyleSheet, View, Text, Image, TextInput} from 'react-native';
import LottieView from 'lottie-react-native';
import progress from '../assets/animation/color loading-2.json';



const Page27 = ({navigation}) => {
    setTimeout(() => {
      navigation.navigate('page28');
    }, 2200);
  
    return (
      
      <View style= {{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#191924',
       paddingTop: 50,
        paddingLeft: 40,
        paddingRight: 40,
      }}>
        <Text style = {styles.textStyle}>Your customized program is being created</Text>
        <LottieView source={progress} 
        style={{
          width: 300,
          height: 300,
        }}
        autoPlay />
        <View style = {styles.sonView}>
        <View style = {{flexDirection: 'row'}}>
        <Image source = {require('../images/redTick.png')} style = {{width: 20, height: 20, marginRight: 5}}/>
        <Text style = {styles.sonStyle}>Analysis</Text>
        </View>
        <View style = {{flexDirection: 'row'}}>
        <Image source = {require('../images/doneIcon.png')} style = {{width: 20, height: 20, marginRight: 5}}/>
        <Text style = {styles.sonStyle}>Selecting exercises</Text>
        </View>
        <View style = {{flexDirection: 'row'}}>
        <Image source = {require('../images/doneIcon.png')} style = {{width: 20, height: 20, marginRight: 5}}/>
        <Text style = {styles.sonStyle}>Planning your workouts</Text>
        </View>
        <View style = {{flexDirection: 'row'}}>
        <Image source = {require('../images/doneIcon.png')} style = {{width: 20, height: 20, marginRight: 5}}/>
        <Text style = {styles.sonStyle}>DONE!</Text>
        </View>
        </View>
       </View>
    );
  }


const styles = StyleSheet.create({
  textStyle: {
    color: '#fff',
    fontSize: 25,
    fontWeight: '500',
    textAlign: 'center',
   
  },
  sonStyle: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '300',
    textAlign: 'left',
    paddingBottom: 10,
   
  },
  sonView: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    backgroundColor: '#191924',
    flexDirection: 'column',
    paddingBottom: 20,
    
    
  },

});
export default Page27;