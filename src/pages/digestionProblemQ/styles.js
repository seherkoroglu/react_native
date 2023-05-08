import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    paddingLeft: windowWidth * 0.05,
    backgroundColor: '#191924',
    paddingTop: windowWidth * 0.1,
  },

  textStyle: {
    backgroundColor: '#191924',
    color: 'white',
    fontSize: windowWidth * 0.037,
    fontWeight: 'bold',
    paddingLeft: windowWidth * 0.76,
    paddingBottom: windowWidth * 0.02,
  },

  haveYouEverStyle: {
    backgroundColor: '#191924',
    color: 'white',
    fontSize: windowWidth * 0.055,
    fontWeight: 'bold',
    paddingVertical: windowWidth * 0.04,
    paddingHorizontal: windowWidth * 0.1,
    textAlign: 'center',
  },

  darkButtonContainer: {
    backgroundColor: '#191924',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    alignContent: 'flex-start',
    flexDirection: 'row',
    paddingBottom: windowWidth * 1,
    paddingHorizontal: windowWidth * 0.03,
  },

  darkButton: {
    backgroundColor: '#222331',
    width: windowWidth * 0.46,
    height: windowWidth * 0.2,
    borderRadius: 9,
    justifyContent: 'center',
    alignItems: 'center',
  
  },

  haveYouEverTextStyle: {
    color: 'white',
    fontSize: windowWidth * 0.04,
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
    paddingBottom: windowWidth * 0.06,
    paddingTop: windowWidth * 0.01,
  },

  backImage: {
    width: windowWidth * 0.07,
    height: windowWidth * 0.05,
    marginLeft: windowWidth * 0.04,
    marginBottom: windowWidth * 0.01,
    justifyContent: 'flex-start',
  },
});

export default styles;
