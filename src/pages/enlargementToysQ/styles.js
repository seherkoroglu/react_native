import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    paddingLeft: 0.05 * windowWidth,
    backgroundColor: '#191924',
    paddingTop: 0.09 * windowHeight,
    paddingBottom: 0.01 * windowHeight,
  },

  textStyle: {
    backgroundColor: '#191924',
    color: 'white',
    fontSize: 0.02 * windowHeight,
    fontWeight: 'bold',
    paddingLeft: 0.75 * windowWidth,
  },

  haveYouTriedStyle: {
    backgroundColor: '#191924',
    color: 'white',
    fontSize: 0.025 * windowHeight,
    fontWeight: 'bold',
    paddingLeft: 0.08 * windowWidth,
    paddingRight: 0.08 * windowWidth,
    paddingBottom: 0.05 * windowHeight,
    paddingTop: 0.05 * windowHeight,
    lineHeight: 0.03 * windowHeight,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    flexDirection: 'row',
    textAlign: 'center',
  },

  darkButtonContainer: {
    backgroundColor: '#191924',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    alignContent: 'flex-start',

    flexDirection: 'row',
    paddingBottom: 0.9 * windowHeight,
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
    paddingBottom: 0.1 * windowHeight,
  },
  genelContainer: {
    backgroundColor: '#191924',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    flexDirection: 'row',
    paddingBottom: 0.09* windowHeight,
  },

  darkButton: {
    backgroundColor: '#222331',
    width: 0.45 * windowWidth,
    height: 0.095 * windowHeight,
    borderRadius: 0.01 * windowHeight,
    justifyContent: 'center',
    alignItems: 'center',
  },

  haveYouTriedTextStyle: {
    color: 'white',
    fontSize: 0.022 * windowHeight,
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
  
  },

  backImage: {
    width: 0.03 * windowHeight,
    height: 0.03 * windowHeight,
    marginLeft: 0.04 * windowWidth,
    marginBottom: 0.02 * windowHeight,
    justifyContent: 'flex-start',
  },
});

export default styles;
