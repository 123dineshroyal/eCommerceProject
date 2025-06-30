import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    Image,
    SafeAreaView
} from 'react-native';
import Images from '../../assets/Images';
import themes, { COLORS, SIZES } from '../../constants/themes';
import { useNavigation } from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const PasswordRecovery = () =>{

    const navigation =useNavigation();

    return(
        <SafeAreaView style={styles.mainContainer}>
            <Image source={Images.topRight1} style={styles.topRightImage}/>
            <Image source={Images.topRight2} style={styles.topRightBlueImage}/>

            <View style={styles.passwordContainer}>
               <TouchableOpacity>
                <Image source={Images.profile} style={styles.userImage} />
            </TouchableOpacity>
            <Text style={styles.passwordRcovery}>Password Recovery</Text>
            <Text style={styles.passwordText}>How you would like to restore </Text>
            <Text style={styles.passwordText}>your password?</Text>

            <View style={styles.smsContainer}>
                <Text style={styles.smsText}>SMS</Text>    
                <TouchableOpacity style={styles.smsChecked}>
                <   MaterialIcons name='check' size={15} color={COLORS.textColor2}/>
                </TouchableOpacity>
            </View> 

            <View style={styles.emailContainer}>
                <Text style={styles.emailText}>Email</Text>    
                <TouchableOpacity style={styles.emailChecked}/>
                
            </View>    

            <TouchableOpacity style={styles.nextButtonContainer} onPress={() => navigation.navigate('Password-Recovery-Code-Screen')}>
                <Text style={styles.nextButtonText}>Next</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cancelButtonContainer} onPress={() => navigation.navigate('Wrong-Password-Screen')}>
                <Text style={styles.cancelButtonText}>Cancel</Text>
            </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        backgroundColor:COLORS.primaryColor, 
    },
    topRightImage:{
        position:'absolute',
        right:0,
        top:0,
        resizeMode:'stretch',
        height:200,
        width:'100%',
        left:50
    },
    topRightBlueImage:{
        position:'absolute',
        right:0,
        top:0,
        resizeMode:'stretch',
        height:130,
        width:280
    },
    passwordContainer:{
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        top:148,
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
    passwordRcovery:{
        fontSize:21,
        fontWeight:'700',
        marginTop:17,
        marginBottom:5
    },
    passwordText:{
        fontSize:19,
        fontWeight:'300',
        
    },
    smsContainer:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:COLORS.blue1,
        marginTop:28,
        height:40,
        width:199,
        borderRadius:18
        
    },
    smsText:{
        fontSize:15,
        fontWeight:'700',
        color:COLORS.secondryColor,
        textAlign:'center'
        
    },
    smsChecked:{
        backgroundColor:COLORS.secondryColor,
        height:22,
        width:22,
        borderColor:COLORS.textColor2,
        borderWidth:2,
        borderRadius:11,
        alignItems:'center',
        left:65,
        
        
    },
    emailContainer:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:COLORS.textColor4,
        marginTop:10,
        height:40,
        width:199,
        borderRadius:18
        
    },
    emailText:{
        fontSize:15,
        fontWeight:'500',
        color:COLORS.textColor1,
        textAlign:'center'
        
    },
    emailChecked:{
        backgroundColor:COLORS.textColor4,
        height:22,
        width:22,
        borderColor:COLORS.textColor2,
        borderWidth:2,
        borderRadius:11,
        alignItems:'center',
        left:65
        
        
    },
    nextButtonContainer:{
        width:335,
        height:61,
        backgroundColor:COLORS.secondryColor,
        borderRadius:SIZES.baseRadius1,
        justifyContent:'center',
        alignItems:'center',  
        top:158
    },
    nextButtonText:{
        fontSize:22,
        color:COLORS.textColor2,
        fontWeight:themes.SIZES.baseWeight,
    },
    cancelButtonContainer:{
        top:155,
        marginTop:24,
    },
    cancelButtonText:{
        fontSize:15,
        fontWeight:300
    }
})

export default PasswordRecovery;