import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
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

const ShopClothingOnScroll = () => {
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
            onPress={() => navigation.navigate(RouteName.CATEGORIES_FILTER_SCREEN)}
          >
            <MaterialCommunityIcons
              name="camera-outline"
              size={20}
              color={COLORS.primary}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.sliderIcon}>
          <FontAwesome6 name="sliders" size={18} color="black" />
        </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.discountContainer1}>
          <View style={styles.discount}>
            <TouchableOpacity style={styles.discountProduct}>
              <Image source={Images.just1} style={styles.discountImage} />
              <Text style={styles.discountText1}>
                Lorem ipsum dolor sit {'\n'}amet consectetur
              </Text>
              <Text style={styles.discountPrice}>$17,00</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.discountProduct}>
              <Image source={Images.discount1} style={styles.discountImage} />
              <Text style={styles.discountText1}>
                Lorem ipsum dolor sit {'\n'}amet consectetur
              </Text>
              <Text style={styles.discountPrice}>$17,00</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.discount}>
            <TouchableOpacity style={styles.discountProduct}>
              <Image source={Images.just6} style={styles.discountImage} />
              <Text style={styles.discountText1}>
                Lorem ipsum dolor sit {'\n'}amet consectetur
              </Text>
              <Text style={styles.discountPrice}>$17,00</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.discountProduct}>
              <Image source={Images.item2} style={styles.discountImage} />
              <Text style={styles.discountText1}>
                Lorem ipsum dolor sit {'\n'}amet consectetur
              </Text>
              <Text style={styles.discountPrice}>$17,00</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.discount}>
            <TouchableOpacity style={styles.discountProduct}>
              <Image source={Images.just2} style={styles.discountImage} />
              <Text style={styles.discountText1}>
                Lorem ipsum dolor sit {'\n'}amet consectetur
              </Text>
              <Text style={styles.discountPrice}>$17,00</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.discountProduct}>
              <Image source={Images.sale1} style={styles.discountImage} />
              <Text style={styles.discountText1}>
                Lorem ipsum dolor sit {'\n'}amet consectetur
              </Text>
              <Text style={styles.discountPrice}>$17,00</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ShopClothingOnScroll;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: 20,
  },
  shopText: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom:20
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
    width: '60%',
  },
  shopingSearchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center'
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
  discountContainer1: {
    marginTop: -55,
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
