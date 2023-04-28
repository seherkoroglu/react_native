import React from 'react';
import {StyleSheet, View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import BoldRectangle from '../components/boldRectangle';
import {useState} from 'react';

const Page9 = ({navigation}) => {
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
        <View style = {styles.doYouContainer}>
        <Text style={styles.doYouStyle}>Do you experience premature ejaculation? </Text>
        </View>
        
        <KoyuButon navigation = {navigation} select={selected === 'No'} setSelect={() => setSelected('No')}>
          <Text style = {styles.doYouTextStyle} >No</Text>
        </KoyuButon>

        
        <KoyuButon navigation = {navigation} select={selected === 'Rarely'} setSelect={() => setSelected('Rarely')}>
          <Text style = {styles.doYouTextStyle}>Rarely</Text>
        </KoyuButon>

        
        <KoyuButon navigation = {navigation} select={selected === 'Often'} setSelect={() => setSelected('Often')}>
          <Text style = {styles.doYouTextStyle}>Often</Text>
        </KoyuButon>

        
        <KoyuButon navigation = {navigation} select={selected === 'Always'} setSelect={() => setSelected('Always')}>
          <Text style = {styles.doYouTextStyle}>Always</Text>
        </KoyuButon>

      </View>
     </>
        
    );
  }


  const KoyuButon = ({ navigation, children, select, setSelect }) => {
      const handlePress = () => {
        setSelect(!select);
        setTimeout(() => {
          navigation.navigate('page10');
        }, 1300); 
      };
    
      return (
        <View style={styles.koyuButton}>
          <TouchableOpacity

customStyle={}

              style={[styles.koyuButon, select ? { backgroundColor: '#4d4f59', width: 350,
              height: 50,
              borderRadius: 8,
              justifyContent: 'center',
              alignItems: 'center',
              margin: 5,
              borderRadius: 9,
              justifyContent: 'center',
              alignItems: 'center',
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
   paddingBottom: 10,
    
  },

  doYouStyle: {
    backgroundColor: '#191924',
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 30,
    paddingLeft: 40,
    paddingRight: 40,
    padddingBottom: 30,
    textAlign: 'center',
   
   },


   buttonContainer: {
    backgroundColor: '#191924',
     alignItems: 'center',
     paddingTop: 50,
    flexDirection: 'column',
    paddingBottom: 370,
  
  },

  doYouContainer: {
    backgroundColor: '#191924',
    alignItems: 'center',
    paddingBottom: 30,
  },
 

  koyuButon: {
    backgroundColor: '#222331',
    width: 350,
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
   margin: 5,
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
    paddingTop: 15,
   
    },

  backImage: {
    width: 25,
    height: 25,
    marginLeft: 20,
    marginBottom: 10,
    
    justifyContent: 'flex-start',

   

  },
});

export default Page9;