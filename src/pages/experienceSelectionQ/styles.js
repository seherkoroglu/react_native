import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    paddingLeft: 15,
    backgroundColor: '#191924',
    paddingTop: height * 0.08,
    paddingBottom: height * 0.01,
  },

  textStyle: {
    backgroundColor: '#191924',
    color: 'white',
    fontSize: height * 0.020,
    fontWeight: 'bold',
    paddingLeft: width * 0.70,
    
  },

  doYouStyle: {
    backgroundColor: '#191924',
    color: 'white',
    fontSize: height * 0.025,
    fontWeight: 'bold',
    lineHeight: height * 0.060,
    paddingHorizontal: width * 0.1,
    paddingBottom: height * 0.014,
    paddingTop: height * 0.01,
    textAlign: 'center',
  },

  buttonContainer: {
    backgroundColor: '#191924',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    backgroundColor: '#191924',
    flexDirection: 'column',
    paddingBottom: height * 0.25,
    paddingTop: height * 0.07,
  },

  koyuButon: {
    backgroundColor: '#222331',
    width: width * 0.9,
    height: height * 0.07,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: height * 0.01,
    paddingHorizontal: width * 0.08,
  },

  doYouTextStyle: {
    color: 'white',
    fontSize: height * 0.018,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
  },

  redButtonContainer: {
    flex: 1,
    backgroundColor: '#191924',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    flexDirection: 'column',
    paddingTop: height * 0.035,
    paddingBottom: height * 0.25,
  },

  buttonText: {
    color: 'white',
    fontSize: height * 0.025,
    fontWeight: 'bold',
    lineHeight: height * 0.06,
    paddingHorizontal: width * 0.05,
    paddingVertical: height * 0.01,
    alignItems: 'center',
    justifyContent: 'center',
  },

  backContainer: {
    backgroundColor: '#191924',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
   
   
  },

  backImage: {
    backgroundColor: '#191924',
    width: width * 0.09,
    height: height * 0.030,
    marginLeft: width * 0.04,
    marginBottom: height * 0.01,
    justifyContent: 'flex-start',
    marginTop: height * 0.01,
   
  },
});

export default styles;
