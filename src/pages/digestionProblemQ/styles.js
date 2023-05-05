import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    paddingLeft: windowWidth * 0.05,
    backgroundColor: '#191924',
    paddingTop: windowHeight * 0.12,
    paddingBottom: windowHeight * 0.01,
  },

  textStyle: {
    backgroundColor: '#191924',
    color: 'white',
    fontSize: windowWidth * 0.037,
    fontWeight: 'bold',
    paddingLeft: windowWidth * 0.75,
    paddingBottom: windowHeight * 0.02,
  },

  haveYouEverStyle: {
    backgroundColor: '#191924',
    color: 'white',
    fontSize: windowWidth * 0.055,
    fontWeight: 'bold',
    paddingVertical: windowHeight * 0.04,
    paddingHorizontal: windowWidth * 0.1,
    textAlign: 'center',
  },

  koyuButtonContainer: {
    backgroundColor: '#191924',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    alignContent: 'flex-start',
    flexDirection: 'row',
    paddingBottom: windowHeight * 0.3,
    paddingHorizontal: windowWidth * 0.03,
  },

  koyuButon: {
    backgroundColor: '#222331',
    width: windowWidth * 0.46,
    height: windowHeight * 0.09,
    borderRadius: windowWidth * 0.02,
    justifyContent: 'center',
    alignItems: 'center',
  },

  haveYouEverTextStyle: {
    color: 'white',
    fontSize: windowWidth * 0.03,
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
    width: windowWidth * 0.05,
    height: windowHeight * 0.03,
    marginLeft: windowWidth * 0.05,
    marginBottom: windowHeight * 0.01,
    justifyContent: 'flex-start',
  },
});

export default styles;
