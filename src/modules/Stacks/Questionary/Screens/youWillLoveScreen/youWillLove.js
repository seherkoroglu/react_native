import React from 'react';
import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ContinueButton from '../../../../common/components/continueButton/ContinueButton';
import Back from '../../../../common/components/goBackIcon/Back';
import { View, Text, Image } from 'react-native';
import ChooseYourGoalScreen from '../chooseYourGoalScreen/ChooseYourGoalScreen';
import {useState} from 'react';




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
            <View style={[{flexDirection: 'row', paddingTop: Dimensions.get('window').width*0.1, paddingHorizontal: Dimensions.get('window').width*0.07 }]}>
              <Back navigation={navigation} />
              <Text style={[styles.textStyle, {fontWeight: 'bold', paddingLeft:Dimensions.get('window').width*0.09 }]}>You will love the daily short exercises and tips we send</Text>
            </View>

            const renderImage = () =>
            <View style={[{ flexDirection: 'row', marginHorizontal: Dimensions.get('window').width*0.03}]}>
                {data.map(option =>
                <View >
                <Image source= {option.body} 
                style={{ width: Dimensions.get('window').width*0.9,height: Dimensions.get('window').width*0.9, resizeMode: 'contain'}}
                />
                </View>
                )}
            </View>;

            const renderText = () =>
            <View style={[{  flexDirection: 'row',flexWrap: 'wrap', marginRight:  Dimensions.get('window').width*0.1 }]}>
                {data.map(option =>
                <View style={{ flexDirection: 'row', paddingTop: Dimensions.get('window').width*0.05, marginHorizontal:  Dimensions.get('window').width*0.09}}>
                <Image source= {option.image} style= {{width: Dimensions.get('window').width*0.08,height: Dimensions.get('window').width*0.08, resizeMode: 'contain'}} />
                <Text style = {{  fontWeight: '600', fontSize: 17, color: 'gray'}}>
                    {option.label}
                </Text>
                </View>
                )}
            </View>;

            const renderButton = () =>
            <View style = {{}}>
                <ContinueButton 
                    onPress={() => navigation.navigate("ChooseYourGoalScreen")}
                />
            </View>;

            return (
                <View style={styles.container}>
                    {renderHeader()}
                    {renderImage()}
             
                    {renderText()}
                    {renderButton()}
                
                </View>
            );
        };

        const styles = StyleSheet.create({
            container: {
                flex: 1,
                backgroundColor: '#fff',
                paddingTop: Dimensions.get('window').width*0.1,

                textAlign: 'center',
                backgroundColor: '#edf3fb',
            },

            textStyle: {
                fontSize: 20,
                textAlign: 'center',
                color: '#000',
                paddingHorizontal: Dimensions.get('window').width*0.05,
            },
        });

        export default YouWillLove;




            


