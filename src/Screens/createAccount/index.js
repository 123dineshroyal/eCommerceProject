import {StyleSheet,
   View,
   Text,
   SafeAreaView,
  TouchableOpacity,
  TextInput,
  Image
   } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import React,  { useState } from 'react';
import Images from '../../assets/Images';
import { useNavigation } from '@react-navigation/native';
import themes, { COLORS, SIZES } from '../../constants/themes';

const CreateAccount = () => {
  
  const navigation = useNavigation();

  const [email,setEmail] = useState('');
  const [password,setPassword] =useState('');
  const [number,setNumber] = useState('');
  
  return (

    

   <SafeAreaView style={styles.mainContainer}>
    
    <View style={styles.topContainer}>
     
        <Image source={Images.topLeft2} style={styles.topLeftImage}/>
      
        <Image source={Images.topRight3} style={styles.topRightImage}/>

      <Text style={styles.createAccountText}>Create Account</Text>

      <TouchableOpacity style={styles.cameraContainer}>
        <MaterialCommunityIcons  name="camera-outline" size={34} color="#004CFF"/>
      </TouchableOpacity>
    </View>
    <View style={styles.formContainer}>
      <TextInput 
        style={styles.inputStyle}
        placeholder='Email'
        placeholderTextColor='#D2D2D2'
        value={email}
        onChangeText={setEmail}
      />

        <View style={styles.passwordContainer}>
        <TextInput 
          style={styles.passwordInput}
          placeholder='Password'
          placeholderTextColor='#D2D2D2'
          value={password}
          onChangeText={setPassword}
          
        />
        <TouchableOpacity>
          <Ionicons name='eye-off' size={15}/>
        </TouchableOpacity>
      </View>
      <View style={styles.countryContainer}>
        <Image style={styles.countryImage} source={Images.country}/>
        <MaterialIcons name="keyboard-arrow-down" size={25}/>
        <Text style={styles.textCountery}>|</Text>
        <TextInput 
          style={styles.passwordInput}
          placeholder='Your Number'
          placeholderTextColor='#D2D2D2'
          value={number}
          onChangeText={setNumber}
          
        />
      </View>
    </View>

    <TouchableOpacity style={styles.doneButtonContainer} onPress={() =>navigation.navigate('loginScreen')}>
      <Text style={styles.doneButtonText}>Done</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.cancelButtonContainer} onPress={()=>navigation.navigate('StartScreen')}>
      <Text style={styles.cancelButtonText}>Cancle</Text>
    </TouchableOpacity>
    
   </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer : {
    flex:1,
    backgroundColor:COLORS.primaryColor,
  },
  topContainer:{
    height:504,
    flexDirection:'row',
    justifyContent:'space-between'
  },
  topLeftImage:{
    top:0,
    left:0,
    height:230,
    width:231,
    resizeMode:'stretch'
  },
  topRightImage:{
    right:0,
    top:40,
    height:300,
    width:100,
    resizeMode:'stretch'
  },
 
  createAccountText:{
    top:122,
    fontSize:50,
    fontWeight:'700',
    position:'absolute',
    left:20,
    width:197
    
  },
  cameraContainer:{
    top:284,
    left:30,
    height:90,
    width:90,
    borderColor:COLORS.secondryColor,
    borderWidth:2,
    borderStyle:'dashed',
    borderRadius:45,
    justifyContent:'center',
    alignItems:'center',
    position:'absolute'
  },
 formContainer:{
  top:-105,
  marginHorizontal:20,
  height:175
 },
 inputStyle:{
  borderWidth:SIZES.baseBorder,
  borderColor:COLORS.lightGray,
  borderRadius: 20,
  padding: 10,
  fontWeight:'500',
  fontSize: 14,
  marginTop:8,
  backgroundColor:COLORS.whiteSmoke,
  paddingLeft:SIZES.padding1,
  height:55
 },
passwordContainer:{
  flexDirection:'row',
  justifyContent:'space-between',
  alignItems:'center',
   borderWidth:SIZES.baseBorder,
  borderColor:COLORS.lightGray,
  borderRadius:SIZES.baseRadius1,
  padding:SIZES.padding,
  marginTop:8,
  backgroundColor:COLORS.whiteSmoke,
  paddingLeft:20,
  paddingVertical:-12,
  height:55
},
passwordInput:{
  flex:1,
  fontSize:SIZES.font,
  fontWeight:'500',
},
countryContainer:{
  flexDirection:'row',
  justifyContent:'space-between',
  alignItems:'center',
  borderWidth:SIZES.baseBorder,
  borderColor:COLORS.lightGray,
  borderRadius:SIZES.baseRadius1,
  padding:SIZES.padding,
  marginTop:8,
  backgroundColor:COLORS.whiteSmoke,
  paddingLeft:SIZES.padding1,
  paddingVertical:-12,
  height:55,
},
countryImage:{
  width:29,
  height:19
},
textCountery:{
  fontSize:25
},
doneButtonContainer:{
  width:335,
  height:61,
  backgroundColor:COLORS.secondryColor,
  borderRadius:SIZES.baseRadius1,
  justifyContent:'center',
  alignItems:'center',
  left:30,
  marginRight:20,
  top:-35

},
doneButtonText:{
  fontSize:22,
  color:COLORS.textColor2,
  fontWeight:SIZES.baseWeight,
},
cancelButtonContainer:{
  width:335,
  height:30,
  backgroundColor:COLORS.textColor2,
  borderRadius:SIZES.baseRadius1,
  justifyContent:'center',
  alignItems:'center',
  left:20,
  marginRight:20,
  top:-20
},
cancelButtonText:{
  fontSize:15,
  color:COLORS.textColor1,
  fontWeight:SIZES.baseWeight,
},
bottomBar:{
    width:134,
    height:5,
    backgroundColor:COLORS.textColor1,
    top:727,
    borderRadius:4,
    position:'absolute',
    left:121
  }
});

export default CreateAccount;
