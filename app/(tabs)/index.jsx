import {  
    Text,
    View,
    Pressable,
    TextInput,
    Modal,
    TouchableOpacity,
    FlatList
} from 'react-native';
import React, { useEffect } from 'react';
import { useState, useCallback } from 'react';
import LanguageSelectModal from '@/components/LanguageSelectModal'
import globalStyles from '../styles';
import { Feather } from '@expo/vector-icons';
import axios from 'axios';
import { Keyboard } from 'react-native';
import * as Clipboard from 'expo-clipboard';
import { useDispatch, useSelector } from 'react-redux';
import { addHistoryItem } from '@/store/historySlice';
import TranslationResult from '@/components/translationResult';
import uuid from 'react-native-uuid';
import { useColorScheme } from 'react-native';




const HomeScreen = () => {
    const colorScheme = useColorScheme();
    const dispatch = useDispatch();
    const history = useSelector(state => state.history.items)

    const [enteredText, setEnteredText] = useState("");
    const [translatedText, setTranslatedText] = useState("Translated text...")
    const [showModal, setShowModal] = useState(false);
    const [languageTo, setLanguageTo] = useState({"text":"French"});
    const [languageFrom, setLanguageFrom] = useState({"text":"English"});
    const [modalTitle, setModalTitle] = useState("")
    const [direction, setDirection] = useState("") 
    const [selected, setSelected] = useState("")
    const [alreadySelected, setAlreadySelected] = useState("")
    
    
    const translateText = async () => {
        try{
            const response = await axios.post(
                'https://api.openai.com/v1/chat/completions',
                {
                    messages:[
                        {role:'user', content: `Translate the following from ${languageFrom.text} text into ${languageTo.text}: "${enteredText}". I would prefer you just return the translated text and nothing else.`}
                    ],
                    max_tokens:100,
                    model:'gpt-4o-mini'
                },
                {
                    headers:{
                        'content-type': 'application/json',
                        'Authorization': `Bearer ${apiKey}`
                    }
                }
            )
            
            const id = uuid.v4();

            setTranslatedText(response.data.choices[0].message.content)
            Keyboard.dismiss()
            itemObject = Object();
            itemObject.id = id
            itemObject.from = languageFrom
            itemObject.to = languageTo
            itemObject.initialText = enteredText
            itemObject.resultText = response.data.choices[0].message.content
            dispatch(addHistoryItem({item: itemObject}));
        } catch (error) {
            console.error('Translation error:', error.response ? error.response.data : error.message);
        }
    }

    useEffect(() => {
        if(direction == "To"){
            setLanguageTo(selected)
        }else if (direction == "From"){
            setLanguageFrom(selected)
        }
    })

    const copyToClipboard = useCallback(async () => {
        await Clipboard.setStringAsync(translatedText)
    }, [translatedText])


  return (
    <View style={[globalStyles.container, colorScheme === 'dark' ? globalStyles.dark : globalStyles.light]}>
        <Modal visible={showModal}>
            <LanguageSelectModal 
            setVisibility={setShowModal} 
            title={modalTitle} 
            direction={direction} 
            updateSelected={setSelected}
            currentSelection={alreadySelected}
            />
        </Modal>

        <View style={[globalStyles.languageContainer, colorScheme === 'dark' ? globalStyles.dark : globalStyles.light]}>
            <Pressable style={globalStyles.languageOption} onPress={() => {
                setDirection("From")
                setShowModal(true)
                setModalTitle("Translate From...")
                setAlreadySelected(languageFrom)
            }}>
                <Text style={{...globalStyles.text, ...globalStyles.contentText, ...globalStyles.languageContainerText, ...colorScheme === 'dark' ? globalStyles.dark : globalStyles.light}}>{languageFrom.text}</Text>
            </Pressable>
            <View style={[globalStyles.arrowContainer, colorScheme === 'dark' ? globalStyles.dark : globalStyles.light]}>
                <Feather name="arrow-right" size={24} style={[globalStyles.icon, colorScheme === 'dark' ? globalStyles.dark : globalStyles.light]}/>
            </View>
            <Pressable style={globalStyles.languageOption} onPress={() => {
                setShowModal(true)
                setModalTitle("Translate To...")
                setDirection("To")
                setAlreadySelected(languageTo)
            }}>
                <Text style={[globalStyles.text, globalStyles.contentText, globalStyles.languageContainerText, colorScheme === 'dark' ? globalStyles.dark : globalStyles.light]}>{languageTo.text}</Text>
            </Pressable>            
        </View>

        <View style={globalStyles.inputContainer}>
            <TextInput
                multiline
                placeholder='Enter text you want to translate...'
                style={[globalStyles.textInput, globalStyles.text, colorScheme === 'dark' ? globalStyles.dark : globalStyles.light]}
                onChangeText={(text) => {
                    setEnteredText(text)
                }}
            />
            <Pressable disabled={enteredText == ""} style={[globalStyles.translateButton, colorScheme === 'dark' ? globalStyles.darkButton: globalStyles.lightButton]} onPress={translateText}>
                <Text style={[globalStyles.text, globalStyles.translateButtonText]}>Translate</Text>
            </Pressable>
        </View>

        <View style={[globalStyles.inputContainer, globalStyles.resultContainer, colorScheme === 'dark' ? globalStyles.dark : globalStyles.light]}>
            <Text style={[globalStyles.textInput, globalStyles.resultText, colorScheme === 'dark' ? globalStyles.dark : globalStyles.light]}>{translatedText}</Text>
            <TouchableOpacity style={globalStyles.copyIcon} onPress={copyToClipboard}>
                <Feather name="copy" size={24} style={[colorScheme === 'dark' ? globalStyles.dark : globalStyles.light]}/>
            </TouchableOpacity>
        </View>

        <View style={[globalStyles.historyContainer]}>
            <Text style={[globalStyles.text, globalStyles.headerText, colorScheme === 'dark' ? globalStyles.dark : globalStyles.light]}>Translation History</Text>
            <FlatList 
                data={history}
                inverted
                renderItem={(itemData) => {
                    return <TranslationResult itemId = {itemData.item.id}/>
                }}
            />
        </View>
    </View>
  )
}

export default HomeScreen
