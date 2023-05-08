import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: width * 0.05,
    backgroundColor: '#191924',
    paddingTop: width * 0.1,
   
  },

  textStyle: {
    backgroundColor: '#191924',
    color: 'white',
    fontSize: width * 0.039,
    fontWeight: 'bold',
    paddingLeft: width * 0.74,
    paddingBottom: width * 0.02,
  },

  haveYouEverStyle: {
    backgroundColor: '#191924',
    color: 'white',
    fontSize: width * 0.06,
    fontWeight: 'bold',
    paddingTop: width * 0.05,
    textAlign: 'center',
    paddingBottom: width * 0.05,
  },

  darkButtonContainer: {
    backgroundColor: '#191924',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'row',
    paddingHorizontal: width * 0.03,
    paddingBottom: width * 0.9,
  },
  
  darkButton: {
    backgroundColor: '#222331',
    width: width * 0.46,
    height: width * 0.2,
    borderRadius: 9,
    justifyContent: 'center',
    alignItems: 'center',
  },

  haveYouEverTextStyle: {
    color: 'white',
    fontSize: width * 0.04,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },

  backContainer: {
    backgroundColor: '#191924',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingTop: width * 0.01,
    paddingBottom: width * 0.05,

  },

  backImage: {
    width: width * 0.07,
    height: width * 0.05,
    marginLeft: width * 0.05,
    marginBottom: width * 0.01,
    justifyContent: 'flex-start',
  },
});

export default styles;
