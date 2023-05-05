import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191924',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: height * 0.3,
  },
  rectangleContainer: {
    backgroundColor: '#191924',
    alignItems: 'flex-start',
    paddingTop: height * 0.1,
    paddingLeft: width * 0.05,
    flexDirection: 'column',
  },
  inputContainer: {
    backgroundColor: '#222331',
    width: width * 0.8,
    height: height * 0.05,
    borderRadius: 5,
    marginTop: height * 0.02,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#4d4f59',
    borderWidth: 0.6,
    marginBottom: height * 0.15,
  },
  input: {
    color: 'white',
    fontSize: width * 0.06,
    fontWeight: '500',
    marginLeft: width * 0.04,
  },
  nameStyle: {
    color: 'white',
    fontSize: width * 0.07,
    fontWeight: 'bold',
    fontFamily: 'Avenir',
    paddingLeft: width * 0.1,
    paddingRight: width * 0.1,
  },
  redButtonText: {
    color: 'white',
    fontSize: width * 0.06,
    fontWeight: '500',
    fontFamily: 'Avenir',
    lineHeight: height * 0.05,
    paddingLeft: width * 0.1,
    paddingRight: width * 0.1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: height * 0.01,
  },
  backContainer: {
    backgroundColor: '#191924',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingRight: width * 0.2,
    paddingBottom: height * 0.12,
  },
  backImage: {
    width: width * 0.05,
    height: height * 0.03,
    marginLeft: width * 0.04,
    marginTop: height * 0.01,
    marginBottom: height * 0.01,
    justifyContent: 'flex-start',
  },
});

export default styles;
