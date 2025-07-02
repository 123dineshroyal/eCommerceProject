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
import { Button } from 'react-native-paper';

const NewPassword = () => {
  const navigation = useNavigation();

  const [newPassword, setNewPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Image source={Images.topRight1} style={styles.topRightImage} />
      <Image source={Images.topRight2} style={styles.topRightBlueImage} />

      <View style={styles.passwordContainer}>
        <TouchableOpacity>
          <Image source={Images.profile} style={styles.userImage} />
        </TouchableOpacity>
        <Text style={styles.passwordRcovery}>Setup New Password</Text>
        <Text style={styles.passwordText}>
          Please, setup a new password for
        </Text>
        <Text style={styles.passwordText}>your account</Text>

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

        {/* <TouchableOpacity
          style={styles.saveButtonContainer}
          onPress={() => navigation.navigate('Maximum-Attempts-Screen')}
        >
          <Text style={styles.saveButtonText}>Save</Text>
        </TouchableOpacity> */}

        <Button
              mode="contained"
              labelStyle={styles.saveButtonText}
               onPress={() => navigation.navigate('Maximum-Attempts-Screen')}
              style={styles.saveButtonContainer}
            > Save</Button>

         <Button
            mode="contained"
            labelStyle={styles.cancelButtonText}
            onPress={() => navigation.navigate('Password-Recovery-Code-Screen')}
            style={styles.cancelButtonContainer}
          > Cancel</Button>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: COLORS.background,
    color: COLORS.onBackground,
  },
  topRightImage: {
    position: 'absolute',
    right: 0,
    top: 0,
    resizeMode: 'stretch',
    height: 200,
    width: '100%',
    left: 50,
  },
  topRightBlueImage: {
    position: 'absolute',
    right: 0,
    top: 0,
    resizeMode: 'stretch',
    height: 130,
    width: 280,
  },
  passwordContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    top: 148,
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
    marginTop: 17,
    marginBottom: 5,
  },
  passwordText: {
    fontSize: 19,
    fontWeight: '300',
  },
  passwordSetupContainer: {
    marginTop: 13,
  },
  newPasswordInput: {
    width: 335,
    height: 50,
    backgroundColor: COLORS.secondary,
    borderRadius: 9,
    marginTop: 10,
    textAlign: 'center',
    fontSize: 17,
    fontWeight: 500,
    fontFamily: 'Raleway',
  },
  saveButtonContainer: {
    width: 335,
    height: 61,
    backgroundColor: COLORS.primary,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    top: 143,
  },
  saveButtonText: {
    fontSize: 22,
    color: COLORS.onPrimary,
    fontWeight: '300',
  },
  cancelButtonContainer: {
    top: 139,
    marginTop: 24,
    backgroundColor:COLORS.background
  },
  cancelButtonText: {
    fontSize: 15,
    fontWeight: 300,
    color:COLORS.onBackground
  },
});

export default NewPassword;
