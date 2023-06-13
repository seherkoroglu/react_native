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




const goalsData = [
  {
    id: 'option1',
    image: require('../../../../../assets/images/posture.png'),
    title: 'Fix Posture',
    description: 'kyphosis, forward head, etc..',
  },
  {
    id: 'option2',
    image: require('../../../../../assets/images/pain.png'),
    title: 'Relief Pain',
    description: 'back pain, neck pain, etc...',
  },
  {
    id: 'option3',
    image: require('../../../../../assets/images/strong.png'),
    title: 'Get Stronger',
    description: 'increase muscle strength',
  },
  {
    id: 'option4',
    image: require('../../../../../assets/images/flexible.png'),
    title: 'Get Flexible',
    description: 'improve flexibility and mobility',
  },
];

const GoalCard = ({ goal, selected, onSelect }) => {
  return (
    <TouchableOpacity
      style={[styles.goalCard, selected && styles.selectedCard]}
      onPress={onSelect}
    >
      <Image style={styles.image} source={goal.image} />
      <Text style={styles.options}>{goal.title}</Text>
      <Text style={styles.text}>{goal.description}</Text>
    </TouchableOpacity>
  );
};

const ChooseYourGoalScreen = () => {
  const navigation = useNavigation();
  const [selectedGoal, setSelectedGoal] = useState(null);

  const handleSelect = (option) => {
    setSelectedGoal(option);
    navigation.navigate('BodyTypeScreen');
  };

  return (
    <LinearGradient colors={['#c0d5ff', '#ffffff']} style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('../../../../../assets/images/logo.png')} />
        <Text style={styles.textStyle}>Choose Your Goal and start creating your personal plan</Text>
      </View>

      <View style={styles.goals}>
        <View style={styles.goalCardContainer}>
          {goalsData.map((goal) => (
            <GoalCard
              key={goal.id}
              goal={goal}
              selected={selectedGoal === goal.id}
              onSelect={() => handleSelect(goal.id)}
            />
          ))}
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