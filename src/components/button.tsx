import React from 'react';
import {TouchableOpacity, Text, StyleSheet, TouchableOpacityProps } from 'react-native';
import colors from '../styles/colors';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
}

export function Button({title, ...rest } : ButtonProps){
  return (
    <TouchableOpacity 
    style={styles.button} 
    activeOpacity={0.6}
    {...rest}
  >
    <Text 
      style={styles.textButton}>
        {title}
    </Text>

  </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.green,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    marginBottom: 50,
    marginTop: 10,
    height: 56,
    width: 56,
    paddingHorizontal: 10,
  },
  textButton: {
    color: colors.white,
    fontSize: 24,
  }
})