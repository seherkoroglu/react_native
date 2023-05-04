import { StyleSheet } from 'react-native';

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

export default styles;