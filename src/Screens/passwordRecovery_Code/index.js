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
import { Button } from 'react-native-paper';

const passwordRecoveryCode = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Image source={Images.topRight1} style={styles.topRightImage} />
      <Image source={Images.topRight2} style={styles.topRightBlueImage} />

      <View style={styles.passwordContainer}>
        <TouchableOpacity>
          <Image source={Images.profile} style={styles.userImage} />
        </TouchableOpacity>
        <Text style={styles.passwordRcovery}>Password Recovery</Text>
        <Text style={styles.passwordText}>Enter 4-digits code we sent you</Text>
        <Text style={styles.passwordText}>on your phone number</Text>
        <Text style={styles.mobileNumber}>+98*******00</Text>

        <View style={styles.smsCodeContainer}>
          <Text style={styles.smsCodeNumber} />
          <Text style={styles.smsCodeNumber} />
          <Text style={styles.smsCodeNumber} />
          <Text style={styles.smsCodeNumber} />
        </View>

       
          <Button
              mode="contained"
              labelStyle={styles.sendAgainButtonText}
              onPress={() => navigation.navigate('New-Password-Screen')}
              style={styles.sendAgainButtonContainer}
            > Send Again</Button>
         <Button
              mode="contained"
              labelStyle={styles.cancelButtonText}
               onPress={() => navigation.navigate('Password-Recovery-Screen')}
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
  mobileNumber: {
    fontSize: 16,
    fontWeight: '700',
    marginTop: 13,
  },
  smsCodeContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 28,
  },
  smsCodeNumber: {
    backgroundColor: COLORS.primaryContainer,
    height: 17,
    width: 17,
    marginLeft: 12,
    borderRadius: 9,
  },
  sendAgainButtonContainer: {
    width: 201,
    height: 61,
    backgroundColor: COLORS.tertiary,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    top: 199,
   // paddingBottom:4
  },
  sendAgainButtonText: {
    fontSize: 20,
    color: COLORS.background,
    fontWeight: '300',
  },
  cancelButtonContainer: {
    top: 195,
    marginTop: 24,
    backgroundColor:COLORS.background
  },
  cancelButtonText: {
    fontSize: 15,
    fontWeight: 300,
    color:COLORS.onBackground
  },
});

export default passwordRecoveryCode;
