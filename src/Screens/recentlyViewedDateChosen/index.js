import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import Images from '../../assets/Images';
import { COLORS } from '../../constants/themes';
import Entypo from 'react-native-vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';
import { RouteName } from '../../navigation/RouteName';

const RecentlyViewedDateChosen = () => {

  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Text style={styles.recentlyText}>Recently viewed</Text>

      <View style={styles.dayContainer}>
        <View style={styles.yesterdayContain}>
          <Text style={styles.yesterdayText}>Yesterday</Text>
        </View>
        <View style={styles.todayContain}>
          <Text style={styles.todayText}>April,18</Text>
          <TouchableOpacity style={styles.checkedIcon}>
            <Entypo name="check" size={15} color={COLORS.background} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.arrowDown} onPress={() => navigation.navigate(RouteName.CART_SCREEN)}>
          <Entypo name="chevron-down" size={25} color={COLORS.background} />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.discountContainer1}>
          <View style={styles.discount}>
            <TouchableOpacity style={styles.discountProduct}>
              <Image source={Images.discount1} style={styles.discountImage} />
              <Text style={styles.discountText1}>
                Lorem ipsum dolor sit {'\n'}amet consectetur
              </Text>
              <Text style={styles.discountPrice}>$17,00</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.discountProduct}>
              <Image source={Images.just2} style={styles.discountImage} />
              <Text style={styles.discountText1}>
                Lorem ipsum dolor sit {'\n'}amet consectetur
              </Text>
              <Text style={styles.discountPrice}>$17,00</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.discount}>
            <TouchableOpacity style={styles.discountProduct}>
              <Image source={Images.sale1} style={styles.discountImage} />
              <Text style={styles.discountText1}>
                Lorem ipsum dolor sit {'\n'}amet consectetur
              </Text>
              <Text style={styles.discountPrice}>$17,00</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.discountProduct}>
              <Image source={Images.sale2} style={styles.discountImage} />
              <Text style={styles.discountText1}>
                Lorem ipsum dolor sit {'\n'}amet consectetur
              </Text>
              <Text style={styles.discountPrice}>$17,00</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.discount}>
            <TouchableOpacity style={styles.discountProduct}>
              <Image source={Images.popular4} style={styles.discountImage} />
              <Text style={styles.discountText1}>
                Lorem ipsum dolor sit {'\n'}amet consectetur
              </Text>
              <Text style={styles.discountPrice}>$17,00</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.discountProduct}>
              <Image source={Images.just3} style={styles.discountImage} />
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
export default RecentlyViewedDateChosen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: COLORS.background,
  },
  recentlyText: {
    fontSize: 28,
    fontWeight: '700',
  },
  dayContainer: {
    marginTop: 11,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  todayContain: {
    backgroundColor: COLORS.primaryContainer,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 45,
    paddingRight: 3,
    paddingVertical: 4,
    borderRadius: 20,
  },
  todayText: {
    fontSize: 15,
    fontWeight: '700',
    color: COLORS.primary,
    paddingRight: 20,
  },
  yesterdayContain: {
    backgroundColor: COLORS.secondary,
    paddingHorizontal: 40,
    paddingVertical: 4,
    borderRadius: 20,
  },
  yesterdayText: {
    fontSize: 15,
    fontWeight: '500',
  },
  arrowDown: {
    height: 30,
    width: 30,
    backgroundColor: COLORS.primary,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight:5
  },
  checkedIcon: {
    height: 22,
    width: 22,
    borderRadius: 11,
    borderWidth: 2,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: COLORS.background,
  },
  discountContainer1: {
    // marginTop: 20,
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
    //resizeMode:'stretch'
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
