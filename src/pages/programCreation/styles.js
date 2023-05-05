import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  textStyle: {
    color: '#fff',
    fontSize: width * 0.06, 
    fontWeight: '500',
    textAlign: 'center',
    marginVertical: height * 0.03, 
  },
  lastStyle: {
    color: '#fff',
    fontSize: width * 0.05,
    fontWeight: '300',
    textAlign: 'left',
    paddingBottom: height * 0.01,
  },
  lastView: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    backgroundColor: '#191924',
    flexDirection: 'column',
    paddingBottom: height * 0.02,
  },
});

export default styles;
