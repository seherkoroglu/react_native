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
import yatarak from '../../../../../assets/images/yatarak.png';
import kambur from '../../../../../assets/images/kambur.png';
import laptopasagida from '../../../../../assets/images/laptopasagida.png';
import boyunonde from '../../../../../assets/images/boyunonde.png';
import duzgun from '../../../../../assets/images/duzgun.png';


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
      image: yatarak,
    },
    {
      id: 'option2',
      image: kambur,
    },
    {
      id: 'option3',
      image: laptopasagida,
    },
    {
      id: 'option4',
      image: boyunonde,
    },
    {
      id: 'option5',
      image: duzgun,
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