import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import IconTextComponent from '/Users/main/moovbuddy/src/modules/common/components/IconTextComponent/IconTextComponent.js';
import styles from './styles';
import Params from '/Users/main/moovbuddy/src/modules/common/params/QuestionaryParams.js';
import BodyPartsFigures from '/Users/main/moovbuddy/src/modules/common/components/bodyPartsFigures/BodyPartsFigures.js';
import { useNavigation } from '@react-navigation/native';
import { Dimensions } from 'react-native';
import DevoteToexercise from '/Users/main/moovbuddy/src/modules/Stacks/Questionary/Screens/devoteToExercise/DevoteToexercise.js';
import ContinueButton from '/Users/main/moovbuddy/src/modules/common/components/continueButton/ContinueButton.js';
import { selectionItemsHelper } from '/Users/main/moovbuddy/src/modules/common/helpers/SelectionHelper.js';

const BodyParts = () => {
  const paramsBodyParts = Params.questionaries.survey_values.body_parts;
  const [selectionItems, setSelectionItems] = useState([]);

  const selectionFunction = id => {
    selectionItemsHelper(id, setSelectionItems, selectionItems, 2);
  };

  useEffect(() => {
    const fetchData = async () => {
      const answer = await retrieveData('quizData');
      const answerJson = JSON.parse(answer).body_parts;
      if (answerJson !== null && answerJson !== undefined) {
        setSelectionItems(answerJson);
      }
    };
  
    fetchData();
  }, []);
  
  const navigation = useNavigation();


  const renderMiddleBox = () => {
    return (
      <View>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ marginRight: Dimensions.get('window').width*0.1 }}>
            <IconTextComponent
              onlyText={true}
              ButtonText={'Shoulders'}
              selectionFunction={selectionFunction}
              selectionId={paramsBodyParts.shoulders}
              selectionItems={selectionItems}
              isFigure={true}
            />
            <IconTextComponent
              onlyText={true}
              ButtonText={'Upper Back'}
              selectionFunction={selectionFunction}
              selectionId={paramsBodyParts.upperBack}
              selectionItems={selectionItems}
              isFigure={true}
            />
            <IconTextComponent
              onlyText={true}
              ButtonText={'Lower Back'}
              selectionFunction={selectionFunction}
              selectionId={paramsBodyParts.lowerBack}
              selectionItems={selectionItems}
              isFigure={true}
            />
            <IconTextComponent
              onlyText={true}
              ButtonText={'Hip'}
              selectionFunction={selectionFunction}
              selectionId={paramsBodyParts.hip}
              selectionItems={selectionItems}
              isFigure={true}
            />
            <IconTextComponent
              onlyText={true}
              ButtonText={'Foot Ankle'}
              selectionFunction={selectionFunction}
              selectionId={paramsBodyParts.footAnkle}
              selectionItems={selectionItems}
              isFigure={true}
            />
          </View>
          <BodyPartsFigures
            
            paramsBodyParts={paramsBodyParts}
            selectionItems={selectionItems}
          />
          <View style={{ marginLeft: Dimensions.get('window').width*0.05 }}>
            <IconTextComponent
              onlyText={true}
              ButtonText={'Neck'}
              selectionFunction={selectionFunction}
              selectionId={paramsBodyParts.neck}
              selectionItems={selectionItems}
              isFigure={true}
            />
            <IconTextComponent
              onlyText={true}
              ButtonText={'abdonimal'}
              selectionFunction={selectionFunction}
              selectionId={paramsBodyParts.abdominal}
              selectionItems={selectionItems}
              isFigure={true}
            />
            <IconTextComponent
              onlyText={true}
              ButtonText={'Arms'}
              selectionFunction={selectionFunction}
              selectionId={paramsBodyParts.arms}
              selectionItems={selectionItems}
              isFigure={true}
            />
            <IconTextComponent
              onlyText={true}
              ButtonText={'Hand Wrist'}
              selectionFunction={selectionFunction}
              selectionId={paramsBodyParts.handWrist}
              selectionItems={selectionItems}
              isFigure={true}
            />
            <IconTextComponent
              onlyText={true}
              ButtonText={'Knees'}
              selectionFunction={selectionFunction}
              selectionId={paramsBodyParts.knees}
              selectionItems={selectionItems}
              isFigure={true}
            />
          </View>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.wrapper}>
      
      {renderMiddleBox()}
      <ContinueButton onPress={() => navigation.navigate("DevoteToexercise")}/>
    </SafeAreaView>
  );
};


export default BodyParts;