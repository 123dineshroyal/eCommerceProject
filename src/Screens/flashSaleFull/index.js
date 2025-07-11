import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ImageBackground,
  ScrollView,
} from 'react-native';
import Images from '../../assets/Images';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { COLORS, SIZES } from '../../constants/themes';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { RouteName } from '../../navigation/RouteName';
import TabNavigator from '../../navigation/TabNavigator';

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

const FlashSaleFull = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      source={Images.flashSaleBackground}
      style={styles.backgroundImage}
    >
      <ScrollView>
        <View style={styles.flashSaleTimerContainer}>
          <Text style={styles.flashSaleText}>Flash Sale</Text>
          <View style={styles.flashSaleTimeContainer}>
            <TouchableOpacity
              onPress={() => navigation.navigate(RouteName.FLASH_SALE_SCREEN)}
            >
              <Fontisto name="stopwatch" color={COLORS.background} size={19} />
            </TouchableOpacity>
            <Text style={styles.time}>00</Text>
            <Text style={styles.time}>36</Text>
            <Text style={styles.time}>58</Text>
          </View>
        </View>
        <Text style={styles.chooseDiscount}>Choose Your Discount</Text>

        <View style={styles.discountContainer}>
          <Text style={styles.persent}>All</Text>
          <Text style={styles.persent}>10%</Text>
          <Text style={styles.persent1}>20%</Text>
          <Text style={styles.persent}>30%</Text>
          <Text style={styles.persent}>40%</Text>
          <Text style={styles.persent}>50%</Text>
        </View>
        <MaterialIcons
          name="arrow-drop-down"
          size={25}
          color={COLORS.primary}
          style={styles.arrowIcon}
        />

        <View style={styles.discountContainer1}>
          <View style={styles.discountContain}>
            <Text style={styles.discountText}>20% Discount</Text>
            <TouchableOpacity
              style={styles.sliderIcon}
              onPress={() => navigation.navigate(RouteName.LIVE_SCREEN)}
            >
              <FontAwesome6 name="sliders" size={18} color="black" />
            </TouchableOpacity>
          </View>

          <View style={styles.discount}>
            <TouchableOpacity style={styles.discountProduct}>
              <Image source={Images.just5} style={styles.discountImage} />
              <Text style={styles.discountText1}>
                Lorem ipsum dolor sit {'\n'}amet consectetur
              </Text>
              <Text style={styles.discountPrice}>
                $16,00 <Text style={styles.discountPersent}> $20,00</Text>
              </Text>
              <Text style={styles.salePercent}>-20%</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.discountProduct}>
              <Image source={Images.just1} style={styles.discountImage} />
              <Text style={styles.discountText1}>
                Lorem ipsum dolor sit {'\n'}amet consectetur
              </Text>
              <Text style={styles.discountPrice}>
                $16,00 <Text style={styles.discountPersent}> $20,00</Text>
              </Text>
              <Text style={styles.salePercent}>-20%</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.discount}>
            <TouchableOpacity style={styles.discountProduct}>
              <Image source={Images.discount1} style={styles.discountImage} />
              <Text style={styles.discountText1}>
                Lorem ipsum dolor sit {'\n'}amet consectetur
              </Text>
              <Text style={styles.discountPrice}>
                $16,00 <Text style={styles.discountPersent}> $20,00</Text>
              </Text>
              <Text style={styles.salePercent}>-20%</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.discountProduct}>
              <Image source={Images.just6} style={styles.discountImage} />
              <Text style={styles.discountText1}>
                Lorem ipsum dolor sit {'\n'}amet consectetur
              </Text>
              <Text style={styles.discountPrice}>
                $16,00 <Text style={styles.discountPersent}> $20,00</Text>
              </Text>

              <Text style={styles.salePercent}>-20%</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.discount}>
            <TouchableOpacity style={styles.discountProduct}>
              <Image source={Images.just2} style={styles.discountImage} />
              <Text style={styles.discountText1}>
                Lorem ipsum dolor sit {'\n'}amet consectetur
              </Text>
              <Text style={styles.discountPrice}>
                $16,00 <Text style={styles.discountPersent}> $20,00</Text>
              </Text>
              <Text style={styles.salePercent}>-20%</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.discountProduct}>
              <Image source={Images.item2} style={styles.discountImage} />
              <Text style={styles.discountText1}>
                Lorem ipsum dolor sit {'\n'}amet consectetur
              </Text>
              <Text style={styles.discountPrice}>
                $16,00 <Text style={styles.discountPersent}> $20,00</Text>
              </Text>

              <Text style={styles.salePercent}>-20%</Text>
            </TouchableOpacity>
          </View>
        </View>

        <ImageBackground
          source={Images.bigSale}
          style={styles.bigSaleImage}
          borderRadius={13}
        >
          <Text style={styles.bigSaleText}>Big Sale</Text>
          <Text style={styles.bigSalePersent}>Up to 50%</Text>
          <Text style={styles.saleText1}>Happening {'\n'}Now</Text>
        </ImageBackground>

        <View style={styles.discount}>
          <TouchableOpacity style={styles.discountProduct}>
            <Image source={Images.shoes1} style={styles.discountImage} />
            <Text style={styles.discountText1}>
              Lorem ipsum dolor sit {'\n'}amet consectetur
            </Text>
            <Text style={styles.discountPrice}>
              $16,00 <Text style={styles.discountPersent}> $20,00</Text>
            </Text>
            <Text style={styles.salePercent}>-20%</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.discountProduct}>
            <Image source={Images.shoes3} style={styles.discountImage} />
            <Text style={styles.discountText1}>
              Lorem ipsum dolor sit {'\n'}amet consectetur
            </Text>
            <Text style={styles.discountPrice}>
              $16,00 <Text style={styles.discountPersent}> $20,00</Text>
            </Text>

            <Text style={styles.salePercent}>-20%</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.populatMainContainer}>
          <View style={styles.newItemContainer}>
            <Text style={styles.newItemText}>Most Popular</Text>
            <View style={styles.seeAllContainer}>
              <Text style={styles.seeAllText}>See All</Text>
              <TouchableOpacity style={styles.arrowContainer1}>
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
      {/* <TabNavigator/> */}
    </ImageBackground>
  );
};

export default FlashSaleFull;

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    padding: 20,
    paddingBottom: 100,
  },
  flashSaleTimerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  flashSaleText: {
    fontSize: 28,
    fontWeight: '700',
  },
  flashSaleTimeContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  time: {
    fontSize: 17,
    fontWeight: '700',
    paddingLeft: 2,
    backgroundColor: COLORS.inverseOnSurface,
    marginLeft: 7,
    borderRadius: 6,
  },
  chooseDiscount: {
    fontSize: 14,
    fontWeight: '00',
  },
  discountContainer: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 40,
    backgroundColor: COLORS.secondary,
    alignItems: 'center',
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  persent: {
    fontSize: 13,
    fontWeight: 'bold',
  },
  persent1: {
    fontSize: 13,
    fontWeight: 'bold',
    borderColor: COLORS.primary,
    borderWidth: 2,
    padding: 8,
    borderRadius: 20,
    color: COLORS.primary,
    width: 60,
    paddingLeft: 15,
  },
  arrowIcon: {
    position: 'absolute',
    marginTop: 64,
    marginLeft: 130,
  },
  discountContainer1: {
    marginTop: 25,
  },
  sliderIcon: {
    transform: [{ rotate: '-90deg' }],
  },
  discountContain: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    //marginBottom:15,
  },
  discountText: {
    fontSize: 21,
    fontWeight: '700',
  },
  discountImage: {
    width: 168,
    height: 177,
    borderRadius: 9,
    borderColor: COLORS.background,
    borderWidth: 5,
    shadowColor: COLORS.shadow,
    shadowRadius: 8,
    elevation: 5,
  },
  discountText1: {
    marginTop: 7,
    fontSize: 12,
    fontWeight: '400',
  },
  discountPrice: {
    marginTop: 3,
    fontSize: 17,
    fontWeight: '700',
  },
  discount: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  discountProduct: {
    marginTop: 18,
  },
  salePercent: {
    position: 'absolute',
    fontSize: 13,
    fontWeight: '700',
    backgroundColor: COLORS.tertiary,
    width: 39,
    height: 18,
    color: COLORS.background,
    padding: 2,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    marginTop: 5,
    marginLeft: 124,
  },
  discountPersent: {
    fontSize: 14,
    fontWeight: '700',
    textDecorationLine: 'line-through',
    color: COLORS.errorContainer,
  },
  bigSaleImage: {
    height: 130,
    marginTop: 18,
    paddingLeft: 18,
  },
  bigSaleText: {
    marginTop: 5,
    fontSize: 28,
    fontWeight: '500',
    color: COLORS.onBackground,
  },
  bigSalePersent: {
    fontSize: 12,
    fontWeight: '700',
    color: COLORS.onBackground,
  },
  saleText1: {
    marginTop: 38,
    fontSize: 11,
    fontWeight: '700',
    color: COLORS.onBackground,
  },
  populatMainContainer: {
    marginTop: -19,
  },
  popularContainer: {
    marginTop: 23,
    width: 104,
    height: 140,
    justifyContent: 'space-evenly',
    //alignItems:'center',
    borderWidth: 4,
    borderRadius: 10,
    borderColor: COLORS.background,
    backgroundColor: COLORS.background,
    right: 10,
    marginLeft: 10,
    shadowColor: COLORS.shadow,
    shadowRadius: 10,
    elevation: 5,
  },
  popularImage: {
    width: 93,
    height: 103,
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
  arrowContainer1: {
    height: 30,
    width: 30,
    backgroundColor: COLORS.primary,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
