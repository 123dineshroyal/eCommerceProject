import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
  TextInput,
  ImageBackground,
  FlatList,
} from 'react-native';
import { COLORS, SIZES } from '../../constants/themes';
import { useState } from 'react';
import Images from '../../assets/Images';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { ScrollView } from 'react-native-gesture-handler';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { RouteName } from '../../navigation/RouteName';

const bigSaleSlider = [
  {
    id: '1',
    image: Images.shopSlide,
    heading: 'Big Sale',
    percent: 'Up to 50%',
    title: 'Happening',
    title1: 'Now',
  },
  {
    id: '2',
    image: Images.shopSlide,
    heading: 'Big Sale',
    percent: 'Up to 70%',
    title: 'Happening',
    title1: 'Now',
  },
  {
    id: '3',
    image: Images.shopSlide,
    heading: 'Big Sale',
    percent: 'Up to 90%',
    title: 'Happening',
    title1: 'Now',
  },
];

const product = [
  {
    image: Images.product1,
  },
  {
    image: Images.product2,
  },
  {
    image: Images.product3,
  },
  {
    image: Images.product4,
  },
  {
    image: Images.product5,
  },
  {
    image: Images.product1,
  },
  {
    image: Images.product2,
  },
  {
    image: Images.product3,
  },
  {
    image: Images.product4,
  },
];

const items = [
  {
    image: Images.shoes3,
    description: 'Lorem ipsum dolor sit amet consectetur.',
    price: '$17,00',
  },
  {
    image: Images.shoes1,
    description: 'Lorem ipsum dolor sit amet consectetur.',
    price: '$32,00',
  },
  {
    image: Images.shoes2,
    description: 'Lorem ipsum dolor sit amet consectetur.',
    price: '$17,00',
  },
  {
    image: Images.shoes1,
    description: 'Lorem ipsum dolor sit amet consectetur.',
    price: '$32,00',
  },
];

const Shop = () => {
  const navigation = useNavigation();
  const [search, setSearch] = useState('');

  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView>
        <View style={styles.shopingSearchContainer}>
          <Text style={styles.shopText}>Shop</Text>
          <View style={styles.searchContainer}>
            <TextInput
              placeholder="Search"
              value={search}
              onChangeText={setSearch}
              placeholderTextColor={COLORS.surfaceVariant}
              style={styles.searchInput}
            />

            <TouchableOpacity
              onPress={() => navigation.navigate(RouteName.FULL_PROFILE_SCREEN)}
            >
              <MaterialCommunityIcons
                name="camera-outline"
                size={20}
                color={COLORS.primary}
              />
            </TouchableOpacity>
          </View>
        </View>

        <FlatList
          data={bigSaleSlider}
          horizontal
          //pagingEnabled
          //keyExtractor={item => item.id}
          //showsHorizontalScrollIndicator={false}

          renderItem={({ item }) => (
            <TouchableOpacity>
              <ImageBackground
                source={item.image}
                style={styles.bigSaleContainer}
                imageStyle={{ borderRadius: 20 }}
              >
                <View>
                  <Text style={styles.bigSaleText}>{item.heading}</Text>
                  <Text style={styles.bigSalePersent}>{item.percent}</Text>
                  <Text style={styles.saleText1}>
                    {item.title} {'\n'} {item.title1}
                  </Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>
          )}
        />

        <View style={styles.categoriesMainContainer}>
          <View style={styles.newItemContainer}>
            <Text style={styles.newItemText}>Categories</Text>
            <View style={styles.seeAllContainer}>
              <Text style={styles.seeAllText}>See All</Text>
              <TouchableOpacity
                style={styles.arrowContainer1}
                onPress={() =>
                  navigation.navigate(RouteName.FLASH_SALE_LIVE_SCREEN)
                }
              >
                <MaterialCommunityIcons
                  name="arrow-right"
                  size={22}
                  color={COLORS.onPrimary}
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.categoriesContainer}>
            <View style={styles.categoriesContainerItems}>
              <View style={styles.categoriesContainerItemsData}>
                <Image
                  source={Images.clothing1}
                  style={styles.categoriesImage}
                />
                <Image
                  source={Images.clothing2}
                  style={styles.categoriesImage}
                />
              </View>
              <View style={styles.categoriesContainerItemsData}>
                <Image
                  source={Images.clothing3}
                  style={styles.categoriesImage}
                />
                <Image
                  source={Images.clothing4}
                  style={styles.categoriesImage}
                />
              </View>
              <View style={styles.categoriesContainerItemsData}>
                <Text style={styles.categoriesText}>Clothing</Text>
                <Text style={styles.categoriesText1}>109</Text>
              </View>
            </View>

            <View style={styles.categoriesContainerItems}>
              <View style={styles.categoriesContainerItemsData}>
                <Image source={Images.shoes1} style={styles.categoriesImage} />
                <Image source={Images.shoes2} style={styles.categoriesImage} />
              </View>
              <View style={styles.categoriesContainerItemsData}>
                <Image source={Images.shoes3} style={styles.categoriesImage} />
                <Image source={Images.shoes4} style={styles.categoriesImage} />
              </View>
              <View style={styles.categoriesContainerItemsData}>
                <Text style={styles.categoriesText}>Shoes</Text>
                <Text style={styles.categoriesText1}>530</Text>
              </View>
            </View>
          </View>

          <View style={styles.categoriesContainer}>
            <View style={styles.categoriesContainerItems}>
              <View style={styles.categoriesContainerItemsData}>
                <Image source={Images.bages1} style={styles.categoriesImage} />
                <Image source={Images.bages2} style={styles.categoriesImage} />
              </View>
              <View style={styles.categoriesContainerItemsData}>
                <Image source={Images.bages3} style={styles.categoriesImage} />
                <Image source={Images.bages4} style={styles.categoriesImage} />
              </View>
              <View style={styles.categoriesContainerItemsData}>
                <Text style={styles.categoriesText}>Bages</Text>
                <Text style={styles.categoriesText1}>87</Text>
              </View>
            </View>

            <View style={styles.categoriesContainerItems}>
              <View style={styles.categoriesContainerItemsData}>
                <Image
                  source={Images.lingerie1}
                  style={styles.categoriesImage}
                />
                <Image
                  source={Images.lingerie2}
                  style={styles.categoriesImage}
                />
              </View>
              <View style={styles.categoriesContainerItemsData}>
                <Image
                  source={Images.lingerie3}
                  style={styles.categoriesImage}
                />
                <Image
                  source={Images.lingerie4}
                  style={styles.categoriesImage}
                />
              </View>
              <View style={styles.categoriesContainerItemsData}>
                <Text style={styles.categoriesText}>Lingerie</Text>
                <Text style={styles.categoriesText1}>218</Text>
              </View>
            </View>
          </View>

          <View style={styles.categoriesContainer}>
            <View style={styles.categoriesContainerItems}>
              <View style={styles.categoriesContainerItemsData}>
                <Image source={Images.watch1} style={styles.categoriesImage} />
                <Image source={Images.watch2} style={styles.categoriesImage} />
              </View>
              <View style={styles.categoriesContainerItemsData}>
                <Image source={Images.watch3} style={styles.categoriesImage} />
                <Image source={Images.watch4} style={styles.categoriesImage} />
              </View>
              <View style={styles.categoriesContainerItemsData}>
                <Text style={styles.categoriesText}>Watch</Text>
                <Text style={styles.categoriesText1}>218</Text>
              </View>
            </View>

            <View style={styles.categoriesContainerItems}>
              <View style={styles.categoriesContainerItemsData}>
                <Image
                  source={Images.hoodies1}
                  style={styles.categoriesImage}
                />
                <Image
                  source={Images.hoodies2}
                  style={styles.categoriesImage}
                />
              </View>
              <View style={styles.categoriesContainerItemsData}>
                <Image
                  source={Images.hoodies3}
                  style={styles.categoriesImage}
                />
                <Image
                  source={Images.hoodies4}
                  style={styles.categoriesImage}
                />
              </View>
              <View style={styles.categoriesContainerItemsData}>
                <Text style={styles.categoriesText}>Hoodies</Text>
                <Text style={styles.categoriesText1}>218</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.topProductMainContainer}>
          <Text style={styles.productext}>Top Products</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {product.map((item, index) => (
              <TouchableOpacity style={styles.topProductContainer}>
                <Image source={item.image} style={styles.productImage} />
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        <View style={styles.newItemContainer}>
          <Text style={styles.newItemText}>New Items</Text>
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
          {items.map((item, index) => (
            <View style={styles.itemContainer}>
              <TouchableOpacity>
                <Image source={item.image} style={styles.itemImage} />
                <Text style={styles.itemText1}>{item.description}</Text>
                <Text style={styles.itemPrice}>{item.price}</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>

        <View style={styles.flashSaleMainContainer}>
          <View style={styles.flashSaleTextContainer}>
            <Text style={styles.flashSaleText}>Flash Sale</Text>
            <View style={styles.flashSaleTimeContainer}>
              <Fontisto name="stopwatch" color={COLORS.primary} size={19} />
              <Text style={styles.time}>00</Text>
              <Text style={styles.time}>36</Text>
              <Text style={styles.time}>58</Text>
            </View>
          </View>

          <View style={styles.flashSale}>
            <View style={styles.flashContain}>
              <View>
                <Image source={Images.flash1} style={styles.flashImage} />
                <Text style={styles.salePercent}>-20%</Text>
              </View>
              <View>
                <Image source={Images.flash2} style={styles.flashImage} />
                <Text style={styles.salePercent}>-20%</Text>
              </View>
              <View>
                <Image source={Images.flash3} style={styles.flashImage} />
                <Text style={styles.salePercent}>-20%</Text>
              </View>
            </View>
            <View style={styles.flashContain}>
              <View>
                <Image source={Images.flash4} style={styles.flashImage} />
                <Text style={styles.salePercent}>-20%</Text>
              </View>
              <View>
                <Image source={Images.flash5} style={styles.flashImage} />
                <Text style={styles.salePercent}>-20%</Text>
              </View>
              <View>
                <Image source={Images.flash6} style={styles.flashImage} />
                <Text style={styles.salePercent}>-20%</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.justForYouMainContainer}>
          <Text style={styles.justForYouText}>
            Just For You <Icon name="star" color={COLORS.primary} size={14} />
          </Text>

          <View style={styles.justForYou}>
            <TouchableOpacity style={styles.justForYouContainer}>
              <Image source={Images.just1} style={styles.justImage} />
              <Text style={styles.justsubText}>
                Lorem ipsum dolor sit {'\n'}amet consectetur
              </Text>
              <Text style={styles.justPrice}>$17,00</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.justForYouContainer}>
              <Image source={Images.just2} style={styles.justImage} />
              <Text style={styles.justsubText}>
                Lorem ipsum dolor sit {'\n'}amet consectetur
              </Text>
              <Text style={styles.justPrice}>$17,00</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.justForYou}>
            <TouchableOpacity style={styles.justForYouContainer}>
              <Image source={Images.just3} style={styles.justImage} />
              <Text style={styles.justsubText}>
                Lorem ipsum dolor sit {'\n'}amet consectetur
              </Text>
              <Text style={styles.justPrice}>$17,00</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.justForYouContainer}>
              <Image source={Images.just4} style={styles.justImage} />
              <Text style={styles.justsubText}>
                Lorem ipsum dolor sit {'\n'}amet consectetur
              </Text>
              <Text style={styles.justPrice}>$17,00</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.justForYou}>
            <TouchableOpacity style={styles.justForYouContainer}>
              <Image source={Images.just5} style={styles.justImage} />
              <Text style={styles.justsubText}>
                Lorem ipsum dolor sit {'\n'}amet consectetur
              </Text>
              <Text style={styles.justPrice}>$17,00</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.justForYouContainer}>
              <Image source={Images.just6} style={styles.justImage} />
              <Text style={styles.justsubText}>
                Lorem ipsum dolor sit {'\n'}amet consectetur
              </Text>
              <Text style={styles.justPrice}>$17,00</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Shop;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: COLORS.background,
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginBottom: 100,
  },
  shopText: {
    fontSize: 28,
    fontWeight: '700',
  },
  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.surface,
    borderRadius: 20,
    backgroundColor: COLORS.secondary,
    paddingHorizontal: 10,
    height: 40,
    width: '75%',
  },
  shopingSearchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  searchInput: {
    fontWeight: '500',
    fontSize: 16,
  },
  bigSaleContainer: {
    marginTop: 20,
    height: 155,
    //borderRadius:50,
    paddingLeft: 18,
    //resizeMode:'contain',
    width: SIZES.width - 40,
  },
  bigSaleText: {
    fontSize: 29,
    fontWeight: '700',
    color: COLORS.background,
  },
  bigSalePersent: {
    fontSize: 12,
    fontWeight: '700',
    color: COLORS.background,
  },
  saleText1: {
    marginTop: 38,
    fontSize: 12,
    fontWeight: '500',
    color: COLORS.background,
  },
  bottomCircleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomCircle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    backgroundColor: COLORS.primaryContainer,
    marginLeft: 15,
    marginBottom: 49,
  },
  bottomCircleActive: {
    height: 20,
    width: 20,
    borderRadius: 10,
    backgroundColor: COLORS.primary,
    marginLeft: 15,
  },
  categoriesMainContainer: {
    marginTop: -10,
  },
  categoriesContainer: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  categoriesContainerItems: {
    height: 192,
    backgroundColor: COLORS.background,
    borderRadius: 10,
    width: '48%',
    shadowColor: COLORS.shadow,
    shadowRadius: 8,
    elevation: 5,
    justifyContent: 'space-around',
    paddingHorizontal: 7,
  },
  categoriesContainerItemsData: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  categoriesImage: {
    height: 75,
    width: 75,
  },
  categoriesText: {
    fontSize: 17,
    fontWeight: '700',
  },
  categoriesText1: {
    backgroundColor: COLORS.inverseOnSurface,
    paddingHorizontal: 10,
    borderRadius: 10,
    fontSize: 12,
    fontWeight: '700',
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
  seeAllContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: -10,
  },
  newItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 25,
  },
  arrowContainer1: {
    height: 30,
    width: 30,
    backgroundColor: COLORS.primary,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topProductMainContainer: {
    marginTop: 35,
  },
  productext: {
    fontSize: 21,
    fontWeight: '700',
  },
  topProductContainer: {
    marginTop: 10,
    paddingHorizontal: 10,
  },
  productImage: {
    height: 50,
    width: 50,
    borderRadius: 25,
    borderWidth: 4,
    borderColor: COLORS.background,
    shadowColor: COLORS.shadow,
    shadowRadius: 8,
    elevation: 5,
  },
  itemContainer: {
    marginTop: 10,
    width: 140,
    height: 204,
  },
  itemImage: {
    height: 130,
    width: 130,
    borderColor: COLORS.background,
    borderWidth: 4,
    borderRadius: 10,
  },
  itemText1: {
    fontSize: 12,
    fontWeight: '400',
    paddingTop: 7,
  },
  itemPrice: {
    fontSize: 17,
    fontWeight: '700',
  },
  flashSale: {
    marginTop: 6,
  },
  flashContain: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  flashImage: {
    width: 99,
    height: 103,
    borderRadius: 9,
    borderWidth: 5,
    borderColor: COLORS.background,
    shadowColor: COLORS.shadow,
    shadowRadius: 8,
    elevation: 5,
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
    marginLeft: 55,
  },
  flashSaleMainContainer: {
    marginTop: 28,
  },
  flashSaleTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  flashSaleText: {
    fontSize: 21,
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
    paddingLeft: 7,
    backgroundColor: COLORS.inverseOnSurface,
    marginLeft: 7,
    borderRadius: 3,
  },
  justForYouMainContainer: {
    marginTop: 34,
  },
  justForYouText: {
    fontSize: 21,
    fontWeight: '700',
  },
  justForYouContainer: {
    marginTop: 15,
  },
  justImage: {
    width: 168,
    height: 177,
    borderRadius: 9,
    borderColor: COLORS.background,
    borderWidth: 5,
    shadowColor: COLORS.shadow,
    shadowRadius: 8,
    elevation: 5,
  },
  justsubText: {
    marginTop: 7,
    fontSize: 12,
    fontWeight: '400',
  },
  justPrice: {
    marginTop: 3,
    fontSize: 17,
    fontWeight: '700',
  },
  justForYou: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
