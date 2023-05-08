import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    paddingLeft: width * 0.05,
    backgroundColor: '#191924',
    paddingTop: width * 0.1,
  },

  textStyle: {
    backgroundColor: '#191924',
    color: 'white',
    fontSize: width * 0.039,
    fontWeight: 'bold',
    paddingLeft: width * 0.75,
    paddingBottom: width * 0.05,

  },

  doYouStyle: {
    backgroundColor: '#191924',
    color: 'white',
    fontSize: width * 0.05,
    fontWeight: 'bold',
    lineHeight: width * 0.05,
    padding: width * 0.05,
    textAlign: 'center',
  },

  buttonContainer: {
    backgroundColor: '#191924',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    paddingTop: width * 0.1,
    flexDirection: 'column',
    paddingBottom: width * 1,

  },


  darkButton: {
    backgroundColor: '#222331',
    width: width * 0.9,
    height: width * 0.12,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },

  doYouTextStyle: {
    color: 'white',
    fontSize: width * 0.035,
    fontWeight: 'bold',
    alignItems: 'center',
  },
  redButtonContainer: {
    flex: 1,
    backgroundColor: '#191924',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    flexDirection: 'column',
    paddingBottom: width * 0.05,

  },
  buttonText: {
    color: 'white',
    fontSize: width * 0.05,
    fontWeight: 'bold',
    lineHeight: width * 0.05,
    textAlign: 'center',
    paddingTop: width * 0.02,
    alignItems: 'center',
    justifyContent: 'center',
  },

  inputContainer: {
    backgroundColor: '#222331',
    width: width * 0.9,
    height: height * 0.07,
    borderRadius: 5,
    marginTop: height * 0.02,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#71727a',
    borderWidth: 0.6,
    marginBottom: height * 0.1,


  },
  input: {
    color: 'white',
    fontSize: width * 0.04,
    fontWeight: '400',
    marginLeft: width * 0.05,
  },
  backContainer: {
    backgroundColor: '#191924',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingTop: width * 0.01,


  },

  backImage: {
    width: width * 0.06,
    height: width * 0.06,
    marginLeft: width * 0.05,
    marginBottom: width * 0.02,
    justifyContent: 'flex-start',
  },

});

export default styles;
