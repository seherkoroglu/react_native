import React from 'react';
import {StyleSheet, View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import BoldRectangle from '../components/boldRectangle';
import {useState} from 'react';

const Page7 = ({navigation}) => {
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
      
      <View >
        <Text style={styles.haveYouEverStyle}>Have you ever used pills for erection? </Text>
      </View>
      <View >
        <View style = {styles.koyuButtonContainer}>
        
        <KoyuButon navigation = {navigation} select={selected === 'No'} setSelect={() => setSelected('No')}>
          <Text style = {styles.haveYouEverTextStyle}>No</Text>
        </KoyuButon>
       
        
        <View style = {styles.acikButtonContainer}>
        
          
        <KoyuButon navigation = {navigation} select={selected === 'Yes'} setSelect={() => setSelected('Yes')}>
          <Text style = {styles.haveYouEverTextStyle}>Yes</Text>
        
        </KoyuButon>
       
        </View>
      </View>
      </View>
     
     </>
        
    );
  }



  const KoyuButon = ({ navigation, children, select, setSelect }) => {
  const handlePress = () => {
      setSelect(!select);
      setTimeout(() => {
        navigation.navigate('page8');
      }, 1300); 
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
    paddingLeft: 290,
   
    
  },

  haveYouEverStyle: {
    backgroundColor: '#191924',
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    paddingLeft: 40,
    paddingRight: 40,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    flexDirection: 'row',
    paddingTop: 40,
    
   },

   koyuButtonContainer: {
    backgroundColor: '#191924',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    alignContent: 'flex-start',
    paddingTop: 50,
    flexDirection: 'row',
    paddingBottom: 1500,
    paddingLeft: 10,
    paddingRight: 10,
   
  
  },
  acikButtonContainer: {
    backgroundColor: '#191924',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    alignContent: 'flex-end',
    flexDirection: 'row',
    paddingLeft:10,
    paddingRight: 90,
   paddingBottom: 1500,
   

  },
  genelContainer: {
    backgroundColor: '#191924',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    flexDirection: 'row',
    paddingBottom: 800,
  },
  koyuButon: {
    backgroundColor: '#222331',
    width: 180,
    height: 73,
    borderRadius: 9,
    justifyContent: 'center',
    alignItems: 'center',
   
  },

  haveYouEverTextStyle: {
    color: 'white',
    fontSize: 13,
    fontWeight: 'bold',
    AlignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    
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

export default Page7;
