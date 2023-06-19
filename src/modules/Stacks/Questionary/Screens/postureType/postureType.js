import React from 'react';
import { Dimensions } from 'react-native';
import { TouchableOpacity, View, Image, Text } from 'react-native';
import Back from '../../../../common/components/goBackIcon/Back';
import styles from './styles';
import BodyTypeScreen from '../bodyTypeScreen/BodyTypeScreen';
import { useNavigation } from '@react-navigation/native';
import Header from '../../../../common/components/header/Header';

const PostureType = ({ navigation }) => {
  const [select, setSelect] = React.useState(null);

  const data = [
    { image: require('../../../../../assets/images/healthyPosture.png'), text: 'Healthy Posture' },
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

  const renderQuestion = () => 
    <Header
      title="Which posture type do you have?" 
      subtitle="Choose what your posture looks like now, to help create a program to correct it." 
    />
  

  const first = () => {
    return (
      <View style={{ flexDirection: 'row', flexWrap: 'wrap',  justifyContent: 'center'}}>
        {data.map((item, index) => (
          <View>
            <Goal
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
            marginVertical: Dimensions.get('window').width * 0.04,
            paddingHorizontal: Dimensions.get('window').width * 0.04,
            borderRadius: 20,
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: 15,
            lineHeight: 5,
            textAlign: 'center',
            borderColor: '#1558e6',
            
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
    <View style={{ flex:1, backgroundColor: '#edf3fb'}}>
      {renderQuestion()}
      <View style={{ flex: 1, backgroundColor: '#edf3fb' }}>
        {first()}
        </View>
      </View>
    
      
    
  );
};

export default PostureType;


