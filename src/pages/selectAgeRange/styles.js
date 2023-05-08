import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    paddingLeft: 18,
    backgroundColor: '#191924',
    paddingTop: width * 0.1,
  },
  textStyle: {
    backgroundColor: '#191924',
    color: 'white',
    fontSize: width * 0.04,
    fontWeight: 'bold',
    lineHeight: width * 0.06,
    paddingLeft: width * 0.75,
    paddingBottom: width * 0.05,
  },
  ageStyle: {
    backgroundColor: '#191924',
    color: 'white',
    fontSize: width * 0.06,
    fontWeight: 'bold',
    lineHeight: width * 0.06,
    paddingLeft: width * 0.25,
    paddingRight: width * 0.23,
    paddingBottom: width * 0.08,
  },
  buttonContainer: {
    backgroundColor: '#191924',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: width * 0.12,
    flexDirection: 'column',
    paddingBottom: width * 1.3,
  },
  darkButton: {
    backgroundColor: '#222331',
    width: width * 0.82,
    height: width * 0.13,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
  },
  ageTextStyle: {
    color: 'white',
    fontSize: width * 0.04,
    fontWeight: 'bold',
  },
  backContainer: {
    backgroundColor: '#191924',
    flexDirection: 'row',
    paddingBottom: width * 0.05,
  },
  backImage: {
    width: width * 0.07,
    height: width * 0.05,
    marginLeft: width * 0.05,
    marginTop: width * 0.01,
  },
});

export default styles;


  