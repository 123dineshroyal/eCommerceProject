import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Image,
  ScrollView,
} from 'react-native';
import { COLORS, SIZES } from '../../constants/themes';
import Entypo from 'react-native-vector-icons/Entypo';
import Images from '../../assets/Images';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { RouteName } from '../../navigation/RouteName';

const Filter = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.filterTextContain}>
        <Text style={styles.filterText}>Filter</Text>
        <Entypo name="cross" size={26} color={COLORS.onBackground} />
      </View>

      <View style={styles.productConatin}>
        <View style={styles.topProductMainContainer}>
          <Image source={Images.bages3} style={styles.productImage} />
          <Image source={Images.watch1} style={styles.productImage} />
          <Image source={Images.hoodies1} style={styles.productImage} />
          <Image source={Images.shoes1} style={styles.productImage} />
          <Image source={Images.lingerie3} style={styles.productImage} />

          <View style={styles.checkIcon}>
            <Entypo name="check" size={17} color={COLORS.background} />
          </View>

          <View style={styles.checkIcon1}>
            <Entypo name="check" size={17} color={COLORS.background} />
          </View>
        </View>
        <View style={styles.topProductMainContainer1}>
          <Text style={styles.productName}>Dresses</Text>
          <Text style={styles.productName}>Pants</Text>
          <Text style={styles.productName}>Skirts</Text>
          <Text style={styles.productName}>Shorts</Text>
          <Text style={styles.productName}>Jackets</Text>
        </View>
        <View style={styles.topProductMainContainer}>
          <Image source={Images.shoes5} style={styles.productImage} />
          <Image source={Images.shop1} style={styles.productImage} />
          <Image source={Images.shop2} style={styles.productImage} />
          <Image source={Images.shop3} style={styles.productImage} />
          <Image source={Images.shop4} style={styles.productImage} />

          <View style={styles.checkIcon2}>
            <Entypo name="check" size={17} color={COLORS.background} />
          </View>
        </View>
        <View style={styles.topProductMainContainer1}>
          <Text style={styles.productName}>Hoodies</Text>
          <Text style={styles.productName}>Shirts</Text>
          <Text style={styles.productName}>Polo</Text>
          <Text style={styles.productName}>T-shirts</Text>
          <Text style={styles.productName}>Tunics</Text>
        </View>
      </View>

      <View style={styles.sizeContainer}>
        <Text style={styles.sizeText}>Size</Text>
        <View style={styles.sizeContain}>
          <Text style={styles.clothesText}>Clothes</Text>
          <Text style={styles.shoesText}>Shoes</Text>
        </View>
      </View>

      <View style={styles.diffSizes}>
        <Text style={styles.sizeText1}>XS</Text>
        <Text style={styles.sizeText1}>S</Text>
        <View style={styles.mSize}>
          <Text style={styles.sizeText2}>M</Text>
        </View>
        <Text style={styles.sizeText1}>L</Text>
        <Text style={styles.sizeText1}>XL</Text>
        <Text style={styles.sizeText1}>2XL</Text>
      </View>

      <Text style={styles.colorText}>Color</Text>

      <View style={styles.colorContainer}>
        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          style={styles.colorScroll}
        >
          <View style={styles.whiteContainer}>
            <View style={styles.innerContain}>
              <Text style={styles.innerContain1} />
            </View>
            <View style={styles.checkIcon3}>
              <Entypo name="check" size={14} color={COLORS.background} />
            </View>
          </View>

          <Text
            style={[styles.colorCode, { backgroundColor: COLORS.onBackground }]}
          />
          <Text
            style={[styles.colorCode, { backgroundColor: COLORS.primary }]}
          />
          <Text style={[styles.colorCode, { backgroundColor: COLORS.scrim }]} />
          <Text
            style={[styles.colorCode, { backgroundColor: COLORS.tertiary }]}
          />
          <Text
            style={[
              styles.colorCode,
              { backgroundColor: COLORS.tertiaryContainer },
            ]}
          />
          <Text
            style={[styles.colorCode, { backgroundColor: COLORS.outline }]}
          />
          <Text
            style={[
              styles.colorCode,
              { backgroundColor: COLORS.onPrimaryContainer },
            ]}
          />
          <Text style={[styles.colorCode, { backgroundColor: COLORS.error }]} />
        </ScrollView>
      </View>

      <View style={styles.priceContain}>
        <Text style={styles.priceText}>Price</Text>
        <Text style={styles.priceText1}>$10 - $150</Text>
      </View>

      <View style={styles.lineContainer}>
        <Text style={styles.line1} />
        <Text style={styles.line2} />
        <Text style={styles.circle1} />
        <Text style={styles.circle2} />
      </View>

      <View style={styles.pricediffine1}>
        <View style={styles.popularContain}>
          <Text style={styles.popularText}>Popular</Text>
          <TouchableOpacity style={styles.checkIcon4}>
            <Entypo name="check" size={14} color={COLORS.background} />
          </TouchableOpacity>
        </View>
        <Text style={styles.newsetText}>Newest</Text>
      </View>

      <View style={styles.pricediffine2}>
        <Text style={styles.newsetText}>Price High to Low</Text>
        <Text style={styles.newsetText}>Price Low to High</Text>
      </View>

      <View style={styles.bottomButtonContainer}>
        <Button
          mode="contained"
          labelStyle={styles.cancelButtonText}
         
          style={styles.cancelButtonContainer}
          //contentStyle={{ padding:13 }}
        >
          Clear
        </Button>

        <Button
          mode="contained"
          labelStyle={styles.nextButtonText}
          style={styles.nextButtonContainer}
          contentStyle={{ paddingVertical: 3 }}
           onPress={() => navigation.navigate(RouteName.PRODUCT_SCREEN)}
        >
          Apply
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default Filter;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: 20,
  },
  filterTextContain: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  filterText: {
    fontSize: 28,
    fontWeight: '700',
  },
  productConatin: {
    marginTop: 20,
  },
  topProductMainContainer: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  topProductMainContainer1: {
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
  productName: {
    // marginTop:3,
    fontSize: 13,
    fontWeight: '500',
  },
  checkIcon: {
    position: 'absolute',
    height: 22,
    width: 22,
    borderRadius: 11,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: COLORS.background,
    shadowColor: COLORS.shadow,
    shadowRadius: 8,
    elevation: 5,
    marginLeft: 25,
    marginBottom: 35,
  },
  checkIcon1: {
    position: 'absolute',
    height: 22,
    width: 22,
    borderRadius: 11,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: COLORS.background,
    shadowColor: COLORS.shadow,
    shadowRadius: 8,
    elevation: 5,
    marginLeft: 105,
    marginBottom: 35,
  },
  checkIcon2: {
    position: 'absolute',
    height: 22,
    width: 22,
    borderRadius: 11,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: COLORS.background,
    shadowColor: COLORS.shadow,
    shadowRadius: 8,
    elevation: 5,
    marginLeft: 260,
    marginBottom: 35,
  },
  sizeContainer: {
    marginTop: 37,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sizeText: {
    fontSize: 20,
    fontWeight: '800',
  },
  sizeContain: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  clothesText: {
    backgroundColor: COLORS.primaryContainer,
    borderColor: COLORS.primary,
    color: COLORS.primary,
    borderWidth: 1,
    borderRadius: 5,
    fontSize: 13,
    fontWeight: '500',
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  shoesText: {
    backgroundColor: COLORS.errorContainer,
    borderColor: COLORS.errorContainer,
    color: COLORS.onBackground,
    borderWidth: 1,
    borderRadius: 5,
    fontSize: 13,
    fontWeight: '500',
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginLeft: 10,
  },
  diffSizes: {
    marginTop: 15,
    height: 26,
    backgroundColor: COLORS.elevation.level3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 20,
    paddingHorizontal: 10,
  },
  sizeText1: {
    fontSize: 13,
    fontWeight: '800',
    color: COLORS.elevation.level2,
  },
  sizeText2: {
    fontSize: 15,
    fontWeight: '800',
    color: COLORS.primary,
  },
  mSize: {
    height: 40,
    width: 40,
    backgroundColor: COLORS.background,
    borderRadius: 20,
    borderColor: COLORS.primaryContainer,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -7,
    borderWidth: 2,
  },
  colorText: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: '800',
  },
  colorContainer: {
    marginTop: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 50,
    //paddingVertical:10
  },
  whiteContainer: {
    borderColor: COLORS.primary,
    borderWidth: 2,
    height: 40,
    width: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerContain: {
    height: 35,
    width: 35,
    backgroundColor: COLORS.background,
    borderWidth: 5,
    borderRadius: 15,
    borderColor: COLORS.background,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerContain1: {
    height: 25,
    width: 25,
    backgroundColor: COLORS.inverseOnSurface,
    borderRadius: 15,
  },
  checkIcon3: {
    position: 'absolute',
    height: 16,
    width: 16,
    borderRadius: 8,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: COLORS.shadow,
    shadowRadius: 8,
    elevation: 5,
    marginLeft: 25,
    marginBottom: 25,
  },
  colorCode: {
    height: 40,
    width: 40,
    //backgroundColor: COLORS.onBackground,
    borderRadius: 20,
    borderColor: COLORS.background,
    borderWidth: 5,
    shadowColor: COLORS.shadow,
    shadowRadius: 35,
    elevation: 5,
    marginLeft: 15,
  },
  priceContain: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    height: 40,
  },
  priceText: {
    fontSize: 20,
    fontWeight: '800',
  },
  priceText1: {
    fontSize: 19,
    fontWeight: '500',
  },
  line1: {
    height: 4,
    width: '100%',
    backgroundColor: COLORS.primaryContainer,
    borderRadius: 2,
  },
  lineContainer: {
    marginTop: 25,
  },
  line2: {
    height: 4,
    width: 176,
    backgroundColor: COLORS.primary,
    position: 'absolute',
    marginLeft: 50,
  },
  circle1: {
    position: 'absolute',
    height: 40,
    width: 40,
    borderRadius: 20,
    borderColor: COLORS.primaryContainer,
    borderWidth: 1,
    marginTop: -20,
    marginLeft: 200,
    backgroundColor: COLORS.background,
  },
  circle2: {
    position: 'absolute',
    height: 40,
    width: 40,
    borderRadius: 20,
    borderColor: COLORS.primaryContainer,
    borderWidth: 1,
    marginTop: -20,
    marginLeft: 30,
    backgroundColor: COLORS.background,
  },
  colorScroll: {
    marginTop: 5,
  },
  pricediffine1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 25,
  },
  pricediffine2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  popularContain: {
    backgroundColor: COLORS.elevation.level3,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
    width: '48%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  popularText: {
    fontSize: 15,
    fontWeight: '700',
    color: COLORS.primary,
    textAlign: 'center',
    marginRight: 35,
  },
  newsetText: {
    backgroundColor: COLORS.inverseOnSurface,
    fontSize: 15,
    fontWeight: '500',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    width: '48%',
    textAlign: 'center',
  },
  checkIcon4: {
    height: 22,
    width: 22,
    borderRadius: 11,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: COLORS.shadow,
    shadowRadius: 8,
    elevation: 5,
    borderWidth: 2,
    borderColor: COLORS.background,
  },
  bottomButtonContainer: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent:'center',
    alignItems: 'center',
  },
  cancelButtonContainer: {
    borderRadius: 15,
     backgroundColor:COLORS.background,
     //width:'50%'
  },
  cancelButtonText: {
    fontSize: 20,
    color: COLORS.primary,
    fontWeight: '300',
    borderColor: COLORS.primary,
    borderWidth: 1,
    paddingVertical:10,
    paddingHorizontal:30,
    borderRadius:10,
   
  },
  nextButtonContainer: {
    borderRadius: 15,
    width:'60%'
  },
  nextButtonText: {
    fontSize: 20,
    color: COLORS.onPrimary,
    fontWeight: '300',
  },
});
