import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    SafeAreaView,
    Image,
    TextInput,
} from 'react-native';
import themes, { COLORS, SIZES } from '../../constants/themes';
import Images from '../../assets/Images';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';

const NewPassword = () =>{

    const navigation = useNavigation();

    const[newPassword,setNewPassword] = useState('');
    const[repeatPassword,setRepeatPassword] = useState('');

    return(
        <SafeAreaView style={styles.mainContainer}>
            <Image source={Images.topRight1} style={styles.topRightImage}/>
            <Image source={Images.topRight2} style={styles.topRightBlueImage}/>

            <View style={styles.passwordContainer}>
               <TouchableOpacity>
                <Image source={Images.profile} style={styles.userImage} />
            </TouchableOpacity>
            <Text style={styles.passwordRcovery}>Setup New Password</Text>
            <Text style={styles.passwordText}>Please, setup a new password for</Text>
            <Text style={styles.passwordText}>your account</Text>

            <View style={styles.passwordSetupContainer}>
                <TextInput
                    placeholder='New Password'
                    value={newPassword}
                    onChangeText={setNewPassword}
                    style={styles.newPasswordInput}
                    placeholderTextColor={COLORS.gray1}
                />
                <TextInput
                     placeholder='Repeat Password'
                     value={repeatPassword}
                     onChangeText={setRepeatPassword}
                     style={styles.newPasswordInput}
                     placeholderTextColor={COLORS.gray1}
                />
            </View>


            <TouchableOpacity style={styles.saveButtonContainer} onPress={() => navigation.navigate('Maximum-Attempts-Screen')}>
                <Text style={styles.saveButtonText}>Save</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cancelButtonContainer} onPress={() => navigation.navigate('Password-Recovery-Code-Screen')}>
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
    passwordSetupContainer:{
        marginTop:13
    },
    newPasswordInput:{
        width:335,
        height:50,
        backgroundColor:COLORS.whiteSmoke,
        borderRadius:9,
        marginTop:10,
        textAlign:'center',
        fontSize:17,
        fontWeight:500,
        fontFamily:'Raleway'
    },
    saveButtonContainer:{
        width:335,
        height:61,
        backgroundColor:COLORS.secondryColor,
        borderRadius:SIZES.baseRadius1,
        justifyContent:'center',
        alignItems:'center',  
        top:143
    },
    saveButtonText:{
        fontSize:22,
        color:COLORS.textColor2,
        fontWeight:SIZES.baseWeight,
    },
    cancelButtonContainer:{
        top:139,
        marginTop:24,
    },
    cancelButtonText:{
        fontSize:15,
        fontWeight:300
    }
})

export default NewPassword;