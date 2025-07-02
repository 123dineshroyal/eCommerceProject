import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from 'react-native';
import Images from '../../assets/Images';
import themes, { COLORS, SIZES } from '../../constants/themes';
import { useNavigation } from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Button } from 'react-native-paper';

const PasswordRecovery = () => {
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
        <Text style={styles.passwordText}>How you would like to restore </Text>
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

           <Button
            mode="contained"
            labelStyle={styles.nextButtonText}
           onPress={() => navigation.navigate('Password-Recovery-Code-Screen')}
            style={styles.nextButtonContainer}
          > Next</Button>


          <Button
              mode="contained"
              labelStyle={styles.cancelButtonText}
               onPress={() => navigation.navigate('Wrong-Password-Screen')}
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
    width: 335,
    height: 61,
    backgroundColor: COLORS.primary,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    top: 158,
  },
  nextButtonText: {
    fontSize: 22,
    color: COLORS.onPrimary,
    fontWeight: '300',
  },
  cancelButtonContainer: {
    top: 155,
    marginTop: 24,
    backgroundColor:COLORS.background
  },
  cancelButtonText: {
    fontSize: 15,
    fontWeight: 300,
    color:COLORS.onBackground
  },
});

export default PasswordRecovery;
