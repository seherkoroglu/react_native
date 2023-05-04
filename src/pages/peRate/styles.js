import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      paddingLeft: 20,
      backgroundColor: '#191924',
      paddingTop:90,
      
    
    },
    contentContainer: {
      flex:1,
      backgroundColor:  '#191924',
      paddingLeft: 5,
      paddingRight: 5,
      justifyContent: 'center',
      alignItems:'center',
      paddingBottom:250,
    },
  
  
    buttonText: {
      color: 'white',
      fontSize: 20,
      fontWeight: 'bold',
      lineHeight: 40,
      paddingLeft: 20,
      paddingRight: 20,
      paddingTop:7,
      alignItems: 'center',
      justifyContent: 'center',
      },
      
      imageStyle: {
       backgroundColor: '#191924',
        width:110,
        height: 210,
        paddingRight:100,
       },
  
      textStyle: {
        color: 'white',
        fontSize: 18,
        fontWeight: '300',
        lineHeight: 30,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
        paddingBottom: 100,
         textAlign:'center',
        
        },
        textsStyle: {
          color: 'white',
          fontSize: 22,
          fontWeight: '600',
          lineHeight: 30,
          paddingLeft: 20,
          paddingRight: 20,
          paddingTop: 30,
          paddingBottom: 40,
         flexDirection:'row',
          textAlign:'center',
          
  
          },
          backContainer: {
            backgroundColor: '#191924',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            paddingRight: 400,
            paddingBottom: 150,
            paddingTop: 5,
        
            },
        
          backImage: {
            width: 25,
            height: 25,
            marginLeft: 20,
           
            justifyContent: 'flex-start',
          },
  });

export default styles;