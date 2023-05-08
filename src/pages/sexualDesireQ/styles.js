import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    paddingLeft: 0.04 * width,
    backgroundColor: '#191924',
    paddingTop: 0.1 * width,
  },

  textStyle: {
    backgroundColor: '#191924',
    color: 'white',
    fontSize: 0.040 * width,
    fontWeight: 'bold',
    paddingLeft: 0.73 * width,
    paddingBottom: 0.02 * width,
  },

  havingProblemsStyle: {
    backgroundColor: '#191924',
    color: 'white',
    fontSize: 0.060 * width,
    fontWeight: 'bold',
    lineHeight: 0.1 * width,
    paddingHorizontal: 0.1 * width,
    textAlign: 'center',
    paddingTop: 0.08 * width,
    paddingBottom: 0.01 * width,
  },

  buttonContainer: {
    backgroundColor: '#191924',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    paddingTop: 0.15 * width,
    flexDirection: 'column',
    paddingBottom: 3 * width,
  },

  darkButton: {
    backgroundColor: '#222331',
    width: 0.8 * width,
    height: 0.12 * width,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 0.03 * width,
    marginBottom: 0.01 * width,
  },

    havingProblemsTextStyle: {
      color: 'white',
      fontSize: width * 0.045,
      fontWeight: 'bold',
      AlignItems: 'center',
      textAlign: 'center',
    },
    backContainer: {
      backgroundColor: '#191924',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      paddingTop: width * 0.01,

    },
    backImage: {
      width: width * 0.07,
      height: width * 0.055,
      marginLeft: width * 0.04,
      marginBottom: width * 0.01,
      justifyContent: 'flex-start',
    },
  });
  

export default styles;