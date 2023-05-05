import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    paddingLeft: 0.05 * width,
    backgroundColor: '#191924',
    paddingTop: 0.10 * height,
    paddingBottom: 0.025 * height,
  },
  textStyle: {
    backgroundColor: '#191924',
    color: 'white',
    fontSize: 0.020 * height,
    fontWeight: 'bold',
    paddingLeft: 0.725 * width,
  },
  doYouStyle: {
    backgroundColor: '#191924',
    color: 'white',
    fontSize: 0.025 * height,
    fontWeight: 'bold',
    lineHeight: 0.040 * height,
    paddingHorizontal: 0.1 * width,
    textAlign: 'center',
    paddingBottom: 0.04 * height,
    paddingTop: 0.04 * height,
  },
  buttonContainer: {
    backgroundColor: '#191924',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    flexDirection: 'column',
    paddingBottom: 0.60 * height,
  },
  darkButton: {
    backgroundColor: '#222331',
    width: 0.9 * width,
    height: 0.065 * height,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 0.01 * height,
  },
  doYouTextStyle: {
    color: 'white',
    fontSize: 0.02 * height,
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
    width: 0.05 * width,
    height: 0.05 * width,
    marginLeft: 0.05 * width,
    marginBottom: 0.015 * height,
    justifyContent: 'flex-start',
  },
});

export default styles;
