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
              selectionItems={selectionItems}
              isResult={true}
            />
            <IconTextComponent
              onlyText={true}
              selectionId={paramsBodyParts.upperBack}
              selectionItems={selectionItems}
              isResult={true}
            />
            <IconTextComponent
              onlyText={true}
              selectionId={paramsBodyParts.lowerBack}
              selectionItems={selectionItems}
              isResult={true}
            />
            <IconTextComponent
              onlyText={true}
              selectionId={paramsBodyParts.hip}
              selectionItems={selectionItems}
              isResult={true}
            />
            <IconTextComponent
              onlyText={true}
              selectionId={paramsBodyParts.footAnkle}
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
          <View style={{ marginLeft: -widthPercentage(4) }}>
            <IconTextComponent
              onlyText={true}
              selectionId={paramsBodyParts.neck}
              selectionItems={selectionItems}
              isResult={true}
            />
            <IconTextComponent
              onlyText={true}
              selectionId={paramsBodyParts.abdominal}
              selectionItems={selectionItems}
              isResult={true}
            />
            <IconTextComponent
              onlyText={true}
              selectionId={paramsBodyParts.arms}
              selectionItems={selectionItems}
              isResult={true}
            />
            <IconTextComponent
              onlyText={true}
              selectionId={paramsBodyParts.handWrist}
              selectionItems={selectionItems}
              isResult={true}
            />
            <IconTextComponent
              onlyText={true}
              selectionId={paramsBodyParts.knees}
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