import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    paddingLeft: 20,
    backgroundColor: '#191924',
    paddingTop: width * 0.1,

  },

  textStyle: {
    backgroundColor: '#191924',
    color: 'white',
    fontSize: width * 0.04,
    fontWeight: 'bold',
    paddingLeft: width * 0.75,
  },

  doYouStyle: {
    backgroundColor: '#191924',
    color: 'white',
    fontSize: width * 0.057,
    fontWeight: 'bold',
    lineHeight: width * 0.07,
    paddingLeft: width * 0.1,
    paddingRight: width * 0.1,
    paddingBottom: width * 0.15,
    paddingTop: width * 0.07,
    alignItems: 'center',
    textAlign: 'center',
  },

  buttonContainer: {
    backgroundColor: '#191924',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    flexDirection: 'column',
    paddingBottom: width * 2,
    paddingTop: width * 0.07,
  },
  
  darkButton: {
    backgroundColor: '#222331',
    width: width * 0.9,
      height: width * 0.12,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    margin: width * 0.01,
  },

  doYouTextStyle: {
    color: 'white',
    fontSize: width * 0.04,
    fontWeight: 'bold',
    alignItems: 'center',
  },

  backContainer: {
    backgroundColor: '#191924',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingLeft: width * 0.05,
   paddingTop: width * 0.01,
  },

  backImage: {
    width: width * 0.07,
    height: width * 0.05,
    justifyContent: 'flex-start',
  },

  textContainer: {
    backgroundColor: '#191924',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    paddingTop: width * 0.07,
    paddingBottom: width * 0.01,
  },
});

export default styles;
