import React from 'react';
import {StyleSheet, View, Text, Image, TextInput, ScrollView, TouchableOpacity} from 'react-native';
import RedButton from '/Users/main/KMClone/src/components/redButton.js';
import {useState} from 'react';
import styles from '/Users/main/KMClone/src/pages/kegelPlan/styles.js';

const KegelPlan = ({navigation}) => {

const renderProgressBar = () => {
    return (
      <>
          <View style = {styles.closeContainer}>
            <TouchableOpacity onPress={() => {
              navigation.navigate('first');
            }}>
          <Image style = {styles.closeImage} source = {require('/Users/main/KMClone/src/images/close-circle.png')}/>
          </TouchableOpacity>
        </View>
      </>
    );
  };
          
          const renderContent = () => {
            return (
          <ScrollView style = {styles.container} >
        <View >
        <Image style = {styles.image} source = {require('/Users/main/KMClone/src/images/target.png')}/>
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
             <Image style = {styles.chartImage} source = {require('/Users/main/KMClone/src/images/chart1.png')}/>
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
            <Image style = {styles.yesilImage} source = {require('/Users/main/KMClone/src/images/yesil.png')}/>
            </UIView>

            <UIView style = {styles.bolum}>
            <Text style = {styles.performance}>
            Stress Score
            </Text>
            <Text style = {styles.paragraf}>
            Stres seviyenin yüksek olduğunu belirttin. Cinsellikte stresli olman performans düşüklüğüne sebep olacaktır. 
            Stresini azaltmak için nefes egzersizlerimizle yanındayız.
            </Text>
            <Image style = {styles.kirmiziImage} source = {require('/Users/main/KMClone/src/images/stres.png')}/>
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
            <Image source = {require('/Users/main/KMClone/src/images/saatyesil.png')}/>
            <Image source = {require('/Users/main/KMClone/src/images/saatkirmizi.png')}/>
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
            <Image  source = {require('/Users/main/KMClone/src/images/adam.png')}/>
          
            </UIView>

            <TouchableOpacity>
            <RedButton style={styles.redButton}>
            <Text style = {styles.buttonText}>GET YOUR PROGRAM</Text>
            </RedButton>
            </TouchableOpacity>
        </ScrollView>

    );
  };

  return (
    <>
      {renderProgressBar()}
      {renderContent()}
    </>
  );
};



const UIView = ({children}) => {
  return <View style={styles.bolum}>{children}</View>;
};


export default KegelPlan;