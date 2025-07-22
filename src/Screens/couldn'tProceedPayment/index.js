import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
  Modal,
  ActivityIndicator,
} from 'react-native';
import Images from '../../assets/Images';
import { COLORS } from '../../constants/themes';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Button } from 'react-native-paper';
import Entypo from 'react-native-vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';
import { RouteName } from '../../navigation/RouteName';
import { useState } from 'react';

const ClouldNotProceedPayment = () => {
  const navigation = useNavigation();

  const [modalVisible, setModalVisible] = useState(false);

  const paymentProgress = () => {
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
          onPress={() => navigation.navigate(RouteName.YOUR_CARD_BEEN_CHARGED_SCREEN)}
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
          <View style={styles.voucherAddedContainer}>
            <Text style={styles.discountText}>5% Discount</Text>
            <Entypo name='cross' size={20} color={COLORS.background} />
          </View>
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
          // contentStyle={{ paddingVertical: 3 }}
          onPress={paymentProgress}
        >
          Pay
        </Button>
      </View>

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalBackground}>
          <View style={styles.paymentProgressContainer}>
            <Text style={styles.progressText}>We couldn't proceed</Text>
            <Text style={styles.progressText1}>your payment</Text>
            <Text style={styles.waitText}>
              Please, change your payment method or try again
            </Text>

            <View style={styles.buttonContainer}>
              <Button
                mode="contained"
                labelStyle={styles.tryAgainButtonText}
                style={styles.tryAgainButtonContainer}
                onPress={() => setModalVisible(false)}
              >
                Try Again
              </Button>

              <Button
                mode="contained"
                labelStyle={styles.changeButtonText}
                style={styles.changeButtonContainer}
                onPress={() => setModalVisible(false)}
              >
                Change
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
        </View>
      </Modal>
    </SafeAreaView>
  );
};
export default ClouldNotProceedPayment;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: COLORS.background,
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
    backgroundColor: COLORS.errorContainer,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: COLORS.errorContainer,
    marginTop: 15,
  },
  editIcon: {
    height: 30,
    width: 30,
    backgroundColor: COLORS.primary,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
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
    backgroundColor: COLORS.errorContainer,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: COLORS.errorContainer,
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
  discountText: {
    color: COLORS.background,
    fontSize: 12,
    fontWeight: '400',
    marginHorizontal: 10

  },
  voucherAddedContainer: {
    borderRadius: 15,
    backgroundColor: COLORS.primary,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 4
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
    shadowColor: COLORS.shadow,
    elevation: 5,
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
    elevation: 5,
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
    marginTop: 10,
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
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 40,
    backgroundColor: COLORS.secondary,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  orderDescription: {
    marginTop: 10,
    fontSize: 12,
    fontWeight: '400',
  },
  paymentMethodContainer: {
    marginTop: 30,
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
    justifyContent: 'center',
  },
  paymentProgressContainer: {
    backgroundColor: COLORS.background,
    borderRadius: 10,
    marginHorizontal: 14,
    height: 225,
    justifyContent: 'center',
    alignItems: 'center',
  },
  progressText: {
    fontSize: 20,
    fontWeight: '700',
    marginTop: 50
  },
  progressText1: {
    fontSize: 20,
    fontWeight: '700',
  },
  waitText: {
    marginTop: 7,
    fontSize: 13,
    fontWeight: '600',
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
    marginBottom: 215,
    // marginLeft: 150,
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
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 23


  },
  tryAgainButtonContainer: {
    backgroundColor: COLORS.onBackground,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  tryAgainButtonText: {
    fontSize: 16,
    fontWeight: 300,
  },
  changeButtonContainer: {
    backgroundColor: COLORS.elevation.level4,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginLeft: 15
  },
  changeButtonText: {
    fontSize: 16,
    fontWeight: 300,
  },
});
