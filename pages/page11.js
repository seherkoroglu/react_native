import React from 'react';
import {StyleSheet, View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import BoldRectangle from '../components/boldRectangle';
import {useState} from 'react';

const Page11 = ({navigation}) => {
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
       <Text style ={styles.textStyle}>4/19</Text>
       </View>
     
        
      
      <View style = {styles.yazıContainer}>
        <Text style={styles.doYouStyle}>How often do you masturbate? </Text>
        </View>
        <View style = {styles.buttonContainer}>
        <KoyuButon navigation = {navigation}  select={selected === 'Min. once each day'} setSelect={() => setSelected('Min. once each day')}>
          <Text style = {styles.doYouTextStyle}>Min. once each day</Text>
        </KoyuButon>
       
       
        <KoyuButon navigation = {navigation}  select={selected === '1 to 6 times in a week'} setSelect={() => setSelected('1 to 6 times in a week')}>
          <Text style = {styles.doYouTextStyle}>1 to 6 times in a week</Text>
        </KoyuButon>
       
       
        <KoyuButon navigation = {navigation}  select={selected === 'Once or twice in a month'} setSelect={() => setSelected('Once or twice in a month')}>
          <Text style = {styles.doYouTextStyle}>Once or twice in a month</Text>
        </KoyuButon>
       
       
        <KoyuButon navigation = {navigation}  select={selected === 'Never'} setSelect={() => setSelected('Never')}>
          <Text style = {styles.doYouTextStyle}>Never</Text>
        </KoyuButon>
       
      </View>
     </>
        
    );
  }

  const KoyuButon = ({ navigation, children, select, setSelect }) => {
    const handlePress = () => {
      setSelect(!select);
      setTimeout(() => {
        navigation.navigate('page12');
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
    padding:20,
   
    
  },

  doYouStyle: {
    backgroundColor: '#191924',
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 40,
    paddingLeft: 40,
    paddingRight: 40,
    paddingBottom: 50,
   
    AlignItems: 'center',
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
    margin:8,
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
  
   

    },

  backImage: {
    width: 25,
    height: 25,
    marginLeft: 20,
    marginBottom: 5,
    justifyContent: 'flex-start',
    marginTop: 10,

   

  },
  yazıContainer: {
    backgroundColor: '#191924',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    paddingTop: 70,
    paddingBottom: 10,
   
  },
 

});


export default Page11;