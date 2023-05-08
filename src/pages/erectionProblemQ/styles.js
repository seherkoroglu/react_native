import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
      paddingLeft: width * 0.04,
      backgroundColor: '#191924',
      paddingTop: width * 0.1,
    
     
    },
  
    textStyle: {
      backgroundColor: '#191924',
      color: 'white',
      fontSize: width * 0.040,
      fontWeight: 'bold',
      lineHeight: width * 0.06,
      paddingLeft: width * 0.77,
      paddingBottom: width * 0.01,
      
    },
  
    havingProblemsStyle: {
      backgroundColor: '#191924',
      color: 'white',
      fontSize: width * 0.05,
      fontWeight: 'bold',
      lineHeight: width * 0.07,
      paddingLeft: width * 0.1,
      paddingRight: width * 0.1,
      textAlign: 'center',
      paddingTop: width * 0.07,
  
     
     },
  
     buttonContainer: {
      backgroundColor: '#191924',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      paddingBottom: width * 1,
      
    
    },
    darkButton: {
      backgroundColor: '#222331',
      width: width * 0.8,
      height: width * 0.13,
      borderRadius: width * 0.02,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: width * 0.03,
      marginBottom: width * 0.01,
    },
  
    havingProblemsTextStyle: {
      color: 'white',
      fontSize: width * 0.040,
      fontWeight: 'bold',
      AlignItems: 'center',
    },
    backContainer: {
      backgroundColor: '#191924',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      paddingBottom: width * 0.08,
    },
  
    backImage: {
      width: width * 0.05,
      height: height * 0.03,
      marginLeft: width * 0.05,
      marginTop: width * 0.015,
      justifyContent: 'flex-start',
  
     
  
    },
  
});

export default styles;

  