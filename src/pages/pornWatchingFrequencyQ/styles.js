import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    paddingLeft: 20,
    backgroundColor: '#191924',
    paddingTop: height * 0.1,
    paddingBottom: height * 0.016,
  },

  textStyle: {
    backgroundColor: '#191924',
    color: 'white',
    fontSize: width * 0.037,
    fontWeight: 'bold',
    paddingLeft: width * 0.75,
    paddingBottom: height * 0.05,
  },

  doYouStyle: {
    backgroundColor: '#191924',
    color: 'white',
    fontSize: width * 0.06,
    fontWeight: 'bold',
    lineHeight: width * 0.09,
    paddingHorizontal: width * 0.1,
    textAlign: 'center',
    paddingBottom: width * 0.04,
  },
  buttonContainer: {
    backgroundColor: '#191924',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    flexDirection: 'column',
    paddingBottom: height * 0.5,
    paddingTop: height * 0.01,
  },

  darkButton: {
    backgroundColor: '#222331',
    width: 0.9 * width,
    height: 0.07 * height,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 0.01* height,
  },

  doYouTextStyle: {
    color: 'white',
    fontSize: width * 0.04,
    fontWeight: 'bold',
    alignItems: 'center',
    marginVertical: height * 0.01,
  },

  backContainer: {
    backgroundColor: '#191924',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },

  backImage: {
    width: width * 0.05,
    height: height * 0.03,
    marginLeft: width * 0.05,
    marginBottom: height * 0.01,
    justifyContent: 'flex-start',
  },
});

export default styles;
