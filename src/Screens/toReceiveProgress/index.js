import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from 'react-native';
import Images from '../../assets/Images';
import { COLORS, SIZES } from '../../constants/themes';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { useNavigation } from '@react-navigation/native';
import { RouteName } from '../../navigation/RouteName';

const ToReceiveProgress = () => {

  const navigation = useNavigation();

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

        <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate(RouteName.TO_RECEIVE_ATTEMPT_IS_NOT_SUCCESSFUL_SCREEN)}>
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
         Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore.
        </Text>
      </View>

      <View style={styles.packedMainContainer}>
        <View style={styles.packedContainer}>
          <Text style={styles.packedText}>Arrived at Logistic Facility</Text>
          <Text style={styles.dateText}>April,19 19:07</Text>
        </View>
        <Text style={styles.packedDescription}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore.
        </Text>
      </View>

        <View style={styles.packedMainContainer}>
        <View style={styles.packedContainer}>
          <Text style={styles.shippedText}>Shipped</Text>
          <Text style={styles.dateText1}>Expected on April,20</Text>
        </View>
        <Text style={styles.shippedDescription}>
         Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore.
        </Text>
      </View>
    </SafeAreaView>
  );
};
export default ToReceiveProgress;

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
    width: 15,
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
    borderWidth: 2,
    borderColor: COLORS.background,
    // elevation:5,
    shadowRadius: 11,
    marginLeft: 4,
  },
  innerLine: {
    height: 8,
    backgroundColor: COLORS.primary,
    width: SIZES.width * 0.24,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: COLORS.background,
    shadowRadius: 4,
    left: -3,
    borderLeftWidth: 0,
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
   shippedText: {
    fontSize: 17,
    fontWeight: '700',
    opacity:0.2
  },
  dateText: {
    fontSize: 13,
    fontWeight: '500',
    backgroundColor: COLORS.secondary,
    borderRadius: 4,
    paddingHorizontal: 7,
    paddingVertical: 2,
  },
  dateText1: {
    fontSize: 13,
    fontWeight: '500',
    backgroundColor: COLORS.primaryContainer,
    borderRadius: 4,
    paddingHorizontal: 7,
    paddingVertical: 2,
  },
  packedDescription: {
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 16,
    paddingRight:10
  },
  shippedDescription: {
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 16,
    paddingRight:10,
    opacity:0.2
  },
});
