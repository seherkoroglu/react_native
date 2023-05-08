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
    fontSize: 0.040 * windowWidth,
    fontWeight: 'bold',
    paddingLeft: 0.75 * windowWidth,
  },

  haveYouEverStyle: {
    backgroundColor: '#191924',
    color: 'white',
    fontSize: 0.05 * windowWidth,
    fontWeight: 'bold',
    paddingLeft: 0.1 * windowWidth,
    paddingRight: 0.1 * windowWidth,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    flexDirection: 'row',
    paddingTop: 0.2 * windowWidth,
  },

  darkButtonContainer: {
    backgroundColor: '#191924',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    alignContent: 'flex-start',
    paddingTop: 0.07 * windowWidth,
    flexDirection: 'row',
    paddingBottom: 2 * windowWidth,
    paddingLeft: 0.035 * windowWidth,
    paddingRight: 0.05* windowWidth,
  },

  lightButtonContainer: {
    backgroundColor: '#191924',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    alignContent: 'flex-end',
    flexDirection: 'row',
    paddingLeft: 0.03 * windowWidth,
    paddingRight: 0.07* windowWidth,
    paddingBottom: 2 * windowWidth,
  },

  darkButton: {
    backgroundColor: '#222331',
    width: 0.45 * windowWidth,
    height: 0.17* windowWidth,
    borderRadius: 9,
    justifyContent: 'center',
    alignItems: 'center',
  },

  haveYouEverTextStyle: {
    color: 'white',
    fontSize: 0.04 * windowWidth,
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
    paddingTop: 0.01 * windowWidth,
  },

  backImage: {
    width: 0.07 * windowWidth,
    height: 0.05 * windowWidth,
    marginLeft: 0.05 * windowWidth,
    marginBottom: 0.02 * windowWidth,
    justifyContent: 'flex-start',
  },
});

export default styles;
