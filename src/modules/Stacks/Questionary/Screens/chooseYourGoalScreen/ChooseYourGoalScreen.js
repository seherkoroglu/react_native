import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Dimensions} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Goals from '../../../../common/components/goals/Goals';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import posture from '../../../../../assets/images/posture.png';
import pain from '../../../../../assets/images/pain.png';
import strong from '../../../../../assets/images/strong.png';
import flexible from '../../../../../assets/images/flexible.png';
import logo from '../../../../../assets/images/logo.png';




const goalsData = [
  {
    id: 'option1',
    image: posture,
    title: 'Fix Posture',
    description: 'kyphosis, forward head, etc..',
  },
  {
    id: 'option2',
    image: pain,
    title: 'Relief Pain',
    description: 'back pain, neck pain, etc...',
  },
  {
    id: 'option3',
    image: strong,
    title: 'Get Stronger',
    description: 'increase muscle strength',
  },
  {
    id: 'option4',
    image: flexible,
    title: 'Get Flexible',
    description: 'improve flexibility and mobility',
  },
];


const ChooseYourGoalScreen = () => {
  const navigation = useNavigation();
  const [selectedGoal, setSelectedGoal] = useState(null);

  const handleSelect = (option) => {
    setSelectedGoal(option);
    navigation.navigate('BodyTypeScreen');
  };

  const renderGoalCard = (goal) => {
    const selected = selectedGoal === goal.id;

    return (
      <TouchableOpacity
        style={[styles.goalCard, selected && styles.selectedCard]}
        onPress={() => handleSelect(goal.id)}
      >
        <Image style={styles.image} source={goal.image} />
        <Text style={styles.options}>{goal.title}</Text>
        <Text style={styles.text}>{goal.description}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <LinearGradient colors={['#c0d5ff', '#ffffff']} style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={logo} />
        <Text style={styles.textStyle}>Choose Your Goal and start creating your personal plan</Text>
      </View>

      <View style={styles.goals}>
        <View style={styles.goalCardContainer}>
          {goalsData.map((goal) => renderGoalCard(goal))}
        </View>
      </View>

      <View style={styles.signInContainer}>
        <Text>
          I have an account{' '}
          <Text style={styles.signInText} onPress={() => navigation.navigate('SignInScreen')}>
            Sign in
          </Text>
        </Text>
      </View>
    </LinearGradient>
  );
};


export default ChooseYourGoalScreen;