import NameInputPage  from '../pages/nameInputPage/NameInputPage';
import SelectAgeRange from '../pages/selectAgeRange/SelectAgeRange';
import NotificationPermissions from '../pages/notificationPermissions/notificationPermissions';
import ErectionProblemQ from '../pages/erectionProblemQ/erectionProblemQ';
import SexualDesireQ from '../pages/sexualDesireQ/sexualDesireQ';
import ErectionPillsQ from '../pages/erectionPillsQ/erectionPillsQ';
import EnlargementToysQ from '../pages/enlargementToysQ/enlargementToysQ';
import PrematureEjaculationQ from '../pages/prematureEjaculationQ/prematureEjaculationQ';
import ErectionTimeProblemQ from '../pages/erectionTimeProblemQ/erectionTimeProblemQ';
import MasturbationFrequencyQ from '../masturbationFrequencyQ/masturbationFrequencyQ';
import OrgasmPleasureRateQ from '../pages/orgasmPleasureRateQ/orgasmPleasureRateQ';
import SleepQualityQ from '../pages/sleepQualityQ/sleepQualityQ';
import StressLevelQ from '../pages/stressLevelQ/stressLevelQ';
import PornWatchingFrequencyQ from '../pages/pornWatchingFrequencyQ/pornWatchingFrequencyQ';
import ExperienceSelectionQ from '../pages/experienceSelectionQ/experienceSelectionQ';
import AntiDepressantUseQ from '../pages/antiDepressantUseQ/antiDepressantUseQ';
import UrinaryIncontinenceQ from '../pages/urinaryIncontinenceQ/urinaryIncontinenceQ';
import DigestionProblemQ from '../pages/digestionProblemQ/digestionProblemQ';
import SteroidUseQ from '../pages/steroidUseQ/steroidUseQ';
import ChronicDiseasesQ from '../pages/chronicDiseasesQ/chronicDiseasesQ';
import ResearchResults from '../pages/researchResults/researchResults';
import PeRate from '../pages/peRate/peRate';
import SleepInfo from '../pages/sleepInfo/sleepInfo';
import DepressionInfo from '../pages/depressionInfo/depressionInfo';
import EjaculationTime from '../pages/ejaculationTime/ejaculationTime';
import ProgramCreation from '../pages/programCreation/programCreation';
import KegelPlan from '../pages/kegelPlan/kegelPlan';
import styles from '../pages/firstPage/styles';
import React, { useState } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import  {useNavigation} from '@react-navigation/native'; 
import FirstPage from '../pages/firstPage/firstPage';



const Stack = createNativeStackNavigator();

 const App = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator
       >
          <Stack.Screen name="first" component={FirstPage}
            options={{
              headerShown: false,
            }} />
          <Stack.Screen name="nameInputPage" component={NameInputPage}
            options={{
              headerShown: false,
            }} />
          <Stack.Screen name="selectAgeRange" component={SelectAgeRange} 
           options={{
            headerShown: false,
          }}
          />
          <Stack.Screen name="notificationPermissions" component={NotificationPermissions} 
           options={{
            headerShown: false,
          }}
          />
          <Stack.Screen name="erectionProblemQ" component={ErectionProblemQ} 
           options={{
            headerShown: false,
          }}
          />
           <Stack.Screen name="sexualDesireQ" component={SexualDesireQ} 
           options={{
            headerShown: false,
          }}
          />
             <Stack.Screen name="erectionPillsQ" component={ErectionPillsQ} 
           options={{
            headerShown: false,
          }}
          />
            <Stack.Screen name="enlargementToysQ" component={EnlargementToysQ} 
           options={{
            headerShown: false,
          }}
          />
               <Stack.Screen name="prematureEjaculationQ" component={PrematureEjaculationQ} 
           options={{
            headerShown: false,
          }}
          />
          <Stack.Screen name="erectionTimeProblemQ" component={ErectionTimeProblemQ} 
          options={{
           headerShown: false,
         }}
         />
         <Stack.Screen name="masturbationFrequencyQ" component={MasturbationFrequencyQ} 
          options={{
           headerShown: false,
         }}
         />
          <Stack.Screen name="orgasmPleasureRateQ" component={OrgasmPleasureRateQ} 
          options={{
           headerShown: false,
         }}
         />
         <Stack.Screen name="sleepQualityQ" component={SleepQualityQ}
          options={{
           headerShown: false,
         }}
         />

          <Stack.Screen name="stressLevelQ" component={StressLevelQ}
          options={{
           headerShown: false,
         }}
         />
           <Stack.Screen name="pornWatchingFrequencyQ" component={PornWatchingFrequencyQ}
          options={{
           headerShown: false,
         }}
         />
           <Stack.Screen name="experienceSelectionQ" component={ExperienceSelectionQ}
          options={{
           headerShown: false,
         }}
         />
           <Stack.Screen name="antiDepressantUseQ" component={AntiDepressantUseQ}
          options={{
           headerShown: false,
         }}
         />
           <Stack.Screen name="urinaryIncontinenceQ" component={UrinaryIncontinenceQ}
          options={{
           headerShown: false,
         }}
         />
            <Stack.Screen name="digestionProblemQ" component={DigestionProblemQ}
          options={{
           headerShown: false,
         }}
         />
             <Stack.Screen name="steroidUseQ" component={SteroidUseQ}
          options={{
           headerShown: false,
         }}
         />
             <Stack.Screen name="chronicDiseasesQ" component={ChronicDiseasesQ}
          options={{
           headerShown: false,
         }}
         />
             <Stack.Screen name="researchResults" component={ResearchResults}
          options={{
           headerShown: false,
         }}
         />
             <Stack.Screen name="peRate" component={PeRate}
          options={{
           headerShown: false,
         }}
         />
             <Stack.Screen name="sleepInfo" component={SleepInfo}
          options={{
           headerShown: false,
         }}
         />
             <Stack.Screen name="depressionInfo" component={DepressionInfo}
          options={{
           headerShown: false,
         }}
         />
             <Stack.Screen name="ejaculationTime" component={EjaculationTime}
          options={{
           headerShown: false,
         }}
         />
             <Stack.Screen name="programCreation" component={ProgramCreation}
          options={{
           headerShown: false,
         }}
         />
             <Stack.Screen name="kegelPlan" component={KegelPlan}
          options={{
           headerShown: false,
         }}
         />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

export default App;
  
 