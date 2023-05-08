import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    paddingLeft: wp('5%'),
    backgroundColor: '#191924',
    paddingTop: wp('10%'),
  },

  textStyle: {
    backgroundColor: '#191924',
    color: 'white',
    fontSize: wp('4%'),
    fontWeight: 'bold',
    paddingLeft: wp('70%'),
    paddingBottom: wp('3%'),
  },

  doYouUseStyle: {
    backgroundColor: '#191924',
    color: 'white',
    fontSize: wp('6%'),
    fontWeight: 'bold',
    textAlign: 'center',
    alignItems: 'center',
    padding: wp('5%'),
    paddingTop: wp('10%'),
  },

  darkButtonContainer: {
    backgroundColor: '#191924',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    alignContent: 'flex-start',
    flexDirection: 'row',
    paddingBottom: wp('90%'),
    paddingLeft: wp('3%'),
    paddingRight: wp('5%'),
  },

  darkButton: {
    backgroundColor: '#222331',
    width: wp('45%'),
    height: wp('20%'),
    borderRadius: wp('2%'),
    justifyContent: 'center',
    alignItems: 'center',
  },

  doYouUseTextStyle: {
    color: 'white',
    fontSize: wp('3.5%'),
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
    paddingTop: wp('1%'),
  },

  backImage: {
    width: wp('7%'),
    height: wp('5%'),
    marginLeft: wp('5%'),
    marginBottom: wp('1%'),
    justifyContent: 'flex-start',
  },
});

export default styles;
