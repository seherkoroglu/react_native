import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    paddingLeft: 0.05 * windowWidth,
    backgroundColor: '#191924',
    paddingTop: 0.1 * windowWidth,
  },
  contentContainer: {
    backgroundColor: '#191924',
    paddingLeft: 0.03 * windowWidth,
    paddingRight: 0.03 * windowWidth,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 1.2 * windowWidth,
  },
  buttonText: {
    color: 'white',
    fontSize: 0.055 * windowWidth,
    fontWeight: 'bold',
    lineHeight: 0.06 * windowWidth,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  imageStyle: {
    backgroundColor: '#191924',
    width: 0.72 * windowWidth,
    height: 0.30 * windowWidth,
    paddingRight: 0.2 * windowWidth,
  },
  textStyle: {
    color: 'white',
    fontSize: 0.045 * windowWidth,
    fontWeight: '300',
    lineHeight: 0.06 * windowWidth,
    paddingLeft: 0.05 * windowWidth,
    paddingRight: 0.05 * windowWidth,
    paddingBottom: 0.35 * windowWidth,
    textAlign: 'center',
  },
  textsStyle: {
    color: 'white',
    fontSize: windowWidth * 0.049,
    fontWeight: '600',
    lineHeight: 0.06 * windowWidth,
    paddingLeft: 0.05 * windowWidth,
    paddingRight: 0.05 * windowWidth,
    paddingTop: 0.08 * windowWidth,
    paddingBottom: 0.09 * windowWidth,
    flexDirection: 'row',
    textAlign: 'center',
  },
  backContainer: {
    backgroundColor: '#191924',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingRight: 0.8 * windowWidth,
    paddingBottom: 0.4 * windowWidth,
    paddingTop: 0.01 * windowWidth,
  },
  backImage: {
    width: 0.07 * windowWidth,
    height: 0.05 * windowWidth,
    marginLeft: 0.05 * windowWidth,
    marginBottom: 0.02 * windowWidth,
    justifyContent: 'flex-start',
  },
});

export default styles;
