import { Text, View } from 'react-native';
import React from 'react';
import globalStyles from '@/app/styles';
import { useSelector } from 'react-redux';
import { useColorScheme } from 'react-native';

const TranslationResult = ({itemId}) => {
  const colorScheme = useColorScheme();

  const item = useSelector(state => state.history.items.find(item => item.id === itemId));


  return (
      <View style={[globalStyles.flatlistItem, globalStyles.translationItemContainer]}>
        <View style={globalStyles.translationTextContainer}>
          <Text
            numberOfLines={4}
            style={[globalStyles.text, globalStyles.contentText,  colorScheme === 'dark' ? globalStyles.dark : globalStyles.translatedText]}
            >
              {item.resultText}
          </Text>
          <Text
            numberOfLines={4}
            style={[globalStyles.text, globalStyles.contentText,  colorScheme === 'dark' ? globalStyles.initialDarkText : globalStyles.initialText]}
            >
              {item.initialText}
          </Text>
        </View>
      </View>
  )
}

export default TranslationResult