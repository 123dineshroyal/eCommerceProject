import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import Images from '../../assets/Images';
import { COLORS } from '../../constants/themes';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Ionicons';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { RouteName } from '../../navigation/RouteName';


const popular = [
  {
    image: Images.sale1,
    price: '1780',
    status: 'New',
  },
  {
    image: Images.sale2,
    price: '1780',
    status: 'Sale',
  },
  {
    image: Images.popular4,
    price: '1780',
    status: 'Hot',
  },
  {
    image: Images.flash5,
    price: '1780',
    status: 'New',
  },
  {
    image: Images.sale2,
    price: '1780',
    status: 'Sale',
  },
  {
    image: Images.popular4,
    price: '1780',
    status: 'Hot',
  },
];

const CartEmptyShownFromPopular = () => {

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
          <TouchableOpacity style={styles.editIcon} onPress={() => navigation.navigate(RouteName.PAYMENT_SCREEN)}>
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

        <View style={styles.populatMainContainer}>
          <View style={styles.newItemContainer}>
            <Text style={styles.newItemText}>Most Popular</Text>
            <View style={styles.seeAllContainer}>
              <Text style={styles.seeAllText}>See All</Text>
              <TouchableOpacity style={styles.arrowContainer2}>
                <MaterialCommunityIcons
                  name="arrow-right"
                  size={22}
                  color={COLORS.onPrimary}
                />
              </TouchableOpacity>
            </View>
          </View>

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {popular.map(item => (
              <View style={styles.popularContainer}>
                <TouchableOpacity>
                  <Image source={item.image} style={styles.popularImage} />
                  <View style={styles.popularCardContainer}>
                    <View style={styles.popularCard}>
                      <Text style={styles.popularCardPrice}>{item.price}</Text>
                      <Icon name="heart" color={COLORS.primary} size={10} />
                    </View>
                    <Text style={styles.popularCardNew}>{item.status}</Text>
                  </View>
                </TouchableOpacity>
              </View>
            ))}
          </ScrollView>
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
         // onPress={() => navigation.navigate(RouteName.PRODUCT_SCREEN)}
        >
          Checkout
        </Button>
      </View>
    </SafeAreaView>
  );
};
export default CartEmptyShownFromPopular;

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
  populatMainContainer: {
    marginTop: 90,
  },
  popularContainer: {
    marginTop: 15,
    width: 104,
    height: 140,
    justifyContent: 'space-evenly',
    //alignItems:'center',
    borderWidth: 4,
    borderRadius: 10,
    borderColor: COLORS.background,
    backgroundColor: COLORS.background,
    right: 10,
    marginRight: 5,
    shadowColor: COLORS.shadow,
    shadowRadius: 5,
    elevation: 5,
    marginLeft: 5,
    paddingBottom: 5,
  },
  seeAllContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: -10,
  },
  newItemText: {
    fontSize: 21,
    fontWeight: '700',
    fontFamily: 'Raleway',
  },
  seeAllText: {
    fontSize: 15,
    fontWeight: '700',
    right: 20,
  },
  arrowContainer2: {
    height: 30,
    width: 30,
    backgroundColor: COLORS.primary,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  popularImage: {
    width: 93,
    height: 103,
    borderRadius: 9,
    textAlign: 'center',
  },
  popularCardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 6,
  },
  popularCard: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  popularCardPrice: {
    fontSize: 15,
    fontWeight: '700',
  },
  popularCardNew: {
    fontSize: 13,
    fontWeight: '500',
  },
  newItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 25,
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
  shippingText: {
    fontSize: 14,
    fontWeight: '700',
    paddingBottom: 5,
  },
});
