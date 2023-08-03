import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    paddingLeft: 0.04 * windowWidth,
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

  haveYouTriedStyle: {
    backgroundColor: '#191924',
    color: 'white',
    fontSize: 0.05 * windowWidth,
    fontWeight: 'bold',
    paddingLeft: 0.08 * windowWidth,
    paddingRight: 0.08 * windowWidth,
    paddingBottom: 0.05 * windowWidth,
    paddingTop: 0.2 * windowWidth,
    lineHeight: 0.06 * windowWidth,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    flexDirection: 'row',
    textAlign: 'center',
  },

  darkButtonContainer: {
    backgroundColor: '#191924',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 0.02 * windowWidth,
    paddingLeft: 0.03 * windowWidth,
    paddingRight: 0.02 * windowWidth,

  },
  acikButtonContainer: {
    backgroundColor: '#191924',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    alignContent: 'flex-end',
    flexDirection: 'row',
    paddingLeft: 0.02 * windowWidth,
    paddingRight: 0.24 * windowWidth,
    paddingBottom: 0.1 * windowWidth,
  },
  genelContainer: {
    backgroundColor: '#191924',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    flexDirection: 'row',
    paddingBottom: 0.09* windowWidth,
  },

  darkButton: {
    backgroundColor: '#222331',
    width: 0.45 * windowWidth,
    height: 0.095 * windowHeight,
    borderRadius: 0.01 * windowWidth,
    justifyContent: 'center',
    alignItems: 'center',
  },

  haveYouTriedTextStyle: {
    color: 'white',
    fontSize: 0.040 * windowWidth,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },
});

export default styles;
