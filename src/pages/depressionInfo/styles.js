import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    paddingLeft: 20,
    backgroundColor: '#191924',
    paddingTop: height * 0.09,
  },
  contentContainer: {
    flex: 1,
    backgroundColor: '#191924',
    paddingLeft: width * 0.05,
    paddingRight: width * 0.05,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: height * 0.13,
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
    width: width * 0.5,
    height: height * 0.23,
    paddingRight: width * 0.3,
  },
  textStyle: {
    color: 'white',
    fontSize: width * 0.045,
    fontWeight: '300',
    lineHeight: height * 0.03,
    paddingLeft: width * 0.05,
    paddingRight: width * 0.05,
    paddingBottom: height * 0.12,
    textAlign: 'center',
  },
  textsStyle: {
    color: 'white',
    fontSize: width * 0.055,
    fontWeight: '600',
    lineHeight: height * 0.035,
    paddingLeft: width * 0.05,
    paddingRight: width * 0.05,
    paddingTop: height * 0.03,
    paddingBottom: height * 0.03,
    flexDirection: 'row',
    textAlign: 'center',
  },
  backContainer: {
    backgroundColor: '#191924',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingRight: width * 0.6,
    paddingBottom: height * 0.12,
    paddingTop: height * 0.01,
  },
  backImage: {
    width: width * 0.05,
    height: height * 0.03,
    marginLeft: width * 0.04,
    marginBottom: height * 0.01,
    justifyContent: 'flex-start',
  },
});

export default styles;
