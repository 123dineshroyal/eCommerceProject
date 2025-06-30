import {View,
        Text,
        StyleSheet,
        SafeAreaView,
        Image,
        TouchableOpacity
} from 'react-native';
import themes, { COLORS, SIZES } from '../../constants/themes';
import { useNavigation } from '@react-navigation/native';
import Images from '../../assets/Images';
import { TextInput } from 'react-native-gesture-handler';
import { useState } from 'react';


const Login = () =>{

    const navigation = useNavigation();
    const[email,setEmail] = useState('');

    return(
        <SafeAreaView style={styles.mainContainer}>
            <View>
                 <Image source={Images.topLeft} style={styles.topLeftImage}/>
                 <Image source={Images.topLeftBlue} style={styles.topLeftBlueImage}/>
               
                <Image source={Images.topLeft4} style={styles.topRightImage}/>
                <Image source={Images.bottomRight1} style={styles.bottomRightImage}/>  
                

                <View style={styles.loginContainer}>    
                     
                    <Text style={styles.loginText}>Login</Text>
                    <Text style={styles.textLogin}>Good to see you back! <Image source={Images.heart} style={styles.heartImage}/></Text>

                    <TextInput
                    placeholder='Email'
                    value={email}
                    onChangeText={setEmail}
                    style={styles.emailInput}
                    placeholderTextColor={themes.COLORS.gray1}
    
                    />
                
                 <TouchableOpacity style={styles.nextButtonContainer} onPress={() =>navigation.navigate('passwordScreen')}>
                      <Text style={styles.nextButtonText}>Next</Text>
                    </TouchableOpacity>
                
                    <TouchableOpacity style={styles.cancelButtonContainer} onPress={()=>navigation.navigate('createAccountScreen')}>
                      <Text style={styles.cancelButtonText}>Cancle</Text>
                    </TouchableOpacity> 
                   </View>   
                        
            </View>
        </SafeAreaView>
    )
}
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
            //position:'absolute',
            top:0,
            left:0,
            width:250,
            height:280,
            resizeMode:'stretch'
        
        },
        topRightImage:{
           position:'absolute',
            height:180,
            width:90,
            resizeMode:'stretch',
            right:0,
            top:240
            
        },
        bottomRightImage:{
            position:'relative',
            height:300,
            width:250,
            resizeMode:'stretch',
            bottom:-233,
            right:-140
        },
        loginContainer:{
            position:'absolute',
            top:438,
            left:20,
        },
        loginText:{
            fontSize:52,
            fontWeight:700,
            
        },
        textLogin:{
            fontSize:19,
            fontWeight:'300'
        },
        heartImage:{
            width:15,
            height:15
        },
        emailInput:{
            marginTop:26,
            borderWidth:SIZES.baseBorder,
            borderColor:COLORS.lightGray,
            borderRadius: 59,
            padding: 10,
            fontWeight:'500',
            fontSize: 14,
            backgroundColor:COLORS.whiteSmoke,
            paddingLeft:SIZES.padding1,
            height:55,
            marginLeft:1,
            width:334
            
        },
        nextButtonContainer:{
            width:335,
            height:61,
            backgroundColor:COLORS.secondryColor,
            borderRadius:SIZES.baseRadius1,
            justifyContent:'center',
            alignItems:'center',
            
            marginRight:20,
             top:32

        },
        nextButtonText:{
            fontSize:22,
            color:COLORS.textColor2,
            fontWeight:SIZES.baseWeight,
        },
        cancelButtonContainer:{
            width:335,
            height:30,
            justifyContent:'center',
            alignItems:'center',
            marginRight:40,
            top:47
        },
        cancelButtonText:{
            fontSize:15,
            color:COLORS.textColor1,
            fontWeight:SIZES.baseWeight,
        },
    })


export default Login;