import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Goals from "../../../../common/components/goals/Goals";
import Back from "../../../../common/components/goBackIcon/Back";
import styles from "./styles";
import { Dimensions } from "react-native";
import DevoteToexercise from "../devoteToExercise/DevoteToexercise";

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
      image: require("../../../../../assets/images/female.png"),
      label: "Female"
    },
    {
      id: "option2",
      image: require("../../../../../assets/images/male.png"),
      label: "Male"
    },
    {
      id: "option3",
      image: require("../../../../../assets/images/non-binary.png"),
      label: "Non-binary"
    }
  ];

  const renderQuestion = () =>
    <View style={styles.container}>
      <Back navigation={navigation} />
      <Text style={[styles.textStyle, {fontWeight: 'bold'}]}>Choose your gender</Text>
    </View>;

  const renderOptions = () =>
    <View style={[{ paddingBottom: 200 } ]}>
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
      <View style = {{paddingTop:Dimensions.get('window').width * 0.60}} />
      <View style={{ flex: 0.5, paddingHorizontal: 20 }}>
        {renderQuestion()}
      </View>
      <View style={{ flex: 4, paddingHorizontal: 20 }}>
        {renderOptions()}
      </View>
      <View  />
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
