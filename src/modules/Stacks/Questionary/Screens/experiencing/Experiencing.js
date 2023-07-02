import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Goals from "../../../../common/components/goals/Goals";
import Back from "../../../../common/components/goBackIcon/Back";
import styles from "./styles";
import { Dimensions } from "react-native";
import DoYouFeelPain from "../doYouFeelPain/DoYouFeelPain";
import ContinueButton from "../../../../common/components/continueButton/ContinueButton";
import SpecificDiseases from "../specificDiseases/SpecificDiseases";
import Header from "../../../../common/components/header/Header";

const Experiencing = () => {
  const navigation = useNavigation();
  const [selectedGoals, setSelectedGoals] = useState([]);

  const handleSelect = (option) => {
    if (option === "option1") {
      // "None" seçeneği seçildiğinde diğerlerini devre dışı bırak
      if (selectedGoals.includes("option1")) {
        setSelectedGoals([]); // Seçimi geri al
      } else {
        setSelectedGoals([option]);
      }
    } else {
      if (selectedGoals.includes("option1")) {
        setSelectedGoals(selectedGoals.filter((goal) => goal !== "option1"));
      }

      if (selectedGoals.includes(option)) {
        // Seçenek zaten seçiliyse, seçimden kaldır
        setSelectedGoals(selectedGoals.filter((goal) => goal !== option));
      } else {
        // Seçenek seçilmediyse, seçime ekle
        setSelectedGoals([...selectedGoals, option]);
      }
    }
  };

  const data = [
    {
      id: "option1",
      label: "None",
    },
    {
      id: "option2",
      label: "Stiff Neck",
    },
    {
      id: "option3",
      label: "Waking up Restless",
    },
    {
      id: "option4",
      label: "Balance Problems",
    },
    {
      id: "option5",
      label: "Nerve compression in wrist",
    },
    {
      id: "option6",
      label: "Nerve compression in elbow",
    },
    {
      id: "option7",
      label: "Elbow Numbness",
    },
  ];

  const renderQuestion = () => 
    <Header title = "Are you experiencing any of these?" />
  

  const renderOptions = () => (
    <>
      {data.map((option) => (
        <View >
          <TouchableOpacity
            key={option.id}
            onPress={() => handleSelect(option.id)}
            disabled={selectedGoals.includes("option1") && option.id !== "option1"}
          >
            <Goal
              selected={selectedGoals.includes(option.id)}
              onSelect={() => handleSelect(option.id)}
              disabled={selectedGoals.includes("option1") && option.id !== "option1"}
            >
              <Text style={{ textAlign: "center" }}>{option.label}</Text>
            </Goal>
          </TouchableOpacity>
        </View>
      ))}
    </>
   
  );

  const isContinueButtonDisabled = selectedGoals.length === 0;

  return (
    <View style={{ flex: 1, backgroundColor: "#edf3fb" }}>
 
    {renderQuestion()}
  
  <ScrollView showsVerticalScrollIndicator={false}
  style={{flex: 1,paddingHorizontal: Dimensions.get('window').width*0.07 }}>
    {renderOptions()}
  </ScrollView>
  <ContinueButton
    onPress={() => navigation.navigate("SpecificDiseases")}
    disabled={isContinueButtonDisabled}
  />
</View>
  );
};

const Goal = (props) => {
  const { selected, onSelect, disabled } = props;

  const handlePress = () => {
    if (!disabled) {
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
                backgroundColor: "#8ab1ff",
                width: Dimensions.get("window").width * 0.80,
                height: Dimensions.get("window").width * 0.15,
                marginHorizontal: Dimensions.get("window").width * 0.02,
                marginVertical: Dimensions.get("window").width * 0.09,
                paddingHorizontal: Dimensions.get("window").width * 0.04,
                borderRadius: 10,
                fontSize: 15,
                lineHeight: 5,
                borderRadius: 10,
                textAlign: "center",
              }
            : null,
          disabled ? { opacity: 0.3 } : null,
        ]}
        onPress={handlePress}
        disabled={disabled}
      >
        {props.children}
      </TouchableOpacity>
    </View>
  );
};

export default Experiencing;



