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




const YouWillLove = () => {
        const navigation = useNavigation();
        const [selectedGoals, setSelectedGoals] = useState(null);

        const data = [
            {
            id: "image",
            body: require("../../../../../assets/images/image.png"),
            },

            {
                id: "text1",
                image: require("../../../../../assets/images/egzersiz.png"),
                label: "Get active with daily short exercises and tips",
            },
            {
                id: "text2",
                image: require("../../../../../assets/images/parıltı.png"),
                label: "Recieve doctor's tips about health and ergonomics",
            },

            {
                id: "text3",
                image: require("../../../../../assets/images/alev.png"),
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
                style={{
                marginLeft: Dimensions.get('window').width*0.04
            }}

                />
                </View>
                )}
            </View>;

            const renderText = () =>
            <View style={[{  flexDirection: 'column' }]}>
                {data.map(option =>
                <View style={{ flexDirection: 'row',
                 paddingTop: Dimensions.get('window').width*0.02, marginHorizontal:  Dimensions.get('window').width*0.09}}>
                <Image source= {option.image} style= {{width: Dimensions.get('window').width*0.08,height: Dimensions.get('window').width*0.05, resizeMode: 'contain'}} />
                <Text style = {{  fontWeight: '600', fontSize: 17, color: 'gray'}}>
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
                <View style= {[{flex: 1 }, styles.container]}>
                
                    {renderHeader()}
                    {renderImage()}
                    {renderText()}
                    {renderButton()}
                </View>
            );
        };

        const styles = StyleSheet.create({
            container: {
                flex:1,
                textAlign: 'center',
                backgroundColor: '#edf3fb',
                justifyContent: 'center',
               
                
            },

            textStyle: {
                fontSize: 20,
                textAlign: 'center',
                color: '#000',
                marginHorizontal: Dimensions.get('window').width*0.04,
            },
        });

        export default YouWillLove;




            


