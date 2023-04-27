import React from 'react';
import {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import BoldRectangle from '../components/boldRectangle';
import Page4 from '../pages/page4';




const Page3 = ({navigation}) => {
  const [select, setSelect] = useState(false);
  const [selectedAge, setSelectedAge] = useState('');
  
    return (
      <>
      <View style= {styles.container}>
    
        <BoldRectangle />
      </View>
     
      <View style = {styles.backContainer}>
      <TouchableOpacity onPress={() => {
          navigation.goBack();
        }}>
      <Image 
      style={styles.backImage} source={require('../images/back.png')}/>
      </TouchableOpacity>
        <Text style ={styles.textStyle}>2/19</Text>
      </View>
      <View style = {styles.buttonContainer}>
        
        <Text style={styles.ageStyle}>Select age range</Text>
        
       
     
        <KoyuButon navigation={navigation} select={selectedAge === '18-30'} setSelect={() => setSelectedAge('18-30')}>
          <Text style={styles.ageTextStyle}>18-30</Text>
        </KoyuButon>

        <KoyuButon navigation={navigation} select={selectedAge === '31-55'} setSelect={() => setSelectedAge('31-55')}>
          <Text style={styles.ageTextStyle}>31-55</Text>
        </KoyuButon>

        <KoyuButon navigation={navigation} select={selectedAge === '55+'} setSelect={() => setSelectedAge('55+')}>
          <Text style={styles.ageTextStyle}>55+</Text>
        </KoyuButon>
      
      </View>
     </>
        
    );
  }
  const KoyuButon = ({ navigation, children, select, setSelect }) => {

    const handlePress = () => {
      setSelect(true);
      setTimeout(() => {
        navigation.navigate('page4');
      }, 1500); 
    };
  
    return (
      <View style={styles.koyuButton}>
        <TouchableOpacity
          style={[styles.koyuButon, select ? {backgroundColor: '#4d4f59'} : null]}
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
    paddingTop: 90,
    paddingBottom: 16,
  },

  textStyle: {
    backgroundColor: '#191924',
    color: 'white',
    fontSize: 13,
    fontWeight: 'bold',
    lineHeight: 40,
    paddingLeft: 290,
    paddingBottom: 50,
    
  },

  ageStyle: {
    backgroundColor: '#191924',
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 40,
    paddingLeft: 100,
    paddingRight: 90,
    paddingBottom: 50,
   },

   buttonContainer: {
    backgroundColor: '#191924',
    justifyContent: 'center',
    alignItems: 'center',
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

  ageTextStyle: {
    color: 'white',
    fontSize: 13,
    fontWeight: 'bold',
  },

  backContainer: {
    backgroundColor: '#191924',
    flexDirection: 'row',
    paddingBottom: 50,
    
    
  },

  backImage: {
    width: 25,
    height: 25,
    marginLeft: 20,
    marginTop: 10,
   

  },

  




});

export default Page3;
