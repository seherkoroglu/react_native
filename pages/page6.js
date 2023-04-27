import React from 'react';
import {StyleSheet, View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import BoldRectangle from '../components/boldRectangle';
import {useState} from 'react';

const Page6 = ({navigation}) => {
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
     
      
        <Text style={styles.havingProblemsStyle}>How is your sexual desire? </Text>
      <View style = {styles.buttonContainer}>
        
       
        <KoyuButon navigation={navigation} select={selected === 'Bad'} setSelect={() => setSelected('Bad')}>
          <Text style = {styles.havingProblemsTextStyle}>Bad</Text>
        </KoyuButon>
        
        <KoyuButon navigation={navigation} select={selected === 'Fair'} setSelect={() => setSelected('Fair')}>
          <Text style = {styles.havingProblemsTextStyle}>Fair</Text>
        </KoyuButon>
        
        <KoyuButon navigation={navigation} select={selected === 'Good'} setSelect={() => setSelected('Good')}>
          <Text style = {styles.havingProblemsTextStyle}>Good</Text>
        </KoyuButon>
        
        <KoyuButon navigation={navigation} select={selected === 'Very Good'} setSelect={() => setSelected('Very Good')}>
          <Text style = {styles.havingProblemsTextStyle}>Very Good</Text>
        </KoyuButon>
      </View>
     </>
        
    );
  }



  const KoyuButon = ({ navigation, children, select, setSelect }) => {
  const handlePress = () => {
      setSelect(!select);
      setTimeout(() => {
        navigation.navigate('page7');
      }, 1500); 
    };
  
    return (
      <View style={styles.koyuButton}>
        <TouchableOpacity
           style={[styles.koyuButon, select ? {backgroundColor: '#4d4f59',
           borderRadius: 8,
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
    lineHeight: 40,
    paddingLeft: 300,
    paddingBottom: 16,
    
  },

  havingProblemsStyle: {
    backgroundColor: '#191924',
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 40,
    paddingLeft: 40,
    paddingRight: 40,
    textAlign: 'center',
    paddingTop: 20,
   },

   buttonContainer: {
    backgroundColor: '#191924',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    paddingTop: 100,
    flexDirection: 'column',
    paddingBottom: 700,
  
  },

  koyuButon: {
    backgroundColor: '#222331',
    width: 350,
    height: 55,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },

  havingProblemsTextStyle: {
    color: 'white',
    fontSize: 13,
    fontWeight: 'bold',
    AlignItems: 'center',
    textAlign: 'center',

  },

  backContainer: {
    backgroundColor: '#191924',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start', 
  },

  backImage: {
    width: 25,
    height: 25,
    marginLeft: 20,
    marginTop: 10,
    marginBottom: 10,
    justifyContent: 'flex-start',
  },



});

export default Page6;