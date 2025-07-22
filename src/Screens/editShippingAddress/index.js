import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Image,
  Modal,
  TextInput,
} from 'react-native';
import Images from '../../assets/Images';
import { COLORS, SIZES } from '../../constants/themes';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
//import MaterialDesignIcons from 'react-native-vector-icons/MaterialDesignIcons';

import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { RouteName } from '../../navigation/RouteName';
import { useState } from 'react';

const EditShippingAddress = () => {
  const navigation = useNavigation();

  const [address, setAddress] = useState(
    'Magadi Main Rd, next to Prasanna Theatre, Cholourpalya, Bengaluru, Karnataka 560023',
  );
  const [city, setCity] = useState('Bengaluru, Karnataka 560023');
  const [postCode, setPostCode] = useState('70000');

  const [modalVisible, setModalVisible] = useState(false);

  const editAddress = () => {
    setModalVisible(true);
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.cartContainer}>
          <Text style={styles.cartText}>Cart</Text>

          <View style={styles.selectedCount}>
            <Text style={styles.cartNumber}>2</Text>
          </View>
        </View>
        <View style={styles.shippingContain}>
          <View>
            <Text style={styles.shippingText}>Shipping Address</Text>
            <Text style={styles.shippingDescription}>
              26, Duong So 2, Thao Dien Ward, An Phu, District 2,{'\n'} Ho Chi
              Minh city
            </Text>
          </View>
          <TouchableOpacity style={styles.editIcon} onPress={editAddress}>
            <MaterialCommunityIcons
              name="pencil"
              size={20}
              color={COLORS.background}
            />
          </TouchableOpacity>
        </View>
        w
        <View style={styles.totalCartContainer}>
          <Image source={Images.cart1} style={styles.cartImage} />
          <View style={styles.cart1}>
            <Text style={styles.cartDes}>
              Lorem ipsum dolor sit amet{'\n'}consectetur.
            </Text>
            <Text style={styles.size}>Pink, Size M</Text>

            <View style={styles.quantityContainer}>
              <Text style={styles.price}>$17,00</Text>
              <TouchableOpacity style={styles.minus}>
                <Entypo name="minus" size={22} color={COLORS.primary} />
              </TouchableOpacity>
              <Text style={styles.totalQuantity}>1</Text>
              <TouchableOpacity style={styles.minus1}>
                <Entypo name="plus" size={22} color={COLORS.primary} />
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity style={styles.deleteIcon}>
            <MaterialCommunityIcons
              name="delete"
              color={COLORS.tertiary}
              size={23}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.totalCartContainer}>
          <Image source={Images.cart2} style={styles.cartImage} />
          <View style={styles.cart1}>
            <Text style={styles.cartDes}>
              Lorem ipsum dolor sit amet{'\n'}consectetur.
            </Text>
            <Text style={styles.size}>Pink, Size M</Text>

            <View style={styles.quantityContainer}>
              <Text style={styles.price}>$17,00</Text>
              <TouchableOpacity style={styles.minus}>
                <Entypo name="minus" size={22} color={COLORS.primary} />
              </TouchableOpacity>
              <Text style={styles.totalQuantity}>1</Text>
              <TouchableOpacity style={styles.minus1}>
                <Entypo name="plus" size={22} color={COLORS.primary} />
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity style={styles.deleteIcon}>
            <MaterialCommunityIcons
              name="delete"
              color={COLORS.tertiary}
              size={23}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.fromContainer}>
          <Text style={styles.fromText}>From Your Wishlist</Text>

          <View style={styles.itemContainer}>
            <Image source={Images.sale1} style={styles.itemImage} />
            <View>
              <Text style={styles.itemDescription}>
                Lorem ipsum dolor sit amet{'\n'}consectetur.
              </Text>
              <Text style={styles.itemPrice}>$17,00</Text>
              <View style={styles.itemSize}>
                <Text style={styles.color}>Pink</Text>
                <Text style={styles.size1}>M</Text>
              </View>
            </View>
            <Image source={Images.wish1} style={styles.wishImage} />

            <TouchableOpacity style={styles.deleteIcon1}>
              <MaterialCommunityIcons
                name="delete"
                color={COLORS.tertiary}
                size={23}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.itemContainer}>
            <Image source={Images.cart3} style={styles.itemImage} />
            <View>
              <Text style={styles.itemDescription}>
                Lorem ipsum dolor sit amet{'\n'}consectetur.
              </Text>
              <Text style={styles.itemPrice}>$17,00</Text>
              <View style={styles.itemSize}>
                <Text style={styles.color}>Pink</Text>
                <Text style={styles.size1}>M</Text>
              </View>
            </View>
            <Image source={Images.wish1} style={styles.wishImage} />

            <TouchableOpacity style={styles.deleteIcon1}>
              <MaterialCommunityIcons
                name="delete"
                color={COLORS.tertiary}
                size={23}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.itemContainer}>
            <Image source={Images.sale4} style={styles.itemImage} />
            <View>
              <Text style={styles.itemDescription}>
                Lorem ipsum dolor sit amet{'\n'}consectetur.
              </Text>
              <Text style={styles.itemPrice}>$17,00</Text>
              <View style={styles.itemSize}>
                <Text style={styles.color}>Pink</Text>
                <Text style={styles.size1}>M</Text>
              </View>
            </View>
            <Image source={Images.wish1} style={styles.wishImage} />

            <TouchableOpacity style={styles.deleteIcon1}>
              <MaterialCommunityIcons
                name="delete"
                color={COLORS.tertiary}
                size={23}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.itemContainer}>
            <Image source={Images.item2} style={styles.itemImage} />
            <View>
              <Text style={styles.itemDescription}>
                Lorem ipsum dolor sit amet{'\n'}consectetur.
              </Text>
              <Text style={styles.itemPrice}>$17,00</Text>
              <View style={styles.itemSize}>
                <Text style={styles.color}>Pink</Text>
                <Text style={styles.size1}>M</Text>
              </View>
            </View>
            <Image source={Images.wish1} style={styles.wishImage} />

            <TouchableOpacity style={styles.deleteIcon1}>
              <MaterialCommunityIcons
                name="delete"
                color={COLORS.tertiary}
                size={23}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <View style={styles.checkoutContainer}>
        <View style={styles.totalContain}>
          <Text style={styles.totalText}>Total</Text>
          <Text style={styles.amount}>$34,00</Text>
        </View>
        <Button
          mode="contained"
          labelStyle={styles.checkoutButtonText}
          style={styles.checkoutButtonContainer}
          onPress={() => navigation.navigate(RouteName.CHOOSE_PAYMENT_METHOD_1_CARD_SCREEN)}
        >
          Checkout
        </Button>
      </View>

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalBackground}>
          <View style={styles.shippingAddressContainer}>
            <View style={styles.avalibleAddress}>
              <Text style={styles.addressText}>Shipping Address</Text>
            </View>

            <View style={styles.addressContain}>
              <Text style={styles.countryText}>Country</Text>
              <View style={styles.countryContain}>
                <Text style={styles.countryName}>India</Text>
                <TouchableOpacity style={styles.arrowContainer}>
                  <MaterialCommunityIcons
                    name="arrow-right"
                    size={22}
                    color={COLORS.onPrimary}
                  />
                </TouchableOpacity>
              </View>

              <View style={styles.address1}>
                <Text style={styles.addressText1}>Address</Text>
                <TextInput
                  value={address}
                  onChangeText={setAddress}
                  style={styles.Input}
                />
              </View>

              <View style={styles.address1}>
                <Text style={styles.addressText1}>Town / City</Text>
                <TextInput
                  value={city}
                  onChangeText={setCity}
                  style={styles.Input}
                />
              </View>

              <View style={styles.address1}>
                <Text style={styles.addressText1}>Postcode</Text>
                <TextInput
                  value={postCode}
                  onChangeText={setPostCode}
                  style={styles.Input}
                />
              </View>

              <Button
                mode="contained"
                labelStyle={styles.saveButtonText}
                style={styles.saveButtonContainer}
                onPress={() => setModalVisible(false)}
              >
                Save Changes
              </Button>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};
export default EditShippingAddress;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: COLORS.background,
  },
  cartContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  cartText: {
    fontSize: 28,
    fontWeight: '700',
  },
  cartNumber: {
    fontSize: 18,
    fontWeight: '700',

    //padding:10,
  },
  selectedCount: {
    width: 30,
    height: 30,
    backgroundColor: COLORS.primaryContainer,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
    borderRadius: 15,
  },
  shippingText: {
    fontSize: 14,
    fontWeight: '700',
    paddingBottom: 5,
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
    marginTop: 20,
  },
  totalCartContainer: {
    marginTop: 14,
    //borderWidth: 2,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  cartImage: {
    height: 101,
    width: 121,
    borderRadius: 8,
    borderWidth: 4,
    borderColor: COLORS.background,
    shadowColor: COLORS.shadow,
    shadowRadius: 8,
    elevation: 5,
    resizeMode: 'stretch',
  },
  cartDes: {
    fontSize: 12,
    fontWeight: '400',
  },
  size: {
    fontSize: 14,
    fontWeight: '500',
    paddingBottom: 10,
    paddingTop: 8,
  },
  price: {
    fontSize: 18,
    fontWeight: '700',
  },
  minus: {
    height: 30,
    width: 30,
    borderColor: COLORS.primary,
    borderWidth: 2,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 45,
  },
  totalQuantity: {
    fontSize: 16,
    fontWeight: '500',
    backgroundColor: COLORS.primaryContainer,
    paddingHorizontal: 20,
    marginLeft: 6,
    borderRadius: 10,
    paddingVertical: 5,
  },
  quantityContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  minus1: {
    height: 30,
    width: 30,
    borderColor: COLORS.primary,
    borderWidth: 2,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 5,
  },
  cart1: {
    marginLeft: 10,
  },
  deleteIcon: {
    position: 'absolute',
    height: 35,
    width: 35,
    borderRadius: 17,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.background,
    marginLeft: 8,
    marginTop: 55,
  },
  fromContainer: {
    marginTop: 20,
  },
  fromText: {
    fontSize: 22,
    fontWeight: '700',
    paddingBottom: 3,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 5,
    paddingTop: 4,
    paddingBottom: 17,
  },

  itemImage: {
    width: 121,
    height: 101,
    borderRadius: 8,
    borderWidth: 4,
    borderColor: COLORS.background,
    shadowColor: COLORS.shadow,
    shadowRadius: 10,
    elevation: 5,
  },
  itemDescription: {
    fontSize: 12,
    fontWeight: '400',
  },
  itemPrice: {
    fontSize: 18,
    fontWeight: '700',
    paddingVertical: 12,
  },
  itemSize: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  color: {
    fontSize: 14,
    fontWeight: '500',
    backgroundColor: COLORS.primaryContainer,
    textAlign: 'center',
    paddingHorizontal: 15,
    borderRadius: 4,
  },
  size1: {
    fontSize: 14,
    fontWeight: '500',
    backgroundColor: COLORS.primaryContainer,
    textAlign: 'center',
    paddingHorizontal: 20,
    marginLeft: 5,
    borderRadius: 4,
  },
  wishImage: {
    width: 29,
    height: 25,
    marginTop: 76,
  },
  deleteIcon1: {
    position: 'absolute',
    height: 35,
    width: 35,
    borderRadius: 17,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.background,
    marginLeft: 20,
    marginTop: 42,
  },
  checkoutContainer: {
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
  checkoutButtonContainer: {
    borderRadius: 15,
  },
  checkoutButtonText: {
    fontSize: 16,
    color: COLORS.onPrimary,
    fontWeight: '300',
    paddingHorizontal: 20,
  },
  modalBackground: {
    flex: 1,
    backgroundColor: COLORS.onTertiary,
    justifyContent: 'flex-end',
  },
  shippingAddressContainer: {
    backgroundColor: COLORS.background,
    paddingBottom: 20,
    borderTopLeftRadius: 15,
    borderTopEndRadius: 15,
  },
  avalibleAddress: {
    height: 80,
    backgroundColor: COLORS.onSurface,
    borderWidth: 2,
    borderColor: COLORS.onSurface,
    borderTopLeftRadius: 15,
    borderTopEndRadius: 15,
  },
  addressText: {
    fontSize: 22,
    fontWeight: '700',
    paddingTop: 26,
    paddingLeft: 20,
  },
  addressContain: {
    paddingHorizontal: 20,
  },
  countryText: {
    fontSize: 13,
    fontWeight: '600',
    marginTop: 14,
  },
  countryContain: {
    marginTop: 3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  countryName: {
    fontSize: 20,
    fontWeight: '700',
    color: COLORS.elevation.level4,
  },
  arrowContainer: {
    height: 30,
    width: 30,
    backgroundColor: COLORS.elevation.level4,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  address1: {
    marginTop: 14,
  },
  addressText1: {
    fontSize: 13,
    fontWeight: '600',
  },
  Input: {
    marginTop: 2,
    borderRadius: 10,
    fontWeight: '500',
    fontSize: 16,
    backgroundColor: COLORS.primaryContainer,
    height: 37,
    paddingLeft: 20,
  },
  saveButtonContainer: {
    marginTop: 16,
    borderRadius: 10,
  },
  saveButtonText: {
    fontSize: 16,
    fontWeight: '300',
  },
});
