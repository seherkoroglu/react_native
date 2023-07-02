import React from 'react';
import { View, Text, Image, Dimensions, TouchableOpacity } from 'react-native';
import styles from './styles';
import Params from '/Users/main/moovbuddy/src/modules/common/params/QuestionaryParams.js';

const IconTextComponent = ({
    Icon,
    ButtonText,
    selectionFunction = null,
    selectionId = null,
    selectionItems = [],
    onlyText = false,
    isFigure = false,
    isResult = false,
    isOther = false,
    screen = null,
    doubleText = false,
    buttonDoubleText = '',
  }) => {
    const select = () => {
      if (selectionFunction) selectionFunction(selectionId, isOther);
    };

    return (
        <TouchableOpacity
          style={[
            styles.wrapper,
            selectionItems.includes(selectionId) && {
              backgroundColor: '#c6d4f4',
              borderColor: Colors.blue,
              borderWidth: 1,
            },
            onlyText && {
              justifyContent: 'center',
            },
            isFigure && {
              width: Dimensions.get('window').width * 0.1,
              height: Dimensions.get('window').width * 0.1,
              marginVertical: Dimensions.get('window').width * 0.02,
              marginHorizontal: Dimensions.get('window').width * 0.02,
            },
            isResult && {
              width: Dimensions.get('window').width * 0.1,
              height: Dimensions.get('window').width * 0.1,
            },
          ]}
          onPress={select}
          //if restrict is true and the selectionItems includes 8, then the button is disabled
          disabled={
            // (restrict &&
            //   ((screen === 'Diseases' &&
            //     selectionItems.includes(Params.questionaries.survey_values.diseases_risk.none)) ||
            //     (screen === 'PainArea' &&
            //       selectionItems.includes(Params.questionaries.survey_values.pain_area.none)) ||
            //     (screen === 'ProblemSleep' &&
            //       selectionItems.includes(
            //         Params.questionaries.survey_values.specific_problems.none.value,
            //       )))) ||
            isResult
          }
        >
          {!onlyText && (
            <>
              {typeof Icon === 'function' ? (
                <Icon style={{ marginLeft: Dimensions.get('window').width * 0.2 }} />
              ) : (
                <Image source={Icon} style={styles.imageContainer} />
              )}
            </>
          )}
    
          {doubleText && (
            <Text
              style={[
                styles.buttonText,
                {
                  marginLeft: 0,
                },
              ]}
            >
              {buttonDoubleText}
            </Text>
          )}
    
          <Text
            style={[
              styles.buttonText,
    
              onlyText && { marginLeft: 0 },
              isResult && { fontSize: width * 0.024 },
            ]}
          >
            {ButtonText}
          </Text>
        </TouchableOpacity>
      );
    };
    
    export default IconTextComponent;
  