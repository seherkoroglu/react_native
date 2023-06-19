import React, { useState } from 'react';
import { View, Text, Image, Dimensions, TouchableOpacity } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import Back from '../../../../common/components/goBackIcon/Back';
import YouWillLove from '../youWillLoveScreen/YouWillLove';
import Header from '../../../../common/components/header/Header';

const Focusing = () => {
  const navigation = useNavigation();
  const [selectedGoal, setSelectedGoal] = useState(null);

  const handleSelect = option => {
    setSelectedGoal(option);
    navigation.navigate("YouWillLove");
  };

  const data = [
    {
      id: "option1",
      image: require("../../../../../assets/images/yes.png"),
      label: "Yes",
    },
    {
      id: "option2",
      image: require("../../../../../assets/images/no.png"),
      label: "No"
    },
  ];

  const renderQuestion = () => (
    <Header title="Are you having Trouble focusing" />
  );

  const renderOptions = () => (
    <View style={[{ paddingBottom: Dimensions.get('window').width*0.5, flexDirection: 'row', marginLeft: Dimensions.get('window').width * 0.14 }]}>
      {data.map(option => (
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity
            key={option.id}
            onPress={() => handleSelect(option.id)}
          >
            <Goal
              selected={selectedGoal === option.id}
              onSelect={() => setSelectedGoal(option.id)}
            >
              <Image source={option.image} />
              <Text style={{ textAlign: 'center', paddingTop: Dimensions.get('window').width * 0.02 }}>
                {option.label}
              </Text>
            </Goal>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );

  return (
    <View style={{ flex: 1, backgroundColor: "#edf3fb" }}>
      {renderQuestion()}
      <View >
        {renderOptions()}
      </View>
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
              justifyContent: 'center',
              width: Dimensions.get('window').width * 0.3,
              height: Dimensions.get('window').width * 0.3,
              marginVertical: Dimensions.get('window').width * 0.03,
              marginHorizontal: Dimensions.get('window').width * 0.03,

              borderRadius: 10,
              alignItems: 'center',
              flexDirection: 'column',
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

export default Focusing;
