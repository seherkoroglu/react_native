import React, { useState } from "react";
import { View, Text, TouchableOpacity} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Goals from "../../../../common/components/goals/Goals";
import Back from "../../../../common/components/goBackIcon/Back";
import styles from "./styles";
import { Dimensions } from "react-native";
import DoYouFeelPain from "../doYouFeelPain/DoYouFeelPain";
import Header from "../../../../common/components/header/Header";

const DevoteToexercise = () => {
  const navigation = useNavigation();
  const [selectedGoal, setSelectedGoal] = useState(null);

  const handleSelect = option => {
    setSelectedGoal(option);
    navigation.navigate("DoYouFeelPain");
  };

  const data = [
    {
      id: "option1",
      label: "Less than 30 minutes",
    },
    {
      id: "option2",
      label: "1 hour"
    },
    {
      id: "option3",
      label: "More than 1 hour"
    }
  ];

  const renderQuestion = () =>
    <Header
    title= "How much time do you devote to exercise?"
    />

  const renderOptions = () =>
    <View style={[{ paddingVertical: Dimensions.get('window').width*0.06, marginHorizontal: Dimensions.get('window').width*0.06 }]}>
      {data.map(option =>
       <View style={{ flexDirection: "row" }}>
        <TouchableOpacity
          key={option.id}
          onPress={() => handleSelect(option.id)}
        >

            <Goal
              selected={selectedGoal === option.id}
              onSelect={() => setSelectedGoal(option.id)}
            >
              <Text style = {{textAlign:'center'}}>
                {option.label}
              </Text>
            </Goal>
        
        </TouchableOpacity>
        </View>
      )}
    </View>;

  return (
    <View style={{ flex: 1, backgroundColor: "#edf3fb" }}>
      
        {renderQuestion()}
        {renderOptions()}
     
    </View>
  );
};

const Goal = props => {
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
                backgroundColor: "#8ab1ff",
                width: Dimensions.get('window').width * 0.80,
                height: Dimensions.get('window').width * 0.15,
                marginHorizontal: Dimensions.get('window').width * 0.02,
                marginVertical: Dimensions.get('window').width * 0.02,
                paddingHorizontal: Dimensions.get('window').width * 0.04,
                borderRadius: 10,
                fontSize: 15,
                lineHeight: 5,
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

export default DevoteToexercise;
