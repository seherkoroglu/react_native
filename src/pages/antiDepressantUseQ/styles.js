import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    paddingLeft: wp('5%'),
    backgroundColor: '#191924',
    paddingTop: hp('10%'),
    paddingBottom: hp('1%'),
  },

  textStyle: {
    backgroundColor: '#191924',
    color: 'white',
    fontSize: wp('3.5%'),
    fontWeight: 'bold',
    paddingLeft: wp('70%'),
    paddingBottom: hp('3%'),
  },

  doYouUseStyle: {
    backgroundColor: '#191924',
    color: 'white',
    fontSize: wp('6%'),
    fontWeight: 'bold',
    textAlign: 'center',
    alignItems: 'center',
    padding: hp('5%'),
  },

  koyuButtonContainer: {
    backgroundColor: '#191924',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    alignContent: 'flex-start',
    flexDirection: 'row',
    paddingBottom: hp('60%'),
    paddingLeft: wp('3%'),
    paddingRight: wp('5%'),
  },

  koyuButon: {
    backgroundColor: '#222331',
    width: wp('45%'),
    height: hp('9%'),
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
    paddingTop: hp('1%'),
  },

  backImage: {
    width: wp('7%'),
    height: hp('3.5%'),
    marginLeft: wp('5%'),
    marginBottom: hp('1%'),
    justifyContent: 'flex-start',
  },
});

export default styles;
