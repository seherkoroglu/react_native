import React from 'react';
import { StyleSheet, View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import RedButton from '/Users/main/KMClone/src/components/redButton.js';
import Rectangle from '/Users/main/KMClone/src/components/rectangle.js';
import BoldRectangle from '/Users/main/KMClone/src/components/boldRectangle.js';
import SelectAgeRange from '../selectAgeRange/selectAgeRange';
import styles from '/Users/main/KMClone/src/pages/nameInputPage/styles.js';
import { useDispatch, useSelector } from 'react-redux';
import { setName, continueAction  } from '../../actions';
import Header from '../../components/header/header';





const NameInputPage = ({navigation}) => {
    const dispatch = useDispatch();
  const name = useSelector((state) => state.name.name);

  const continuePressed = useSelector((state) => state.name.continuePressed); // "Continue" butonuna basıldı mı?

  const handleContinuePress = () => {
    dispatch(continueAction());
    navigation.navigate('selectAgeRange');
  };

   


    const renderContent = () => {
    return (
      <>
      <View style = {{ backgroundColor: '#191924'}}>
          <Header
        />
      </View>
        <View style = {styles.container}>
         <Text style ={styles.nameStyle}>Name</Text>
        <NameInput value= {name} onChangeText={(text) => dispatch(setName(text))}/>
        <TouchableOpacity onPress={handleContinuePress}>
       <RedButton>
        <Text style = {styles.redButtonText}>CONTINUE</Text>
        </RedButton>
        </TouchableOpacity>
     </View>
     </>
    );
  }

    return (    
    <>
    {renderContent()}
    </>
    );
};



const NameInput  = (props) => {
    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.input}
                placeholder ="Name"
                onChangeText={props.onChangeText}
                value={props.value}
            />
        </View>
    );
};



export default NameInputPage;
