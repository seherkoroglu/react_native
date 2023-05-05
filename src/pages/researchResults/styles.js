import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    paddingLeft: 20,
    backgroundColor: '#191924',
    paddingTop: height * 0.1,
  },
  contentContainer: {
 
    backgroundColor: '#191924',
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: height * 0.5,
  },
  buttonText: {
    color: 'white',
    fontSize: width * 0.05,
    fontWeight: 'bold',
    lineHeight: height * 0.05,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: height * 0.01,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageStyle: {
    backgroundColor: '#191924',
    width: width * 0.57,
    height: height * 0.14,
  },
  textStyle: {
    color: 'white',
    fontSize: width * 0.05,
    fontWeight: '300',
    lineHeight: height * 0.04,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: height * 0.05,
    paddingBottom: height * 0.05,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  textsStyle: {
    color: 'white',
    fontSize: width * 0.06,
    fontWeight: '600',
    lineHeight: height * 0.04,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: height * 0.03,
    paddingBottom: height * 0.01,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    textAlign: 'center',
  },
  backContainer: {
    backgroundColor: '#191924',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingRight: width * 0.4,
    paddingBottom: height * 0.12,
    paddingTop: height * 0.01,
  },
  backImage: {
    width: width * 0.05,
    height: height * 0.03,
    marginLeft: 20,
    justifyContent: 'flex-start',
  },
});

export default styles;
