import React from 'react';
import { StyleSheet, View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import RedButton from '../components/redButton';
import Rectangle from '../components/rectangle';
import BoldRectangle from '../components/boldRectangle';
import Page3 from '../pages/page3';




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

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#191924',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        
      flex: 1,
      paddingBottom: 400,
    
        
    },
 rectangleContainer:{
   
        backgroundColor: '#191924',
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingTop: 100,
        paddingLeft: 20,
        flexDirection: 'column',
        
        },

    inputContainer: {
        backgroundColor: '#222331',
        width: 300,
        height: 40,
        borderRadius: 5,
        marginTop: 20,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#4d4f59',
        borderWidth: 0.6,
        marginBottom: 200,

    },
    input: {
        color: 'white',
        fontSize: 20,
        fontWeight: '500',
        marginLeft: 15,
    },
    

    nameStyle: {
        color: 'white',
        fontSize: 26,
       
        fontWeight: 'bold',
        fontFamily: 'Avenir',
       
        paddingLeft: 40,
        paddingRight: 40,
        
    },
    redButtonText: {
        color: 'white',
        fontSize: 20,
        fontWeight: '500',
        fontFamily: 'Avenir',
        lineHeight: 40,
        paddingLeft: 40,
        paddingRight: 40,
        justifyContent: 'center', 
        alignItems: 'center',
        paddingTop: 10,
        
    },
    backContainer: {
        backgroundColor: '#191924',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        
        paddingRight: 400,
        paddingBottom: 190,
        

     
        
        
      },
    
      backImage: {
        width: 25,
        height: 25,
        marginLeft: 20,
        marginTop: 10,
        marginBottom: 10,
        justifyContent: 'flex-start',

       
    
      },



});

export default Page2;
