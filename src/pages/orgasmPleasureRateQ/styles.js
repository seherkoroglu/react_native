import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    paddingLeft: 0.05 * windowWidth,
    backgroundColor: '#191924',
    paddingTop: 0.1 * windowHeight,
    paddingBottom: 0.01 * windowHeight,
  },

  textStyle: {
    backgroundColor: '#191924',
    color: 'white',
    fontSize: 0.04 * windowWidth,
    fontWeight: 'bold',
    paddingLeft: 0.75 * windowWidth,
  },

  doYouStyle: {
    backgroundColor: '#191924',
    color: 'white',
    fontSize: 0.06 * windowWidth,
    fontWeight: 'bold',
    lineHeight: 0.08 * windowWidth,
    paddingLeft: 0.1 * windowWidth,
    paddingRight: 0.1 * windowWidth,
    textAlign: 'center',
    paddingBottom: 0.04 * windowHeight,
  },

  buttonContainer: {
    backgroundColor: '#191924',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    flexDirection: 'column',
    paddingTop: 0.06 * windowHeight,
    paddingBottom: 0.9 * windowHeight,
  },

  koyuButon: {
    backgroundColor: '#222331',
    width: 0.9 * windowWidth,
    height: 0.07 * windowHeight,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 0.01* windowHeight,
  },

  doYouTextStyle: {
    color: 'white',
    fontSize: 0.04 * windowWidth,
      fontWeight: 'bold',
      AlignItems: 'center',
    },
    backContainer: {
      backgroundColor: '#191924',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      paddingLeft: 0.04 * windowWidth,
      paddingBottom: 0.08 * windowHeight,
    },
  
    backImage: {
      width: 0.06 * windowWidth,
      height: 0.06 * windowWidth,
      paddingRight: 0.05 * windowWidth,
      justifyContent: 'flex-start',
    },

  
  });

  export default styles;