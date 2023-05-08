import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    paddingLeft: 20,
    backgroundColor: '#191924',
    paddingTop: width * 0.1,
  },
  contentContainer: {
 
    backgroundColor: '#191924',
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: width * 0.7,
  },
  buttonText: {
    color: 'white',
    fontSize: width * 0.05,
    fontWeight: 'bold',
    lineHeight: width * 0.05,
  
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageStyle: {
    backgroundColor: '#191924',
    width: width * 0.55,
    height: width * 0.30,
  },
  textStyle: {
    color: 'white',
    fontSize: width * 0.05,
    fontWeight: '300',
    lineHeight: width * 0.07,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: width * 0.07,
    paddingBottom: width * 0.1,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  textsStyle: {
    color: 'white',
    fontSize: width * 0.06,
    fontWeight: '600',
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: width * 0.05,
    paddingBottom: width * 0.01,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    textAlign: 'center',
  },
  backContainer: {
    backgroundColor: '#191924',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingRight: width * 0.4,
    paddingBottom: width * 0.19,
    paddingTop: width * 0.01,
  },
  backImage: {
    width: width * 0.07,
    height: width * 0.05,
    marginLeft: 20,
    justifyContent: 'flex-start',
  },
});

export default styles;
