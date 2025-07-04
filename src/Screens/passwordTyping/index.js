import {
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ImageBackground,
  View,
} from 'react-native';
import { COLORS } from '../../constants/themes';
import Images from '../../assets/Images';
import { useNavigation } from '@react-navigation/native';
import { RouteName } from '../../navigation/RouteName';

const passwordTyping = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.mainContainer}>
      <ImageBackground
        source={Images.loginBackground}
        style={styles.backgroundImage}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate(RouteName.WRONG_PASSWORD_SCREEN)}
        >
          <Image source={Images.profile} style={styles.userImage} />
        </TouchableOpacity>
        <Text style={styles.userName}>Hello, Romina!!</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate(RouteName.PASSWORD_SCREEN)}
        >
          <Text style={styles.passwordText}>Type your password</Text>
        </TouchableOpacity>
        <View style={styles.passwordContainer}>
          <Text style={styles.passwordAttemed} />
          <Text style={styles.passwordAttemed} />
          <Text style={styles.passwordAttemed} />
          <Text style={styles.passwordAttemed} />
          <Text style={styles.passwordAttemed} />
          <Text style={styles.passwordRemender} />
          <Text style={styles.passwordRemender} />
          <Text style={styles.passwordRemender} />
        </View>
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
    marginBottom: 405,
  },
  passwordAttemed: {
    height: 17,
    width: 17,
    backgroundColor: COLORS.primary,
    borderRadius: 10,
    marginLeft: 12,
  },
  passwordRemender: {
    height: 17,
    width: 17,
    backgroundColor: COLORS.primaryContainer,
    borderRadius: 10,
    marginLeft: 12,
  },
});
export default passwordTyping;
