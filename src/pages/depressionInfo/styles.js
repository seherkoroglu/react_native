import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    paddingLeft: 20,
    backgroundColor: '#191924',
    paddingTop: width * 0.1,
  },
  contentContainer: {
    flex: 1,
    backgroundColor: '#191924',
    paddingLeft: width * 0.05,
    paddingRight: width * 0.05,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: width * 0.13,
  },
  buttonText: {
    color: 'white',
    fontSize: width * 0.055,
    fontWeight: 'bold',
    lineHeight: width * 0.06,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  imageStyle: {
    backgroundColor: '#191924',
    width: width * 0.6,
    height: width * 0.6,
    paddingRight: width * 0.3,
  },
  textStyle: {
    color: 'white',
    fontSize: width * 0.045,
    fontWeight: '300',
    lineHeight: width * 0.07,
    paddingLeft: width * 0.05,
    paddingRight: width * 0.05,
    paddingBottom: width * 0.12,
    textAlign: 'center',
  },
  textsStyle: {
    color: 'white',
    fontSize: width * 0.055,
    fontWeight: '600',
    lineHeight: width * 0.07,
    paddingLeft: width * 0.05,
    paddingRight: width * 0.05,
    paddingTop: width * 0.03,
    paddingBottom: width * 0.03,
    flexDirection: 'row',
    textAlign: 'center',
  },
  backContainer: {
    backgroundColor: '#191924',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingRight: width * 0.6,
    paddingBottom: width * 0.12,
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
