import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    paddingLeft: 15,
    backgroundColor: '#191924',
    paddingTop: width * 0.1,
  },

  textStyle: {
    backgroundColor: '#191924',
    color: 'white',
    fontSize: width * 0.040,
    fontWeight: 'bold',
    paddingLeft: width * 0.70,
    
  },

  doYouStyle: {
    backgroundColor: '#191924',
    color: 'white',
    fontSize: 0.06 * width,
    fontWeight: 'bold',
    lineHeight: 0.08 * width,
    paddingLeft: 0.1 * width,
    paddingRight: 0.1 * width,
    textAlign: 'center',
    paddingBottom: 0.04 * width,
    paddingTop: 0.1 * width,
  },

  buttonContainer: {
    flex: 1,
    backgroundColor: '#191924',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    backgroundColor: '#191924',
    flexDirection: 'column',
    paddingBottom: width * 0.3,
 
  },

  darkButton: {
    backgroundColor: '#222331',
    width: width * 0.9,
    height: width * 0.12,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: width * 0.01,
    paddingHorizontal: width * 0.08,
  },

  doYouTextStyle: {
    color: 'white',
    fontSize: width * 0.035,
    fontWeight: 'bold',
    AlignItems: 'center',
    textAlign: 'center',
  },

  redButtonContainer: {
    flex: 1,
    backgroundColor: '#191924',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    flexDirection: 'column',
    paddingTop: width * 0.2,
    paddingBottom: width * 0.25,
  },

  buttonText: {
    color: 'white',
    fontSize: width * 0.045,
    fontWeight: 'bold',
    lineHeight: width * 0.06,
    textAlign: 'center',
    paddingTop: width * 0.01,
    alignItems: 'center',
    justifyContent: 'center',
  },

  backContainer: {
    backgroundColor: '#191924',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingTop: width * 0.01,
   
   
  },

  backImage: {
    backgroundColor: '#191924',
    width: width * 0.07,
    height: width * 0.05,
    marginLeft: width * 0.04,
    marginBottom: width * 0.01,
    justifyContent: 'flex-start',
    marginTop: width * 0.01,
   
  },
});

export default styles;
