import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Image,
  Modal,
  ImageBackground,
} from 'react-native';
import themes, { COLORS, SIZES } from '../../constants/themes';
import Images from '../../assets/Images';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { Button } from 'react-native-paper';
import { RouteName } from '../../navigation/RouteName';

const MaximumAttempts = () => {
  const navigation = useNavigation();

  const [modalVisible, setModalVisible] = useState(false);

  const handleSendAgain = () => {
    setModalVisible(true);
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <ImageBackground
        source={Images.loginBackground}
        style={styles.backgroundImage}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate(RouteName.HELLO_CARD_SCREEN)}
        >
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
          onPress={handleSendAgain}
          style={styles.sendAgainButtonContainer}
          contentStyle={{paddingVertical:10}}
        >
          Send Again
        </Button>

        <Button
          labelStyle={styles.cancelButtonText}
          onPress={() => navigation.navigate(RouteName.NEW_PASSWORD_SCREEN)}
          style={styles.cancelButtonContainer}
        >
          Cancel
        </Button>
      </ImageBackground>

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalBackground}>
          <View style={styles.passwordLimitContainer}>
            <Text style={styles.passwordText1}>You reached out maximum</Text>
            <Text style={styles.passwordText1}>amount of attempts.</Text>
            <Text style={styles.passwordText1}>Please, try later.</Text>

            <Button
              mode="contained"
              labelStyle={styles.okayButton}
              onPress={() => setModalVisible(false)}
              style={styles.okayButtonContainer}
            >
              Okay
            </Button>
          </View>

          <View style={styles.outsideContainer}>
            <View style={styles.middleContainer}>
              <View style={styles.innerContainer}>
                <Text style={styles.innerText}>!</Text>
              </View>
            </View>
          </View>
        </View>
      </Modal>
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
    backgroundColor: COLORS.onBackground,
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
  modalBackground: {
    flex: 1,
    backgroundColor: COLORS.backdrop,
    justifyContent: 'center',
  },
  passwordLimitContainer: {
    backgroundColor: COLORS.background,
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 1,
    marginHorizontal: 14,
    borderRadius: 19,
    shadowColor: COLORS.shadow,
    shadowRadius: 8,
    elevation: 5,
    paddingVertical: 10,
    paddingTop: 57,
    marginTop: 20,
  },
  passwordText1: {
    fontSize: 18,
    fontWeight: 500,
    fontFamily: 'Raleway',
  },
  okayButtonContainer: {
    width: 201,
    backgroundColor: COLORS.onBackground,
    borderRadius: 16,
    marginTop: 25,
  },
  okayButton: {
    fontSize: 18,
    fontWeight: '300',
    color: COLORS.background,
  },
  outsideContainer: {
    position: 'absolute',
    height: 80,
    width: 80,
    backgroundColor: COLORS.background,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: COLORS.shadow,
    shadowRadius: 8,
    elevation: 5,
    marginBottom: 175,
    marginLeft: 150,
  },
  middleContainer: {
    height: 50,
    width: 50,
    backgroundColor: COLORS.errorContainer,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerContainer: {
    height: 22,
    width: 22,
    backgroundColor: COLORS.tertiaryContainer,
    borderRadius: 11,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerText: {
    color: COLORS.background,
  },
});

export default MaximumAttempts;
