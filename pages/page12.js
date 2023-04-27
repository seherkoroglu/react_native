import React from 'react';
import {StyleSheet, View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import BoldRectangle from '../components/boldRectangle';
import {useState} from 'react';

const Page12 = ({navigation}) => {
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
      
      
        <Text style={styles.doYouStyle}>How do you rate the pleasure you get from orgasm? </Text>

        <View style = {styles.buttonContainer} >
        
        <KoyuButon navigation = {navigation} select={selected === 'No pleasure'} setSelect={() => setSelected('No pleasure')}> 
          <Text style = {styles.doYouTextStyle}>No pleasure</Text>
        </KoyuButon>
       
        
        <KoyuButon navigation = {navigation} select={selected === 'Normal'} setSelect={() => setSelected('Normal')}>
          <Text style = {styles.doYouTextStyle}>Normal</Text>
        </KoyuButon>
       
        <KoyuButon navigation = {navigation} select={selected === 'Great pleasure'} setSelect={() => setSelected('Great pleasure')}>
          <Text style = {styles.doYouTextStyle}>Great pleasure</Text>
        </KoyuButon>
      </View>
     </>
        
    );
  }

  const KoyuButon = ({ navigation, children, select, setSelect }) => {
    const handlePress = () => {
      setSelect(!select);
      setTimeout(() => {
        navigation.navigate('page13');
      }, 1300); 
    };
  return (
    <View style={styles.koyuButon}>
    <TouchableOpacity
      style={[styles.koyuButon, select ? { backgroundColor: '#4d4f59', width: 350,
      height: 55,
      borderRadius: 8,
      justifyContent: 'center',
      alignItems: 'center',
      margin: 8,
      borderRadius: 9,
      borderColor: '#71727a',
      borderWidth: 1,} : null]}
      onPress={handlePress}

      >
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
    
  },

  doYouStyle: {
    backgroundColor: '#191924',
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 40,
    paddingLeft: 40,
    paddingRight: 40,
    textAlign: 'center',
    PaddingBottom: 20,
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
    paddingBottom: 50,
  },

  backImage: {
    width: 25,
    height: 25,
    marginLeft: 20,
    marginBottom: 10,
    justifyContent: 'flex-start',
  },

});

export default Page12;