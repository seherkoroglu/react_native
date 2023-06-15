import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';

import FemaleModel from '../../../../assets/images/Female/FemaleModel.png';
import FemalePath1 from '../../../../assets/images/Female/FemalePath1.png';
import FemalePath1w from '../../../../assets/images/Female/FemalePath1w.png';
import FemalePath2 from '../../../../assets/images/Female/FemalePath2.png';
import FemalePath2w from '../../../../assets/images/Female/FemalePath2w.png';
import FemalePath3 from '../../../../assets/images/Female/FemalePath3.png';
import FemalePath3w from '../../../../assets/images/Female/FemalePath3w.png';
import FemalePath4 from '../../../../assets/images/Female/FemalePath4.png';
import FemalePath4w from '../../../../assets/images/Female/FemalePath4w.png';
import FemalePath5 from '../../../../assets/images/Female/FemalePath5.png';
import FemalePath5w from '../../../../assets/images/Female/FemalePath5w.png';
import FemalePath6 from '../../../../assets/images/Female/FemalePath6.png';
import FemalePath6w from '../../../../assets/images/Female/FemalePath6w.png';
import FemalePath7 from '../../../../assets/images/Female/FemalePath7.png';
import FemalePath7w from '../../../../assets/images/Female/FemalePath7w.png';
import FemalePath8 from '../../../../assets/images/Female/FemalePath8.png';
import FemalePath8w from '../../../../assets/images/Female/FemalePath8w.png';
import FemalePath9 from '../../../../assets/images/Female/FemalePath9.png';
import FemalePath9w from '../../../../assets/images/Female/FemalePath9w.png';
import FemalePath10 from '../../../../assets/images/Female/FemalePath10.png';
import FemalePath10w from '../../../../assets/images/Female/FemalePath10w.png';


const BodyPartsFigures = ({ paramsBodyParts, selectionItems, isResult }) => {
    return (
      <>
          <View>
            <Image
              source={
                isResult
                  ? selectionItems.includes(paramsBodyParts.shoulders)
                    ? FemalePath1
                    : null
                  : selectionItems.includes(paramsBodyParts.shoulders)
                  ? FemalePath1
                  : FemalePath1w
              }
              style={isResult ? styles.imageFemaleResult : styles.imageFemale}
            />
            <Image
              source={
                isResult
                  ? selectionItems.includes(paramsBodyParts.upperBack)
                    ? FemalePath2
                    : null
                  : selectionItems.includes(paramsBodyParts.upperBack)
                  ? FemalePath2
                  : FemalePath2w
              }
              style={isResult ? styles.imageFemaleResult : styles.imageFemale}
            />
            <Image
              source={
                isResult
                  ? selectionItems.includes(paramsBodyParts.lowerBack)
                    ? FemalePath3
                    : null
                  : selectionItems.includes(paramsBodyParts.lowerBack)
                  ? FemalePath3
                  : FemalePath3w
              }
              style={isResult ? styles.imageFemaleResult : styles.imageFemale}
            />
            <Image
              source={
                isResult
                  ? selectionItems.includes(paramsBodyParts.hip)
                    ? FemalePath4
                    : null
                  : selectionItems.includes(paramsBodyParts.hip)
                  ? FemalePath4
                  : FemalePath4w
              }
              style={isResult ? styles.imageFemaleResult : styles.imageFemale}
            />
            <Image
              source={
                isResult
                  ? selectionItems.includes(paramsBodyParts.footAnkle)
                    ? FemalePath5
                    : null
                  : selectionItems.includes(paramsBodyParts.footAnkle)
                  ? FemalePath5
                  : FemalePath5w
              }
              style={isResult ? styles.imageFemaleResult : styles.imageFemale}
            />
            <Image
              source={FemaleModel}
              style={isResult ? styles.imageFemaleModelResult : styles.imageFemaleModel}
            />
            <Image
              source={
                isResult
                  ? selectionItems.includes(paramsBodyParts.neck)
                    ? FemalePath6
                    : null
                  : selectionItems.includes(paramsBodyParts.neck)
                  ? FemalePath6
                  : FemalePath6w
              }
              style={isResult ? styles.imageFemaleResult : styles.imageFemale}
            />
            <Image
              source={
                isResult
                  ? selectionItems.includes(paramsBodyParts.abdominal)
                    ? FemalePath7
                    : null
                  : selectionItems.includes(paramsBodyParts.abdominal)
                  ? FemalePath7
                  : FemalePath7w
              }
              style={isResult ? styles.imageFemaleResult : styles.imageFemale}
            />
            <Image
              source={
                isResult
                  ? selectionItems.includes(paramsBodyParts.arms)
                    ? FemalePath8
                    : null
                  : selectionItems.includes(paramsBodyParts.arms)
                  ? FemalePath8
                  : FemalePath8w
              }
              style={isResult ? styles.imageFemaleResult : styles.imageFemale}
            />
            <Image
              source={
                isResult
                  ? selectionItems.includes(paramsBodyParts.handWrist)
                    ? FemalePath9
                    : null
                  : selectionItems.includes(paramsBodyParts.handWrist)
                  ? FemalePath9
                  : FemalePath9w
              }
              style={isResult ? styles.imageFemaleResult : styles.imageFemale}
            />
            <Image
              source={
                isResult
                  ? selectionItems.includes(paramsBodyParts.knees)
                    ? FemalePath10
                    : null
                  : selectionItems.includes(paramsBodyParts.knees)
                  ? FemalePath10
                  : FemalePath10w
              }
              style={isResult ? styles.imageFemaleResult : styles.imageFemale}
            />
          </View>
      </>
    );
  };
  
  export default BodyPartsFigures;