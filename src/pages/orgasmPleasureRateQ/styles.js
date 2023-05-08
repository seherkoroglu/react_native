import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    paddingLeft: 0.05 * windowWidth,
    backgroundColor: '#191924',
    paddingTop: 0.1 * windowWidth,
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
    paddingBottom: 0.04 * windowWidth,
    paddingTop: 0.1 * windowWidth,
  },

  buttonContainer: {
    backgroundColor: '#191924',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    flexDirection: 'column',
    paddingTop: 0.06 * windowWidth,
    paddingBottom: 1.5 * windowWidth,
  },

  darkButton: {
    backgroundColor: '#222331',
    width: 0.9 * windowWidth,
    height: 0.12 * windowWidth,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 0.01* windowWidth,
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
      paddingBottom: 0.08 * windowWidth,
      paddingTop: 0.01 * windowWidth,
    },
  
    backImage: {
      width: 0.06 * windowWidth,
      height: 0.06 * windowWidth,
      paddingRight: 0.05 * windowWidth,
      justifyContent: 'flex-start',
    },

  
  });

  export default styles;