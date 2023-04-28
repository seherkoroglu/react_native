import { StyleSheet } from 'react-native';

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
      textAlign: 'center',
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
      textAlign: 'center',
      
     
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

export default styles;