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
    fontSize: 0.020 * windowHeight,
    fontWeight: 'bold',
    paddingLeft: 0.7 * windowWidth,
  },

  haveYouEverStyle: {
    backgroundColor: '#191924',
    color: 'white',
    fontSize: 0.025 * windowHeight,
    fontWeight: 'bold',
    paddingLeft: 0.1 * windowWidth,
    paddingRight: 0.1 * windowWidth,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    flexDirection: 'row',
    paddingTop: 0.04 * windowHeight,
  },

  koyuButtonContainer: {
    backgroundColor: '#191924',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    alignContent: 'flex-start',
    paddingTop: 0.05 * windowHeight,
    flexDirection: 'row',
    paddingBottom: 2 * windowHeight,
    paddingLeft: 0.035 * windowWidth,
    paddingRight: 0.05* windowWidth,
  },

  acikButtonContainer: {
    backgroundColor: '#191924',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    alignContent: 'flex-end',
    flexDirection: 'row',
    paddingLeft: 0.03 * windowWidth,
    paddingRight: 0.07* windowWidth,
    paddingBottom: 2 * windowHeight,
  },

  genelContainer: {
    backgroundColor: '#191924',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    flexDirection: 'row',
    paddingBottom: 0.3* windowHeight,
  },

  koyuButon: {
    backgroundColor: '#222331',
    width: 0.45 * windowWidth,
    height: 0.10* windowHeight,
    borderRadius: 9,
    justifyContent: 'center',
    alignItems: 'center',
  },

  haveYouEverTextStyle: {
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
    paddingTop: 0.01 * windowHeight,
  },

  backImage: {
    width: 0.03 * windowHeight,
    height: 0.03 * windowHeight,
    marginLeft: 0.05 * windowWidth,
    marginBottom: 0.02 * windowHeight,
    justifyContent: 'flex-start',
  },
});

export default styles;
