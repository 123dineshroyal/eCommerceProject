import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
  Modal,
} from 'react-native';
import Images from '../../assets/Images';
import { COLORS, SIZES } from '../../constants/themes';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Button } from 'react-native-paper';
import Entypo from 'react-native-vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';
import { RouteName } from '../../navigation/RouteName';
import { useState } from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';

const AddVoucher = () => {
  const navigation = useNavigation();

  const [modalVisible, setModalVisible] = useState(false);

  const addVoucher = () => {
    setModalVisible(true);
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Text style={styles.paymentText}>Payment</Text>

      <View style={styles.shippingContain}>
        <View>
          <Text style={styles.shippingText}>Shipping Address</Text>
          <Text style={styles.shippingDescription}>
            26, Duong So 2, Thao Dien Ward, An Phu, District 2,{'\n'} Ho Chi
            Minh city
          </Text>
        </View>
        <TouchableOpacity
          style={styles.editIcon}
          onPress={() => navigation.navigate(RouteName.VOUCHER_ADDED_SCREEN)}
        >
          <MaterialCommunityIcons
            name="pencil"
            size={20}
            color={COLORS.background}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.contactContain}>
        <View>
          <Text style={styles.shippingText}>Contact Information</Text>
          <Text style={styles.shippingDescription}>
            +84932000000{'\n'} amandamorgan@example.com
          </Text>
        </View>
        <TouchableOpacity style={styles.editIcon}>
          <MaterialCommunityIcons
            name="pencil"
            size={20}
            color={COLORS.background}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.voucherContainer}>
        <View style={styles.itemContain}>
          <View style={styles.item1}>
            <Text style={styles.itemText}>Items</Text>
            <View style={styles.countVoucher}>
              <Text style={styles.totalVoucher}>2</Text>
            </View>
          </View>
          <Button
            mode="contained"
            labelStyle={styles.addVoucherButtonText}
            style={styles.addVoucherButtonContainer}
          >
            Add Voucher
          </Button>
        </View>

        <View style={styles.productDataContainer}>
          <View style={styles.productContain}>
            <Image source={Images.payment1} style={styles.productImage} />
            <Text style={styles.productDiscription}>
              Lorem ipsum dolor sit amet{'\n'}consectetur.
            </Text>
          </View>
          <Text style={styles.price}>$17,00</Text>

          <View style={styles.totalProduct}>
            <Text style={styles.productCount}>1</Text>
          </View>
        </View>

        <View style={styles.productDataContainer}>
          <View style={styles.productContain}>
            <Image source={Images.payment2} style={styles.productImage} />
            <Text style={styles.productDiscription}>
              Lorem ipsum dolor sit amet{'\n'}consectetur.
            </Text>
          </View>
          <Text style={styles.price}>$17,00</Text>

          <View style={styles.totalProduct}>
            <Text style={styles.productCount}>1</Text>
          </View>
        </View>
      </View>

      <View style={styles.shippingOptionContainer}>
        <Text style={styles.optionText}>Shipping Options</Text>

        <View style={styles.standardContainer}>
          <View style={styles.standardContain}>
            <View style={styles.checkIcon}>
              <Entypo name="check" size={14} color={COLORS.background} />
            </View>
            <Text style={styles.standardText}>Standard</Text>
            <View style={styles.daysContain}>
              <Text style={styles.daysText}>5-7 days</Text>
            </View>
          </View>
          <Text style={styles.freeText}>FREE</Text>
        </View>

        <View style={styles.expressContainer}>
          <View style={styles.standardContain}>
            <View style={styles.checkIcon1}>
              <Entypo name="check" size={14} color={COLORS.secondary} />
            </View>
            <Text style={styles.standardText}>Express</Text>
            <View style={styles.daysContain}>
              <Text style={styles.daysText1}>1-2 days</Text>
            </View>
          </View>
          <Text style={styles.freeText}>$12,00</Text>
        </View>

        <Text style={styles.orderDescription}>
          Delivered on or before Thursday, 23 April 2020
        </Text>
      </View>

      <View style={styles.paymentMethodContainer}>
        <View style={styles.paymentMethodContain}>
          <Text style={styles.paymentMethodText}>Payment Method</Text>
          <TouchableOpacity style={styles.editIcon1}>
            <MaterialCommunityIcons
              name="pencil"
              size={20}
              color={COLORS.background}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.cardContain}>
          <Text style={styles.cardText}>Card</Text>
        </View>
      </View>

      <View style={styles.payContainer}>
        <View style={styles.totalContain}>
          <Text style={styles.totalText}>Total</Text>
          <Text style={styles.amount}>$34,00</Text>
        </View>
        <Button
          mode="contained"
          labelStyle={styles.payButtonText}
          style={styles.payButtonContainer}
          onPress={addVoucher}
        >
          Pay
        </Button>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalBackground}>
          <View style={styles.addVoucherContainer}>
            <View style={styles.avalibleVoucher}>
              <Text style={styles.activeText}>Active Vouchers</Text>
            </View>

            <View style={styles.voucher1}>
              <View style={styles.voucherValidity}>
                <Text style={styles.voucherText}>Voucher</Text>
                <View style={styles.voucherTime}>
                  <Text style={styles.timeText}>Valid Until 5.16.20</Text>
                </View>
              </View>
              <View style={styles.borderBottom} />

              <View style={styles.giftContain}>
                <FontAwesome5
                  name="shopping-bag"
                  size={20}
                  color={COLORS.primary}
                />
                <Text style={styles.giftText}>First Purchase</Text>
              </View>
              <View style={styles.voucherDiscount}>
                <Text style={styles.discountText}>
                  5% off for your next order
                </Text>
                <TouchableOpacity
                  style={styles.applyButtonContainer}
                  onPress={() => setModalVisible(false)}
                >
                  <Text style={styles.applyButtonText}>Apply</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.circle1} />
              <View style={styles.circle2} />
              <View style={styles.circle3} />
              <View style={styles.circle4} />
            </View>

            <View style={styles.voucher1}>
              <View style={styles.voucherValidity}>
                <Text style={styles.voucherText}>Voucher</Text>
                <View style={styles.voucherTime}>
                  <Text style={styles.timeText}>Valid Until 6.20.20</Text>
                </View>
              </View>
              <View style={styles.borderBottom} />

              <View style={styles.giftContain}>
                <FontAwesome6 name="gift" size={20} color={COLORS.primary} />
                <Text style={styles.giftText}>Gift From Customer Care</Text>
              </View>
              <View style={styles.voucherDiscount}>
                <Text style={styles.discountText}>
                  15% off your next purchase
                </Text>
                <TouchableOpacity
                  style={styles.applyButtonContainer}
                  onPress={() => setModalVisible(false)}
                >
                  <Text style={styles.applyButtonText}>Apply</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.circle1} />
              <View style={styles.circle2} />
              <View style={styles.circle3} />
              <View style={styles.circle4} />
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};
export default AddVoucher;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: COLORS.background,
    //opacity:0.1
  },
  paymentText: {
    fontSize: 28,
    fontWeight: '700',
  },
  shippingDescription: {
    fontSize: 10,
    fontWeight: '400',
    paddingBottom: 9,
  },
  shippingContain: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: COLORS.secondary,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: COLORS.secondary,
    marginTop: 15,
  },
  editIcon: {
    height: 30,
    width: 30,
    backgroundColor: COLORS.primary,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 35,
  },
  shippingText: {
    fontSize: 14,
    fontWeight: '700',
    paddingBottom: 5,
  },
  contactContain: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLORS.secondary,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: COLORS.secondary,
    marginTop: 6,
    paddingHorizontal: 20,
  },
  voucherContainer: {
    marginTop: 20,
  },
  itemContain: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  item1: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  itemText: {
    fontSize: 21,
    fontWeight: '700',
  },
  countVoucher: {
    height: 30,
    width: 30,
    backgroundColor: COLORS.primaryContainer,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  totalVoucher: {
    fontSize: 18,
    fontWeight: '700',
  },
  addVoucherButtonText: {
    color: COLORS.primary,
    fontSize: 13,
    fontWeight: '400',
  },
  addVoucherButtonContainer: {
    borderRadius: 15,
    backgroundColor: COLORS.background,
    borderWidth: 1,
    borderColor: COLORS.primary,
    paddingHorizontal: 10,
  },
  productDataContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  productImage: {
    height: 50,
    width: 50,
    borderWidth: 3,
    borderRadius: 25,
    borderColor: COLORS.background,
    //shadowColor: COLORS.shadow,
    elevation: 1,
  },
  productDiscription: {
    fontSize: 12,
    fontWeight: '400',
    marginLeft: 15,
  },
  price: {
    fontSize: 18,
    fontWeight: '700',
  },
  productContain: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  totalProduct: {
    position: 'absolute',
    height: 22,
    width: 22,
    borderRadius: 11,
    backgroundColor: COLORS.primaryContainer,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: COLORS.background,
    elevation: 1,
    marginLeft: 35,
    marginTop: -25,
  },
  productCount: {
    fontSize: 13,
    fontWeight: '700',
  },
  shippingOptionContainer: {
    marginTop: 22,
  },
  optionText: {
    fontSize: 21,
    fontWeight: '700',
    marginBottom: 4,
  },
  standardContainer: {
    marginTop: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 40,
    backgroundColor: COLORS.primaryContainer,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  checkIcon: {
    height: 22,
    width: 22,
    borderRadius: 11,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: COLORS.background,
    borderWidth: 2,
  },
  checkIcon1: {
    height: 22,
    width: 22,
    borderRadius: 11,
    backgroundColor: COLORS.secondary,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: COLORS.background,
    borderWidth: 2,
  },
  standardContain: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  standardText: {
    fontSize: 16,
    fontWeight: '600',
    paddingHorizontal: 15,
  },
  daysContain: {
    backgroundColor: COLORS.background,
    borderRadius: 5,
  },
  daysText: {
    fontSize: 13,
    fontWeight: '500',
    color: COLORS.primary,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  daysText1: {
    fontSize: 13,
    fontWeight: '500',
    color: COLORS.primary,
    paddingHorizontal: 10,
    paddingVertical: 4,
    marginLeft: 8,
  },
  freeText: {
    fontSize: 16,
    fontWeight: '700',
  },
  expressContainer: {
    marginTop: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 40,
    backgroundColor: COLORS.secondary,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  orderDescription: {
    marginTop: 6,
    fontSize: 12,
    fontWeight: '400',
  },
  paymentMethodContainer: {
    marginTop: 20,
  },
  paymentMethodContain: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  paymentMethodText: {
    fontSize: 21,
    fontWeight: '700',
  },
  cardContain: {
    marginTop: 11,
    height: 30,
    width: 73,
    backgroundColor: COLORS.primaryContainer,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  cardText: {
    color: COLORS.primary,
    fontSize: 15,
    fontWeight: '700',
  },
  editIcon1: {
    height: 30,
    width: 30,
    backgroundColor: COLORS.primary,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  payContainer: {
    position: 'absolute',
    height: 60,
    backgroundColor: COLORS.inverseOnSurface,
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  totalContain: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  totalText: {
    fontSize: 20,
    fontWeight: '800',
  },
  amount: {
    fontSize: 18,
    fontWeight: '700',
    marginLeft: 10,
  },
  payButtonContainer: {
    borderRadius: 15,
    backgroundColor: COLORS.onBackground,
  },
  payButtonText: {
    fontSize: 16,
    color: COLORS.background,
    fontWeight: '300',
    paddingHorizontal: 40,
  },
  modalBackground: {
    flex: 1,
    backgroundColor: COLORS.onTertiary,
    justifyContent: 'flex-end',
    opacity: 0.9,
  },
  addVoucherContainer: {
    backgroundColor: COLORS.background,
    //paddingHorizontal: 20,
    paddingBottom: 20,
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
    //height:SIZES.height*0.5
  },
  avalibleVoucher: {
    height: 80,
    backgroundColor: COLORS.onSurface,
    borderWidth: 2,
    borderColor: COLORS.onSurface,
  },
  activeText: {
    fontSize: 22,
    fontWeight: '700',
    paddingTop: 26,
    paddingLeft: 20,
  },
  voucher1: {
    height: 115,
    borderColor: COLORS.primary,
    borderWidth: 2,
    borderRadius: 10,
    marginTop: 20,
    marginHorizontal: 17,
  },
  voucherValidity: {
    marginTop: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 10,
  },
  voucherText: {
    fontSize: 18,
    fontWeight: '700',
    color: COLORS.primary,
  },
  voucherTime: {
    backgroundColor: COLORS.errorContainer,
    paddingVertical: 2,
    paddingHorizontal: 5,
    borderRadius: 3,
  },
  timeText: {
    fontSize: 11,
    fontWeight: '500',
    textAlign: 'center',
  },
  borderBottom: {
    marginTop: 3,
    borderWidth: 1,
    height: 1,
    borderStyle: 'dashed',
    borderColor: COLORS.primary,
  },
  giftContain: {
    marginTop: 20,
    flexDirection: 'row',
    paddingLeft: 20,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  giftText: {
    fontSize: 17,
    fontWeight: '700',
    paddingLeft: 10,
  },
  voucherDiscount: {
    paddingLeft: 20,
    paddingRight: 10,
    marginTop: 3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  discountText: {
    fontSize: 12,
    fontWeight: '600',
  },
  applyButtonText: {
    fontSize: 12,
    color: COLORS.background,
    fontWeight: '500',
    paddingHorizontal: 30,
  },
  applyButtonContainer: {
    borderRadius: 8,
    backgroundColor: COLORS.primary,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle1: {
    position: 'absolute',
    height: 30,
    width: 30,
    borderColor: COLORS.primary,
    borderWidth: 2,
    borderRadius: 15,
    backgroundColor: COLORS.background,
    left: -17,
    marginTop: 42,
    // zIndex:1
  },
  circle2: {
    position: 'absolute',
    height: 32,
    width: 32,
    backgroundColor: COLORS.background,
    left: -34,
    marginTop: 41,
  },
  circle3: {
    position: 'absolute',
    height: 30,
    width: 30,
    borderColor: COLORS.primary,
    borderWidth: 2,
    borderRadius: 15,
    backgroundColor: COLORS.background,
    right: -17,
    marginTop: 42,
  },
  circle4: {
    position: 'absolute',
    height: 32,
    width: 32,
    backgroundColor: COLORS.background,
    right: -34,
    marginTop: 41,
  },
});
