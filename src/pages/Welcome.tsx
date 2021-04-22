import React from 'react';
import { 
  SafeAreaView, 
  Text, 
  Image, 
  TouchableOpacity, 
  StyleSheet,
  Dimensions,
  View 
} from 'react-native';
import { Feather } from '@expo/vector-icons';

import wateringImg from '../assets/watering.png';
import colors from '../styles/colors';
import fonts from '../styles/fonts';


export function Welcome() {
  return ( 
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>

      <Text 
      style={styles.title}>
      {/* para dar quebra de linhas */}
        Gerencie {'\n'}  
        suas plantas de {'\n'}
        forma fácil
      </Text>
   
      <Image 
        source={wateringImg}
        style={styles.image} 
        resizeMode='contain'
      />
  
      <Text style={styles.subTitle}>
        Não esqeça mais de regar suas plantas. Nós {'\n'} 
        cuidamos de lembrar você sempre que {'\n'} 
        precisar.
      </Text>

      <TouchableOpacity 
        style={styles.button} 
        activeOpacity={0.6}>
      
      <Feather 
        name="chevron-right"
        style={styles.buttonIcon} />
        
      </TouchableOpacity>  

      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,    
  },
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.heading,
    marginTop: 30,
    fontFamily: fonts.heading,
    lineHeight: 35,
  },
  subTitle: {
    textAlign: 'center',
    fontSize: 18,
    paddingHorizontal: 20,
    color: colors.heading,
    fontFamily: fonts.text,
  },
  image: {
    // para responsividade não cravar um tamanho correto olha na image prop risizeMode
    height: Dimensions.get('window').width * 0.7,  
  },
  button: {
    backgroundColor: colors.green,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    marginBottom: 50,
    marginTop: 10,
    height: 56,
    width: 56,
  },
  buttonIcon: {
    color: colors.white,
    fontSize: 30,
  }
  }) 


