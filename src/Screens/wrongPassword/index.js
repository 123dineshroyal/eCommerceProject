import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from 'react-native';
import themes, { COLORS } from '../../constants/themes';
import Images from '../../assets/Images';
import { useNavigation } from '@react-navigation/native';

const WrongPassword = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Image source={Images.topLeft} style={styles.topLeftImage} />
      <Image source={Images.topLeftBlue} style={styles.topLeftBlueImage} />

      <View style={styles.profileContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Password-Recovery-Screen')}
        >
          <Image source={Images.profile} style={styles.userImage} />
        </TouchableOpacity>
        <Text style={styles.userName}>Hello, Romina!!</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('Password-Typing-Screen')}
        >
          <Text style={styles.passwordText}>Type your password</Text>
        </TouchableOpacity>
        <View style={styles.passwordContainer}>
          <Text style={styles.passwordAttemed} />
          <Text style={styles.passwordAttemed} />
          <Text style={styles.passwordAttemed} />
          <Text style={styles.passwordAttemed} />
          <Text style={styles.passwordAttemed} />
          <Text style={styles.passwordAttemed} />
          <Text style={styles.passwordAttemed} />
          <Text style={styles.passwordAttemed} />
        </View>
        <Text style={styles.forgotPassword}>Forgot your password?</Text>
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
  topLeftImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: 345,
    width: 300,
    resizeMode: 'stretch',
  },
  topLeftBlueImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 250,
    height: 280,
    resizeMode: 'stretch',
  },
  profileContainer: {
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
  userName: {
    marginTop: 35,
    fontWeight: 700,
    fontSize: 28,
  },
  passwordText: {
    marginTop: 30,
    fontSize: 19,
    fontWeight: '300',
  },
  passwordContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
  passwordAttemed: {
    height: 17,
    width: 17,
    backgroundColor: COLORS.error,
    borderRadius: 10,
    marginLeft: 12,
  },
  forgotPassword: {
    fontSize: 15,
    fontWeight: '300',
    marginTop: 38,
  },
});

export default WrongPassword;
