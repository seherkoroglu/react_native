import React from 'react';
import { StyleSheet, View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import RedButton from '../components/redButton';
import Rectangle from '../components/rectangle';
import BoldRectangle from '../components/boldRectangle';
import SelectAgeRange from '.../pages/selectAgeRange/selectAgeRange';
import styles from '.../pages/nameInputPage/styles';




const NameInputPage = ({navigation}) => {
    
    const renderProgressBar = () => {
    return (
    <>
   
<View style={styles.rectangleContainer}>
            <BoldRectangle/>
</View>

    </>
    );
    };

    const renderBackContainer = () => {
    return (
       <View style={styles.backContainer}>
    
     <TouchableOpacity onPress={() => {
          navigation.goBack();
        }}>
        <Image style={styles.backImage} source={require('../images/back.png')}/>
        </TouchableOpacity>
        </View>
    );
    };

    const renderContent = () => {
    return (
        <View style = {styles.container}>
         <Text style ={styles.nameStyle}>Name</Text>
        <NameInput/>
        <TouchableOpacity onPress={() => navigation.navigate('selectAgeRange')}>
       <RedButton>
        <Text style = {styles.redButtonText}>CONTINUE</Text>
        </RedButton>
        </TouchableOpacity>
     </View>
    );
  }

    return (    
    <>
    {renderProgressBar()}
    {renderBackContainer()}
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
