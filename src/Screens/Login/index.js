import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';
import themes, { COLORS, SIZES } from '../../constants/themes';
import { useNavigation } from '@react-navigation/native';
import Images from '../../assets/Images';
import { TextInput } from 'react-native-gesture-handler';
import { useState } from 'react';
import { Button } from 'react-native-paper';

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View>
        <Image source={Images.topLeft} style={styles.topLeftImage} />
        <Image source={Images.topLeftBlue} style={styles.topLeftBlueImage} />

        <Image source={Images.topLeft4} style={styles.topRightImage} />
        <Image source={Images.bottomRight1} style={styles.bottomRightImage} />

        <View style={styles.loginContainer}>
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
            onPress={() => navigation.navigate('passwordScreen')}
            style={styles.nextButtonContainer}
          > Next</Button>

           <Button
            mode="contained"
            labelStyle={styles.cancelButtonText}
           onPress={() => navigation.navigate('createAccountScreen')}
            style={styles.cancelButtonContainer}
          > Cancel</Button>

        </View>
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
    //position:'absolute',
    top: 0,
    left: 0,
    width: 250,
    height: 280,
    resizeMode: 'stretch',
  },
  topRightImage: {
    position: 'absolute',
    height: 180,
    width: 90,
    resizeMode: 'stretch',
    right: 0,
    top: 240,
  },
  bottomRightImage: {
    position: 'relative',
    height: 300,
    width: 250,
    resizeMode: 'stretch',
    bottom: -233,
    right: -140,
  },
  loginContainer: {
    position: 'absolute',
    top: 438,
    left: 20,
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
    marginTop: 26,
    borderWidth: 1,
    borderColor: COLORS.surface,
    borderRadius: 59,
    padding: 10,
    fontWeight: '500',
    fontSize: 14,
    backgroundColor: COLORS.secondary,
    paddingLeft: 20,
    height: 55,
    marginLeft: 1,
    width: 334,
  },
  nextButtonContainer: {
    height: 61,
    borderRadius:20,
    justifyContent: 'center',
    alignItems: 'center',

    //marginRight: 20,
    left:10,
    top: 32,
  },
  nextButtonText: {
    fontSize: 22,
    color: COLORS.onPrimary,
    fontWeight: '300',
  },
  cancelButtonContainer: {
    top: 47,
    backgroundColor:COLORS.background
  },
  cancelButtonText: {
    fontSize: 15,
    color: COLORS.onBackground,
    fontWeight: '300',
  },
});

export default Login;
