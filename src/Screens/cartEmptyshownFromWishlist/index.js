import {
  View,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
  StyleSheet,
  ScrollView,
} from 'react-native';
import Images from '../../assets/Images';
import { COLORS } from '../../constants/themes';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { RouteName } from '../../navigation/RouteName';

const CartEmptyShownFromWishList = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.cartContainer}>
          <Text style={styles.cartText}>Cart</Text>

          <View style={styles.selectedCount}>
            <Text style={styles.cartNumber}>0</Text>
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
          <TouchableOpacity
            style={styles.editIcon}
            onPress={() =>
              navigation.navigate(
                RouteName.CART_EMPTY_SHOWN_FROM_POPULAR_SCREEN,
              )
            }
          >
            <MaterialCommunityIcons
              name="pencil"
              size={20}
              color={COLORS.background}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.Emptycontain}>
          <View style={styles.imageContainer}>
            <Image source={Images.cart4} style={styles.emptyImage} />
          </View>
        </View>

        <View style={styles.fromContainer}>
          <Text style={styles.fromText}>From Your Wishlist</Text>
        </View>

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
          <Image source={Images.item1} style={styles.itemImage} />
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
          <Image source={Images.sale6} style={styles.itemImage} />
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
      </ScrollView>

      <View style={styles.checkoutContainer}>
        <View style={styles.totalContain}>
          <Text style={styles.totalText}>Total</Text>
          <Text style={styles.amount}>$0,00</Text>
        </View>
        <Button
          mode="contained"
          labelStyle={styles.checkoutButtonText}
          style={styles.checkoutButtonContainer}
          // contentStyle={{ paddingVertical: 3 }}
          onPress={() => navigation.navigate(RouteName.PRODUCT_SCREEN)}
        >
          Checkout
        </Button>
      </View>
    </SafeAreaView>
  );
};
export default CartEmptyShownFromWishList;

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
  totalCartContainer: {
    marginTop: 14,
    //borderWidth: 2,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  Emptycontain: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 60,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 134,
    width: 134,
    borderColor: COLORS.background,
    borderWidth: 1,
    borderRadius: 100,
    backgroundColor: COLORS.background,
    shadowColor: COLORS.shadow,
    shadowRadius: 8,
    elevation: 5,
  },
  emptyImage: {
    height: 61,
    width: 58,
  },
  fromContainer: {
    marginTop: 75,
  },
  fromText: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 20,
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
    backgroundColor: COLORS.background,
  },
  checkoutButtonText: {
    fontSize: 16,
    color: COLORS.onBackground,
    fontWeight: '300',
    paddingHorizontal: 20,
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
  shippingText: {
    fontSize: 14,
    fontWeight: '700',
    paddingBottom: 5,
  },
});
