import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Goals from '../../../../common/components/goals/Goals';
import Back from '../../../../common/components/goBackIcon/Back';
import styles from './styles';
import { Dimensions } from 'react-native';

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
      image: require('../../../../../assets/images/thin.png'),
      label: 'Thin',
    },
    {
      id: 'option2',
      image: require('../../../../../assets/images/normal.png'),
      label: 'Normal',
    },
    {
      id: 'option3',
      image: require('../../../../../assets/images/athletic.png'),
      label: 'Athletic',
    },
    {
      id: 'option4',
      image: require('../../../../../assets/images/curvy.png'),
      label: 'Curvy',
    },
  ];

  const renderQuestion = () => (
    <View style={styles.container}>
      <Back navigation={navigation} />
      <Text style={styles.textStyle}>Please choose your body type</Text>
    </View>
  );

  const renderOptions = () => (
    <View style={[styles.goals, {paddingBottom: 200}]}>
      <View style={ {  marginBottom: 10 }}>
        {data.slice(0, 2).map((option) => (
          <TouchableOpacity key={option.id} onPress={() => handleSelect(option.id)}>
            <Goals selected={selectedGoal === option.id} setSelect={() => setSelectedGoal(option.id)}>
              <Image style={styles.image} source={option.image} />
              <Text style={styles.options}>{option.label}</Text>
            </Goals>
          </TouchableOpacity>
        ))}
      </View>

      <View style={[styles.goalCard, {  marginBottom: 10 }]}>
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
    <View style={{ flex: 1, backgroundColor: '#edf3fb' }}>
      <View style={{ flex: 2 }} />
      <View style={{ flex: 2, paddingHorizontal: 20 }}>{renderQuestion()}</View>
      <View style={{ flex: 2, paddingHorizontal: 20 }}>{renderOptions()}</View>
      <View style={{ flex: 2 }} />
    </View>
  );
};

export default BodyTypeScreen;


