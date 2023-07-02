import React from 'react';
import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ContinueButton from '../../../../common/components/continueButton/ContinueButton';
import Back from '../../../../common/components/goBackIcon/Back';
import { View, Text, Image } from 'react-native';
import ChooseYourGoalScreen from '../chooseYourGoalScreen/ChooseYourGoalScreen';
import {useState} from 'react';
import Header from '../../../../common/components/header/Header';
import styles from './styles';
import image from '../../../../../assets/images/image.png';
import egzersiz from '../../../../../assets/images/egzersiz.png';
import parıltı from '../../../../../assets/images/parıltı.png';
import alev from '../../../../../assets/images/alev.png';




const YouWillLove = () => {
        const navigation = useNavigation();
        const [selectedGoals, setSelectedGoals] = useState(null);

        const data = [
            {
            id: "image",
            body: image,
            },

            {
                id: "text1",
                image: egzersiz,
                label: "Get active with daily short exercises and tips",
            },
            {
                id: "text2",
                image: parıltı,
                label: "Recieve doctor's tips about health and ergonomics",
            },

            {
                id: "text3",
                image: alev,
                label: "Discover the new challanges and special offers",
            },

            ];
            const renderHeader = () =>
            <Header title = "You will love the daily short exercises and tips we send :)" />;


            const renderImage = () =>
            <View >
                {data.map(option =>
                <View >
                <Image source= {option.body} 
                />
                </View>
                )}
            </View>;

            const renderText = () =>
            <View style={[{  flexDirection: 'column' }]}>
                {data.map(option =>
                <View style={{ flexDirection: 'row',
                 paddingTop: Dimensions.get('window').width*0.02, marginHorizontal:  Dimensions.get('window').width*0.08}}>
                <Image source= {option.image} style= {{width: Dimensions.get('window').width*0.1,height: Dimensions.get('window').width*0.07, resizeMode: 'contain'}} />
                <Text style = {{  fontWeight: '600', fontSize: Dimensions.get('window').width*0.04, color: 'gray'}}>
                    {option.label}
                </Text>
                </View>
                )}
            </View>;

            const renderButton = () =>
            <View>
                <ContinueButton 
                    onPress={() => navigation.navigate("ChooseYourGoalScreen")}
                />
            </View>;

            return (
                <View style= {[ styles.container]}>
               
                    {renderHeader()}
               
                <View style={{flex:1}}>
                    {renderImage()}
                </View>
                
               
                    {renderText()}
               
               
                    {renderButton()}
               
                </View>
            );
        };

        export default YouWillLove;




            


