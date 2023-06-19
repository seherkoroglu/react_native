import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Goals from '../../../../common/components/goals/Goals';
import Back from '../../../../common/components/goBackIcon/Back';
import styles from './styles';
import { Dimensions } from 'react-native';
import ChooseYourGender from '../chooseYourGender/ChooseYourGender';
import SleepQuality from '../sleepQuality/SleepQuality';
import Header from '../../../../common/components/header/Header';

const SeatingType = () => {
  const navigation = useNavigation();
  const [selectedGoal, setSelectedGoal] = useState(null);

  const handleSelect = (option) => {
    setSelectedGoal(option);
    navigation.navigate('SleepQuality');
  };

  const data = [
    {
      id: 'option1',
      image: require('../../../../../assets/images/yatarak.png'),
    },
    {
      id: 'option2',
      image: require('../../../../../assets/images/kambur.png'),
    },
    {
      id: 'option3',
      image: require('../../../../../assets/images/laptopasagida.png'),
    },
    {
      id: 'option4',
      image: require('../../../../../assets/images/boyunonde.png'),
    },
    {
      id: 'option5',
      image: require('../../../../../assets/images/duzgun.png'),
    }
  ];

  const renderQuestion = () => 
   <Header title = "What type of seating defines you?" />
  

  const renderOptions = () => (
    <View style={{ flexDirection: 'row', flexWrap: 'wrap',justifyContent: 'center' }}>
      {data.map((option) => (
        <TouchableOpacity key={option.id} onPress={() => handleSelect(option.id)}>
            <Goals selected={selectedGoal === option.id} setSelect={() => setSelectedGoal(option.id)}>
              <Image style={{Width: Dimensions.get('window').width * 0.07, 
              Height: Dimensions.get('window').width * 0.1}}
              source={option.image}  />
            </Goals>
        </TouchableOpacity>
      ))}
    </View>
  );

  return (
    <View style={{ flex:1 , backgroundColor: '#edf3fb' }}>
     
      {renderQuestion()}
      {renderOptions()}
     
    </View>
  );
};

export default SeatingType;