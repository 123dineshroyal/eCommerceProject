import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import { COLORS } from '../../constants/themes';
import Images from '../../assets/Images';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
//import { Color } from 'react-native/types_generated/Libraries/Animated/AnimatedExports';
import { RouteName } from '../../navigation/RouteName';

const Password = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.mainContainer}>
      <ImageBackground
        source={Images.loginBackground}
        style={styles.backgroundImage}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate(RouteName.PASSWORD_TYPING_SCREEN)}
        >
          <Image source={Images.profile} style={styles.userImage} />
        </TouchableOpacity>
        <Text style={styles.userName}>Hello, Romina!!</Text>
        <Text style={styles.passwordText}>Type your password</Text>
        <View style={styles.passwordContainer}>
          <Text style={styles.passwordBox} />
          <Text style={styles.passwordBox} />
          <Text style={styles.passwordBox} />
          <Text style={styles.passwordBox} />
        </View>

        <View style={styles.buttonContainer}>
          <Text style={styles.notYouText}>Not You?</Text>
          <TouchableOpacity
            style={styles.nextArrow}
            onPress={() => navigation.navigate(RouteName.LOGIN_SCREEN)}
          >
            <Icon name="arrow-forward" size={20} color={COLORS.background} />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};
export default Password;

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
  },
  passwordBox: {
    height: 50,
    width: 50,
    backgroundColor: COLORS.secondary,
    borderRadius: 10,
    marginLeft: 5,
    marginTop: 23,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // marginBottom: 49,
    marginTop: 292,
  },
  notYouText: {
    fontSize: 15,
    fontWeight: '300',
  },
  nextArrow: {
    height: 30,
    width: 30,
    borderColor: COLORS.primary,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.primary,
    borderRadius: 30,
    marginLeft: 15,
  },
});
