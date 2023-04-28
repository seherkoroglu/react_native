import React from 'react';
import { StyleSheet, View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import RedButton from '../../components/redButton';
import Rectangle from '../../components/rectangle';
import BoldRectangle from '../../components/boldRectangle';
import Page3 from '../page3';




const Page2 = ({navigation}) => {
    return (
    <>
   
<View style={styles.rectangleContainer}>
            <BoldRectangle/>
</View>
       <View style={styles.backContainer}>
    
     <TouchableOpacity onPress={() => {
          navigation.goBack();
        }}>
        <Image style={styles.backImage} source={require('../images/back.png')}/>
        </TouchableOpacity>
        </View>
        <View style = {styles.container}>
         <Text style ={styles.nameStyle}>Name</Text>
        <NameInput/>
        <TouchableOpacity onPress={() =>
            
            navigation.navigate('page3')}>
       <RedButton>
        <Text style = {styles.redButtonText}>CONTINUE</Text>
        </RedButton>
        </TouchableOpacity>
     </View>
    </>
    );
  }



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



export default Page2;
