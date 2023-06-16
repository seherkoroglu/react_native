/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import * as React from 'react';
import ChooseYourGoalScreen from './src/modules/Stacks/Questionary/Screens/chooseYourGoalScreen/ChooseYourGoalScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Dimensions} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import BodyTypeScreen from './src/modules/Stacks/Questionary/Screens/bodyTypeScreen/BodyTypeScreen';
import PostureType from './src/modules/Stacks/Questionary/Screens/postureType/postureType';
import PhysicalActivity from './src/modules/Stacks/Questionary/Screens/physicalActivity/PhysicalActivity';
import ChooseYourGender from './src/modules/Stacks/Questionary/Screens/chooseYourGender/ChooseYourGender';
//import BodyParts from './src/modules/Stacks/Questionary/Screens/bodyParts/BodyParts';
import DevoteToexercise from './src/modules/Stacks/Questionary/Screens/devoteToExercise/DevoteToexercise';
import DoYouFeelPain from './src/modules/Stacks/Questionary/Screens/doYouFeelPain/DoYouFeelPain';
import Experiencing from './src/modules/Stacks/Questionary/Screens/experiencing/Experiencing';
import SpecificDiseases from './src/modules/Stacks/Questionary/Screens/specificDiseases/SpecificDiseases';
import SeatingType from './src/modules/Stacks/Questionary/Screens/seatingType/SeatingType';
import SleepQuality from './src/modules/Stacks/Questionary/Screens/sleepQuality/SleepQuality';
import StressLevel from './src/modules/Stacks/Questionary/Screens/stressLevel/StressLevel';
import Focusing from './src/modules/Stacks/Questionary/Screens/focusing/Focusing';
import YouWillLove from './src/modules/Stacks/Questionary/Screens/youWillLoveScreen/YouWillLove';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ChooseYourGoalScreen" component={ChooseYourGoalScreen} 
        options={{
          headerShown: false,
        }}/>
        <Stack.Screen name="BodyTypeScreen" component={BodyTypeScreen}
        options={{
          headerShown: false,
        }}/>
        <Stack.Screen name="PostureType" component={PostureType}
        options={{
          headerShown: false,
        }}/>
        <Stack.Screen name="PhysicalActivity" component={PhysicalActivity}
        options={{
          headerShown: false,
        }}/>
        <Stack.Screen name="ChooseYourGender" component={ChooseYourGender}
        options={{
          headerShown: false,
        }}/>
        <Stack.Screen name="DevoteToexercise" component={DevoteToexercise}
        options={{
          headerShown: false,
        }}/>

        <Stack.Screen name="DoYouFeelPain" component={DoYouFeelPain}
        options={{
          headerShown: false,
        }}/>

        <Stack.Screen name="Experiencing" component={Experiencing}
        options={{
          headerShown: false,
        }}/>

        <Stack.Screen name="SpecificDiseases" component={SpecificDiseases}
        options={{
          headerShown: false,
        }}/>

        <Stack.Screen name="SeatingType" component={SeatingType}
        options={{
          headerShown: false,
        }}/>
        <Stack.Screen name="SleepQuality" component={SleepQuality}
        options={{
          headerShown: false,
        }}/>

        <Stack.Screen name="StressLevel" component={StressLevel}
        options={{
          headerShown: false,
        }}/>
        <Stack.Screen name="Focusing" component={Focusing}
        options={{
          headerShown: false,
        }}/>
        <Stack.Screen name="YouWillLove" component={YouWillLove}
        options={{
          headerShown: false,
        }}/>









      





      </Stack.Navigator>
    </NavigationContainer>
  );
};



export default App;
