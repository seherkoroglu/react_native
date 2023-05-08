import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    paddingLeft: width * 0.05,
    backgroundColor: '#191924',
    paddingTop: width * 0.1,
  },
  contentContainer: {
    flex: 1,
    backgroundColor: '#191924',
    paddingLeft: width * 0.02,
    paddingRight: width * 0.02,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: width * 0.20,
   
  },

  buttonText: {
    color: 'white',
    fontSize: width * 0.050,
    fontWeight: 'bold',
    lineHeight: width * 0.06,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },

  imageStyle: {
    backgroundColor: '#191924',
    width: width * 0.4,
    height: width * 0.5,
    paddingRight: width * 0.2,
  },

  textStyle: {
    color: 'white',
    fontSize: width * 0.045,
    fontWeight: '300',
    lineHeight: width * 0.07,
    paddingLeft: width * 0.03,
    paddingRight: width * 0.03,
    paddingBottom: width * 0.2,
    textAlign: 'center',
  },

  textsStyle: {
    color: 'white',
    fontSize: width * 0.055,
    fontWeight: '600',
    lineHeight: width * 0.07,
    paddingLeft: width * 0.03,
    paddingRight: width * 0.03,
    paddingTop: width * 0.1,
    paddingBottom: width * 0.06,
    flexDirection: 'row',
    textAlign: 'center',
  },

  backContainer: {
    backgroundColor: '#191924',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingRight: width * 0.3,
    paddingBottom: width * 0.1,
    paddingTop: width * 0.01,
  },

  backImage: {
    width: width * 0.07,
    height: width * 0.05,
    marginLeft: width * 0.04,
    marginBottom: width * 0.01,
    justifyContent: 'flex-start',
  },
});

export default styles;
