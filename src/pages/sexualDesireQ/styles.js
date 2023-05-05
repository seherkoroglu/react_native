import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    paddingLeft: 0.04 * width,
    backgroundColor: '#191924',
    paddingTop: 0.1 * height,
    paddingBottom: 0.02 * height,
  },

  textStyle: {
    backgroundColor: '#191924',
    color: 'white',
    fontSize: 0.035 * width,
    fontWeight: 'bold',
    paddingLeft: 0.75 * width,
    paddingBottom: 0.02 * height,
  },

  havingProblemsStyle: {
    backgroundColor: '#191924',
    color: 'white',
    fontSize: 0.060 * width,
    fontWeight: 'bold',
    lineHeight: 0.1 * height,
    paddingHorizontal: 0.1 * width,
    textAlign: 'center',
    paddingTop: 0.03 * height,
    paddingBottom: 0.01 * height,
  },

  buttonContainer: {
    backgroundColor: '#191924',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
   
    flexDirection: 'column',
    paddingBottom: 0.45 * height,
  },

  koyuButon: {
    backgroundColor: '#222331',
    width: 0.8 * width,
    height: 0.07 * height,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 0.02 * height,
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
    },
    backImage: {
      width: width * 0.05,
      height: height * 0.025,
      marginLeft: width * 0.05,
    
      marginBottom: height * 0.01,
      justifyContent: 'flex-start',
    },
  });
  

export default styles;