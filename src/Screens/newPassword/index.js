import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Image,
  TextInput,
  ImageBackground,
} from 'react-native';
import themes, { COLORS, SIZES } from '../../constants/themes';
import Images from '../../assets/Images';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { Button } from 'react-native-paper';
import { RouteName } from '../../navigation/RouteName';

const NewPassword = () => {
  const navigation = useNavigation();

  const [newPassword, setNewPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  return (
    <SafeAreaView style={styles.mainContainer}>
    

      <ImageBackground source={Images.loginBackground} style={styles.backgroundImage}>
          <View style={styles.profile1}>
            <TouchableOpacity>
              <Image source={Images.profile} style={styles.userImage} />
          
              </TouchableOpacity>
              <Text style={styles.passwordRcovery}>Setup New Password</Text>
              <Text style={styles.passwordText}>
                Please, setup a new password for
              </Text>
              <Text style={styles.passwordText}>your account</Text>
          </View>    

        <View style={styles.passwordSetupContainer}>
          <TextInput
            placeholder="New Password"
            value={newPassword}
            onChangeText={setNewPassword}
            style={styles.newPasswordInput}
            placeholderTextColor={COLORS.surfaceVariant}
          />
          <TextInput
            placeholder="Repeat Password"
            value={repeatPassword}
            onChangeText={setRepeatPassword}
            style={styles.newPasswordInput}
            placeholderTextColor={COLORS.surfaceVariant}
          />
        </View>

        <Button
          mode="contained"
          labelStyle={styles.saveButtonText}
          onPress={() => navigation.navigate(RouteName.MAXIMUM_ATTEMPTS_SCREEN)}
          style={styles.saveButtonContainer}
          contentStyle={{paddingVertical:10}}
        >
          Save
        </Button>

        <Button
          labelStyle={styles.cancelButtonText}
          onPress={() =>
            navigation.navigate(RouteName.PASSWORD_RECOVERY_CODE_SCREEN)
          }
          style={styles.cancelButtonContainer}
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
    flex:1,
    padding:20,
    justifyContent:'flex-end',
  },
  profile1:{
    justifyContent:'center',
    alignItems:'center'
  },
  userImage: {
    width: 106,
    height: 106,
    borderColor: COLORS.background,
    borderWidth: 6,
    borderRadius: 50,
    shadowColor: COLORS.shadow,
    shadowRadius: 8,
    elevation: 5,
  },
  passwordRcovery: {
    fontSize: 21,
    fontWeight: '700',
    marginTop: 19,
    marginBottom: 7,
  },
  passwordText: {
    fontSize: 19,
    fontWeight: '300',
  },
  passwordSetupContainer: {
    marginTop: 15,
  },
  newPasswordInput: {
    backgroundColor: COLORS.secondary,
    borderRadius: 9,
    marginTop: 10,
    textAlign: 'center',
    fontSize: 17,
    fontWeight: 500,
    fontFamily: 'Raleway',
  },
  saveButtonContainer: {
    backgroundColor: COLORS.primary,
    marginTop:143,
  },
  saveButtonText: {
    fontSize: 22,
    color: COLORS.onPrimary,
    fontWeight: '300',
  },
  cancelButtonContainer: {
    marginTop: 20,
    marginBottom:49
  },
  cancelButtonText: {
    fontSize: 15,
    fontWeight: 300,
    color: COLORS.onBackground,
  },
});

export default NewPassword;
