import React from 'react';
import { Dimensions } from 'react-native';
import { TouchableOpacity, View, Image, Text } from 'react-native';
import Back from '../../../../common/components/goBackIcon/Back';
import styles from './styles';
import BodyTypeScreen from '../bodyTypeScreen/BodyTypeScreen';
import { useNavigation } from '@react-navigation/native';

const PostureType = ({ navigation }) => {
  const [select, setSelect] = React.useState(null);

  const data = [
    { image: require('../../../../../assets/images/healthyPosture.png'), text: 'Kyphosis' },
    { image: require('../../../../../assets/images/forwardheadPosture.png'), text: 'Forward Head Posture' },
    { image: require('../../../../../assets/images/swayBackPosture.png'), text: 'Sway Back Posture' },
    { image: require('../../../../../assets/images/kyphosisPosture.png'), text: 'Kyphosis' },
    { image: require('../../../../../assets/images/flatBackPosture.png'), text: 'Flat Back Posture' },
    { image: require('../../../../../assets/images/lordosisPosture.png'), text: 'Lordosis Posture' },
  
  ];

  const handleSelect = (option) => {
    setSelect(option);
    navigation.navigate('PhysicalActivity');
  };

  const renderQuestion = () => {
    return (
      <View style={styles.container}>
        <Back navigation={navigation} />
        <Text style={styles.textStyle}>Which posture type do you have?</Text>
      </View>
    );
  };

  const first = () => {
    return (
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', margin: '6%'}}>
        {data.map((item, index) => (
          <View style={{ }}>
            <Goal style={{ }} key={index}
              selected={select === item.text}
              onSelect={() => handleSelect(item.text)}>
              <Image style={styles.image} source={item.image} />
              <Text style={styles.options}>{item.text}</Text>
            </Goal>
          </View>
        ))}
      </View>
    );
  };
  
const Goal = (props) => {
  const { selected, onSelect, columnCount  } = props;

  const handlePress = () => {
    if (!selected) {
      onSelect();
    }
  };

  return (
    <View  style = {styles.goal}> 
      <TouchableOpacity
      
        style={[
          styles.goal,
          selected ? {
            backgroundColor: '#8ab1ff',
            width: Dimensions.get('window').width * 0.25,
            height: Dimensions.get('window').width * 0.50,
            marginHorizontal: Dimensions.get('window').width * 0.05,
            marginVertical: Dimensions.get('window').width * 0.02,
            paddingHorizontal: Dimensions.get('window').width * 0.04,
            borderRadius: 20,
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: 15,
            lineHeight: 5,
            textAlign: 'center',
            
          } : null
        ]}
        onPress={handlePress}
      >
          {props.children}
      </TouchableOpacity>
    </View>
  );
}


  return (
    <>
      {renderQuestion()}
      <View style={styles.goals}>
        {first()}
      </View>
    </>
  );
};

export default PostureType;


