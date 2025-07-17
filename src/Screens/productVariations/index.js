import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import Images from '../../assets/Images';
import { COLORS, SIZES } from '../../constants/themes';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { RouteName } from '../../navigation/RouteName';

const ProductVariations = () => {

    const navigation = useNavigation();

  return (
    <SafeAreaView>
      <Image
        source={Images.productImg5}
        style={styles.productImage}
        blurRadius={8}
      />

      <View style={styles.container}>
        <View style={styles.priceContainer}>
          <Image source={Images.product6} style={styles.productImage1} />
          <View style={styles.priceContain}>
            <Text style={styles.priceText}>$17,00</Text>
            <View style={styles.sizeContain}>
              <Text style={styles.color}>Pink</Text>
              <Text style={styles.size}>M</Text>
            </View>
          </View>
        </View>

        <View style={styles.colorContainer}>
          <Text style={styles.colorOption}>Color Options</Text>
          <View style={styles.colorContain}>
            <Image source={Images.productImg1} style={styles.productImage2} />
            <Image source={Images.productImg6} style={styles.productImage2} />
            <Image source={Images.productImg7} style={styles.productImage2} />
            <Image source={Images.productImg8} style={styles.productImage2} />

            <View style={styles.checkIcon}>
                 <Entypo name="check" size={14} color={COLORS.background} />
            </View>
          </View>
        </View>

        <View style={styles.sizeContainer}>
            <Text style={styles.sizeText}>Size</Text>

            <View style={styles.diffSizeContain}>
                <Text style={styles.diffSize}>S</Text>
                <Text style={styles.diffSizeM}>M</Text>
                <Text style={styles.diffSize}>L</Text>
                <Text style={styles.diffSize}>XL</Text>
                <Text style={styles.diffSizeX}>XXL</Text>
                <Text style={styles.diffSizeX}>XXXL</Text>

            </View>
        </View>

        <View style={styles.quantityContainer}>
            <Text style={styles.quantityText}>Quantity</Text>
            <View style={styles.quantityContain}>
                <TouchableOpacity style={styles.minus}>
                    <Entypo name="minus" size={22} color={COLORS.primary} />
                </TouchableOpacity>
                <Text style={styles.totalQuantity}>1</Text>
                 <TouchableOpacity style={styles.minus}>
                    <Entypo name="plus" size={22} color={COLORS.primary} />
                </TouchableOpacity>
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
            onPress={() => navigation.navigate(RouteName.REVIEWS_SCREEN)}
          >
            Buy now
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default ProductVariations;

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
  container: {
    //flex:1,
    padding: 20,
    backgroundColor: COLORS.background,
    bottom: 150,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  priceContainer: {
    marginTop: 13,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingBottom: 20,
  },
  productImage1: {
    height: 75,
    width: 75,
    borderRadius: 8,
  },
  priceContain: {
    marginLeft: 12,
  },
  priceText: {
    fontSize: 26,
    fontWeight: '800',
  },
  sizeContain: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 9,
  },
  color: {
    fontSize: 14,
    fontWeight: '500',
    backgroundColor: COLORS.primaryContainer,
    textAlign: 'center',
    paddingHorizontal: 15,
    borderRadius: 4,
  },
  size: {
    fontSize: 14,
    fontWeight: '500',
    backgroundColor: COLORS.primaryContainer,
    textAlign: 'center',
    paddingHorizontal: 20,
    marginLeft: 5,
    borderRadius: 4,
  },
  colorContainer: {
    marginTop: 20,
  },
  colorOption: {
    fontSize: 17,
    fontWeight: '700',
  },
  colorContain: {
    marginTop: 20,
    flexDirection:'row',
    justifyContent:'space-between'
  },
  productImage2: {
    height: 79,
    width: 79,
    borderRadius: 8,
  },
  checkIcon:{
    position:'absolute',
    height:22,
    width:22,
    borderRadius:11,
    backgroundColor:COLORS.primary,
    justifyContent:'center',
    alignItems:'center',
    borderColor:COLORS.background,
    borderWidth:2,
    marginLeft:5,
    marginTop:50
  },
  sizeContainer:{
    marginTop:15,
  },
  sizeText:{
    fontSize:17,
    fontWeight:'700'
  },
  diffSizeContain:{
    marginTop:13,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
  },
  diffSize:{
    fontSize:14,
    fontWeight:'500',
    paddingHorizontal:15,
    paddingVertical:3,
    backgroundColor:COLORS.secondary,
     borderWidth:1,
    borderRadius:3,
    borderColor:COLORS.secondary,
  },
   diffSizeM:{
    fontSize:14,
    fontWeight:'500',
    paddingHorizontal:15,
    paddingVertical:3,
    backgroundColor:COLORS.primaryContainer,
    borderColor:COLORS.primary,
    borderWidth:1,
    borderRadius:3
   },
     diffSizeX:{
    fontSize:14,
    fontWeight:'500',
    paddingHorizontal:15,
    paddingVertical:3,
    backgroundColor:COLORS.primaryContainer,
    borderColor:COLORS.primaryContainer,
    borderWidth:1,
    borderRadius:3,
    color:COLORS.surface
   },
   quantityContainer:{
    marginTop:34,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
   },
   quantityText:{
    fontSize:17,
    fontWeight:'700'
   },
   quantityContain:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
   },
   minus:{
    height:50,
    width:50,
    borderColor:COLORS.primary,
    borderWidth:2,
    borderRadius:25,
    alignItems:'center',
    justifyContent:'center'
   },
   totalQuantity:{
    fontSize:29,
    fontWeight:'500',
    backgroundColor:COLORS.primaryContainer,
    paddingHorizontal:20,
    marginHorizontal:20,
    borderRadius:10,
    paddingVertical:3
   },
   bottomButtonContain: {
    marginTop: 20,
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
