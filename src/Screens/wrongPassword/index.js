import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ImageBackground,
} from 'react-native';
import themes, { COLORS } from '../../constants/themes';
import Images from '../../assets/Images';
import { useNavigation } from '@react-navigation/native';
import { RouteName } from '../../navigation/RouteName';

const WrongPassword = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.mainContainer}>
      
      <ImageBackground source={Images.loginBackground} style={styles.backgroundImage}>
        <TouchableOpacity
          onPress={() => navigation.navigate(RouteName.PASSWORD_RECOVERY_SCREEN)}
        >
          <Image source={Images.profile} style={styles.userImage} />
        </TouchableOpacity>
        <Text style={styles.userName}>Hello, Romina!!</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate(RouteName.PASSWORD_TYPING_SCREEN)}
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
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: COLORS.background,
    color: COLORS.onBackground,
  },
  backgroundImage: {
    flex:1,
    justifyContent:'flex-end',
    padding:20,
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
    marginTop: 10,
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
    marginBottom:341,
  },
});

export default WrongPassword;
