import { Text, View, TouchableOpacity } from 'react-native';
import React, { useCallback } from 'react';
import globalStyles from '@/app/styles';
import Feather from '@expo/vector-icons/Feather';
import colors from '@/components/colors';
import { useDispatch, useSelector } from 'react-redux';
import { setSavedItems } from '@/store/savedItemsSlice';
import { useColorScheme } from 'react-native';

const TranslationResult = ({itemId}) => {
  const colorScheme = useColorScheme();
  const dispatch = useDispatch();
  const history = useSelector(state => state.history.items)
  const item = useSelector(state => state.history.items.find(item => item.id === itemId));
  // const savedItems = useSelector(state => state.history.items.filter(item.isSaved === true));
  // const isSaved = item.isSaved
  // const iconColor = isSaved ? "black" : colors.lightBlack 

  // const saveItem = (item) => {
  //   console.log(item)
  // }

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
        {/* <TouchableOpacity onPress={() => saveItem(item)}>
          <Feather name="star" size={24} color={"black"} />
        </TouchableOpacity> */}
      </View>
  )
}

export default TranslationResult