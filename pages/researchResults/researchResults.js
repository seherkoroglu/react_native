import React from 'react';
import {StyleSheet, View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import BoldRectangle from '../components/boldRectangle';
import RedButton from '../components/redButton';
import {useState} from 'react';
import styles from '.../pages/researchResults/styles';

const ResearchResults = ({navigation}) => {
  const [select, setSelect] = useState(false);
  const [selected, setSelected] = useState('');

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
      <View style={styles.backContainer}>
      <TouchableOpacity onPress={() => {
         navigation.goBack();
       }}>
       <Image style={styles.backImage} source={require('../images/back.png')}/>
       </TouchableOpacity>
       </View>
    );
    };
      
    const renderContentContainer = () => {
      return (
      <View style = {styles.contentContainer}>
        <Image style={styles.imageStyle} source={require('../images/Group.png')} />
        <Text style ={styles.textsStyle}>Wake up with determination, go to bed with satisfaction</Text>
        <Text style ={styles.textStyle}>In a research published in British Journal of General Practice, 
        after 6 months of regular Kegel exercises, 
        40.0% of the participants attained normal function, 34.5% participants had improved erectile function.</Text>

        <TouchableOpacity onPress={() => navigation.navigate('peRate')}>
            <RedButton >
                <Text style = {styles.buttonText}>CONTINUE</Text>
            </RedButton>
        </TouchableOpacity>
        </View>
    );
    };


  return (
    <>
    {renderProgressBar()}
    {renderBackContainer()}
    {renderContentContainer()}
    </>
  );
  };

export default ResearchResults;