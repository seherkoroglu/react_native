import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: windowWidth * 0.05,
    backgroundColor: '#191924',
    paddingTop: windowWidth * 0.25,
    paddingBottom: windowWidth * 0.04,
  },
  textStyle: {
    backgroundColor: '#191924',
    color: 'white',
    fontSize: windowWidth * 0.037,
    fontWeight: 'bold',
    paddingLeft: windowWidth * 0.75,
    paddingBottom: windowWidth * 0.09,
  },
  doYouStyle: {
    backgroundColor: '#191924',
    color: 'white',
    fontSize: windowWidth * 0.06,
    fontWeight: 'bold',
    lineHeight: windowWidth * 0.09,
    paddingHorizontal: windowWidth * 0.1,
    textAlign: 'center',
    paddingBottom: windowWidth * 0.04,
  },
  buttonContainer: {
    backgroundColor: '#191924',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    flexDirection: 'column',
    paddingBottom: windowWidth * 1,
  },
  darkButton: {
    backgroundColor: '#222331',
    width: 0.9 * windowWidth,
    height: 0.15 * windowWidth,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 0.015* windowWidth,
  },
  doYouTextStyle: {
    color: 'white',
    fontSize: windowWidth * 0.032,
    fontWeight: 'bold',
    alignItems: 'center',
  },
  backContainer: {
    backgroundColor: '#191924',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingBottom: windowWidth * 0.04,
    paddingTop: windowWidth * 0.01,
  },
  backImage: {
    width: windowWidth * 0.06,
    height: windowWidth * 0.06,
    marginLeft: windowWidth * 0.04,
    marginBottom: windowWidth * 0.02,
    justifyContent: 'flex-start',
  },
});

export default styles;
