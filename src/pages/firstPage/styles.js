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
        paddingBottom: wp('5%'),
       
    },
    image: {
        alignSelf: 'center',
        justifyContent: 'center',
        width: wp('30%'),
        height: wp('30%'),
        marginTop: wp('10%'),
    },
    textStyles: {
        color: 'white',
        alignSelf: 'center',
        fontSize: wp('5%'),
        marginTop: wp('8%'),
        fontWeight: 'bold',
        lineHeight: wp('5%'),
        paddingBottom: wp('0.5%'),
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
        padding: wp('2%'),
        margin: wp('2%'),
    },
    style: {
        paddingBottom: wp('5%'),
        backgroundColor: '#191924',
        paddingTop: wp('15%'),
    },

    button: {
        backgroundColor: '#222331',
        width: wp('86.5%'),
        height: wp('17%'),
        borderRadius: wp('2%'),
        marginVertical: wp('2%'),
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        padding: wp('3%'),
    },
});

export default styles;

