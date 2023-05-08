import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    paddingLeft: 20,
    backgroundColor: '#191924',
    paddingTop: width * 0.1,
  },

  textStyle: {
    backgroundColor: '#191924',
    color: 'white',
    fontSize: 0.039 * width,
    fontWeight: 'bold',
    paddingLeft: width * 0.75,
    paddingBottom: width * 0.05,
  },

  doYouStyle: {
    backgroundColor: '#191924',
    color: 'white',
    fontSize: width * 0.06,
    fontWeight: 'bold',
    lineHeight: width * 0.07,
    paddingLeft: width * 0.1,
    paddingRight: width * 0.1,
    textAlign: 'center',
    paddingBottom: width * 0.04,
  },

  buttonContainer: {
    backgroundColor: '#191924',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    paddingTop: width * 0.1,
    flexDirection: 'column',
    paddingBottom: width * 1.5,
  },

  darkButton: {
    backgroundColor: '#222331',
    width: 0.9 * width,
    height: 0.12 * width,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 0.01* width,
  },

  doYouTextStyle: {
    color: 'white',
    fontSize: width * 0.04,
    fontWeight: 'bold',
    alignItems: 'center',
  },

  backContainer: {
    backgroundColor: '#191924',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingTop: width * 0.01,
  },

  backImage: {
    width: width * 0.07,
    height: width * 0.05,
    marginLeft: width * 0.04,
    marginBottom: width * 0.01,
    justifyContent: 'flex-start',
  },
});

export default styles;
