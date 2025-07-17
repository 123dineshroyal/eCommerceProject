import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { COLORS } from '../../constants/themes';
import Entypo from 'react-native-vector-icons/Entypo';
import Images from '../../assets/Images';
import { useNavigation } from '@react-navigation/native';
import { RouteName } from '../../navigation/RouteName';

const ImageSearchResults = () => {

  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.container}>
        <View style={styles.searchContainer}>
          <Text style={styles.searchText}>Image Search</Text>
          <TouchableOpacity onPress={() => navigation.navigate(RouteName.FILTER_SCREEN)}>
            <Entypo name="cross" size={26} color={COLORS.onBackground} />
          </TouchableOpacity>
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.shoesContain}>
            <Text style={styles.shoesText}>Shoes</Text>
            <Text style={styles.meanText}>Is this what you meant?</Text>
          </View>

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
                <Image source={Images.popular4} style={styles.discountImage} />
                <Text style={styles.discountText1}>
                  Lorem ipsum dolor sit {'\n'}amet consectetur
                </Text>
                <Text style={styles.discountPrice}>$17,00</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default ImageSearchResults;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: COLORS.elevation.level4,
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    marginTop: 100,
    padding: 20,
    borderRadius: 15,
  },
  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  searchText: {
    fontSize: 28,
    fontWeight: '700',
  },
  shoesText: {
    fontSize: 17,
    fontWeight: '500',
  },
  meanText: {
    fontSize: 18,
    fontWeight: '500',
    color: COLORS.primary,
  },
  shoesContain: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  discountContainer1: {
    marginTop: 20,
  },
  discount: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  discountProduct: {
    marginTop: 18,
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
  discountPrice: {
    marginTop: 3,
    fontSize: 17,
    fontWeight: '700',
  },
});
