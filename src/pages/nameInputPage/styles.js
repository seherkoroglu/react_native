import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191924',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: width * 0.3,
  },
  rectangleContainer: {
    backgroundColor: '#191924',
    alignItems: 'flex-start',
    paddingTop: width * 0.1,
    paddingLeft: width * 0.04,
    flexDirection: 'column',
  },
  inputContainer: {
    backgroundColor: '#222331',
    width: width * 0.8,
    height: width * 0.12,
    borderRadius: 5,
    marginTop: width * 0.02,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#4d4f59',
    borderWidth: 0.6,
    marginBottom: width * 0.18,
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
    lineHeight: width * 0.05,
    paddingLeft: width * 0.3,
    paddingRight: width * 0.1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: width * 0.03,
  },
  backContainer: {
    backgroundColor: '#191924',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingRight: width * 0.2,
    paddingBottom: width * 0.12,
  },
  backImage: {
    width: width * 0.07,
    height: width * 0.05,
    marginLeft: width * 0.04,
    marginTop: width * 0.02,
    marginBottom: width * 0.01,
    justifyContent: 'flex-start',
  },
});

export default styles;
