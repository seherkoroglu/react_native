import React from 'react';
import {StyleSheet, View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import BoldRectangle from '../components/boldRectangle';
import {useState} from 'react';


const Page10 = ({navigation}) => {
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
        <Text style={styles.doYouStyle}>When do you have erection or ejaculation problem? </Text>
        </View>
        
        <KoyuButon navigation={navigation} select={selected === 'Only with a partner'} setSelect={() => setSelected('Only with a partner')}>
          <Text style = {styles.doYouTextStyle}>Only with a partner</Text>
        </KoyuButon>
        
        <KoyuButon navigation={navigation} select={selected === 'With a partner & solo'} setSelect={() => setSelected('With a partner & solo')}>
          <Text style = {styles.doYouTextStyle}>With a partner & solo</Text>
        </KoyuButon>
        
        <KoyuButon navigation={navigation} select={selected === 'Only when solo'} setSelect={() => setSelected('Only when solo')}>
          <Text style = {styles.doYouTextStyle}>Only when solo</Text>
        </KoyuButon>
      </View>
     </>
        
    );
  }

  

  const KoyuButon = ({ navigation, children, select, setSelect }) => {
      const handlePress = () => {
        setSelect(!select);
        setTimeout(() => {
          navigation.navigate('page11');
        }, 1300); 
      };
    
      return (
        <View style={styles.koyuButton}>
          <TouchableOpacity
              style={[styles.koyuButon, select ? { backgroundColor: '#4d4f59', width: 350,
              height: 55,
              borderRadius: 8,
              justifyContent: 'center',
              alignItems: 'center',
              margin: 10,
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
   paddingBottom: 20,
   paddingTop: 100,
   },

   buttonContainer: {
    backgroundColor: '#191924',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    
    flexDirection: 'column',
    paddingBottom: 290,
  
  },
  koyuButon: {
    backgroundColor: '#222331',
    width: 350,
    height: 55,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
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
    marginBottom: 10,
    justifyContent: 'flex-start',

   

  },
});

export default Page10;