import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
    container: {
     
      backgroundColor: '#191924',
      flex: 1,
      paddingLeft: 40,
      paddingRight: 40, 
     
  
      
    },
  
    text: {
      color: '#fff',
      fontSize: 23,
      textAlign: 'center',
      marginTop: 20,
      fontWeight: 'bold',
    },
    
    image: {
      width: 75,
      height: 90,
     paddingTop: 60,
      alignSelf: 'center',
      
      
    },
    field: {
      backgroundColor: '#191a26',
      borderRadius: 20,
      padding: 10,
      marginTop: 20,
      alignItems: 'center',
      justifyContent: 'center',
      paddingBottom: 50,
    },
    fieldText: {
      color: '#fff',
      fontSize: 20,
      textAlign: 'center',
      fontWeight: '500',
      lineHeight: 30,
      paddingTop: 20,
      paddingBottom: 20,
      
      
    },
    percentage: {
      color: '#26d1a3',
      fontSize: 23,
      paddingLeft: 199,
      fontWeight: 'bold',
      shadowColor: '#4d4f59',
      shadowOffset: {width: 6, height: 4},
      shadowOpacity: 0.5,
      shadowRadius: 2,
      elevation: 2,
     
      },
      closeImage: {
        width: 25,
        height: 25,
        alignSelf: 'flex-end',
        marginTop: 20,
      },
      closeContainer: {
        backgroundColor: '#191924',
        paddingTop: 60,
        paddingLeft: 20,
        paddingRight: 14,
      },
      chartImage: {
        width: 250,
        height: 150,
        alignSelf: 'center',
        paddingBottom: 150,
        
        
      },
      yazıImage: {
        width: 250,
        height: 160,
        alignSelf: 'center',
        paddingTop:200,
       },
        performance: {
          color: '#fff',
          fontSize: 18,
          textAlign: 'center',
          marginTop: 20,
          fontWeight: 'bold',
        },
        greenImage: {
          width: 200,
          height: 100,
          alignSelf: 'center',
        },
  
        paragraph: {
          color: '#fff',
          fontSize: 15,
          textAlign: 'center',
          marginTop: 20,
          fontWeight: '300',
          marginBottom: 20,
        },
        redImage: {
          width: 150,
          height: 100,
          alignSelf: 'center',
        },
  
        clockStyle: {
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'space-around',
           },
          
            buttonText: {
              color: '#fff',
              fontSize: 20,
              textAlign: 'center',
              fontWeight: '400',
              justifyContent: 'center',
              alignItems: 'center',
              paddingTop: 15,
            },
  
            redButton: {
            shadowColor: '#b90005',
            shadowOffset: {width: 6, height: 4},
            shadowOpacity: 0.5,
            shadowRadius: 2,
            elevation: 2,
            paddingBottom: 20,
            marginTop: 20,
            paddingTop: 20,
            },
            
            manField: {
              paddingBottom: 300,
            },
  });

    export default styles;