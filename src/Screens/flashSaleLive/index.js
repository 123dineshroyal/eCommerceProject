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
import { useNavigation } from '@react-navigation/native';
import { RouteName } from '../../navigation/RouteName';
import TabNavigator from '../../navigation/TabNavigator';

const FlashSaleLive = () => {
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
              onPress={() => navigation.navigate(RouteName.SHOP_SCREEN)}
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

        <View style={styles.liveProductContainer}>
          <Image source={Images.flashImage} style={styles.flashSaleImage} />

          <Text style={styles.liveTag}>Live</Text>

          <MaterialIcons
            name="play-arrow"
            size={30}
            style={styles.videoPlayIcon}
            color={COLORS.background}
          />
        </View>

        <View style={styles.discountContainer1}>
          <View style={styles.discountContain}>
            <Text style={styles.discountText}>20% Discount</Text>
            <TouchableOpacity
              style={styles.sliderIcon}
              onPress={() => navigation.navigate(RouteName.FLASH_SALE_SCREEN)}
            >
              <FontAwesome6 name="sliders" size={18} color="black" />
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
              <Image source={Images.just1} style={styles.discountImage} />
              <Text style={styles.discountText1}>
                Lorem ipsum dolor sit {'\n'}amet consectetur
              </Text>
              <Text style={styles.discountPrice}>
                $16,00 <Text style={styles.discountPersent}> $20,00</Text>
              </Text>
              <Text style={styles.salePercent}>-20%</Text>
            </TouchableOpacity>

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
          </View>
        </View>
      </ScrollView>
      {/* <TabNavigator/> */}
    </ImageBackground>
  );
};

export default FlashSaleLive;

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    padding: 20,
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
  liveProductContainer: {
    marginTop: 16,
    borderWidth: 2,
    borderColor: COLORS.surface,
    borderRadius: 10,
  },
  flashSaleImage: {
    height: 160,
    resizeMode: 'stretch',
    width: SIZES.width - 40,
    borderRadius: 10,
  },
  liveTag: {
    position: 'absolute',
    marginLeft: SIZES.width - 79,
    marginTop: 140,
    backgroundColor: COLORS.outline,
    color: 'white',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 6,
    fontSize: 12,
    fontWeight: 'bold',
  },
  videoPlayIcon: {
    position: 'absolute',
    marginLeft: SIZES.width * 0.43,
    marginTop: 60,
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
});
