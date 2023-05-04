import React from 'react';
import {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import BoldRectangle from '/Users/main/KMClone/src/components/boldRectangle.js';
import NotificationPermissions from '/Users/main/KMClone/src/pages/notificationPermissions/notificationPermissions.js';
import styles from '/Users/main/KMClone/src/pages/selectAgeRange/styles.js';




const SelectAgeRange = ({navigation}) => {
  const [select, setSelect] = useState(false);
  const [selectedAge, setSelectedAge] = useState('');

  const renderProgressBar = () => {
  
    return (
      <>
      <View style= {styles.container}>
    
        <BoldRectangle />
      </View>
      </>
      );
    };

      const renderBackContainer = () => {
        return (
      <View style = {styles.backContainer}>
      <TouchableOpacity onPress={() => {
          navigation.goBack();
        }}>
      <Image 
      style={styles.backImage} source={require('/Users/main/KMClone/src/images/back.png')}/>
      </TouchableOpacity>
        <Text style ={styles.textStyle}>2/19</Text>
      </View>
        );
      };

  const renderOptions = () => {
    return (
      <View style = {styles.buttonContainer}>
        <Text style={styles.ageStyle}>Select age range</Text>
        <KoyuButon navigation={navigation} select={selectedAge === '18-30'} setSelect={() => setSelectedAge('18-30')}>
          <Text style={styles.ageTextStyle}>18-30</Text>
        </KoyuButon>

        <KoyuButon navigation={navigation} select={selectedAge === '31-55'} setSelect={() => setSelectedAge('31-55')}>
          <Text style={styles.ageTextStyle}>31-55</Text>
        </KoyuButon>

        <KoyuButon navigation={navigation} select={selectedAge === '55+'} setSelect={() => setSelectedAge('55+')}>
          <Text style={styles.ageTextStyle}>55+</Text>
        </KoyuButon>
      
      </View>
        
    );
  }

  return (
    <>
    {renderProgressBar()}
    {renderBackContainer()}
    {renderOptions()}
    </>
  );
};
  const KoyuButon = ({ navigation, children, select, setSelect }) => {

    const handlePress = () => {
      setSelect(true);
      setTimeout(() => {
        navigation.navigate('notificationPermissions');
      }, 1500); 
    };
  
    return (
      <View style={styles.koyuButton}>
        <TouchableOpacity
          style={[styles.koyuButon, select ? {backgroundColor: '#4d4f59'} : null]}
          onPress={handlePress}
        >
          {children}
        </TouchableOpacity>
      </View>
    );
  };
  
  



export default SelectAgeRange;
