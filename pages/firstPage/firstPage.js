import React, {useState} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import  {useNavigation} from '@react-navigation/native';
import Texts from '../components/texts';
import RedButton from '../components/redButton';
import NameInputPage  from '.../pages/nameInputPage/nameInputPage ';
import SelectAgeRange from '.../pages/selectAgeRange/selectAgeRange';
import NotificationPermissions from '.../pages/notificationPermissions/notificationPermissions';
import ErectionProblemQ from '.../pages/erectionProblemQ/erectionProblemQ';
import SexualDesireQ from '.../pages/sexualDesireQ/sexualDesireQ';
import ErectionPillsQ from '.../pages/erectionPillsQ/erectionPillsQ';
import EnlargementToysQ from '.../pages/enlargementToysQ/enlargementToysQ';
import PrematureEjaculationQ from '.../pages/prematureEjaculationQ/prematureEjaculationQ';
import ErectionTimeProblemQ from '.../pages/erectionTimeProblemQ/erectionTimeProblemQ';
import MasturbationFrequencyQ from '.../masturbationFrequencyQ/masturbationFrequencyQ';
import OrgasmPleasureRateQ from '.../pages/orgasmPleasureRateQ/orgasmPleasureRateQ';
import SleepQualityQ from '.../pages/sleepQualityQ/sleepQualityQ';
import StressLevelQ from '../pages/stressLevelQ/stressLevelQ';
import PornWatchingFrequencyQ from '.../pages/pornWatchingFrequencyQ/pornWatchingFrequencyQ';
import ExperienceSelectionQ from '.../pages/experienceSelectionQ/experienceSelectionQ';
import AntiDepressantUseQ from '.../pages/antiDepressantUseQ/antiDepressantUseQ';
import UrinaryIncontinenceQ from '.../pages/urinaryIncontinenceQ/urinaryIncontinenceQ';
import DigestionProblemQ from '.../pages/digestionProblemQ/digestionProblemQ';
import SteroidUseQ from '.../pages/steroidUseQ/steroidUseQ';
import ChronicDiseasesQ from '.../pages/chronicDiseasesQ/chronicDiseasesQ';
import ResearchResults from '../pages/researchResults/researchResults';
import PeRate from '.../pages/peRate/peRate';
import SleepInfo from '.../pages/sleepInfo/sleepInfo';
import DepressionInfo from '.../pages/depressionInfo/depressionInfo';
import EjaculationTime from '.../pages/ejaculationTime/ejaculationTime';
import ProgramCreation from '.../pages/programCreation/programCreation';
import KegelPlan from '.../pages/kegelPlan/kegelPlan';
import styles from '.../pages/firstPage/styles';

const Stack = createNativeStackNavigator();

  function App() {
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


const FirstPage = ({navigation}) => {
  const [select, setSelect] = useState(false);
  const [selectedButton, setSelectedButton] = useState(null);


  const renderOptions = () => {
  return (
    <>  
    
      <View style={styles.container}>
      
      <Image style={styles.image}  source={require('../images/logo.png')}/>
     
      <Text style={styles.textStyles}>Don't Know Where to Start?</Text>
      <Text style={styles.textStyles}>Choose your goal</Text>
     
      <TouchableOpacity onPress={() => setSelectedButton('button1')}>
        <GreyButton selected={selectedButton === 'button1'} onSelect={() => setSelectedButton('button1')}>
          <SmallButton>
            <Image source={require('../images/thunder.png')}/>       
          </SmallButton>
          <Texts>Get harder erections</Texts>
        </GreyButton>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setSelectedButton('button2')}>
        <GreyButton selected={selectedButton === 'button2'} onSelect={() => setSelectedButton('button2')}>
          <SmallButton>
            <Image source={require('../images/wall-clock.png')}/>       
          </SmallButton>
          <Texts>Last longer during sex</Texts>
        </GreyButton>
      </TouchableOpacity>
     
      <TouchableOpacity onPress={() => setSelectedButton('button3')}>
        <GreyButton selected={selectedButton === 'button3'} onSelect={() => setSelectedButton('button3')}>
          <SmallButton>
            <Image source={require('../images/rise(2).png')}/>
          </SmallButton>
          <Texts>Get brighter orgasms</Texts>
        </GreyButton>
      </TouchableOpacity>
       </View>
      </>
       );
  };


      const renderButton = () => {
        return (
      <View style={styles.style}>
      <TouchableOpacity onPress={() => navigation.navigate('nameInputPage')}>
      <RedButton >
        <Texts>GET STARTED</Texts>
      </RedButton>
      </TouchableOpacity>
      </View>
      
     
    );
  };

  return (
    <>
    {renderOptions()}
    {renderButton()}
    </>
  );
};



  const GreyButton = (props) => {
    const { selected, onSelect } = props;
  
    const handlePress = () => {
      if (!selected) {
        onSelect();
      }
    };
  
    return (
      <View style={styles.button}> 
        <TouchableOpacity
          style={[
            styles.button,
            selected ? {
              backgroundColor: '#d1262b',
              width: 340,
              height: 70,
              borderRadius: 10,
              justifyContent: 'center',
              flexDirection: 'row',
              alignItems: 'center',
            } : null
          ]}
          onPress={handlePress}
        >
          {props.children}
        </TouchableOpacity>
      </View>
    );
  }
  


  

const SmallButton = (props) => {
  return (
<View  style={styles.smallButton}>
  {props.children}
</View>
);
};






