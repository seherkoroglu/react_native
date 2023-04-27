import React from 'react';
import {StyleSheet, View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import BoldRectangle from '../components/boldRectangle';
import RedButton from '../components/redButton';
import {useState} from 'react';

const Page22 = ({navigation}) => {
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
       </View>
      <View style = {styles.contentContainer}>
        <Image style={styles.imageStyle} source={require('../images/Group.png')} />
        <Text style ={styles.textsStyle}>Wake up with determination, go to bed with satisfaction</Text>
        <Text style ={styles.textStyle}>In a research published in British Journal of General Practice, 
        after 6 months of regular Kegel exercises, 
        40.0% of the participants attained normal function, 34.5% participants had improved erectile function.</Text>

        <TouchableOpacity onPress={() => navigation.navigate('page23')}>
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
    paddingBottom:200,
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
      width:200,
      height: 110,
     },

    textStyle: {
      color: 'white',
      fontSize: 18,
      fontWeight: '300',
      lineHeight: 30,
      paddingLeft: 20,
      paddingRight: 20,
      paddingTop: 20,
      paddingBottom: 80,
      alignItems: 'center',
      justifyContent: 'center',
      textAlign:'center',
      
      },
      textsStyle: {
        color: 'white',
        fontSize: 22,
        fontWeight: '600',
        lineHeight: 30,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 40,
        paddingBottom: 20,
        alignItems: 'center',
        justifyContent: 'center',
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
         
          justifyContent: 'flex-start',
        },
      



});

export default Page22;