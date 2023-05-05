import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    paddingLeft: 0.05 * width,
    backgroundColor: '#191924',
    paddingTop: 0.090 * height,
    paddingBottom: 0.025 * height,
  },

  textStyle: {
    backgroundColor: '#191924',
    color: 'white',
    fontSize: 0.04 * width,
    fontWeight: 'bold',
    paddingLeft: 0.7 * width,
   
  },

  doYouStyle: {
    backgroundColor: '#191924',
    color: 'white',
    fontSize: 0.055 * width,
    fontWeight: 'bold',
    lineHeight: 0.045 * height,
    paddingLeft: 0.1 * width,
    paddingRight: 0.1 * width,
    textAlign: 'center',
  },

  buttonContainer: {
    backgroundColor: '#191924',
    alignItems: 'center',
    paddingTop: 0.05 * height,
    flexDirection: 'column',
    paddingBottom: 0.5 * height,
  },

  doYouContainer: {
    backgroundColor: '#191924',
    alignItems: 'center',
    paddingBottom: 0.05 * height,
  },

  darkButton: {
    backgroundColor: '#222331',
    width: 0.9 * width,
    height: 0.06 * height,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 0.01 * height,
  },

  doYouTextStyle: {
    color: 'white',
    fontSize: 0.04 * width,
    fontWeight: 'bold',
    alignItems: 'center',
  },

  backContainer: {
    backgroundColor: '#191924',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },

  backImage: {
    width: 0.06 * width,
    height: 0.06 * width,
    marginLeft: 0.05 * width,
    justifyContent: 'flex-start',
  },
});

export default styles;
