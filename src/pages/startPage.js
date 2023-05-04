import StressLevelQ from '/Users/main/KMClone/src/pages/stressLevelQ/StressLevelQ.js';
import ErectionPills from '/Users/main/KMClone/src/pages/erectionPillsQ/ErectionPills.js';
import NameInputPage from '/Users/main/KMClone/src/pages/nameInputPage/NameInputPage.js';
import SelectAgeRange from '/Users/main/KMClone/src/pages/selectAgeRange/selectAgeRange.js';
import NotificationPermissions from '/Users/main/KMClone/src/pages/notificationPermissions/notificationPermissions.js';
import ErectionProblemQ from '/Users/main/KMClone/src/pages/erectionProblemQ/erectionProblemQ.js';
import SexualDesireQ from '/Users/main/KMClone/src/pages/sexualDesireQ/sexualDesireQ.js';
import EnlargementToysQ from '/Users/main/KMClone/src/pages/enlargementToysQ/enlargementToysQ.js';
import PrematureEjaculationQ from '/Users/main/KMClone/src/pages/prematureEjaculationQ/prematureEjaculationQ.js';
import ErectionTimeProblemQ from '/Users/main/KMClone/src/pages/erectionProblemTimeQ/erectionTimeProblemQ.js';
import MasturbationFrequencyQ from '/Users/main/KMClone/src/pages/masturbationFrequencyQ/masturbationFrequencyQ.js';
import OrgasmPleasureRateQ from '/Users/main/KMClone/src/pages/orgasmPleasureRateQ/orgasmPleasureRateQ.js';
import SleepQualityQ from '/Users/main/KMClone/src/pages/sleepQualityQ/sleepQualityQ.js';
import PornWatchingFrequencyQ from '/Users/main/KMClone/src/pages/pornWatchingFrequencyQ/pornWatchingFrequencyQ.js';
import ExperienceSelectionQ from '/Users/main/KMClone/src/pages/experienceSelectionQ/experienceSelectionQ.js';
import AntiDepressantUseQ from '/Users/main/KMClone/src/pages/antiDepressantUseQ/antiDepressantUseQ.js';
import UrinaryIncontinenceQ from '/Users/main/KMClone/src/pages/urinaryIncontinenceQ/urinaryIncontinenceQ.js';
import DigestionProblemQ from '/Users/main/KMClone/src/pages/digestionProblemQ/digestionProblemQ.js';
import SteroidUseQ from '/Users/main/KMClone/src/pages/steroidUseQ/steroidUseQ.js';
import ChronicDiseasesQ from '/Users/main/KMClone/src/pages/chronicDiseasesQ/chronicDiseasesQ.js';
import ResearchResults from '/Users/main/KMClone/src/pages/researchResults/researchResults.js';
import PeRate from '/Users/main/KMClone/src/pages/peRate/peRate.js';
import SleepInfo from '/Users/main/KMClone/src/pages/sleepInfo/sleepInfo.js';
import DepressionInfo from '/Users/main/KMClone/src/pages/depressionInfo/depressionInfo.js';
import EjaculationTime from '/Users/main/KMClone/src/pages/ejaculationTime/ejaculationTime.js';
import ProgramCreation from '/Users/main/KMClone/src/pages/programCreation/programCreation.js';
import KegelPlan from '/Users/main/KMClone/src/pages/kegelPlan/kegelPlan.js';
import styles from '/Users/main/KMClone/src/pages/firstPage/styles.js';
import React, { useState } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import  {useNavigation} from '@react-navigation/native'; 
import FirstPage from '/Users/main/KMClone/src/pages/firstPage/firstPage.js';



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
             <Stack.Screen name="erectionPills" component={ErectionPills} 
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
  
 