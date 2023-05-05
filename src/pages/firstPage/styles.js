import { StyleSheet } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Dimensions } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#191924',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: hp('4%'),
       
    },
    image: {
        alignSelf: 'center',
        justifyContent: 'center',
        width: wp('30%'),
        height: wp('30%'),
        marginTop: hp('10%'),
    },
    textStyles: {
        color: 'white',
        alignSelf: 'center',
        fontSize: hp('2.5%'),
        marginTop: hp('5%'),
        fontWeight: 'bold',
        lineHeight: hp('3%'),
        paddingBottom: hp('1%'),
    },
    smallButton: {
        backgroundColor: '#191924',
        width: wp('13%'),
        height: wp('13%'),
        borderRadius: wp('2.5%'),
        justifyContent: 'center',
        alignItems:'center',
        shadowColor: '#191924',
        shadowOffset: { width: 1 , height: 3},
        shadowOpacity: 0.6,
        shadowRadius: 2,
        elevation: 2,
        padding: wp('0.3%'),
        margin: wp('0.2%'),
    },
    style: {
        paddingBottom: hp('4%'),
        backgroundColor: '#191924',
        paddingTop: hp('1%'),
    },

    button: {
        backgroundColor: '#222331',
        width: wp('86.5%'),
        height: hp('8%'),
        borderRadius: wp('2%'),
        marginVertical: hp('0.9%'),
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        padding: wp('3%'),
    },
});

export default styles;

