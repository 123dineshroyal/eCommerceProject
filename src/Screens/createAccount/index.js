import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Image,
  ImageBackground,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import React, { useState } from 'react';
import Images from '../../assets/Images';
import { useNavigation } from '@react-navigation/native';
import themes, { COLORS, SIZES } from '../../constants/themes';
import { Button } from 'react-native-paper';
import { RouteName } from '../../navigation/RouteName';

const CreateAccount = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [number, setNumber] = useState('');

  return (
    <SafeAreaView style={styles.mainContainer}>
      <ImageBackground
        source={Images.loginBackground}
        style={styles.backgroundImage}
      >
        <Text style={styles.createAccountText}>Create{'\n'}Account</Text>

        <TouchableOpacity style={styles.cameraContainer}>
          <MaterialCommunityIcons
            name="camera-outline"
            size={34}
            color={COLORS.primary}
          />
        </TouchableOpacity>

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

        <Button
          mode="contained"
          labelStyle={styles.doneButtonText}
          style={styles.doneButtonContainer}
          onPress={() => navigation.navigate(RouteName.LOGIN_SCREEN)}
          contentStyle={{paddingVertical:10}}
        >
          Done
        </Button>

        <Button
          labelStyle={styles.cancelButtonText}
          style={styles.cancelButtonContainer}
          onPress={() => navigation.navigate(RouteName.START_SCREEN)}
        >
          Cancel
        </Button>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  backgroundImage: {
    flex: 1,
    padding: 20,
    justifyContent: 'flex-end',
  },
  createAccountText: {
    fontSize: 50,
    fontWeight: '700',
  },
  cameraContainer: {
    height: 90,
    width: 90,
    borderColor: COLORS.primary,
    borderWidth: 2,
    borderStyle: 'dashed',
    borderRadius: 45,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 54,
  },
  formContainer: {
    marginTop: 32,
  },
  inputStyle: {
    borderWidth: 1,
    borderColor: COLORS.surface,
    borderRadius: 20,
    fontWeight: '500',
    fontSize: 14,
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
    backgroundColor: COLORS.secondary,
    paddingHorizontal: 20,
    height: 55,
    marginTop: 7,
  },
  passwordInput: {
    fontSize: 14,
    fontWeight: '500',
  },
  countryContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.surface,
    borderRadius: 20,
    backgroundColor: COLORS.secondary,
    paddingLeft: 20,
    height: 55,
    marginTop: 7,
  },
  countryImage: {
    width: 29,
    height: 19,
  },
  textCountery: {
    fontSize: 25,
  },
  doneButtonContainer: {
    marginTop: 52,
  },
  doneButtonText: {
    fontSize: 22,
    color: COLORS.background,
    fontWeight: '300',
  },
  cancelButtonContainer: {
    marginBottom: 49,
    marginTop: 20,
  },
  cancelButtonText: {
    fontSize: 15,
    color: COLORS.onBackground,
    fontWeight: '300',
  },
});

export default CreateAccount;
