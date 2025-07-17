import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';
import Images from '../../assets/Images';
import { COLORS } from '../../constants/themes';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Ionicons';
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

const popular = [
  {
    image: Images.sale1,
    price: '1780',
    status: 'New',
  },
  {
    image: Images.sale2,
    price: '1780',
    status: 'Sale',
  },
  {
    image: Images.popular4,
    price: '1780',
    status: 'Hot',
  },
  {
    image: Images.flash5,
    price: '1780',
    status: 'New',
  },
  {
    image: Images.sale2,
    price: '1780',
    status: 'Sale',
  },
  {
    image: Images.popular4,
    price: '1780',
    status: 'Hot',
  },
];

const WishListEmpty = () => {

  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Text style={styles.wishListText}>Wishlist</Text>

      <View style={styles.recentlyContainer}>
        <Text style={styles.recentlyText}>Recently viewed</Text>
        <TouchableOpacity style={styles.arrowContainer1} onPress={() => navigation.navigate(RouteName.RECENTLY_VIEWED_SCREEN)}>
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

      <View style={styles.Emptycontain}>
        <View style={styles.imageContainer}>
          <Image source={Images.wish2} style={styles.emptyImage} />
        </View>
      </View>

       <View style={styles.populatMainContainer}>
                <View style={styles.newItemContainer}>
                  <Text style={styles.newItemText}>Most Popular</Text>
                  <View style={styles.seeAllContainer}>
                    <Text style={styles.seeAllText}>See All</Text>
                    <TouchableOpacity style={styles.arrowContainer2}>
                      <MaterialCommunityIcons
                        name="arrow-right"
                        size={22}
                        color={COLORS.onPrimary}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
      
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                  {popular.map(item => (
                    <View style={styles.popularContainer}>
                      <TouchableOpacity>
                        <Image source={item.image} style={styles.popularImage} />
                        <View style={styles.popularCardContainer}>
                          <View style={styles.popularCard}>
                            <Text style={styles.popularCardPrice}>{item.price}</Text>
                            <Icon name="heart" color={COLORS.primary} size={10} />
                          </View>
                          <Text style={styles.popularCardNew}>{item.status}</Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                  ))}
                </ScrollView>
              </View>
    </SafeAreaView>
  );
};
export default WishListEmpty;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: COLORS.background,
    justifyContent:'flex-end',
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
   marginTop: 26,
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
  Emptycontain: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:109,
    marginTop:69
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 134,
    width: 134,
    borderColor: COLORS.background,
    borderWidth: 1,
    borderRadius: 100,
    backgroundColor: COLORS.background,
    shadowColor: COLORS.shadow,
    shadowRadius: 8,
    elevation: 5,
  },
  emptyImage: {
    height: 70,
    width: 70,
  },
  populatMainContainer: {
    //marginTop: -19,
  },
  popularContainer: {
   marginTop: 15,
    width: 104,
    height: 140,
    justifyContent: 'space-evenly',
    //alignItems:'center',
    borderWidth: 4,
    borderRadius: 10,
    borderColor: COLORS.background,
    backgroundColor: COLORS.background,
    right: 10,
   marginRight: 5,
    shadowColor: COLORS.shadow,
    shadowRadius: 5,
    elevation: 5,
    marginLeft:5,
    paddingBottom:5
  },
   seeAllContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: -10,
  },
  newItemText: {
    fontSize: 21,
    fontWeight: '700',
    fontFamily: 'Raleway',
  },
  seeAllText: {
    fontSize: 15,
    fontWeight: '700',
    right: 20,
  },
    arrowContainer2: {
    height: 30,
    width: 30,
    backgroundColor: COLORS.primary,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  popularImage: {
    width: 93,
    height: 103,
    borderRadius:9,
    textAlign:'center'
  },
  popularCardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 6,
  },
  popularCard: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  popularCardPrice: {
    fontSize: 15,
    fontWeight: '700',
  },
  popularCardNew: {
    fontSize: 13,
    fontWeight: '500',
  },
   newItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 25,
  },
});
