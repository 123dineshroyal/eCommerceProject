import {View,
        Text,
        SafeAreaView,
        StyleSheet,
        Image,
        TouchableOpacity,
} from 'react-native';
import themes, { COLORS } from '../../constants/themes';
import Images from '../../assets/Images';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import { Color } from 'react-native/types_generated/Libraries/Animated/AnimatedExports';

const Password = () =>{

    const navigation = useNavigation();

    return(
        <SafeAreaView style={styles.mainContainer}>
          <Image source={Images.topLeft} style={styles.topLeftImage}/>
          <Image source={Images.topLeftBlue} style={styles.topLeftBlueImage}/>

          <View style={styles.profileContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('Password-Typing-Screen')}>
                <Image source={Images.profile} style={styles.userImage} />
            </TouchableOpacity>    
            <Text style={styles.userName}>Hello, Romina!!</Text>
            <Text style={styles.passwordText}>Type your password</Text>
            <View style={styles.passwordContainer}>
                <Text style={styles.passwordBox}/>
                <Text style={styles.passwordBox}/>
                <Text style={styles.passwordBox}/>
                <Text style={styles.passwordBox}/>
            </View>

            <View style={styles.buttonContainer}>
                <Text style={styles.notYouText}>Not You?</Text>
                <TouchableOpacity style={styles.nextArrow} onPress={() =>navigation.navigate('loginScreen')}>
                    <Icon name='arrow-forward' size={20} color='white'/>
                </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
    )
}
export default Password;

const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        backgroundColor:COLORS.primaryColor, 
    },
    topLeftImage:{
        position:'absolute',
        top:0,
        left:0,
        height:345,
        width:300,
       resizeMode:'stretch'
    },
    topLeftBlueImage:{
        position:'absolute',
        top:0,
        left:0,
        width:250,
        height:280,
        resizeMode:'stretch'
        
    },
    profileContainer:{
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        top:148
    },
    userImage:{
        width:106,
        height:106,
        borderColor:COLORS.textColor2,
        borderWidth:6,
        borderRadius:50,
        shadowColor:COLORS.darkBlack,
        shadowRadius: 8,
        elevation: 5,
    },
    userName:{
        marginTop:35,
        fontWeight:700,
        fontSize:28
    },
    passwordText:{
        marginTop:30,
        fontSize:19,
        fontWeight:'300'
    },
    passwordContainer:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        marginTop:23,
            
    },
    passwordBox:{
        height:50,
        width:50,
        backgroundColor:COLORS.whiteSmoke,
        borderRadius:10,
        marginLeft:5
    },
    buttonContainer:{
        top:230,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    notYouText:{
        fontSize:15,
        fontWeight:'300'
    },
    nextArrow:{
        height:30,
        width:30,
        borderColor:COLORS.secondryColor,
        borderWidth:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:COLORS.secondryColor,
        borderRadius:30,
        marginLeft:15,
        marginBottom:8
  },
})