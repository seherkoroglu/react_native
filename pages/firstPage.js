import React, {useState} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import  {useNavigation} from '@react-navigation/native';
import Texts from '../components/texts';
import RedButton from '../components/redButton';
import Page2 from '../pages/page2';
import Page3 from '../pages/page3';
import Page4 from '../pages/page4';
import Page5 from '../pages/page5';
import Page6 from '../pages/page6';
import Page7 from '../pages/page7';
import Page8 from '../pages/page8';
import Page9 from '../pages/page9';
import Page10 from '../pages/page10';
import Page11 from '../pages/page11';
import Page12 from '../pages/page12';
import Page13 from '../pages/page13';
import Page14 from '../pages/page14';
import Page15 from '../pages/page15';
import Page16 from '../pages/page16';
import Page17 from '../pages/page17';
import Page18 from '../pages/page18';
import Page19 from '../pages/page19';
import Page20 from '../pages/page20';
import Page21 from '../pages/page21';
import Page22 from '../pages/page22';
import Page23 from '../pages/page23';
import Page24 from '../pages/page24';
import Page25 from '../pages/page25';
import Page26 from '../pages/page26';
import Page27 from '../pages/page27';
import Page28 from '../pages/page28';

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
          <Stack.Screen name="page2" component={Page2}
            options={{
              headerShown: false,
            }} />
          <Stack.Screen name="page3" component={Page3} 
           options={{
            headerShown: false,
          }}
          />
          <Stack.Screen name="page4" component={Page4} 
           options={{
            headerShown: false,
          }}
          />
          <Stack.Screen name="page5" component={Page5} 
           options={{
            headerShown: false,
          }}
          />
           <Stack.Screen name="page6" component={Page6} 
           options={{
            headerShown: false,
          }}
          />
             <Stack.Screen name="page7" component={Page7} 
           options={{
            headerShown: false,
          }}
          />
            <Stack.Screen name="page8" component={Page8} 
           options={{
            headerShown: false,
          }}
          />
               <Stack.Screen name="page9" component={Page9} 
           options={{
            headerShown: false,
          }}
          />
          <Stack.Screen name="page10" component={Page10} 
          options={{
           headerShown: false,
         }}
         />
         <Stack.Screen name="page11" component={Page11} 
          options={{
           headerShown: false,
         }}
         />
          <Stack.Screen name="page12" component={Page12} 
          options={{
           headerShown: false,
         }}
         />
         <Stack.Screen name="page13" component={Page13}
          options={{
           headerShown: false,
         }}
         />

          <Stack.Screen name="page14" component={Page14}
          options={{
           headerShown: false,
         }}
         />
           <Stack.Screen name="page15" component={Page15}
          options={{
           headerShown: false,
         }}
         />
           <Stack.Screen name="page16" component={Page16}
          options={{
           headerShown: false,
         }}
         />
           <Stack.Screen name="page17" component={Page17}
          options={{
           headerShown: false,
         }}
         />
           <Stack.Screen name="page18" component={Page18}
          options={{
           headerShown: false,
         }}
         />
            <Stack.Screen name="page19" component={Page19}
          options={{
           headerShown: false,
         }}
         />
             <Stack.Screen name="page20" component={Page20}
          options={{
           headerShown: false,
         }}
         />
             <Stack.Screen name="page21" component={Page21}
          options={{
           headerShown: false,
         }}
         />
             <Stack.Screen name="page22" component={Page22}
          options={{
           headerShown: false,
         }}
         />
             <Stack.Screen name="page23" component={Page23}
          options={{
           headerShown: false,
         }}
         />
             <Stack.Screen name="page24" component={Page24}
          options={{
           headerShown: false,
         }}
         />
             <Stack.Screen name="page25" component={Page25}
          options={{
           headerShown: false,
         }}
         />
             <Stack.Screen name="page26" component={Page26}
          options={{
           headerShown: false,
         }}
         />
             <Stack.Screen name="page27" component={Page27}
          options={{
           headerShown: false,
         }}
         />
             <Stack.Screen name="page28" component={Page28}
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
      <View style={styles.style}>
      <TouchableOpacity onPress={() => navigation.navigate('page2')}>
      <RedButton >
        <Texts>GET STARTED</Texts>
      </RedButton>
      </TouchableOpacity>
       
      </View>
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


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191924',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    
},
image: {
  alignSelf: 'center',
  justifyContent: 'center',
  width: 130,
  height: 130,
  marginTop: 80,
  },

  textStyles: {
    color: 'white',
    alignSelf: 'center',
    fontSize: 20,
    marginTop: 30,
    fontWeight: 'bold',
    lineHeight: 40,
},

smallButton: {
  backgroundColor: '#191924',
  width: 60,
  height: 60,
  borderRadius: 10,
  justifyContent: 'center',
  alignItems:'center',
  shadowColor: '#191924',
  shadowOffset: { width: 1 , height: 3},
  shadowOpacity: 0.6,
  shadowRadius: 2,
  elevation: 2,
  padding: 10,


},
style: {
  paddingBottom: 50,
  backgroundColor: '#191924',
},

select: {
  backgroundColor: '#d1262b',
  width: 350,
  height: 60,
  borderRadius: 30,
  alignSelf: 'center',
  justifyContent: 'center'},

  button: {
    backgroundColor: '#222331',
    width: 340,
    height: 70,
    borderRadius: 10,
    margin: 10,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
   
  }, 
 
});




