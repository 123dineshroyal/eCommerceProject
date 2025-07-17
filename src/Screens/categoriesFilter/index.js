import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { COLORS } from '../../constants/themes';
import Entypo from 'react-native-vector-icons/Entypo';
import Images from '../../assets/Images';
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import { RouteName } from '../../navigation/RouteName';

const CategoriesFilter = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.categoriesContainer}>
        <Text style={styles.categoiesText}>All Categories</Text>
        <Entypo name="cross" size={26} color={COLORS.onBackground} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.genderContainer}>
          <Text style={styles.genderType}>All</Text>
          <Text style={styles.genderType1}>Female</Text>
          <Text style={styles.genderType}>Male</Text>
        </View>

        <View style={styles.clothingContainer}>
          <View style={styles.clothingItem}>
            <Image source={Images.clothing5} style={styles.clothingImage} />
            <Text style={styles.clothingText}>Clothing</Text>
          </View>

          <Entypo name="chevron-up" size={26} color={COLORS.primary} />
        </View>

        <View style={styles.clothingDataContainer}>
          <View style={styles.clothingData}>
            <Text style={styles.clothingText1}>Dresses</Text>
            <Text style={styles.clothingText1}>Pants</Text>
          </View>

          <View style={styles.clothingData}>
            <Text style={styles.clothingText1}>Skirts</Text>
            <Text style={styles.clothingText1}>Shorts</Text>
          </View>

          <View style={styles.clothingData}>
            <Text style={styles.clothingText1}>Jackets</Text>
            <Text style={styles.clothingText1}>Hoodies</Text>
          </View>

          <View style={styles.clothingData}>
            <Text style={styles.clothingText1}>Shirts</Text>
            <Text style={styles.clothingText1}>Polo</Text>
          </View>

          <View style={styles.clothingData}>
            <Text style={styles.clothingText1}>T-Shirts</Text>
            <Text style={styles.clothingText1}>Tunics</Text>
          </View>
        </View>

        <View style={styles.otherCategoriesContainer}>
          <View style={styles.clothingContainer}>
            <View style={styles.clothingItem}>
              <Image source={Images.shoes1} style={styles.clothingImage} />
              <Text style={styles.clothingText}>Shoes</Text>
            </View>

            <Entypo name="chevron-down" size={26} color={COLORS.onBackground} />
          </View>

          <View style={styles.clothingContainer}>
            <View style={styles.clothingItem}>
              <Image source={Images.bages3} style={styles.clothingImage} />
              <Text style={styles.clothingText}>Bags</Text>
            </View>

            <Entypo name="chevron-down" size={26} color={COLORS.onBackground} />
          </View>

          <View style={styles.clothingContainer}>
            <View style={styles.clothingItem}>
              <Image source={Images.category1} style={styles.clothingImage} />
              <Text style={styles.clothingText}>Lingerie</Text>
            </View>

            <Entypo name="chevron-down" size={26} color={COLORS.onBackground} />
          </View>

          <View style={styles.clothingContainer}>
            <View style={styles.clothingItem}>
              <Image source={Images.category2} style={styles.clothingImage} />
              <Text style={styles.clothingText}>Accessories</Text>
            </View>

            <Entypo name="chevron-down" size={26} color={COLORS.onBackground} />
          </View>

          <View style={styles.clothingContainer}>
            <View style={styles.clothingItem}>
              <Image source={Images.lingerie3} style={styles.clothingImage} />
              <Text style={styles.clothingText2}>Just for You</Text>
              <Entypo name="star" size={20} color={COLORS.primary} />
            </View>

            <TouchableOpacity
              style={styles.arrowRight}
              onPress={() => navigation.navigate(RouteName.SEARCH_SCREEN)}
            >
              <Feather name="arrow-right" size={20} color={COLORS.background} />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: COLORS.background,
    bottom: 20,
  },
  categoriesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  categoiesText: {
    fontSize: 28,
    fontWeight: '700',
  },
  genderContainer: {
    marginTop: 31,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  genderType: {
    fontSize: 17,
    fontWeight: '500',
    backgroundColor: COLORS.inverseOnSurface,
    borderRadius: 10,
    width: '30%',
    textAlign: 'center',
    paddingVertical: 7,
  },
  genderType1: {
    fontSize: 17,
    fontWeight: '500',
    backgroundColor: COLORS.primaryContainer,
    borderRadius: 10,
    width: '30%',
    textAlign: 'center',
    paddingVertical: 7,
    color: COLORS.primary,
    borderColor: COLORS.primary,
    borderWidth: 1,
  },
  clothingContainer: {
    marginTop: 6,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: COLORS.background,
    borderWidth: 5,
    borderRadius: 10,
    shadowColor: COLORS.shadow,
    shadowRadius: 10,
    elevation: 3,
    backgroundColor: COLORS.background,
  },
  clothingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  clothingImage: {
    height: 44,
    width: 44,
    borderRadius: 8,
  },
  clothingText: {
    fontSize: 17,
    fontWeight: '700',
    marginLeft: 15,
  },
  clothingText2: {
    fontSize: 17,
    fontWeight: '700',
    marginLeft: 15,
    marginRight: 10,
  },
  clothingDataContainer: {
    marginTop: 10,
  },
  clothingData: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 7,
  },
  clothingText1: {
    fontSize: 15,
    fontWeight: '700',
    borderColor: COLORS.errorContainer,
    borderWidth: 2,
    width: '45%',
    paddingVertical: 7,
    textAlign: 'center',
    borderRadius: 10,
  },
  otherCategoriesContainer: {
    marginTop: 14,
  },
  arrowRight: {
    height: 30,
    width: 30,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
});

export default CategoriesFilter;
