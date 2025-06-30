import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    SafeAreaView,
} from 'react-native';
import themes, { COLORS, SIZES } from '../../constants/themes';
import Images from '../../assets/Images';
import { useNavigation } from '@react-navigation/native';

const passwordRecoveryCode = () =>{

    const navigation = useNavigation();

    return(
        <SafeAreaView style={styles.mainContainer}>
            <Image source={Images.topRight1} style={styles.topRightImage}/>
            <Image source={Images.topRight2} style={styles.topRightBlueImage}/>

            <View style={styles.passwordContainer}>
               <TouchableOpacity>
                <Image source={Images.profile} style={styles.userImage} />
            </TouchableOpacity>
            <Text style={styles.passwordRcovery}>Password Recovery</Text>
            <Text style={styles.passwordText}>Enter 4-digits code we sent you</Text>
            <Text style={styles.passwordText}>on your phone number</Text>
            <Text style={styles.mobileNumber}>+98*******00</Text>   

            <View style={styles.smsCodeContainer}>
                <Text style={styles.smsCodeNumber}/>
                <Text style={styles.smsCodeNumber}/>
                <Text style={styles.smsCodeNumber}/>
                <Text style={styles.smsCodeNumber}/>
            </View> 

            <TouchableOpacity style={styles.sendAgainButtonContainer} onPress={() => navigation.navigate('New-Password-Screen')}>
                <Text style={styles.sendAgainButtonText}>Send Again</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cancelButtonContainer} onPress={() => navigation.navigate('Password-Recovery-Screen')}>
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
   mobileNumber:{
    fontSize:16,
    fontWeight:'700',
    marginTop:13
   },
   smsCodeContainer:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    marginTop:28,
   },
   smsCodeNumber:{
    backgroundColor:COLORS.blue1,
    height:17,
    width:17,
    marginLeft:12,
    borderRadius:9
   },
    sendAgainButtonContainer:{
        width:201,
        height:61,
        backgroundColor:COLORS.deepPink,
        borderRadius:SIZES.baseRadius1,
        justifyContent:'center',
        alignItems:'center',  
        top:199
    },
    sendAgainButtonText:{
        fontSize:22,
        color:COLORS.textColor2,
        fontWeight:SIZES.baseWeight,
    },
    cancelButtonContainer:{
        top:195,
        marginTop:24,
    },
    cancelButtonText:{
        fontSize:15,
        fontWeight:300
    }
})

export default passwordRecoveryCode;