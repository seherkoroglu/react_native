import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    paddingLeft: width * 0.05,
    backgroundColor: '#191924',
    paddingTop: height * 0.09,
  },
  contentContainer: {
    flex: 1,
    backgroundColor: '#191924',
    paddingLeft: width * 0.02,
    paddingRight: width * 0.02,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: height * 0.15,
    paddingTop: height * 0.01,
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
    width: width * 0.4,
    height: height * 0.2,
    paddingRight: width * 0.2,
  },

  textStyle: {
    color: 'white',
    fontSize: width * 0.045,
    fontWeight: '300',
    lineHeight: height * 0.03,
    paddingLeft: width * 0.03,
    paddingRight: width * 0.03,
    paddingBottom: height * 0.1,
    textAlign: 'center',
  },

  textsStyle: {
    color: 'white',
    fontSize: width * 0.055,
    fontWeight: '600',
    lineHeight: height * 0.035,
    paddingLeft: width * 0.03,
    paddingRight: width * 0.03,
    paddingTop: height * 0.03,
    paddingBottom: height * 0.02,
    flexDirection: 'row',
    textAlign: 'center',
  },

  backContainer: {
    backgroundColor: '#191924',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingRight: width * 0.3,
    paddingBottom: height * 0.1,
    paddingTop: height * 0.01,
  },

  backImage: {
    width: width * 0.05,
    height: height * 0.025,
    marginLeft: width * 0.04,
    marginBottom: height * 0.01,
    justifyContent: 'flex-start',
  },
});

export default styles;
