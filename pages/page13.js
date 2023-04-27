import React from 'react';
import {StyleSheet, View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import BoldRectangle from '../components/boldRectangle';
import {useState} from 'react';

const Page13 = ({navigation}) => {
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
        <View>
        <Text style={styles.doYouStyle}>How do you evaluate your
 sleep quality? </Text>
        </View>
        <KoyuButon navigation = {navigation} select={selected === 'Bad'} setSelect={() => setSelected('Bad')}>
          <Text style = {styles.doYouTextStyle}>Bad</Text>
        </KoyuButon>

    
        <KoyuButon navigation = {navigation} select={selected === 'Fair'} setSelect={() => setSelected('Fair')}>
          <Text style = {styles.doYouTextStyle}>Fair</Text>
        </KoyuButon>

    
        <KoyuButon navigation = {navigation} select={selected === 'Good'} setSelect={() => setSelected('Good')}>
          <Text style = {styles.doYouTextStyle}>Good</Text>
        </KoyuButon>

    
        <KoyuButon navigation = {navigation} select={selected === 'Very good'} setSelect={() => setSelected('Very good')}>
          <Text style = {styles.doYouTextStyle}>Very good</Text>
        </KoyuButon>
      </View>
     </>
        
    );
  }


  const KoyuButon = ({ navigation, children, select, setSelect }) => {
    const handlePress = () => {
      setSelect(!select);
      setTimeout(() => {
        navigation.navigate('page14');
      }, 1300); 
    };
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
        onPress={handlePress}>
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
    paddingBottom: 50,
    
  },

  doYouStyle: {
    backgroundColor: '#191924',
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 35,
    paddingLeft: 40,
    paddingRight: 40,
    textAlign: 'center',
    paddingBottom: 20,
    
   },

   buttonContainer: {
    backgroundColor: '#191924',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    paddingTop: 100,
    flexDirection: 'column',
    paddingBottom: 600,
  
  },

  koyuButon: {
    backgroundColor: '#222331',
    width: 350,
    height: 55,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
  },

  doYouTextStyle: {
    color: 'white',
    fontSize: 13,
    fontWeight: 'bold',
    AlignItems: 'center',
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

export default Page13;