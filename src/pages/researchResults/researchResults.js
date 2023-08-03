import React from 'react';
import {StyleSheet, View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import BoldRectangle from '/Users/main/KMClone/src/components/boldRectangle.js';
import RedButton from '/Users/main/KMClone/src/components/redButton.js';
import {useState} from 'react';
import styles from '/Users/main/KMClone/src/pages/researchResults/styles.js';
import { connect } from 'react-redux';
import { continueAction } from '../../actions';


const ResearchResults = ({navigation, continuePressed, continueAction}) => {

  const handleContinue = () => {
    continueAction();
    navigation.navigate('peRate')
  }
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
       <Image style={styles.backImage} source={require('/Users/main/KMClone/src/images/back.png')}/>
       </TouchableOpacity>
       </View>
    );
    };
      
    const renderContentContainer = () => {
      return (
      <View style = {styles.contentContainer}>
        <Image style={styles.imageStyle} source={require('/Users/main/KMClone/src/images/Group.png')} />
        <Text style ={styles.textsStyle}>Wake up with determination, go to bed with satisfaction</Text>
        <Text style ={styles.textStyle}>In a research published in British Journal of General Practice, 
        after 6 months of regular Kegel exercises, 
        40.0% of the participants attained normal function, 34.5% participants had improved erectile function.</Text>

        <TouchableOpacity onPress={handleContinue}>
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

  const mapStateToProps = (state) => ({
    continuePressed: state.continuePressed, 
  });

  const mapDispatchToProps = (dispatch) => ({
    continueAction: () => dispatch(continueAction()), 
  });

  export default connect(mapStateToProps, mapDispatchToProps)(ResearchResults);