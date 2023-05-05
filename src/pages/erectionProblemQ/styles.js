import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
      paddingLeft: width * 0.05,
      backgroundColor: '#191924',
      paddingTop: height * 0.1,
    
     
    },
  
    textStyle: {
      backgroundColor: '#191924',
      color: 'white',
      fontSize: height * 0.020,
      fontWeight: 'bold',
      lineHeight: height * 0.05,
      paddingLeft: width * 0.725,
      paddingBottom: height * 0.01,
      
    },
  
    havingProblemsStyle: {
      backgroundColor: '#191924',
      color: 'white',
      fontSize: height * 0.025,
      fontWeight: 'bold',
      lineHeight: height * 0.04,
      paddingLeft: width * 0.1,
      paddingRight: width * 0.1,
      textAlign: 'center',
  
     
     },
  
     buttonContainer: {
      backgroundColor: '#191924',
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: height * 0.1,
      flexDirection: 'column',
      paddingBottom: height * 0.30,
      
    
    },
    darkButton: {
      backgroundColor: '#222331',
      width: width * 0.8,
      height: height * 0.07,
      borderRadius: width * 0.02,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: height * 0.02,
    },
  
    havingProblemsTextStyle: {
      color: 'white',
      fontSize: height * 0.020,
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
      width: height * 0.03,
      height: height * 0.03,
      marginLeft: width * 0.05,
      marginTop: height * 0.015,
      justifyContent: 'flex-start',
  
     
  
    },
  
});

export default styles;

  