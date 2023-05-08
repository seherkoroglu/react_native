import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    paddingLeft: 0.04 * width,
    backgroundColor: '#191924',
    paddingTop: 0.1 * width,

  },
  textStyle: {
    backgroundColor: '#191924',
    color: 'white',
    fontSize: 0.040 * width,
    fontWeight: 'bold',
    paddingLeft: 0.75 * width,
  },
  doYouStyle: {
    backgroundColor: '#191924',
    color: 'white',
    fontSize: 0.05 * width,
    fontWeight: 'bold',
    lineHeight: 0.07 * width,
    paddingHorizontal: 0.1 * width,
    textAlign: 'center',
    paddingTop: 0.1 * width,
    paddingBottom: 0.2 * width,
    
  },
  buttonContainer: {
    backgroundColor: '#191924',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    flexDirection: 'column',
    paddingBottom: 1 * width,
  },
  darkButton: {
    backgroundColor: '#222331',
    width: 0.9 * width,
    height: 0.15 * width,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 0.01 * width,
    paddingHorizontal: 0.08 * width,
  },
  doYouTextStyle: {
    color: 'white',
    fontSize: 0.039 * width,
    fontWeight: 'bold',
    alignItems: 'center',
  },
  backContainer: {
    backgroundColor: '#191924',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingBottom: 0.04 * width,
    paddingTop: 0.01 * width,
  },
  backImage: {
    width: 0.07 * width,
    height: 0.05 * width,
    marginLeft: 0.05 * width,
    marginBottom: 0.015 * width,
    justifyContent: 'flex-start',
  },
});

export default styles;
