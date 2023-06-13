import React from 'react';
import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';
import styles from '../../../../../modules/common/components/goals/styles';

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'space-between',
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').width,
        paddingTop: Dimensions.get('window').width * 0.1,
        backgroundColor: '#edf3fb',
    
      },
      textStyle: {
        fontSize: 20,
        textAlign: 'center',
        paddingTop: Dimensions.get('window').width * 0.2,
        marginHorizontal: Dimensions.get('window').width * 0.09,
        lineHeight: 26,
      },
      goalCard: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        textAlign: 'center',
      },
      goals: {
        flex: 2.2,
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: Dimensions.get('window').width * 0.4,
        textAlign: 'center',
        backgroundColor: '#edf3fb',
  },
      options: {
          fontSize: 12,
          textAlign: 'center',
          paddingTop: Dimensions.get('window').width * 0.02,
          paddingBottom: Dimensions.get('window').width * 0.02,
          fontWeight: 'bold',
          color: '#000000',
          },

    progress: {
        alignItems: 'center',
        justifyContent: 'center',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').width,
      
    },

    image: {
        width: Dimensions.get('window').width * 0.4,
        height: Dimensions.get('window').width * 0.2,
        resizeMode: 'contain',
        
    },

    goal: {
    backgroundColor: 'white',
    justifyContent: 'center',
    width: Dimensions.get('window').width * 0.25,
    height: Dimensions.get('window').width * 0.50,
    marginHorizontal: Dimensions.get('window').width * 0.02,
    marginVertical: Dimensions.get('window').width * 0.02,
    paddingHorizontal: Dimensions.get('window').width * 0.04,
    borderRadius: 20,
    alignItems: 'center',
    },

  
  

});

export default style;