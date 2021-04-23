import React from 'react';
import { 
TouchableOpacity,
Text,
StyleSheet
 } from 'react-native';

import colors from '../styles/colors'
import fonts from '../styles/fonts'

export function Button(){
  return (
    <TouchableOpacity style={styles.container}>

      <Text style={styles.text}>
        Confirmar
      </Text>

    </TouchableOpacity>  
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.green,
    height: 50,
    borderRadius: 16,
  }
});
