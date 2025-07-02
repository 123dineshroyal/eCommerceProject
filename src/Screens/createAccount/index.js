import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import React, { useState } from 'react';
import Images from '../../assets/Images';
import { useNavigation } from '@react-navigation/native';
import themes, { COLORS, SIZES } from '../../constants/themes';
import { Button } from 'react-native-paper';

const CreateAccount = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [number, setNumber] = useState('');

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.topContainer}>
        <Image source={Images.topLeft2} style={styles.topLeftImage} />

        <Image source={Images.topRight3} style={styles.topRightImage} />

        <Text style={styles.createAccountText}>Create Account</Text>

        <TouchableOpacity style={styles.cameraContainer}>
          <MaterialCommunityIcons
            name="camera-outline"
            size={34}
            color={COLORS.primary}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.inputStyle}
          placeholder="Email"
          placeholderTextColor={COLORS.surfaceVariant}
          value={email}
          onChangeText={setEmail}
        />

        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.passwordInput}
            placeholder="Password"
            placeholderTextColor={COLORS.surfaceVariant}
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity>
            <Ionicons name="eye-off" size={15} />
          </TouchableOpacity>
        </View>
        <View style={styles.countryContainer}>
          <Image style={styles.countryImage} source={Images.country} />
          <MaterialIcons name="keyboard-arrow-down" size={25} />
          <Text style={styles.textCountery}>|</Text>
          <TextInput
            style={styles.passwordInput}
            placeholder="Your Number"
            placeholderTextColor={COLORS.surfaceVariant}
            value={number}
            onChangeText={setNumber}
          />
        </View>
      </View>

      <Button mode="contained"
            labelStyle={styles.doneButtonText}
            style={styles.doneButtonContainer}
             onPress={() => navigation.navigate('loginScreen')}
          >Done</Button>

       <Button mode="contained"
            labelStyle={styles.cancelButtonText}
            style={styles.cancelButtonContainer}
            onPress={() => navigation.navigate('StartScreen')}
          >Cancel</Button>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: COLORS.background,
    color: COLORS.onBackground,
  },
  topContainer: {
    height: 504,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  topLeftImage: {
    top: 0,
    left: 0,
    height: 230,
    width: 231,
    resizeMode: 'stretch',
  },
  topRightImage: {
    right: 0,
    top: 40,
    height: 300,
    width: 100,
    resizeMode: 'stretch',
  },

  createAccountText: {
    top: 122,
    fontSize: 50,
    fontWeight: '700',
    position: 'absolute',
    left: 20,
    width: 197,
  },
  cameraContainer: {
    top: 284,
    left: 30,
    height: 90,
    width: 90,
    borderColor: COLORS.primary,
    borderWidth: 2,
    borderStyle: 'dashed',
    borderRadius: 45,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
  },
  formContainer: {
    top: -105,
    marginHorizontal: 20,
    height: 175,
  },
  inputStyle: {
    borderWidth: 1,
    borderColor: COLORS.surface,
    borderRadius: 20,
    padding: 10,
    fontWeight: '500',
    fontSize: 14,
    marginTop: 8,
    backgroundColor: COLORS.secondary,
    paddingLeft: 20,
    height: 55,
  },
  passwordContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.surface,
    borderRadius: 20,
    padding: 10,
    marginTop: 8,
    backgroundColor: COLORS.secondary,
    paddingLeft: 20,
    paddingVertical: -12,
    height: 55,
  },
  passwordInput: {
    flex: 1,
    fontSize: 14,
    fontWeight: '500',
  },
  countryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.surface,
    borderRadius: 20,
    padding: 10,
    marginTop: 8,
    backgroundColor: COLORS.secondary,
    paddingLeft: 20,
    paddingVertical: -12,
    height: 55,
  },
  countryImage: {
    width: 29,
    height: 19,
  },
  textCountery: {
    fontSize: 25,
  },
  doneButtonContainer: {
    width: 335,
    height: 61,
    backgroundColor: COLORS.primary,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    left: 30,
    marginRight: 20,
    top: -35,
  },
  doneButtonText: {
    fontSize: 22,
    color: COLORS.background,
    fontWeight: '300',
  },
  cancelButtonContainer: {
    backgroundColor: COLORS.background,
    top: -20,
  },
  cancelButtonText: {
    fontSize: 15,
    color: COLORS.onBackground,
    fontWeight: '300',
  },
});

export default CreateAccount;
