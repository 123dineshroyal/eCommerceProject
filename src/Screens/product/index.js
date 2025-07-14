import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  FlatList,
} from 'react-native';
import Images from '../../assets/Images';
import { COLORS, SIZES } from '../../constants/themes';
import React, { useRef, useState } from 'react';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Feather from 'react-native-vector-icons/Feather';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { RouteName } from '../../navigation/RouteName';

const productSlider = [
  Images.product,
  Images.product,
  Images.product,
  Images.product,
  Images.product,
];

const Product = () => {

  const navigation = useNavigation();

  const [activeIndex, setActiveIndex] = useState(0);
  const flatListRef = useRef(null);

  const handleScroll = event => {
    const index = Math.round(event.nativeEvent.contentOffset.x / SIZES.width);
    setActiveIndex(index);
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
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
            <Fontisto name="share-a" size={16} color={COLORS.outlineVariant} />
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
              <Feather name="arrow-right" size={25} color={COLORS.background} />
            </TouchableOpacity>
          </View>

          <View style={styles.productImageContain}>
            <Image source={Images.productImg1} style={styles.productImage1} />
            <Image source={Images.productImg2} style={styles.productImage1} />
            <Image source={Images.productImg3} style={styles.productImage1} />
          </View>
        </View>

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
            onPress={() => navigation.navigate(RouteName.PRODUCT_SALE_SCREEN)}
          >
            Buy now
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default Product;

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
  bottomButtonContain: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
