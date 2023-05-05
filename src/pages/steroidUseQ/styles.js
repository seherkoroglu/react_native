import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: width * 0.05,
    backgroundColor: '#191924',
    paddingTop: height * 0.1,
    paddingBottom: height * 0.01,
  },

  textStyle: {
    backgroundColor: '#191924',
    color: 'white',
    fontSize: width * 0.037,
    fontWeight: 'bold',
    paddingLeft: width * 0.77,
    paddingBottom: height * 0.02,
  },

  haveYouEverStyle: {
    backgroundColor: '#191924',
    color: 'white',
    fontSize: width * 0.06,
    fontWeight: 'bold',
    paddingTop: height * 0.05,
    textAlign: 'center',
    paddingBottom: height * 0.05,
  },

  darkButtonContainer: {
    backgroundColor: '#191924',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'row',
    paddingHorizontal: width * 0.03,
    paddingBottom: height * 0.9,
  },
  
  darkButton: {
    backgroundColor: '#222331',
    width: width * 0.46,
    height: height * 0.09,
    borderRadius: width * 0.02,
    justifyContent: 'center',
    alignItems: 'center',
  },

  haveYouEverTextStyle: {
    color: 'white',
    fontSize: width * 0.04,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },

  backContainer: {
    backgroundColor: '#191924',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingTop: height * 0.005,
  },

  backImage: {
    width: width * 0.03,
    height: height * 0.03,
    marginLeft: width * 0.05,
    marginBottom: height * 0.01,
    justifyContent: 'flex-start',
  },
});

export default styles;
