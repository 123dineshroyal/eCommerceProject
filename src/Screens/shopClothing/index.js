import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Image,
  TextInput,
} from 'react-native';
import Images from '../../assets/Images';
import { COLORS } from '../../constants/themes';
import TabNavigator from '../../navigation/TabNavigator';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { RouteName } from '../../navigation/RouteName';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';

const ShopClothing = () => {
  const navigation = useNavigation();
  const [search, setSearch] = useState('Clothing');
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.shopingSearchContainer}>
        <Text style={styles.shopText}>Shop</Text>
        <View style={styles.searchContainer}>
          <View style={styles.crossContainer}>
            <TextInput
              placeholder="Search"
              value={search}
              onChangeText={setSearch}
              placeholderTextColor={COLORS.surfaceVariant}
              style={styles.searchInput}
            />
            <Entypo name="cross" size={20} color={COLORS.primary} />
          </View>
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

      <View style={styles.productConatin}>
        <View style={styles.topProductMainContainer}>
          <Image source={Images.bages3} style={styles.productImage} />
          <Image source={Images.watch1} style={styles.productImage} />
          <Image source={Images.hoodies1} style={styles.productImage} />
          <Image source={Images.shoes1} style={styles.productImage} />
          <Image source={Images.lingerie3} style={styles.productImage} />
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
        </View>
        <View style={styles.topProductMainContainer1}>
          <Text style={styles.productName}>Hoodies</Text>
          <Text style={styles.productName}>Shirts</Text>
          <Text style={styles.productName}>Polo</Text>
          <Text style={styles.productName}>T-shirts</Text>
          <Text style={styles.productName}>Tunics</Text>
        </View>
      </View>

      <View style={styles.discountContainer1}>
        <View style={styles.discountContain}>
          <Text style={styles.discountText}>All Items</Text>
          <TouchableOpacity
            style={styles.sliderIcon}
            onPress={() =>
              navigation.navigate(RouteName.SHOP_CLOTHING_ON_SCROLL_SCREEN)
            }
          >
            <FontAwesome6 name="sliders" size={18} color="black" />
          </TouchableOpacity>
        </View>

        <View style={styles.discount}>
          <TouchableOpacity style={styles.discountProduct}>
            <Image source={Images.just1} style={styles.discountImage} />
            <Text style={styles.discountText1}>
              Lorem ipsum dolor sit {'\n'}amet consectetur
            </Text>
            <Text style={styles.discountPrice}>$17,00</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.discountProduct}>
            <Image source={Images.shop5} style={styles.discountImage} />
            <Text style={styles.discountText1}>
              Lorem ipsum dolor sit {'\n'}amet consectetur
            </Text>
            <Text style={styles.discountPrice}>$17,00</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.discount}>
          <TouchableOpacity style={styles.discountProduct}>
            <Image source={Images.just5} style={styles.discountImage} />
            <Text style={styles.discountText1}>
              Lorem ipsum dolor sit {'\n'}amet consectetur
            </Text>
            <Text style={styles.discountPrice}>$17,00</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.discountProduct}>
            <Image source={Images.storyImg3} style={styles.discountImage} />
            <Text style={styles.discountText1}>
              Lorem ipsum dolor sit {'\n'}amet consectetur
            </Text>
            <Text style={styles.discountPrice}>$17,00</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ShopClothing;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: 20,
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
    borderColor: COLORS.primaryContainer,
    borderRadius: 20,
    backgroundColor: COLORS.primaryContainer,
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
    color: COLORS.primary,
  },
  crossContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  productConatin: {
    marginTop: 10,
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
    //resizeMode:'contain'
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
});
