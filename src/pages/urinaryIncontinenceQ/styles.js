import { StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    paddingLeft: 20,
    backgroundColor: '#191924',
    paddingTop: 100,
    paddingBottom: 16,
  },
  textStyle: {
    backgroundColor: '#191924',
    color: 'white',
    fontSize: screenWidth * 0.04,
    fontWeight: 'bold',
    paddingLeft: screenWidth * 0.75,
    paddingBottom: screenHeight * 0.015,
  },
  haveYouEverStyle: {
    backgroundColor: '#191924',
    color: 'white',
    fontSize: screenWidth * 0.06,
    fontWeight: 'bold',
    lineHeight: screenWidth * 0.09,
    paddingHorizontal: screenWidth * 0.1,
    textAlign: 'center',
    paddingBottom: screenWidth * 0.04,
    paddingTop: screenWidth * 0.1,
  },
  darkButtonContainer: {
    backgroundColor: '#191924',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    alignContent: 'flex-start',
    flexDirection: 'row',
    paddingBottom: screenHeight * 0.5,
    paddingLeft: screenWidth * 0.02,
    paddingRight: screenWidth * 0.02,
  },
  darkButton: {
    backgroundColor: '#222331',
    width: screenWidth * 0.46,
    height: screenHeight * 0.09,
    borderRadius: 9,
    justifyContent: 'center',
    alignItems: 'center',
    margin: screenWidth * 0.01,
  },
  haveYouEverTextStyle: {
    color: 'white',
    fontSize: screenWidth * 0.04,
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
    width: screenWidth * 0.06,
    height: screenWidth * 0.06,
    marginLeft: screenWidth * 0.04,
    marginBottom: screenHeight * 0.01,
    justifyContent: 'flex-start',
  },
});

export default styles;
