import React from 'react';
import {StyleSheet, View, Text, Image, TextInput, ScrollView, TouchableOpacity} from 'react-native';
import RedButton from '../components/redButton';
import {useState} from 'react';

const Page28 = ({navigation}) => {
    return (
      <>
          <View style = {styles.closeContainer}>
            <TouchableOpacity onPress={() => {
              navigation.navigate('first');
            }}>
          <Image style = {styles.closeImage} source = {require('../images/close-circle.png')}/>
          </TouchableOpacity>
        </View>
          <ScrollView style = {styles.container} >
        <View >
        <Image style = {styles.image} source = {require('../images/target.png')}/>
        <Text style = {styles.text}>
        Your Personal Kegel Plan is Ready!       
         </Text>
         </View>
          
            <UIView style = {styles.bolum}>
             
              <Text style = {styles.bolumText}>
              The sexual stamina of people
               who do kegel exercises
              improves by  
              <Text style = {styles.yuzde}> 82%</Text>
              </Text>
             <Image style = {styles.chartImage} source = {require('../images/chart1.png')}/>
             </UIView>
           <UIView style = {styles.bolum}>  
            <Text style = {styles.performance}>
            Performance Score
            </Text>
            <Text style = {styles.paragraf}>
            Kegel egzersizleri için performans, erekiyon ve boşalma için önemli olan kasları güçlendirmeye yardımcı olur. Nefes
            egzersizleri ise ana odaklanmanıza yardımcı olur. Kegelman, Kegel ve nefes egzersizleri ile anda sağlıklı kalmana 
            yardımcı olacak.
            </Text>
            <Image style = {styles.yesilImage} source = {require('../images/yesil.png')}/>
            </UIView>

            <UIView style = {styles.bolum}>
            <Text style = {styles.performance}>
            Stress Score
            </Text>
            <Text style = {styles.paragraf}>
            Stres seviyenin yüksek olduğunu belirttin. Cinsellikte stresli olman performans düşüklüğüne sebep olacaktır. 
            Stresini azaltmak için nefes egzersizlerimizle yanındayız.
            </Text>
            <Image style = {styles.kirmiziImage} source = {require('../images/stres.png')}/>
            </UIView>

            <UIView style = {styles.bolum}>
            <Text style = {styles.performance}>
            Sleep Score
            </Text>
            <Text style = {styles.paragraf}>
            Uykunun kalitesiz olduğunu belirttin. Günlük düzenli uyku hormonlarının düzenli olarak çalışmasını sağlayacak. Biliyorsun ki cinsel performansın en büyük etkeni hormonlar.
             Kegelman içerisindeki postlarda hormonlar hakkında daha fazla bilgi bulabilirsin.
            </Text>
            <View style = {styles.saatStyle}>
            <Image source = {require('../images/saatyesil.png')}/>
            <Image source = {require('../images/saatkirmizi.png')}/>
            </View>
            </UIView>


            <UIView style = {styles.adambolum}>
            <Text style = {styles.performance}>
            General Exercise
            </Text>
            <Text style = {styles.paragraf}>
            Cinsel performansını arttırmak için egzersiz olmazsa olmaz. Egzersiz kan akım hızını artırır. 
            Bu sebeple penisin daha iyi kanlanmasına ve daha sert ereksiyon sağlamana yardımcı olur. Sana hazırladığım mat egzersizlerini hemen yapmaya başlayabilirsin. 
            İlerlemeni gün gün takip edebileceksin.
            </Text>
            <Image  source = {require('../images/adam.png')}/>
          
            </UIView>

            <TouchableOpacity>
            <RedButton style={styles.redButton}>
            <Text style = {styles.buttonText}>GET YOUR PROGRAM</Text>
            </RedButton>
            </TouchableOpacity>
            
          
            
         

        </ScrollView>
        </> 
    );
  }


const UIView = ({children}) => {
  return <View style={styles.bolum}>{children}</View>;
};


 
const styles = StyleSheet.create({
  container: {
   
    backgroundColor: '#191924',
    flex: 1,
    paddingLeft: 40,
    paddingRight: 40, 
   

    
  },

  text: {
    color: '#fff',
    fontSize: 23,
    textAlign: 'center',
    marginTop: 20,
    fontWeight: 'bold',
  },
  
  image: {
    width: 75,
    height: 90,
   paddingTop: 60,
    alignSelf: 'center',
    
    
  },
  bolum: {
    backgroundColor: '#191a26',
    borderRadius: 20,
    padding: 10,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 50,
  },
  bolumText: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: '500',
    lineHeight: 30,
    paddingTop: 20,
    paddingBottom: 20,
    
    
  },
  yuzde: {
    color: '#26d1a3',
    fontSize: 23,
    paddingLeft: 199,
    fontWeight: 'bold',
    shadowColor: '#4d4f59',
    shadowOffset: {width: 6, height: 4},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
   
    },
    closeImage: {
      width: 25,
      height: 25,
      alignSelf: 'flex-end',
      marginTop: 20,
    },
    closeContainer: {
      backgroundColor: '#191924',
      paddingTop: 60,
      paddingLeft: 20,
      paddingRight: 14,
    },
    chartImage: {
      width: 250,
      height: 150,
      alignSelf: 'center',
      paddingBottom: 150,
      
      
    },
    yazıImage: {
      width: 250,
      height: 160,
      alignSelf: 'center',
      paddingTop:200,
     },
      performance: {
        color: '#fff',
        fontSize: 18,
        textAlign: 'center',
        marginTop: 20,
        fontWeight: 'bold',
      },
      yesilImage: {
        width: 200,
        height: 100,
        alignSelf: 'center',
      },

      paragraf: {
        color: '#fff',
        fontSize: 15,
        textAlign: 'center',
        marginTop: 20,
        fontWeight: '300',
        marginBottom: 20,
      },
      kirmiziImage: {
        width: 150,
        height: 100,
        alignSelf: 'center',
      },

      saatStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'space-around',
         },
        
          buttonText: {
            color: '#fff',
            fontSize: 20,
            textAlign: 'center',
            fontWeight: '400',
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: 15,
          },

          redButton: {
          shadowColor: '#b90005',
          shadowOffset: {width: 6, height: 4},
          shadowOpacity: 0.5,
          shadowRadius: 2,
          elevation: 2,
          paddingBottom: 20,
          marginTop: 20,
          paddingTop: 20,
          },
          
          adambolum: {
            paddingBottom: 300,
          },

});

export default Page28;