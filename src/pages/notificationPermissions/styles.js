import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  
  container: {
    paddingLeft: 0.04 * windowWidth,
    backgroundColor: '#191924',
    paddingTop: 0.1 * windowWidth,
  },

  image: {
    width: 0.43 * windowWidth,
    height: 0.65 * windowWidth,
  },
  imageContainer: {
    
    backgroundColor: '#191924',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 0.06* windowWidth,
  },

  textStyles: {
    color: 'white',
    fontSize: 0.05 * windowWidth,
    fontWeight: 'bold',
    lineHeight: 0.07 * windowWidth,
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
    paddingBottom: 0.13 * windowWidth,
    paddingTop: 0.06 * windowWidth,
    
  },

  textStyle: {
    color: 'white',
    fontSize: 0.05 * windowWidth,
    fontWeight: '300',
    lineHeight: 0.07 * windowWidth,
    textAlign: 'center',
  },

  buttonTextStyle: {
    color: 'white',
    alignSelf: 'center',
    fontSize: 0.05 * windowWidth,
    fontWeight: 'bold',
    lineHeight: 0.08 * windowWidth,
  },

  maybeLater: {
    color: 'white',
    paddingBottom: 0.06 * windowWidth,
    fontSize: 0.05 * windowWidth,
    fontWeight: 'bold',
    lineHeight: 0.08 * windowWidth,
  },

  buttonAndTextContainer: {
    flex: 1,
    backgroundColor: '#191924',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 0.13 * windowWidth,
    paddingTop: 0.05 * windowWidth,

  },
  backContainer: {
    backgroundColor: '#191924',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingRight: 0.15 * windowWidth,
    paddingBottom: 0.1 * windowWidth,
  },

  backImage: {
    width: 0.06 * windowWidth,
    height: 0.06 * windowWidth,
    marginTop: 0.02 * windowWidth,
    justifyContent: 'flex-start',
  },
});

export default styles;
