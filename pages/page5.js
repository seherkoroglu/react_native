import React from 'react';
import {StyleSheet, View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import BoldRectangle from '../components/boldRectangle';
import {useState} from 'react'; 
 
const Page5 = ({navigation}) => {
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
        <Text style ={styles.textStyle}>3/19</Text>
      </View>
       </View>
        <View style = {styles.buttonContainer}>
          <View>
        <Text style={styles.havingProblemsStyle}>Having problems getting an erection?</Text>
      </View>
        <KoyuButon navigation={navigation} select={selected === 'No'} setSelect={() => setSelected('No')}>
          <Text style = {styles.havingProblemsTextStyle}>No</Text>
        </KoyuButon>
     

        <KoyuButon navigation={navigation} select={selected === 'Rarely'} setSelect={() => setSelected('Rarely')}>
          <Text style = {styles.havingProblemsTextStyle}>Rarely</Text>
        </KoyuButon>
        
        <KoyuButon navigation={navigation}  select={selected === 'Often'} setSelect={() => setSelected('Often')}>
          <Text style = {styles.havingProblemsTextStyle}>Often</Text>
        </KoyuButon>
     
        <KoyuButon navigation={navigation} select={selected === 'Always'} setSelect={() => setSelected('Always')}>
          <Text style = {styles.havingProblemsTextStyle}>Always</Text>
        </KoyuButon>
      </View>
     </>
        
    );
  }




  const KoyuButon = ({ navigation, children, select, setSelect }) => {
    const handlePress = () => {
      setSelect(true);
      setTimeout(() => {
        navigation.navigate('page6');
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
    paddingLeft: 290,
    paddingBottom: 10,
    
  },

  havingProblemsStyle: {
    backgroundColor: '#191924',
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 35,
    paddingLeft: 40,
    paddingRight: 40,
    textAlign: 'center',

   
   },

   buttonContainer: {
    backgroundColor: '#191924',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 100,
    flexDirection: 'column',
    paddingBottom: 500,
  
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
    marginTop: 15,
    justifyContent: 'flex-start',

   

  },






});

export default Page5;
