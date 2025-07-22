import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Image,
  Modal,
} from 'react-native';
import Images from '../../assets/Images';
import { COLORS, SIZES } from '../../constants/themes';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import LinearGradient from 'react-native-linear-gradient';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native-paper';
import { RouteName } from '../../navigation/RouteName';

const DeliveryAttempNotification = () => {
  const navigation = useNavigation();

  const [modalVisible, setModalVisible] = useState(false);

  const DeliveryNotificationHandle = () => {
    setModalVisible(true);
  };
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.receiveContainer}>
        <Image source={Images.receive1} style={styles.receiveImage} />
        <View>
          <Text style={styles.receiveText}>To Recieve</Text>
          <Text style={styles.orderText}>Track Your Order</Text>
        </View>

        <TouchableOpacity style={styles.iconContainer}>
          <Image source={Images.icon1} style={styles.iconImage} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconContainer}>
          <Image source={Images.icon2} style={styles.iconImage} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate(RouteName.PROFILE_TO_RECEIVE_NOTIFICATION_SCREEN)}>
          <SimpleLineIcons name="settings" size={18} color={COLORS.primary} />
        </TouchableOpacity>

        <View style={styles.notification} />
      </View>

      <View style={styles.progressContainer}>
        <View style={styles.progressLine}>
          <View style={styles.progressCircle1} />
          <View style={styles.progressCircle2} />
          <View style={styles.progressCircle3} />

          <View style={styles.innerContain}>
            <View style={styles.innerCircle} />
            <View style={styles.innerLine} />
            <View style={styles.innerCircle1} />
            <LinearGradient
              colors={[COLORS.primary, COLORS.error]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1.3, y: 0 }}
              style={styles.innerLine1}
            />
            <View style={styles.innerCircle2} />
          </View>
        </View>
      </View>

      <View style={styles.trackingNumberContainer}>
        <View style={styles.trackingNumberContain}>
          <Text style={styles.trackingNumberText}>Tracking Number</Text>
          <Text style={styles.trackingNumber}>LGS-i92927839300763731</Text>
        </View>
        <Image source={Images.menu1} style={styles.menuImage} />
      </View>

      <View style={styles.packedMainContainer}>
        <View style={styles.packedContainer}>
          <Text style={styles.packedText}>Packed</Text>
          <Text style={styles.dateText}>April,19 12:31</Text>
        </View>
        <Text style={styles.packedDescription}>
          Your parcel is packed and will be handed over to our delivery partner.
        </Text>
      </View>

      <View style={styles.packedMainContainer}>
        <View style={styles.packedContainer}>
          <Text style={styles.packedText}>On the Way to Logistic Facility</Text>
          <Text style={styles.dateText}>April,19 16:20</Text>
        </View>
        <Text style={styles.packedDescription}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore.
        </Text>
      </View>

      <View style={styles.packedMainContainer}>
        <View style={styles.packedContainer}>
          <Text style={styles.packedText}>Arrived at Logistic Facility</Text>
          <Text style={styles.dateText}>April,19 19:07</Text>
        </View>
        <Text style={styles.packedDescription}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore.
        </Text>
      </View>

      <View style={styles.packedMainContainer}>
        <View style={styles.packedContainer}>
          <Text style={styles.packedText}>Shipped</Text>
          <Text style={styles.dateText}>April,20 06:15</Text>
        </View>
        <Text style={styles.packedDescription}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore.
        </Text>
      </View>

      <View style={styles.packedMainContainer}>
        <View style={styles.packedContainer}>
          <Text style={styles.packedText}>Out for Delivery</Text>
          <Text style={styles.dateText}>April,22 11:10</Text>
        </View>
        <Text style={styles.packedDescription}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore.
        </Text>
      </View>

      <TouchableOpacity
        style={styles.attemptContainer}
        onPress={DeliveryNotificationHandle}
      >
        <Text style={styles.attemptText}>
          Attempt to deliver your parcel{'\n'}was not successful{' '}
          <FontAwesome6 name="arrow-right" size={17} color={COLORS.primary} />
        </Text>
        <Text style={styles.dateText1}>April,19 12:50</Text>
      </TouchableOpacity>

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalBackground}>
          <View style={styles.deliveryNotifiactionContainer}>
            <View style={styles.deliveryNotifiactionContain}>
              <Text style={styles.deliveryNotifiactionText}>
                Delivery was not successful
              </Text>
            </View>

            <View style={styles.deliveryQuestionContainer}>
              <Text style={styles.deliveryQuestion}>What should I do?</Text>
              <Text style={styles.deliveryAnswer}>
                Don't worry, we will shortly contact you to arrange more
                suitable time for the delivery. You can also contact us by using
                this number +00 000 000 000 or chat with our customer care
                service
              </Text>

              <Button
                mode="contained"
                labelStyle={styles.chatNowButtonText}
                style={styles.chatNowButtonContainer}
                onPress={() => setModalVisible(false)}
              >
                Chat Now
              </Button>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};
export default DeliveryAttempNotification;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: COLORS.background,
  },
  receiveContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  receiveImage: {
    height: 44,
    width: 44,
    borderRadius: 20,
    borderWidth: 4,
    borderColor: COLORS.background,
    elevation: 5,
    resizeMode: 'contain',
  },
  receiveText: {
    fontSize: 21,
    fontWeight: '700',
  },
  orderText: {
    fontSize: 14,
    fontWeight: '500',
  },
  iconContainer: {
    height: 35,
    width: 35,
    backgroundColor: COLORS.primaryContainer,
    borderRadius: 17,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 15,
  },
  iconImage: {
    height: 15,
    width: 16,
  },
  notification: {
    position: 'absolute',
    height: 8,
    width: 8,
    borderRadius: 4,
    backgroundColor: COLORS.primary,
    right: 66,
    bottom: 34,
  },
  progressContainer: {
    marginTop: 20,
  },
  progressLine: {
    height: 14,
    backgroundColor: COLORS.primaryContainer,
    borderRadius: 5,
    justifyContent: 'center',
  },
  progressCircle1: {
    position: 'absolute',
    height: 30,
    width: 30,
    backgroundColor: COLORS.primaryContainer,
    borderRadius: 15,
    bottom: -8,
  },
  progressCircle2: {
    position: 'absolute',
    height: 30,
    width: 30,
    backgroundColor: COLORS.primaryContainer,
    borderRadius: 15,
    bottom: -8,
    left: SIZES.width * 0.4,
  },
  progressCircle3: {
    position: 'absolute',
    height: 30,
    width: 30,
    backgroundColor: COLORS.primaryContainer,
    borderRadius: 15,
    bottom: -8,
    right: 0,
  },
  innerCircle: {
    height: 22,
    width: 22,
    backgroundColor: COLORS.primary,
    borderRadius: 11,
    borderWidth: 1,
    borderColor: COLORS.background,
    // elevation:5,
    shadowRadius: 11,
    marginLeft: 4,
  },
  innerLine: {
    height: 8,
    backgroundColor: COLORS.primary,
    width: SIZES.width * 0.37,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: COLORS.background,
    shadowRadius: 4,
    left: -2,
    borderLeftWidth: 0,
    borderRightWidth: 0,
  },
  innerContain: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  trackingNumberContainer: {
    marginTop: 20,
    padding: 10,
    backgroundColor: COLORS.secondary,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  trackingNumberContain: {},
  trackingNumberText: {
    fontSize: 14,
    fontWeight: '700',
  },
  trackingNumber: {
    fontSize: 12,
    fontWeight: '400',
  },
  menuImage: {
    height: 20,
    width: 20,
  },
  packedMainContainer: {
    marginTop: 30,
  },
  packedContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  packedText: {
    fontSize: 17,
    fontWeight: '700',
  },

  dateText: {
    fontSize: 13,
    fontWeight: '500',
    backgroundColor: COLORS.secondary,
    borderRadius: 4,
    paddingHorizontal: 7,
    paddingVertical: 2,
  },

  packedDescription: {
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 16,
    paddingRight: 10,
  },
  attemptContainer: {
    marginTop: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  attemptText: {
    fontSize: 16,
    fontWeight: '700',
    color: COLORS.primary,
    lineHeight: 20,
  },
  dateText1: {
    fontSize: 13,
    fontWeight: '500',
    borderRadius: 4,
    paddingHorizontal: 7,
    paddingVertical: 2,
    backgroundColor: COLORS.error,
    color: COLORS.background,
    marginBottom: 15,
  },
  innerCircle1: {
    height: 22,
    width: 22,
    backgroundColor: COLORS.primary,
    borderRadius: 11,
    borderWidth: 1,
    borderColor: COLORS.background,
    // elevation:5,
    shadowRadius: 11,
    marginLeft: -10,
    borderLeftWidth: 0,
  },
  innerLine1: {
    height: 8,
    //backgroundColor: COLORS.primary,
    width: SIZES.width * 0.39,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: COLORS.background,
    shadowRadius: 4,
    left: -2,
    borderLeftWidth: 0,
    borderRightWidth: 0,
  },
  innerCircle2: {
    height: 22,
    width: 22,
    backgroundColor: COLORS.error,
    borderRadius: 11,
    borderTopLeftRadius: 11,
    borderWidth: 1,
    borderColor: COLORS.background,
    // elevation:5,
    shadowRadius: 11,
    marginLeft: -10,
    borderLeftWidth: 0,
  },
  modalBackground: {
    flex: 1,
    backgroundColor: COLORS.onTertiary,
    justifyContent: 'flex-end',
  },
  deliveryNotifiactionContainer: {
    backgroundColor: COLORS.background,
    borderTopLeftRadius: 15,
    borderTopEndRadius: 15,
  },
  deliveryNotifiactionContain: {
    height: 80,
    backgroundColor: COLORS.onSurface,
    borderWidth: 2,
    borderColor: COLORS.onSurface,
    borderTopLeftRadius: 15,
    borderTopEndRadius: 15,
  },
  deliveryNotifiactionText: {
    fontSize: 22,
    fontWeight: '700',
    paddingTop: 26,
    paddingLeft: 20,
  },
  deliveryQuestionContainer: {
    padding: 20,
  },
  deliveryQuestion: {
    fontSize: 18,
    fontWeight: '700',
  },
  deliveryAnswer: {
    fontSize: 13,
    fontWeight: '600',
    lineHeight: 20,
    marginTop: 10,
  },
  chatNowButtonContainer: {
    marginTop: 15,
    borderRadius: 15,
  },
  chatNowButtonText: {
    fontSize: 13,
    fontWeight: '300',
  },
});
