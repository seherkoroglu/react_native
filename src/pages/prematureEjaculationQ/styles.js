import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    paddingLeft: 0.04 * width,
    backgroundColor: '#191924',
    paddingTop: 0.1* width,
  },

  textStyle: {
    backgroundColor: '#191924',
    color: 'white',
    fontSize: 0.04 * width,
    fontWeight: 'bold',
    paddingLeft: 0.75 * width,
   
  },

  doYouStyle: {
    backgroundColor: '#191924',
    color: 'white',
    fontSize: 0.055 * width,
    fontWeight: 'bold',
    lineHeight: 0.07* width,
    paddingLeft: 0.1 * width,
    paddingRight: 0.1 * width,
    textAlign: 'center',
    paddingTop: 0.07 * width,
  },

  buttonContainer: {
    backgroundColor: '#191924',
    alignItems: 'center',
    paddingTop: 0.05 * width,
    flexDirection: 'column',
    paddingBottom: 3 * width,
  },

  doYouContainer: {
    backgroundColor: '#191924',
    alignItems: 'center',
    paddingBottom: 0.05 * width,
  },

  darkButton: {
    backgroundColor: '#222331',
    width: 0.9 * width,
    height:  0.13 * width,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 0.01 * width,
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
    paddingBottom: 0.01 * width,
  },

  backImage: {
    width: 0.06 * width,
    height: 0.06 * width,
    marginLeft: 0.05 * width,
    justifyContent: 'flex-start',
  },
});

export default styles;
