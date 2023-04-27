import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import BoldRectangle from '../components/boldRectangle';
import RedButton from '../components/redButton';
import {useState} from 'react';

const Page4 = ({navigation}) => {
  const [select, setSelect] = useState(false);
    return (
      <>
      <View style= {styles.container}>
        <BoldRectangle />
        <View style = {styles.backContainer}>
        <TouchableOpacity onPress={() => {
          navigation.goBack();
        }}>
        <Image style={styles.backImage} source={require('../images/back.png')}/>
        </TouchableOpacity>
        </View>
      </View>
     

    
      <View style = {styles.imageContainer}>
        <Image style={styles.image}  source={require('../images/notif.png')}/>
      </View>
      <View style = {styles.textContainer}>
        <Text style={styles.textStyles}>Allow notifications to get the best  </Text>
        <Text style={styles.textStyles}>tips on sexual health</Text>
        <Text style={styles.textStyle}> </Text>
        <Text style={styles.textStyle}>Users who allow notifications are more </Text>
        <Text style={styles.textStyle}>successful in achieving their goals</Text>
      </View>
      <View style = {styles.buttonAndTextContainer}>
        <TouchableOpacity>
        <RedButton>
          <Text style = {styles.buttonTextStyle}>Turn On Notifications</Text>
        </RedButton>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('page5')} >
        <Text style= {styles.maybeLater}>Maybe later</Text>
        </TouchableOpacity>
      </View>
           </>
        
    );
  }


const styles = StyleSheet.create({
  
    container: {
      flex: 1,
      paddingLeft: 20,
      backgroundColor: '#191924',
      paddingTop: 100,
     
    },
    image: {
      width: 150,
      height: 210,
    },
    imageContainer: {
      flex: 1,
     backgroundColor: '#191924',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      
      paddingBottom: 60,

      
     },


    textStyles: {
      color: 'white',
      fontSize: 20,
      fontWeight: 'bold',
      lineHeight: 20,
     },
    textContainer: {
      flex: 1,
      backgroundColor: '#191924',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center', 
      paddingLeft: 20,
      paddingRight: 20,
      paddingBottom: 100,
      paddingTop: 50,
     
      
    },
      textStyle: {
      color: 'white',
      fontSize: 15,
      fontWeight: '300',
      lineHeight: 20,
      
     
    },
    buttonTextStyle: {
      color: 'white',
      alignSelf: 'center',
      fontSize: 17,
      fontWeight: 'bold',
      lineHeight: 40,
    },

    maybeLater: {
      color: 'white',
      paddingBottom: 60,
      fontSize: 17,
      fontWeight: 'bold',
      lineHeight: 40,
    },

    buttonAndTextContainer: {
      flex: 1,
      backgroundColor: '#191924',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      paddingBottom: 100,

     
     
    },
    backContainer: {
      backgroundColor: '#191924',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      paddingRight: 500,
      paddingBottom: 100,
    
  
      },
  
    backImage: {
      width: 25,
      height: 25,
     marginTop: 10,
     
      justifyContent: 'flex-start',

     
  
    },



});

export default Page4;