import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ImageBackground,
  TextInput,
} from 'react-native';
import themes, { COLORS, SIZES } from '../../constants/themes';
import { useNavigation } from '@react-navigation/native';
import Images from '../../assets/Images';
import { useState } from 'react';
import { Button } from 'react-native-paper';
import { RouteName } from '../../navigation/RouteName';

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');

  return (
    <SafeAreaView style={styles.mainContainer}>
      <ImageBackground
        source={Images.loginBackground}
        style={styles.backgroundImage}
      >
        <View>
          <Text style={styles.loginText}>Login</Text>
          <Text style={styles.textLogin}>
            Good to see you back!{' '}
            <Image source={Images.heart} style={styles.heartImage} />
          </Text>

          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            style={styles.emailInput}
            placeholderTextColor={COLORS.surfaceVariant}
          />

          <Button
            mode="contained"
            labelStyle={styles.nextButtonText}
            onPress={() => navigation.navigate(RouteName.PASSWORD_SCREEN)}
            style={styles.nextButtonContainer}
          >
            {' '}
            Next
          </Button>

          <Button
            mode="contained"
            labelStyle={styles.cancelButtonText}
            onPress={() => navigation.navigate(RouteName.CREATE_ACCOUNT_SCREEN)}
            style={styles.cancelButtonContainer}
          >
            {' '}
            Cancel
          </Button>
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
  },

  loginText: {
    fontSize: 52,
    fontWeight: 700,
  },
  textLogin: {
    fontSize: 19,
    fontWeight: '300',
  },
  heartImage: {
    width: 15,
    height: 15,
  },
  emailInput: {
    marginTop: 17,
    borderWidth: 1,
    borderColor: COLORS.surface,
    borderRadius: 59,
    padding: 10,
    fontWeight: '500',
    fontSize: 14,
    backgroundColor: COLORS.secondary,
    height: 55,
    paddingLeft: 20,
  },
  nextButtonContainer: {
    borderRadius: 20,
    paddingVertical: 10,
    marginTop: 36,
  },
  nextButtonText: {
    fontSize: 22,
    color: COLORS.onPrimary,
    fontWeight: '300',
  },
  cancelButtonContainer: {
    backgroundColor: COLORS.background,
    marginTop: 20,
    marginBottom: 49,
  },
  cancelButtonText: {
    fontSize: 15,
    color: COLORS.onBackground,
    fontWeight: '300',
  },
});

export default Login;
