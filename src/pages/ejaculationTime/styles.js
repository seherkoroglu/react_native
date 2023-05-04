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
      paddingLeft: 10,
      paddingRight: 10,
      justifyContent: 'center',
      alignItems:'center',
      paddingBottom:150,
      
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
        width:210,
        height: 100,
        paddingRight:100,
       },
  
      textStyle: {
        color: 'white',
        fontSize: 17,
        fontWeight: '300',
        lineHeight: 27,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 140,
         textAlign:'center',
        
        },
        textsStyle: {
          color: 'white',
          fontSize: 20,
          fontWeight: '600',
          lineHeight: 27,
          paddingLeft: 20,
          paddingRight: 20,
          paddingTop: 40,
          paddingBottom: 30,
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
            paddingTop: 6,
        
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