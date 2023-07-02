import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Goals from '../../../../common/components/goals/Goals';
import Back from '../../../../common/components/goBackIcon/Back';
import styles from './styles';
import { Dimensions } from 'react-native';
import Header from '../../../../common/components/header/Header';
import thin from '../../../../../assets/images/thin.png';
import normal from '../../../../../assets/images/normal.png';
import athletic from '../../../../../assets/images/athletic.png';
import curvy from '../../../../../assets/images/curvy.png';


const BodyTypeScreen = () => {
  const navigation = useNavigation();
  const [selectedGoal, setSelectedGoal] = useState(null);

  const handleSelect = (option) => {
    setSelectedGoal(option);
    navigation.navigate('PostureType');
  };

  const data = [
    {
      id: 'option1',
      image: thin,
      label: 'Thin',
    },
    {
      id: 'option2',
      image: normal,
      label: 'Normal',
    },
    {
      id: 'option3',
      image: athletic,
      label: 'Athletic',
    },
    {
      id: 'option4',
      image: curvy,
      label: 'Curvy',
    },
  ];

  const renderQuestion = () => 
    <Header
      title="Please choose your body type"
    />
    
  

  const renderOptions = () => (
    <View style={[styles.goals, {paddingBottom: Dimensions.get('window').width*0.2}]}>
      <View style={ {  marginBottom: Dimensions.get('window').width*0.01 }}>
        {data.slice(0, 2).map((option) => (
          <TouchableOpacity key={option.id} onPress={() => handleSelect(option.id)}>
            <Goals selected={selectedGoal === option.id} setSelect={() => setSelectedGoal(option.id)}>
              <Image style={styles.image} source={option.image} />
              <Text style={styles.options}>{option.label}</Text>
            </Goals>
          </TouchableOpacity>
        ))}
      </View>

      <View style={[styles.goalCard, {  marginBottom: Dimensions.get('window').width*0.01 }]}>
        {data.slice(2).map((option) => (
          <TouchableOpacity key={option.id} onPress={() => handleSelect(option.id)}>
            <Goals selected={selectedGoal === option.id} setSelect={() => setSelectedGoal(option.id)}>
              <Image style={styles.image} source={option.image} />
              <Text style={styles.options}>{option.label}</Text>
            </Goals>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );

  return (
    <View style={{ flex: 1,  backgroundColor: '#edf3fb' }}>
     
     {renderQuestion()}
     {renderOptions()}
     
    </View>
  );
};

export default BodyTypeScreen;


