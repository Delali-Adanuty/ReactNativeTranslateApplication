import { Text, View, Pressable, FlatList } from 'react-native';
import React from 'react';
import globalStyles from '@/app/styles';
import supportedLanguages from '@/components/supportedLanguages';
import LanguageItem from './languageItem';
import { Feather } from '@expo/vector-icons';
import { useColorScheme } from 'react-native';


const LanguageSelectModal = ({setVisibility, title, direction, updateSelected, currentSelection }) => {
    const handleLanguageData = (languageData) => {
        updateSelected(languageData)
        setVisibility(false)
    }
    const colorScheme = useColorScheme()
  return (
    <View style={[globalStyles.container,  colorScheme === 'dark' ? globalStyles.dark : globalStyles.light]}>
        <View style={globalStyles.header}>
            <Pressable style={[globalStyles.headerButton,  colorScheme === 'dark' ? globalStyles.dark : globalStyles.light]} onPress = {() => {
                updateSelected(currentSelection)
                setVisibility(false)
                }}>
                 <Feather name="arrow-left" size={22} style={[colorScheme === 'dark' ? globalStyles.dark : globalStyles.light]} />   
                <Text style={[globalStyles.text, globalStyles.headerButtonText, colorScheme === 'dark' ? globalStyles.dark : globalStyles.light]}>Back</Text>
            </Pressable>
            <Text style={[globalStyles.text, globalStyles.headerText, colorScheme === 'dark' ? globalStyles.dark : globalStyles.light]}>{title}</Text>
      </View>

      <View style={[globalStyles.flatlistContainer, colorScheme === 'dark' ? globalStyles.dark : globalStyles.light]}>
        <FlatList 
            data={Object.keys(supportedLanguages)}
            renderItem={(itemData) => {
                const languageKey = itemData.item;
                const languageString = supportedLanguages[languageKey];
                return <LanguageItem
                                text={languageString}
                                name={languageKey}
                                direction={direction}
                                setLanguage={handleLanguageData}
                            />
            }}
        />
      </View>

    </View>
  )
}

export default LanguageSelectModal