import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#191924',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      
  },
  image: {
    alignSelf: 'center',
    justifyContent: 'center',
    width: 130,
    height: 130,
    marginTop: 80,
    },
  
    textStyles: {
      color: 'white',
      alignSelf: 'center',
      fontSize: 20,
      marginTop: 30,
      fontWeight: 'bold',
      lineHeight: 40,
  },
  
  smallButton: {
    backgroundColor: '#191924',
    width: 60,
    height: 60,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems:'center',
    shadowColor: '#191924',
    shadowOffset: { width: 1 , height: 3},
    shadowOpacity: 0.6,
    shadowRadius: 2,
    elevation: 2,
    padding: 10,
  
  
  },
  style: {
    paddingBottom: 50,
    backgroundColor: '#191924',
  },
  
  select: {
    backgroundColor: '#d1262b',
    width: 350,
    height: 60,
    borderRadius: 30,
    alignSelf: 'center',
    justifyContent: 'center'},
  
    button: {
      backgroundColor: '#222331',
      width: 340,
      height: 70,
      borderRadius: 10,
      margin: 10,
      justifyContent: 'center',
      flexDirection: 'row',
      alignItems: 'center',
     
    }, 
   
  });

    export default styles;
  