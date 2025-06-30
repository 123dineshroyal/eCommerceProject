import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    SafeAreaView,
    Image,
    Modal
} from 'react-native';
import themes, { COLORS, SIZES} from '../../constants/themes';
import Images from '../../assets/Images';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';

const MaximumAttempts = () =>{

    const navigation = useNavigation();

    const [modalVisible,setModalVisible] = useState(false);

    const handleSendAgain = () =>{
        setModalVisible(true);
    }

    return(
        <SafeAreaView style={styles.mainContainer}>
            <View>
            <View>    
                <Image source={Images.topRight1} style={styles.topRightImage}/>
                <Image source={Images.topRight2} style={styles.topRightBlueImage}/>
            </View>

            <View style={styles.passwordContainer}>
               <TouchableOpacity onPress={() => navigation.navigate('HelloCard-Screen')}>
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

            <TouchableOpacity style={styles.sendAgainButtonContainer} onPress={handleSendAgain}>
                <Text style={styles.sendAgainButtonText}>Send Again</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.cancelButtonContainer} onPress={() => navigation.navigate('New-Password-Screen')}>
                <Text style={styles.cancelButtonText}>Cancel</Text>
            </TouchableOpacity>
            </View>
         </View>   

         <Modal 
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => setModalVisible(false)}
         >
          <View style={styles.modalBackground}>  
            <View style={styles.passwordLimitContainer}>
                <Text style={styles.passwordText1}>You reached out maximum</Text>
                <Text style={styles.passwordText1}>amount of attempts.</Text>
                <Text style={styles.passwordText1}>Please, try later.</Text>

                <TouchableOpacity style={styles.okayButtonContainer} onPress={() => setModalVisible(false)}>
                    <Text style={styles.okayButton}>Okay</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.outsideContainer}>
                <View style={styles.middleContainer}>
                    <View style={styles.innerContainer}>
                    <Text style={styles.innerText}>!</Text>
                    </View>
                </View>
            </View>
         </View>
        </Modal> 
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
        backgroundColor:COLORS.textColor1,
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
    },
    modalBackground:{
     flex:1,
     backgroundColor: COLORS.shadowBlack, // dimmed background
    },
    passwordLimitContainer:{
        top:313,
        height:225,
        backgroundColor:COLORS.textColor2,
        justifyContent:'center',
        alignItems:'center',
        opacity:1,
        marginHorizontal:14,
        borderRadius:19,
        shadowColor:COLORS.darkBlack,
        shadowRadius: 8,
        elevation: 5,
        paddingTop:20
    },
    passwordText1:{
        fontSize:18,
        fontWeight:500,
        fontFamily:'Raleway',
    },
    okayButtonContainer:{
        width:201,
        height:50,
        backgroundColor:COLORS.textColor1,
        borderRadius:16,
        justifyContent:'center',
        alignItems:'center',
        marginTop:25
    },
    okayButton:{
        fontSize:22,
        fontWeight:'300',
        color:COLORS.textColor2,
    
    },
    outsideContainer:{
        position:'absolute',
        height:80,
        width:80,
        backgroundColor:COLORS.textColor2,
        borderRadius:40,
        justifyContent:'center',
        alignItems:'center',
        shadowColor:COLORS.darkBlack,
        shadowRadius: 8,
        elevation: 5,
        top:275,
        left:148,
        
    },
    middleContainer:{
        height:50,
        width:50,
        backgroundColor:COLORS.textColor4,
        borderRadius:25,
        justifyContent:'center',
        alignItems:'center'
        
    },
    innerContainer:{
        height:22,
        width:22,
        backgroundColor:COLORS.textColor5,
        borderRadius:11,
         justifyContent:'center',
        alignItems:'center'
    },
    innerText:{
        color:COLORS.textColor2
    }
});    

export default MaximumAttempts;