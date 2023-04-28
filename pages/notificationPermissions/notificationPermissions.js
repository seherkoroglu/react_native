import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import BoldRectangle from '../components/boldRectangle';
import RedButton from '../components/redButton';
import {useState} from 'react';
import styles from '.../pages/notificationPermissions/styles';
import ErectionProblemQ from '.../pages/erectionProblemQ/erectionProblemQ';

const NotificationPermissions = ({navigation}) => {
  const [select, setSelect] = useState(false);

  const renderProgressBar = () => {
    return (
      <>
      <View style= {styles.container}>
        <BoldRectangle />
        <View style = {styles.backContainer}>
        <TouchableOpacity onPress={() => {
          navigation.goBack();
        }}>
        <Image style={styles.backImage} source={require('../images/back.png')}/>
        </TouchableOpacity>
        </View>
      </View>
      </>
      );
    };
     

      const renderImage = () => {
        return (
          <>
      <View style = {styles.imageContainer}>
        <Image style={styles.image}  source={require('../images/notif.png')}/>
      </View>
      </>
      );
    };

    const renderText = () => {
      return (
      <View style = {styles.textContainer}>
        <Text style={styles.textStyles}>Allow notifications to get the best tips on sexual health</Text>
        <Text style={styles.textStyles}></Text>
        <Text style={styles.textStyle}>Users who allow notifications are more successful in achieving their goals </Text>
        <Text style={styles.textStyle}></Text>
      </View>
      );
    };

    const renderButtons = () => {
      return (
      <View style = {styles.buttonAndTextContainer}>
        <TouchableOpacity>
        <RedButton>
          <Text style = {styles.buttonTextStyle}>Turn On Notifications</Text>
        </RedButton>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('erectionPromlemQ')} >
        <Text style= {styles.maybeLater}>Maybe later</Text>
        </TouchableOpacity>
      </View>
      );
    };
        
  return (
    <>
    {renderProgressBar()}
    {renderImage()}
    {renderText()}
    {renderButtons()}
    </>
  );
  }



export default NotificationPermissions;