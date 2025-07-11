import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ImageBackground,
} from 'react-native';
import Images from '../../assets/Images';
import { COLORS } from '../../constants/themes';
import { useNavigation } from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Button } from 'react-native-paper';
import { RouteName } from '../../navigation/RouteName';

const PasswordRecovery = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.mainContainer}>
      <ImageBackground
        source={Images.loginBackground}
        style={styles.backgroundImage}
      >
        <View style={styles.profile1}>
          <TouchableOpacity>
            <Image source={Images.profile} style={styles.userImage} />
          </TouchableOpacity>
          <Text style={styles.passwordRcovery}>Password Recovery</Text>
          <Text style={styles.passwordText}>
            How you would like to restore{' '}
          </Text>
          <Text style={styles.passwordText}>your password?</Text>

          <View style={styles.smsContainer}>
            <Text style={styles.smsText}>SMS</Text>
            <TouchableOpacity style={styles.smsChecked}>
              <MaterialIcons name="check" size={15} color={COLORS.background} />
            </TouchableOpacity>
          </View>

          <View style={styles.emailContainer}>
            <Text style={styles.emailText}>Email</Text>
            <TouchableOpacity style={styles.emailChecked} />
          </View>
        </View>

        <Button
          mode="contained"
          labelStyle={styles.nextButtonText}
          onPress={() =>
            navigation.navigate(RouteName.PASSWORD_RECOVERY_CODE_SCREEN)
          }
          style={styles.nextButtonContainer}
          contentStyle={{paddingVertical:10}}
        >
          Next
        </Button>

        <Button
          labelStyle={styles.cancelButtonText}
          onPress={() => navigation.navigate(RouteName.WRONG_PASSWORD_SCREEN)}
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
  },
  profile1: {
    justifyContent: 'center',
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
  smsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.primaryContainer,
    marginTop: 28,
    height: 40,
    width: 199,
    borderRadius: 18,
  },
  smsText: {
    fontSize: 15,
    fontWeight: '700',
    color: COLORS.primary,
    textAlign: 'center',
  },
  smsChecked: {
    backgroundColor: COLORS.primary,
    height: 22,
    width: 22,
    borderColor: COLORS.background,
    borderWidth: 2,
    borderRadius: 11,
    alignItems: 'center',
    left: 65,
  },
  emailContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.errorContainer,
    marginTop: 10,
    height: 40,
    width: 199,
    borderRadius: 18,
  },
  emailText: {
    fontSize: 15,
    fontWeight: '500',
    color: COLORS.onBackground,
    textAlign: 'center',
  },
  emailChecked: {
    backgroundColor: COLORS.errorContainer,
    height: 22,
    width: 22,
    borderColor: COLORS.background,
    borderWidth: 2,
    borderRadius: 11,
    alignItems: 'center',
    left: 65,
  },
  nextButtonContainer: {
    backgroundColor: COLORS.primary,
    marginTop: 194,
  },
  nextButtonText: {
    fontSize: 22,
    color: COLORS.onPrimary,
    fontWeight: '300',
  },
  cancelButtonContainer: {
    marginTop: 20,
    //marginBottom: 49,
  },
  cancelButtonText: {
    fontSize: 15,
    fontWeight: 300,
    color: COLORS.onBackground,
  },
});

export default PasswordRecovery;
