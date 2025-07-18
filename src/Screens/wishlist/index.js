import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image,
} from 'react-native';
import { COLORS } from '../../constants/themes';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Images from '../../assets/Images';
import { useNavigation } from '@react-navigation/native';
import { RouteName } from '../../navigation/RouteName';

const viewed = [
  {
    image: Images.viewed1,
  },
  {
    image: Images.viewed2,
  },
  {
    image: Images.viewed3,
  },
  {
    image: Images.viewed4,
  },
  {
    image: Images.viewed5,
  },
  {
    image: Images.viewed1,
  },
  {
    image: Images.viewed2,
  },
  {
    image: Images.viewed3,
  },
  {
    image: Images.viewed4,
  },
];

const WishList = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Text style={styles.wishListText}>Wishlist</Text>

      <View style={styles.recentlyContainer}>
        <Text style={styles.recentlyText}>Recently viewed</Text>
        <TouchableOpacity
          style={styles.arrowContainer1}
          onPress={() => navigation.navigate(RouteName.WISHLIST_EMPTY_SCREEN)}
        >
          <MaterialCommunityIcons
            name="arrow-right"
            size={22}
            color={COLORS.onPrimary}
          />
        </TouchableOpacity>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {viewed.map((item, index) => (
          <TouchableOpacity style={styles.viewedContainer}>
            <Image source={item.image} style={styles.viewedImage} />
          </TouchableOpacity>
        ))}
      </ScrollView>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.itemContainer}>
          <Image source={Images.just3} style={styles.itemImage} />
          <View style={styles.itemData}>
            <Text style={styles.itemDescription}>
              Lorem ipsum dolor sit amet{'\n'}consectetur.
            </Text>
            <Text style={styles.itemPrice}>$17,00</Text>
            <View style={styles.itemSize}>
              <Text style={styles.color}>Pink</Text>
              <Text style={styles.size}>M</Text>
            </View>
          </View>
          <Image source={Images.wish1} style={styles.wishImage} />

          <TouchableOpacity style={styles.deleteIcon}>
            <MaterialCommunityIcons
              name="delete"
              color={COLORS.tertiary}
              size={23}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.itemContainer}>
          <Image source={Images.just1} style={styles.itemImage} />
          <View style={styles.itemData}>
            <Text style={styles.itemDescription}>
              Lorem ipsum dolor sit amet{'\n'}consectetur.
            </Text>
            <Text style={styles.itemPrice}>$17,00</Text>
            <View style={styles.itemSize}>
              <Text style={styles.color}>Pink</Text>
              <Text style={styles.size}>M</Text>
            </View>
          </View>
          <Image source={Images.wish1} style={styles.wishImage} />

          <TouchableOpacity style={styles.deleteIcon}>
            <MaterialCommunityIcons
              name="delete"
              color={COLORS.tertiary}
              size={23}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.itemContainer}>
          <Image source={Images.flash2} style={styles.itemImage} />
          <View style={styles.itemData}>
            <Text style={styles.itemDescription}>
              Lorem ipsum dolor sit amet{'\n'}consectetur.
            </Text>
            <Text style={styles.itemPrice}>$17,00</Text>
            <View style={styles.itemSize}>
              <Text style={styles.color}>Pink</Text>
              <Text style={styles.size}>M</Text>
            </View>
          </View>
          <Image source={Images.wish1} style={styles.wishImage} />

          <TouchableOpacity style={styles.deleteIcon}>
            <MaterialCommunityIcons
              name="delete"
              color={COLORS.tertiary}
              size={23}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.itemContainer}>
          <Image source={Images.just2} style={styles.itemImage} />
          <View style={styles.itemData}>
            <Text style={styles.itemDescription}>
              Lorem ipsum dolor sit amet{'\n'}consectetur.
            </Text>
            <Text style={styles.itemPrice}>$17,00</Text>
            <View style={styles.itemSize}>
              <Text style={styles.color}>Pink</Text>
              <Text style={styles.size}>M</Text>
            </View>
          </View>
          <Image source={Images.wish1} style={styles.wishImage} />

          <TouchableOpacity style={styles.deleteIcon}>
            <MaterialCommunityIcons
              name="delete"
              color={COLORS.tertiary}
              size={23}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.itemContainer}>
          <Image source={Images.item2} style={styles.itemImage} />
          <View style={styles.itemData}>
            <Text style={styles.itemDescription}>
              Lorem ipsum dolor sit amet{'\n'}consectetur.
            </Text>
            <Text style={styles.itemPrice}>$17,00</Text>
            <View style={styles.itemSize}>
              <Text style={styles.color}>Pink</Text>
              <Text style={styles.size}>M</Text>
            </View>
          </View>
          <Image source={Images.wish1} style={styles.wishImage} />

          <TouchableOpacity style={styles.deleteIcon}>
            <MaterialCommunityIcons
              name="delete"
              color={COLORS.tertiary}
              size={23}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default WishList;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: COLORS.background,
    justifyContent: 'flex-end',
  },
  wishListText: {
    fontSize: 28,
    fontWeight: '700',
  },
  recentlyContainer: {
    marginTop: 13,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  recentlyText: {
    fontSize: 21,
    fontWeight: '700',
  },
  arrowContainer1: {
    height: 30,
    width: 30,
    backgroundColor: COLORS.primary,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewedContainer: {
    marginTop: 20,
    marginBottom: 25,
  },
  viewedImage: {
    height: 50,
    width: 50,
    borderWidth: 4,
    borderColor: COLORS.background,
    borderRadius: 25,
    shadowColor: COLORS.shadow,
    shadowRadius: 8,
    elevation: 5,
    marginRight: 25,
  },
  itemContainer: {
    // marginTop:14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // borderWidth: 2,
    paddingLeft: 5,
    paddingTop: 4,
    paddingBottom: 17,
    //height:123
  },

  itemImage: {
    width: 121,
    height: 101,
    borderRadius: 8,
    borderWidth: 4,
    borderColor: COLORS.background,
    shadowColor: COLORS.shadow,
    shadowRadius: 10,
    elevation: 5,
    resizeMode: 'stretch',
  },
  itemData: {
    //marginLeft:13
  },
  itemDescription: {
    fontSize: 12,
    fontWeight: '400',
  },
  itemPrice: {
    fontSize: 18,
    fontWeight: '700',
    paddingVertical: 12,
  },
  itemSize: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
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
  wishImage: {
    width: 29,
    height: 25,
    marginTop: 76,
  },
  deleteIcon: {
    position: 'absolute',
    height: 35,
    width: 35,
    borderRadius: 17,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.background,
    marginLeft: 20,
    marginTop: 42,
  },
});
