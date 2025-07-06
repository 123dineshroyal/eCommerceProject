import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ImageBackground,
} from 'react-native';
import themes, { COLORS, SIZES } from '../../constants/themes';
import Images from '../../assets/Images';
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native-paper';
import { RouteName } from '../../navigation/RouteName';

const passwordRecoveryCode = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.mainContainer}>
      <ImageBackground
        source={Images.loginBackground}
        style={styles.backgroundImage}
      >
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
          onPress={() => navigation.navigate(RouteName.NEW_PASSWORD_SCREEN)}
          style={styles.sendAgainButtonContainer}
          contentStyle={{ paddingVertical: 10 }}
        >
          Send Again
        </Button>
        <Button
          labelStyle={styles.cancelButtonText}
          onPress={() =>
            navigation.navigate(RouteName.PASSWORD_RECOVERY_SCREEN)
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
    flex: 1,
    padding: 20,
    justifyContent: 'flex-end',
    alignItems: 'center',
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
  mobileNumber: {
    fontSize: 16,
    fontWeight: '700',
    marginTop: 15,
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
    backgroundColor: COLORS.tertiary,
    width: 201,
    marginTop: 199,
  },
  sendAgainButtonText: {
    fontSize: 18,
    color: COLORS.background,
    fontWeight: '300',
  },
  cancelButtonContainer: {
    marginTop: 20,
    marginBottom: 49,
  },
  cancelButtonText: {
    fontSize: 15,
    fontWeight: 300,
    color: COLORS.onBackground,
  },
});

export default passwordRecoveryCode;
