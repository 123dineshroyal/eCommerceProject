import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Image,
  Modal,
} from 'react-native';
import themes, { COLORS, SIZES } from '../../constants/themes';
import Images from '../../assets/Images';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { Button } from 'react-native-paper';

const MaximumAttempts = () => {
  const navigation = useNavigation();

  const [modalVisible, setModalVisible] = useState(false);

  const handleSendAgain = () => {
    setModalVisible(true);
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View>
        <View>
          <Image source={Images.topRight1} style={styles.topRightImage} />
          <Image source={Images.topRight2} style={styles.topRightBlueImage} />
        </View>

        <View style={styles.passwordContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate('HelloCard-Screen')}
          >
            <Image source={Images.profile} style={styles.userImage} />
          </TouchableOpacity>
          <Text style={styles.passwordRcovery}>Password Recovery</Text>
          <Text style={styles.passwordText}>
            Enter 4-digits code we sent you
          </Text>
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
            > Send Again</Button>

          <Button
            mode="contained"
            labelStyle={styles.cancelButtonText}
            onPress={() => navigation.navigate('New-Password-Screen')}
            style={styles.cancelButtonContainer}
          > Cancel</Button>
        </View>
      </View>

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
            > Send Again</Button>
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
  mobileNumber: {
    fontSize: 16,
    fontWeight: '700',
    marginTop: 13,
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
    width: 201,
    height: 61,
    backgroundColor: COLORS.onBackground,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    top: 199,
    paddingBottom:4
  },
  sendAgainButtonText: {
    fontSize: 20,
    color: COLORS.background,
    fontWeight: '300',
  },
  cancelButtonContainer: {
    top: 195,
    marginTop: 24,
    backgroundColor:COLORS.background
  },
  cancelButtonText: {
    fontSize: 15,
    fontWeight: 300,
    color:COLORS.onBackground
  },
  modalBackground: {
    flex: 1,
    backgroundColor: COLORS.backdrop,
  },
  passwordLimitContainer: {
    top: 313,
    height: 225,
    backgroundColor: COLORS.background,
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 1,
    marginHorizontal: 14,
    borderRadius: 19,
    shadowColor: COLORS.shadow,
    shadowRadius: 8,
    elevation: 5,
    paddingTop: 20,
  },
  passwordText1: {
    fontSize: 18,
    fontWeight: 500,
    fontFamily: 'Raleway',
  },
  okayButtonContainer: {
    width: 201,
    height: 50,
    backgroundColor: COLORS.onBackground,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
  },
  okayButton: {
    fontSize: 20,
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
    top: 275,
    left: 148,
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
