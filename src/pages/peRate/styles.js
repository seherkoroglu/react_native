import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const standardWidth = 375;
const standardHeight = 812;

const styles = StyleSheet.create({
  container: {
    paddingLeft: width * 0.05,
    backgroundColor: '#191924',
    paddingTop: height * 0.1,
   paddingBottom: height * 0.01,
  },
  contentContainer: {
    backgroundColor: '#191924',
    paddingLeft: '2.5%',
    paddingRight: '2.5%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: height * 0.47,
  },
  buttonText: {
    color: 'white',
    fontSize: width * 0.055,
    fontWeight: 'bold',
    lineHeight: height * 0.04,
    paddingLeft: width * 0.05,
    paddingRight: width * 0.05,
    paddingTop: height * 0.015,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  imageStyle: {
    backgroundColor: '#191924',
    width: width * 0.28,
    height: height * 0.26,
    paddingRight: width * 0.25,
  },
  textStyle: {
    color: 'white',
    fontSize: width * 0.05,
    fontWeight: '300',
    lineHeight: height * 0.037,
    paddingLeft: width * 0.05,
    paddingRight: width * 0.05,
    paddingTop: height * 0.02,
    paddingBottom: height * 0.1,
    textAlign: 'center',
  },
  textsStyle: {
    color: 'white',
    fontSize: width * 0.06,
    fontWeight: '600',
    lineHeight: height * 0.037,
    paddingLeft: width * 0.05,
    paddingRight: width * 0.05,
    paddingTop: height * 0.04,
    paddingBottom: height * 0.01,
    flexDirection: 'row',
    textAlign: 'center',
  },
  backContainer: {
    backgroundColor: '#191924',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingRight: width * 0.53,
    paddingBottom: '20%',
  },
  backImage: {
    width: width * 0.066,
    height: height * 0.031,
    marginLeft: width * 0.053,
    justifyContent: 'flex-start',
  },
});

export default styles;
