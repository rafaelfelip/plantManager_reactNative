import React from 'react';
import { 
  SafeAreaView, 
  Text, 
  Image, 
  TouchableOpacity, 
  StyleSheet,
  Dimensions 
} from 'react-native';
import { Feather } from '@expo/vector-icons';

import wateringImg from '../assets/watering.png';
import colors from '../styles/colors';

export function Welcome() {
  return ( 
    <SafeAreaView 
    style={styles.container}>
      <Text 
      style={styles.title}>
      {/* para dar quebra de linhas */}
        Gerencie {'\n'}  
        suas plantas {'\n'}
        de forma fácil
      </Text>
   
      <Image 
       source={wateringImg}
       style={styles.image} 
       resizeMode='contain'
      />
  
      <Text style={styles.subTitle}>
          Não esqeça mais de regar suas plantas. 
          Nós cuidamos de lembrar você sempre que precisar.
      </Text>

      <TouchableOpacity 
    style={styles.button} 
    activeOpacity={0.6}>

        <Text>
         <Feather 
         name="chevron-right"
         style={styles.buttonIcon} />
        </Text>

      </TouchableOpacity>  
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    
  },
  title: {
    marginTop: 50,
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.heading,
  },
  subTitle: {
    textAlign: 'center',
    fontSize: 18,
    paddingHorizontal: 20,
    color: colors.heading,
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


