import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  
  container: {
    paddingLeft: 0.05 * windowWidth,
    backgroundColor: '#191924',
    paddingTop: 0.1 * windowHeight,
  },

  image: {
    width: 0.40 * windowWidth,
    height: 0.26 * windowHeight,
  },
  imageContainer: {
    flex: 1,
    backgroundColor: '#191924',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 0.1 * windowHeight,
  },

  textStyles: {
    color: 'white',
    fontSize: 0.05 * windowWidth,
    fontWeight: 'bold',
    lineHeight: 0.05 * windowHeight,
    textAlign: 'center',
  },

  textContainer: {
    flex: 1,
    backgroundColor: '#191924',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center', 
    paddingLeft: 0.06 * windowWidth,
    paddingRight: 0.05 * windowWidth,
    paddingBottom: 0.13 * windowHeight,
    paddingTop: 0.1 * windowHeight,
  },

  textStyle: {
    color: 'white',
    fontSize: 0.05 * windowWidth,
    fontWeight: '300',
    lineHeight: 0.04 * windowHeight,
    textAlign: 'center',
  },

  buttonTextStyle: {
    color: 'white',
    alignSelf: 'center',
    fontSize: 0.05 * windowWidth,
    fontWeight: 'bold',
    lineHeight: 0.08 * windowHeight,
  },

  maybeLater: {
    color: 'white',
    paddingBottom: 0.06 * windowHeight,
    fontSize: 0.05 * windowWidth,
    fontWeight: 'bold',
    lineHeight: 0.08 * windowHeight,
  },

  buttonAndTextContainer: {
    flex: 1,
    backgroundColor: '#191924',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 0.13 * windowHeight,

  },
  backContainer: {
    backgroundColor: '#191924',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingRight: 0.15 * windowWidth,
    paddingBottom: 0.1 * windowHeight,
  },

  backImage: {
    width: 0.06 * windowWidth,
    height: 0.06 * windowWidth,
    marginTop: 0.02 * windowHeight,
    justifyContent: 'flex-start',
  },
});

export default styles;
