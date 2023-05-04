import React from 'react';
import { StyleSheet, View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import RedButton from '/Users/main/KMClone/src/components/redButton.js';
import Rectangle from '/Users/main/KMClone/src/components/rectangle.js';
import BoldRectangle from '/Users/main/KMClone/src/components/boldRectangle.js';
import SelectAgeRange from '/Users/main/KMClone/src/pages/selectAgeRange/selectAgeRange.js';
import styles from '/Users/main/KMClone/src/pages/nameInputPage/styles.js';




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
        <Image style={styles.backImage} source={require('/Users/main/KMClone/src/images/back.png')}/>
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
