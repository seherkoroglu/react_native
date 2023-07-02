import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Goals from "../../../../common/components/goals/Goals";
import Back from "../../../../common/components/goBackIcon/Back";
import styles from "./styles";
import { Dimensions } from "react-native";
import DevoteToexercise from "../devoteToExercise/DevoteToexercise";
import Header from "../../../../common/components/header/Header";
import female from "../../../../../assets/images/female.png";
import male from "../../../../../assets/images/male.png";
import nonBinary from "../../../../../assets/images/non-binary.png";

const ChooseYourGender = () => {
  const navigation = useNavigation();
  const [selectedGoal, setSelectedGoal] = useState(null);

  const handleSelect = option => {
    setSelectedGoal(option);
    navigation.navigate("DevoteToexercise");
  };

  const data = [
    {
      id: "option1",
      image: female,
      label: "Female"
    },
    {
      id: "option2",
      image: male,
      label: "Male"
    },
    {
      id: "option3",
      image: nonBinary,
      label: "Non-binary"
    }
  ];

  const renderQuestion = () =>
   <Header 
   title = "Choose your gender"
    />


  const renderOptions = () =>
    <View style={[{ marginHorizontal: Dimensions.get('window').width*0.07 } ]}>
      {data.map(option =>
        
        
             <TouchableOpacity onPress={() => handleSelect(option.id)} style= {{backgorundColor: 'red'}}>
            <Goal
              selected={selectedGoal === option.id}
              onSelect={() => setSelectedGoal(option.id)}
            >
             
              <Image style={{marginHorizontal: Dimensions.get('window').width*0.04}}source={option.image} />
            
              <Text style = {{ fontSize: 15, paddingLeft: Dimensions.get('window').width*0.2}}>
                {option.label}
              </Text>
          
            </Goal>
            </TouchableOpacity>
          
         
      
      )}
    </View>;

  return (
    <View style={{ flex: 1, backgroundColor: "#edf3fb" }}>
      
        {renderQuestion()}
        {renderOptions()}
    
    </View>
  );
};

const Goal = (props) => {
  const { selected, onSelect, columnCount } = props;

  const handlePress = () => {
    if (!selected) {
      onSelect();
    }
  };

  return (
    <View style={styles.goal}>
      <TouchableOpacity
        style={[
          styles.goal,
          selected
            ? {
              backgroundColor: '#8ab1ff',
              justifyContent: 'flex-start',
              width: Dimensions.get('window').width * 0.85,
              height: Dimensions.get('window').width * 0.15,
            
             marginVertical: Dimensions.get('window').width * 0.02,
              borderColor: '#8ab1ff',
              borderRadius: 10,
              alignItems: 'center',
              flexDirection: 'row',
              textAlign: 'center',
              }
            : null
        ]}
        onPress={handlePress}
      >
        {props.children}
      </TouchableOpacity>
    </View>
  );
};


export default ChooseYourGender;
