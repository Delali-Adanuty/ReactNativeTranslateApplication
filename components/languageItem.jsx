import { Text, TouchableOpacity } from 'react-native';
import React from 'react';
import globalStyles from '@/app/styles';
import { useColorScheme } from 'react-native';

const LanguageItem = ({text, setLanguage}) => {
  const colorScheme = useColorScheme();
  return (
      <TouchableOpacity style={globalStyles.flatlistItem} onPress = {() => {
          setLanguage({text})
        }}>
        <Text style={[globalStyles.text, globalStyles.contentText,  colorScheme === 'dark' ? globalStyles.dark : globalStyles.light]}>{text}</Text>
      </TouchableOpacity>
  )
}

export default LanguageItem