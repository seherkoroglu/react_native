import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    paddingLeft: 20,
   
    backgroundColor: '#191924',
    paddingTop: height * 0.09,
    paddingBottom: height * 0.01,
  },
  textStyle: {
    backgroundColor: '#191924',
    color: 'white',
    fontSize: width * 0.04,
    fontWeight: 'bold',
    lineHeight: height * 0.06,
    paddingLeft: width * 0.75,
    paddingBottom: height * 0.05,
  },
  ageStyle: {
    backgroundColor: '#191924',
    color: 'white',
    fontSize: width * 0.06,
    fontWeight: 'bold',
    lineHeight: height * 0.06,
    paddingLeft: width * 0.25,
    paddingRight: width * 0.23,
    paddingBottom: height * 0.08,
  },
  buttonContainer: {
    backgroundColor: '#191924',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: height * 0.12,
    flexDirection: 'column',
    paddingBottom: height * 1.1,
  },
  darkButton: {
    backgroundColor: '#222331',
    width: width * 0.8,
    height: height * 0.07,
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
    paddingBottom: height * 0.05,
  },
  backImage: {
    width: width * 0.06,
    height: height * 0.04,
    marginLeft: width * 0.05,
    marginTop: height * 0.01,
  },
});

export default styles;


  