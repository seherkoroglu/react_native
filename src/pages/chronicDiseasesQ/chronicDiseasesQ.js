


/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, View, Text, Image, TextInput, TouchableOpacity, ScrollView} from 'react-native';
import BoldRectangle from '/Users/main/KMClone/src/components/boldRectangle.js';
import RedButton from '/Users/main/KMClone/src/components/redButton.js';
import {useState} from 'react';
import styles from '/Users/main/KMClone/src/pages/chronicDiseasesQ/styles.js';
import { Dimensions } from 'react-native';
import Header from '../../components/header/header';
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get('window');

const ChronicDiseasesQ = () => {
  const navigation = useNavigation();
  const [selectedGoals, setSelectedGoals] = useState([]);

  const handleSelect = (option) => {
    if (option === "option1") {
      // "None" seçeneği seçildiğinde diğerlerini devre dışı bırak
      if (selectedGoals.includes("option1")) {
        setSelectedGoals([]); // Seçiminizi geri alın
      } else {
        setSelectedGoals([option]);
      }
    } else {
      if (selectedGoals.includes("option1")) {
        setSelectedGoals(selectedGoals.filter((goal) => goal !== "option1"));
      }

      if (selectedGoals.includes(option)) {
        // Seçenek zaten seçiliyse, seçimden kaldır
        setSelectedGoals(selectedGoals.filter((goal) => goal !== option));
      } else {
        // Seçenek seçilmediyse, seçime ekle
        setSelectedGoals([...selectedGoals, option]);
      }
    }
  };

  const data = [
    {
      id: "option1",
      label: "No",
    },
    {
      id: "option2",
      label: "Yes",
    },
  ];
  const renderQuestion = () => 
  <View style = {{ backgroundColor: '#191924'}}>
  <Header
 title="Do you have any chronic diseases?"
/>
</View>
     

    const renderOptions = () => (
      <>
        {data.map((option) => (
          <View style = {{ backgroundColor: '#191924'}}>
            <TouchableOpacity
              key={option.id}
              onPress={() => handleSelect(option.id)}
              disabled={selectedGoals.includes("option1") && option.id !== "option1"}
            >
              <DarkButton
                selected={selectedGoals.includes(option.id)}
                onSelect={() => handleSelect(option.id)}
                disabled={selectedGoals.includes("option1") && option.id !== "option1"}
              >
                <Text style={{ textAlign: "center", color: 'white' }}>{option.label}</Text>
              </DarkButton>
            </TouchableOpacity>
          </View>
        ))}
          <NameInput/>
      
      </>
      
    );
    const isContinueButtonDisabled = selectedGoals.length === 0;

    return (
      <View style={{ flex: 1, backgroundColor: "#191924" }}>
   
          {renderQuestion()}
        
        <ScrollView showsVerticalScrollIndicator={false}
        style={{flex: 1, paddingHorizontal: Dimensions.get('window').width*0.07 }}>
        
          {renderOptions()}
       
        </ScrollView>
      
  
  <TouchableOpacity onPress={() => navigation.navigate('researchResults')}>
  <RedButton disabled={isContinueButtonDisabled} >
    <Text style= {{textAlign: 'center', color: 'white', fontSize: 20}}>CONTINUE</Text>
  </RedButton>
  </TouchableOpacity>
       
      </View>
    );
  };
  const DarkButton = (props ) => {
    const { selected, onSelect, disabled } = props;
  
    const handlePress = () => {
      if (!disabled) {
        onSelect();
      }
    };
    return (
      <View style={styles.darkButton}>
  
      <TouchableOpacity
          style={[
            styles.goal,
            selected
              ? {
                  backgroundColor: "#4d4f59",
                  width: width * 0.9,
                  height: width * 0.12,
                  borderRadius: 8,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginVertical: width * 0.01,
                  paddingHorizontal: width * 0.07,
                }
              : null,
            disabled ? { opacity: 0.3 } : null,
          ]}
          onPress={handlePress}
          disabled={disabled}
        >
          {props.children}
        </TouchableOpacity>
      </View>
  
   
      );
    }
    
const NameInput  = (props) => {
  return (
      <View style={styles.inputContainer}>
          <TextInput
              style={styles.input}
              placeholder ="Please State" 
              placeholderTextColor="#71727a"
             
              onChangeText={props.onChangeText}
              value={props.value}
          />
      </View>
  );
};

export default ChronicDiseasesQ;