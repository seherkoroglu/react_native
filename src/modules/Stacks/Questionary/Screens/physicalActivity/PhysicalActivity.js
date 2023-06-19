import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Goals from '../../../../common/components/goals/Goals';
import Back from '../../../../common/components/goBackIcon/Back';
import styles from './styles';
import { Dimensions } from 'react-native';
import LottieView from 'lottie-react-native';
import ChooseYourGender from '../chooseYourGender/ChooseYourGender';
import Header from '../../../../common/components/header/Header';

const PhysicalActivity = () => {
  const navigation = useNavigation();
  const [selectedGoal, setSelectedGoal] = useState(null);

  const handleSelect = (option) => {
    setSelectedGoal(option);
    navigation.navigate('ChooseYourGender');
  };

  const data = [
    {
      id: 'option1',
      animation: require('../../../../../assets/animations/rating.json'),
      label: 'rarely',
    },
    {
      id: 'option2',
      animation: require('../../../../../assets/animations/rating.json'),
      label: 'once or twice a week',
    },
    {
      id: 'option3',
      animation: require('../../../../../assets/animations/rating.json'),
      label: '3-5 times a week',
    },
    {
      id: 'option4',
      animation: require('../../../../../assets/animations/rating.json'),
      label: '6-7 times a week',
    },
  ];

  const renderQuestion = () => (
    <Header
      title="Choose your physical activity status"
      subtitle="How active are you?"
    />

  );

  const renderOptions = () => (
    <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', justifyContent: 'center' }}>
      {data.map((option) => (
        <TouchableOpacity key={option.id} onPress={() => handleSelect(option.id)}>
          <View style={styles.optionContainer}>
            <Goals selected={selectedGoal === option.id} setSelect={() => setSelectedGoal(option.id)}>
              <LottieView style={{Width: Dimensions.get('window').width * 0.07, 
              Height: Dimensions.get('window').width * 0.09}}
              source={option.animation} autoPlay loop={false} />
              <Text style={[styles.options, { marginTop:Dimensions.get('window').width * 0.2 }]}>{option.label}</Text>
            </Goals>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );

  return (
    <View style={{flex: 1,  backgroundColor: '#edf3fb' }}>
      
     {renderQuestion()}
     {renderOptions()}
      
    </View>
  );
};

export default PhysicalActivity;





    


