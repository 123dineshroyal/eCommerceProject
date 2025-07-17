import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Images from '../../assets/Images';
import { COLORS, SIZES } from '../../constants/themes';
import React, { useRef, useState } from 'react';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import { Button } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { RouteName } from '../../navigation/RouteName';

const productSlider = [
  Images.productImg5,
  Images.productImg5,
  Images.productImg5,
  Images.productImg5,
  Images.productImg5,
];

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

const ProductFull = () => {

  const navigation = useNavigation();

  const [activeIndex, setActiveIndex] = useState(0);
  const flatListRef = useRef(null);

  const handleScroll = event => {
    const index = Math.round(event.nativeEvent.contentOffset.x / SIZES.width);
    setActiveIndex(index);
  };
  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <FlatList
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          ref={flatListRef}
          data={productSlider}
          onScroll={handleScroll}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item }) => (
            <Image source={item} style={styles.productImage} />
          )}
        />

        <View style={styles.dotContainer}>
          {productSlider.map((_, index) => (
            <View
              key={index}
              style={[
                styles.dotDeactive,
                activeIndex === index && styles.dotActive,
              ]}
            />
          ))}
        </View>

        <View style={styles.container}>
          <View style={styles.priceContain}>
            <Text style={styles.priceText}>$17,00</Text>
            <TouchableOpacity style={styles.replyIcon}>
              <Fontisto
                name="share-a"
                size={16}
                color={COLORS.outlineVariant}
              />
            </TouchableOpacity>
          </View>

          <Text style={styles.description}>
            Lorem ipsum dolor sit amet, consectetur{'\n'}adipiscing elit. Etiam
            arcu mauris, scelerisque eu{'\n'}mauris id, pretium pulvinar sapien.
          </Text>

          <View style={styles.varientMainContainer}>
            <View style={styles.varientContain}>
              <Text style={styles.variationsText}>Variations</Text>
              <Text style={styles.pinkText}>Pink</Text>
              <Text style={styles.pinkText1}>M</Text>
              <TouchableOpacity style={styles.rightIcon}>
                <Feather
                  name="arrow-right"
                  size={25}
                  color={COLORS.background}
                />
              </TouchableOpacity>
            </View>

            <View style={styles.productImageContain}>
              <Image source={Images.productImg1} style={styles.productImage1} />
              <Image source={Images.productImg2} style={styles.productImage1} />
              <Image source={Images.productImg3} style={styles.productImage1} />
            </View>
          </View>

          <View style={styles.specificationsContainer}>
            <Text style={styles.specificationsText}>Specifications</Text>
            <Text style={styles.materialText}>Material</Text>

            <View style={styles.materialContain}>
              <Text style={styles.cotton}>Cotton 95%</Text>
              <Text style={styles.nylon}>Nylon 5%</Text>
            </View>
          </View>

          <View style={styles.originContainer}>
            <Text style={styles.originText}>Origin</Text>
            <Text style={styles.euText}>EU</Text>

            <View style={styles.sizeContainer}>
              <Text style={styles.sizeText}>Size guide</Text>
              <TouchableOpacity style={styles.rightIcon}>
                <Feather
                  name="arrow-right"
                  size={25}
                  color={COLORS.background}
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.discountContainer}>
            <Text style={styles.discountText}>Discount</Text>
            <View style={styles.standardContain}>
              <Text style={styles.standardText}>Standard</Text>
              <Text style={styles.days}>5-7 days</Text>
              <Text style={styles.price}>$3,00</Text>
            </View>
            <View style={styles.expressContain}>
              <Text style={styles.standardText}>Express</Text>
              <Text style={styles.days}>1-2 days</Text>
              <Text style={styles.price}>$12,00</Text>
            </View>
          </View>

          <View style={styles.ratingContainer}>
            <Text style={styles.ratingText}>Rating & Reviews</Text>

            <View style={styles.starContainer}>
              <TouchableOpacity>
                <Entypo name="star" size={30} color={COLORS.onErrorContainer} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Entypo name="star" size={30} color={COLORS.onErrorContainer} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Entypo name="star" size={30} color={COLORS.onErrorContainer} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Entypo name="star" size={30} color={COLORS.onErrorContainer} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Entypo
                  name="star-outlined"
                  size={30}
                  color={COLORS.onErrorContainer}
                />
              </TouchableOpacity>
              <Text style={styles.ratingCount}>4/5</Text>
            </View>

            <View style={styles.ratingUpload}>
              <Image source={Images.rating1} style={styles.ratingImage} />
              <View style={styles.ratingContain}>
                <Text style={styles.name}>Veronika</Text>
                <View style={styles.starContainer1}>
                  <Entypo
                    name="star"
                    size={20}
                    color={COLORS.onErrorContainer}
                  />
                  <Entypo
                    name="star"
                    size={20}
                    color={COLORS.onErrorContainer}
                  />
                  <Entypo
                    name="star"
                    size={20}
                    color={COLORS.onErrorContainer}
                  />
                  <Entypo
                    name="star"
                    size={20}
                    color={COLORS.onErrorContainer}
                  />
                  <Entypo
                    name="star-outlined"
                    size={20}
                    color={COLORS.onErrorContainer}
                  />
                </View>
                <Text style={styles.ratingDescription}>
                  Lorem ipsum dolor sit amet, consetetur sadipscing{'\n'}elitr,
                  sed diam nonumy eirmod tempor invidunt ut{'\n'}labore et
                  dolore magna aliquyam erat, sed ...
                </Text>
              </View>
            </View>

            <Button
              mode="contained"
              labelStyle={styles.viewAllReviewsButtonText}
              style={styles.viewAllReviewsButtonContainer}
              contentStyle={{ paddingVertical: 2 }}
            >
              View All Reviews
            </Button>
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
                        <Text style={styles.popularCardPrice}>
                          {item.price}
                        </Text>
                        <Icon name="heart" color={COLORS.primary} size={10} />
                      </View>
                      <Text style={styles.popularCardNew}>{item.status}</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              ))}
            </ScrollView>
          </View>

          <View style={styles.mightLikeContainer}>
            <Text style={styles.mightLikeText}>You Might Like</Text>
            <View style={styles.mightLikeContain}>
              <View style={styles.mightLikeBox}>
                <TouchableOpacity style={styles.mightLikeProduct}>
                  <Image source={Images.just1} style={styles.mightLikeImage} />
                  <Text style={styles.mightLikeText1}>
                    Lorem ipsum dolor sit {'\n'}amet consectetur
                  </Text>
                  <Text style={styles.mightLiketPrice}>$17,00</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.mightLikeProduct}>
                  <Image source={Images.just2} style={styles.mightLikeImage} />
                  <Text style={styles.mightLikeText1}>
                    Lorem ipsum dolor sit {'\n'}amet consectetur
                  </Text>
                  <Text style={styles.mightLiketPrice}>$17,00</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.mightLikeBox}>
                <TouchableOpacity style={styles.mightLikeProduct}>
                  <Image source={Images.just3} style={styles.mightLikeImage} />
                  <Text style={styles.mightLikeText1}>
                    Lorem ipsum dolor sit {'\n'}amet consectetur
                  </Text>
                  <Text style={styles.mightLiketPrice}>$17,00</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.mightLikeProduct}>
                  <Image source={Images.just4} style={styles.mightLikeImage} />
                  <Text style={styles.mightLikeText1}>
                    Lorem ipsum dolor sit {'\n'}amet consectetur
                  </Text>
                  <Text style={styles.mightLiketPrice}>$17,00</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.mightLikeBox}>
                <TouchableOpacity style={styles.mightLikeProduct}>
                  <Image source={Images.just5} style={styles.mightLikeImage} />
                  <Text style={styles.mightLikeText1}>
                    Lorem ipsum dolor sit {'\n'}amet consectetur
                  </Text>
                  <Text style={styles.mightLiketPrice}>$17,00</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.mightLikeProduct}>
                  <Image source={Images.just6} style={styles.mightLikeImage} />
                  <Text style={styles.mightLikeText1}>
                    Lorem ipsum dolor sit {'\n'}amet consectetur
                  </Text>
                  <Text style={styles.mightLiketPrice}>$17,00</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.bottomButtonContain}>
        <TouchableOpacity style={styles.heart}>
          <Feather name="heart" size={25} color={COLORS.onBackground} />
        </TouchableOpacity>

        <Button
          mode="contained"
          labelStyle={styles.addToCartButtonText}
          style={styles.addToCartButtonContainer}
          //contentStyle={{ paddingVertical: 2 }}
        >
          Add to cart
        </Button>

        <Button
          mode="contained"
          labelStyle={styles.buyNowButtonText}
          style={styles.buyNowButtonContainer}
          // contentStyle={{ paddingVertical: 2 }}
           onPress={() => navigation.navigate(RouteName.PRODUCT_VARIATIONS_SCREEN)}
        >
          Buy now
        </Button>
      </View>
    </SafeAreaView>
  );
};
export default ProductFull;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  productImage: {
    width: SIZES.width,
    height: SIZES.height * 0.5,
    resizeMode: 'stretch',
  },
  dotContainer: {
    //marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 20,
  },
  dotDeactive: {
    height: 10,
    width: 10,
    backgroundColor: COLORS.elevation.level2,
    borderRadius: 5,
    marginLeft: 15,
  },
  dotActive: {
    height: 10,
    width: 40,
    backgroundColor: COLORS.primary,
    marginLeft: 15,
    borderRadius: 5,
  },
  container: {
    //flex:1,
    padding: 20,
    backgroundColor: COLORS.background,
    bottom: 10,
  },
  priceContain: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  replyIcon: {
    height: 30,
    width: 30,
    backgroundColor: COLORS.errorContainer,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  priceText: {
    fontSize: 26,
    fontWeight: '800',
  },
  description: {
    marginTop: 14,
    fontSize: 15,
    fontWeight: '400',
    lineHeight: 20,
  },
  varientMainContainer: {
    marginTop: 17,
  },
  varientContain: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rightIcon: {
    height: 30,
    width: 30,
    backgroundColor: COLORS.primary,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  variationsText: {
    fontSize: 20,
    fontWeight: '800',
  },
  pinkText: {
    fontSize: 14,
    fontWeight: '500',
    backgroundColor: COLORS.elevation.level1,
    paddingHorizontal: 25,
    paddingVertical: 2,
    alignItems: 'center',
    borderRadius: 5,
  },
  pinkText1: {
    fontSize: 14,
    fontWeight: '500',
    backgroundColor: COLORS.elevation.level1,
    paddingHorizontal: 30,
    paddingVertical: 2,
    alignItems: 'center',
    borderRadius: 5,
    marginRight: 40,
  },
  productImageContain: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  productImage1: {
    height: 75,
    width: 75,
    borderRadius: 10,
    marginLeft: 15,
  },
  specificationsContainer: {
    marginTop: 25,
  },
  specificationsText: {
    fontSize: 20,
    fontWeight: '800',
  },
  materialText: {
    marginTop: 12,
    fontSize: 17,
    fontWeight: '700',
  },
  materialContain: {
    marginTop: 8,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  cotton: {
    fontSize: 14,
    fontWeight: '500',
    backgroundColor: COLORS.errorContainer,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  nylon: {
    fontSize: 14,
    fontWeight: '500',
    backgroundColor: COLORS.errorContainer,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginLeft: 10,
  },
  originContainer: {
    marginTop: 15,
  },
  originText: {
    fontSize: 17,
    fontWeight: '700',
  },
  euText: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: '500',
    backgroundColor: COLORS.primaryContainer,
    textAlign: 'center',
    width: 59,
    borderRadius: 5,
    paddingVertical: 3,
  },
  sizeContainer: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sizeText: {
    fontSize: 17,
    fontWeight: '700',
  },
  discountContainer: {
    marginTop: 20,
  },
  discountText: {
    fontSize: 20,
    fontWeight: '800',
  },
  standardContain: {
    marginTop: 12,
    borderColor: COLORS.primary,
    borderWidth: 1,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  expressContain: {
    marginTop: 6,
    borderColor: COLORS.primary,
    borderWidth: 1,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  standardText: {
    fontSize: 16,
    fontWeight: '500',
  },
  days: {
    fontSize: 13,
    fontWeight: '500',
    color: COLORS.primary,
    backgroundColor: COLORS.primaryContainer,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 3,
    marginRight: 90,
  },
  price: {
    fontSize: 16,
    fontWeight: '700',
  },
  ratingContainer: {
    marginTop: 30,
  },
  ratingText: {
    fontSize: 20,
    fontWeight: '800',
  },
  starContainer: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  ratingCount: {
    fontSize: 14,
    fontWeight: '700',
    backgroundColor: COLORS.primaryContainer,
    paddingHorizontal: 10,
    paddingTop: 3,
    borderRadius: 3,
    marginLeft: 10,
  },
  ratingUpload: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ratingImage: {
    height: 45,
    width: 45,
    borderWidth: 3,
    borderColor: COLORS.background,
    borderRadius: 22,
    shadowColor: COLORS.shadow,
    shadowRadius: 10,
    elevation: 5,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
  },
  ratingDescription: {
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 18,
    marginTop: 10,
  },
  ratingContain: {
    marginLeft: 15,
    //paddingRight:30
  },
  starContainer1: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 3,
    marginLeft: -3,
  },
  viewAllReviewsButtonContainer: {
    borderRadius: 15,
    marginTop: 20,
  },
  viewAllReviewsButtonText: {
    fontSize: 16,
    fontWeight: '300',
    color: COLORS.background,
  },
  populatMainContainer: {
    marginTop: 10,
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
    marginLeft: 10,
    shadowColor: COLORS.shadow,
    shadowRadius: 10,
    elevation: 5,
  },
  popularImage: {
    width: 93,
    height: 103,
    borderRadius: 7,
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
  mightLikeContainer: {
    marginTop: 22,
  },
  mightLikeText: {
    fontSize: 20,
    fontWeight: '800',
  },
  mightLikeContain: {
    marginTop: 7,
    marginLeft: 8,
  },
  mightLikeBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  mightLikeProduct: {
    marginTop: 13,
  },
  mightLikeImage: {
    width: 168,
    height: 177,
    borderRadius: 9,
    borderColor: COLORS.background,
    borderWidth: 5,
    shadowColor: COLORS.shadow,
    shadowRadius: 8,
    elevation: 5,
    //resizeMode:'contain'
  },
  mightLikeText1: {
    marginTop: 7,
    fontSize: 12,
    fontWeight: '400',
  },
  mightLiketPrice: {
    marginTop: 3,
    fontSize: 17,
    fontWeight: '700',
  },
  bottomButtonContain: {
    position: 'absolute',
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    bottom: 0,
    backgroundColor: COLORS.background,
    paddingHorizontal: 20,
    width: SIZES.width,
    paddingVertical: 10,
  },
  heart: {
    width: 47,
    height: 40,
    backgroundColor: COLORS.elevation.level1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  addToCartButtonContainer: {
    backgroundColor: COLORS.onBackground,
    borderRadius: 15,
    width: '38%',
  },
  addToCartButtonText: {
    fontSize: 16,
    fontWeight: '300',
    color: COLORS.background,
  },
  buyNowButtonContainer: {
    backgroundColor: COLORS.primary,
    borderRadius: 15,
    width: '38%',
  },
  buyNowButtonText: {
    fontSize: 16,
    fontWeight: '300',
  },
});
