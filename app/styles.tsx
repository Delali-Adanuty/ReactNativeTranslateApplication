import { StyleSheet } from 'react-native';
import colors from '@/components/colors'

const globalStyles = StyleSheet.create({
    container:{
        flex:1,
        paddingTop:60
    },
    dark:{
        color:colors.gray,
        backgroundColor:colors.primary
    },
    light:{
        color:'black',
        backgroundColor:'white'
    },
    text:{
        fontFamily:'DMSans'
    },
    contentText:{
        fontSize:18
    },
    headerText:{
        fontSize:21,
        alignSelf:'center',
        marginTop:5,
        marginBottom:4
    },
    languageContainerText:{
        fontSize:20
    },
    languageContainer:{
        flexDirection:'row',
        borderBottomWidth:1,
        borderBottomColor:colors.gray
    },
    languageOption:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        paddingVertical:15
    },
    arrowContainer:{
        width:50,
        justifyContent:'center',
        alignItems:'center'
    },
    inputContainer:{
        paddingVertical:12,
        paddingHorizontal:10,
        borderBottomColor:colors.gray,
        borderBottomWidth:1
    },
    textInput:{
        minHeight:80,
        fontSize:20,
        padding:8
    },
    translateButton:{
        alignSelf:'flex-end',
        paddingVertical:6,
        paddingHorizontal:14,
        backgroundColor:colors.primary,
        borderRadius:3.5
    },
    translateButtonText:{
        fontSize:19,
        color:'white'
    },
    darkButton:{
        borderWidth:1,
        borderColor:'white'
    },
    resultContainer:{
        flexDirection:'row'
    },
    resultText:{
        flex:1
    },
    copyIcon:{
        margin:2,
        justifyContent:'center'
    },
    bottomNav:{
        height:100,
        justifyContent:'flex-start',
        display:'none'
    },
    bottomNavItem:{
        alignItems:'center'
    },
    icon:{
        color:'gray'
    },
    flatlistContainer:{
        padding:12
    },
    flatlistItem:{
        margin:2,
        paddingVertical:6,
        paddingHorizontal:3,
        borderBottomWidth:1,
        borderColor:colors.gray
    },
    headerButton:{
        alignSelf:'flex-start',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        marginLeft:10
    },
    headerButtonText:{
        fontSize:23,
        marginHorizontal:4,
        fontFamily:"DMSansBold"
    },
    header:{
        alignItems:'center',
    },
    historyContainer:{
        marginTop:15,
        paddingVertical:12,
        paddingHorizontal:10
    },
    translationItemContainer:{
        borderWidth:2,
        flexDirection:"row",
        marginVertical:4,
        paddingVertical:12,
        paddingHorizontal:10,
        borderRadius:5
    },
    translationTextContainer:{
        flex:1
    },
    translatedText:{
        fontSize:21,
        color:'black',
        marginVertical:2
    },
    initialText:{
        color:colors.lightBlack,
        marginVertical:2
    },
    initialDarkText:{
        color:colors.whitesmoke
    }
})


export default globalStyles