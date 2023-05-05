import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    paddingLeft: 20,
    backgroundColor: '#191924',
    paddingTop: height * 0.1,
    paddingBottom: height * 0.01,
  },

  textStyle: {
    backgroundColor: '#191924',
    color: 'white',
    fontSize: width * 0.04,
    fontWeight: 'bold',
    paddingLeft: width * 0.75,
  },

  doYouStyle: {
    backgroundColor: '#191924',
    color: 'white',
    fontSize: width * 0.06,
    fontWeight: 'bold',
    lineHeight: height * 0.04,
    paddingLeft: width * 0.1,
    paddingRight: width * 0.1,
    paddingBottom: height * 0.02,
    alignItems: 'center',
    textAlign: 'center',
  },

  buttonContainer: {
    backgroundColor: '#191924',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    flexDirection: 'column',
    paddingBottom: height * 0.4,
  },
  
  koyuButon: {
    backgroundColor: '#222331',
    width: width * 0.9,
    height: height * 0.065,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    margin: width * 0.01,
  },

  doYouTextStyle: {
    color: 'white',
    fontSize: width * 0.04,
    fontWeight: 'bold',
    alignItems: 'center',
  },

  backContainer: {
    backgroundColor: '#191924',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingLeft: width * 0.05,
  },

  backImage: {
    width: width * 0.05,
    height: height * 0.03,
    justifyContent: 'flex-start',
  },

  yazıContainer: {
    backgroundColor: '#191924',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    paddingTop: height * 0.07,
    paddingBottom: height * 0.01,
  },
});

export default styles;
