import React from 'react';
import { View, Text } from 'react-native';
import BodyPartsFigures from '../bodyPartsFigures/BodyPartsFigures';
import IconTextComponent from '../iconTextComponent/IconTextComponent';
import {Dimensions} from 'react-native';

const BodyPartsComponent = ({  paramsBodyParts, selectionItems }) => {
  const renderMiddleBox = () => {
    return (
      <>
        <View style={{ flexDirection: 'row', marginTop: Dimensions.get('window').width * 0.2}}>
          <View style={{ marginRight: Dimensions.get('window').width * 0.2}}>
            <IconTextComponent
              onlyText={true}
              selectionId={paramsBodyParts.shoulders}
              ButtonText={'Shoulders'}
              selectionItems={selectionItems}
              isResult={true}
            />
            <IconTextComponent
              onlyText={true}
              selectionId={paramsBodyParts.upperBack}
              ButtonText={'Upper Back'}
              selectionItems={selectionItems}
              isResult={true}
            />
            <IconTextComponent
              onlyText={true}
              selectionId={paramsBodyParts.lowerBack}
              ButtonText={'Lower Back'}
              selectionItems={selectionItems}
              isResult={true}
            />
            <IconTextComponent
              onlyText={true}
              selectionId={paramsBodyParts.hip}
              ButtonText={'Hip'}
              selectionItems={selectionItems}
              isResult={true}
            />
            <IconTextComponent
              onlyText={true}
              selectionId={paramsBodyParts.footAnkle}
              ButtonText={'Foot Ankle'}
              selectionItems={selectionItems}
              isResult={true}
            />
          </View>
          <BodyPartsFigures
            gender={gender}
            paramsBodyParts={paramsBodyParts}
            selectionItems={selectionItems}
            isResult={true}
          />
          <View style={{ marginLeft: Dimensions.get('window').width * 0.2 }}>
            <IconTextComponent
              onlyText={true}
              selectionId={paramsBodyParts.neck}
              ButtonText={'Neck'}
              selectionItems={selectionItems}
              isResult={true}
            />
            <IconTextComponent
              onlyText={true}
              selectionId={paramsBodyParts.abdominal}
              ButtonText={'Abdominal'}
              selectionItems={selectionItems}
              isResult={true}
            />
            <IconTextComponent
              onlyText={true}
              selectionId={paramsBodyParts.arms}
              ButtonText={'Arms'}
              selectionItems={selectionItems}
              isResult={true}
            />
            <IconTextComponent
              onlyText={true}
              selectionId={paramsBodyParts.handWrist}
              ButtonText={'Hand Wrist'}
              selectionItems={selectionItems}
              isResult={true}
            />
            <IconTextComponent
              onlyText={true}
              selectionId={paramsBodyParts.knees}
              ButtonText={'Knees'}
              selectionItems={selectionItems}
              isResult={true}
            />
          </View>
        </View>
      </>
    );
  };

  return <View>{renderMiddleBox()}</View>;
};

export default BodyPartsComponent;