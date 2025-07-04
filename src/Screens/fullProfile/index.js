import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import { COLORS } from '../../constants/themes';
import Images from '../../assets/Images';
import { SafeAreaView } from 'react-native-safe-area-context';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

const storyData = [
  {
    image: Images.story1,
    label: 'Live',
    live: true,
  },
  {
    image: Images.story2,
  },
  {
    image: Images.story3,
  },
  {
    image: Images.story1,
  },
  {
    image: Images.story2,
  },
  {
    image: Images.story3,
  },
];

const items = [
  {
    image: Images.item1,
    description: 'Lorem ipsum dolor sit amet consectetur.',
    price: '$17,00',
  },
  {
    image: Images.item2,
    description: 'Lorem ipsum dolor sit amet consectetur.',
    price: '$32,00',
  },
  {
    image: Images.item1,
    description: 'Lorem ipsum dolor sit amet consectetur.',
    price: '$17,00',
  },
  {
    image: Images.item2,
    description: 'Lorem ipsum dolor sit amet consectetur.',
    price: '$32,00',
  },
];

const popular = [
  {
    image: Images.popular1,
    price: '1780',
    status: 'New',
  },
  {
    image: Images.popular2,
    price: '1780',
    status: 'Sale',
  },
  {
    image: Images.popular3,
    price: '1780',
    status: 'Hot',
  },
  {
    image: Images.popular1,
    price: '1780',
    status: 'New',
  },
  {
    image: Images.popular2,
    price: '1780',
    status: 'Sale',
  },
  {
    image: Images.popular3,
    price: '1780',
    status: 'Hot',
  },
];

const FullProfile = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.activityContainer}>
            <Image source={Images.profile1} style={styles.profileImage} />
            <TouchableOpacity
              style={styles.myActivityContainer}
              onPress={() => navigation.navigate('ReadyCard-Screen')}
            >
              <Text style={styles.myActivityText}>My Activity</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.iconContainer}>
              <Image source={Images.icon1} style={styles.iconImage} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.iconContainer}>
              <Image source={Images.icon2} style={styles.iconImage} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.iconContainer}>
              <SimpleLineIcons
                name="settings"
                size={18}
                color={COLORS.primary}
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.listNotification} />
          <Text style={styles.userName}>Hello, Romina!</Text>
          <View style={styles.AnnouncementContainer}>
            <View>
              <Text style={styles.AnnouncementText}>Announcement</Text>
              <Text style={styles.AnnouncementText1}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.{'\n'}{' '}
                Maecenas hendrerit luctus libero ac vulputate.
              </Text>
            </View>
            <TouchableOpacity
              style={styles.arrowContainer}
              onPress={() => navigation.navigate('full-Profile-Screen')}
            >
              <MaterialCommunityIcons
                name="arrow-right"
                size={22}
                color={COLORS.background}
              />
            </TouchableOpacity>
          </View>

          <Text style={styles.viewedText}>Recently viewed</Text>

          <View style={styles.viewedContainer}>
            <Image source={Images.viewed1} style={styles.viewedImage} />
            <Image source={Images.viewed2} style={styles.viewedImage} />
            <Image source={Images.viewed3} style={styles.viewedImage} />
            <Image source={Images.viewed4} style={styles.viewedImage} />
            <Image source={Images.viewed5} style={styles.viewedImage} />
          </View>

          <Text style={styles.orderText}>My Orders</Text>

          <View style={styles.orderContainer}>
            <View style={styles.orderNameContainer}>
              <Text style={styles.orderName}>To Pay</Text>
            </View>
            <View style={styles.orderNameContainer}>
              <Text style={styles.orderName}>To Recieve</Text>
            </View>
            <View style={styles.orderNameContainer}>
              <Text style={styles.orderName}>To review</Text>
            </View>
          </View>
          <Text style={styles.reciveNotification} />
          <Text style={styles.story}>Stories</Text>

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {storyData.map((item, index) => (
              <TouchableOpacity style={styles.storyContainer}>
                <Image source={item.image} style={styles.storyImage} />
                {item.live && <Text style={styles.liveTag}>Live</Text>}
              </TouchableOpacity>
            ))}
          </ScrollView>

          <View style={styles.newItemContainer}>
            <Text style={styles.newItemText}>New Items</Text>
            <View style={styles.seeAllContainer}>
              <Text style={styles.seeAllText}>See All</Text>
              <TouchableOpacity style={styles.arrowContainer1}>
                <MaterialCommunityIcons
                  name="arrow-right"
                  size={22}
                  color={COLORS.onPrimary}
                />
              </TouchableOpacity>
            </View>
          </View>

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {items.map((item, index) => (
              <View style={styles.itemContainer}>
                <TouchableOpacity>
                  <Image source={item.image} style={styles.itemImage} />
                  <Text style={styles.itemText1}>{item.description}</Text>
                  <Text style={styles.itemPrice}>{item.price}</Text>
                </TouchableOpacity>
              </View>
            ))}
          </ScrollView>

          <View style={styles.populatMainContainer}>
            <View style={styles.newItemContainer}>
              <Text style={styles.newItemText}>Most Popular</Text>
              <View style={styles.seeAllContainer}>
                <Text style={styles.seeAllText}>See All</Text>
                <TouchableOpacity style={styles.arrowContainer1}>
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
                        <Text style={styles.popularCardPrice}>
                          {item.price}
                        </Text>
                        <Icon name="heart" color={COLORS.primary} size={10} />
                      </View>
                      <Text style={styles.popularCardNew}>{item.status}</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              ))}
            </ScrollView>
          </View>

          <View style={styles.categoriesMainContainer}>
            <View style={styles.newItemContainer}>
              <Text style={styles.newItemText}>Categories</Text>
              <View style={styles.seeAllContainer}>
                <Text style={styles.seeAllText}>See All</Text>
                <TouchableOpacity style={styles.arrowContainer1}>
                  <MaterialCommunityIcons
                    name="arrow-right"
                    size={22}
                    color={COLORS.onPrimary}
                  />
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.categoriesContainer}>
              <View style={styles.categoriesContainerItems}>
                <View style={styles.categoriesContainerItemsData}>
                  <Image
                    source={Images.clothing1}
                    style={styles.categoriesImage}
                  />
                  <Image
                    source={Images.clothing2}
                    style={styles.categoriesImage}
                  />
                </View>
                <View style={styles.categoriesContainerItemsData}>
                  <Image
                    source={Images.clothing3}
                    style={styles.categoriesImage}
                  />
                  <Image
                    source={Images.clothing4}
                    style={styles.categoriesImage}
                  />
                </View>
                <View style={styles.categoriesContainerItemsData}>
                  <Text style={styles.categoriesText}>Clothing</Text>
                  <Text style={styles.categoriesText1}>109</Text>
                </View>
              </View>

              <View style={styles.categoriesContainerItems}>
                <View style={styles.categoriesContainerItemsData}>
                  <Image
                    source={Images.shoes1}
                    style={styles.categoriesImage}
                  />
                  <Image
                    source={Images.shoes2}
                    style={styles.categoriesImage}
                  />
                </View>
                <View style={styles.categoriesContainerItemsData}>
                  <Image
                    source={Images.shoes3}
                    style={styles.categoriesImage}
                  />
                  <Image
                    source={Images.shoes4}
                    style={styles.categoriesImage}
                  />
                </View>
                <View style={styles.categoriesContainerItemsData}>
                  <Text style={styles.categoriesText}>Shoes</Text>
                  <Text style={styles.categoriesText1}>530</Text>
                </View>
              </View>
            </View>

            <View style={styles.categoriesContainer}>
              <View style={styles.categoriesContainerItems}>
                <View style={styles.categoriesContainerItemsData}>
                  <Image
                    source={Images.bages1}
                    style={styles.categoriesImage}
                  />
                  <Image
                    source={Images.bages2}
                    style={styles.categoriesImage}
                  />
                </View>
                <View style={styles.categoriesContainerItemsData}>
                  <Image
                    source={Images.bages3}
                    style={styles.categoriesImage}
                  />
                  <Image
                    source={Images.bages4}
                    style={styles.categoriesImage}
                  />
                </View>
                <View style={styles.categoriesContainerItemsData}>
                  <Text style={styles.categoriesText}>Bages</Text>
                  <Text style={styles.categoriesText1}>87</Text>
                </View>
              </View>

              <View style={styles.categoriesContainerItems}>
                <View style={styles.categoriesContainerItemsData}>
                  <Image
                    source={Images.lingerie1}
                    style={styles.categoriesImage}
                  />
                  <Image
                    source={Images.lingerie2}
                    style={styles.categoriesImage}
                  />
                </View>
                <View style={styles.categoriesContainerItemsData}>
                  <Image
                    source={Images.lingerie3}
                    style={styles.categoriesImage}
                  />
                  <Image
                    source={Images.lingerie4}
                    style={styles.categoriesImage}
                  />
                </View>
                <View style={styles.categoriesContainerItemsData}>
                  <Text style={styles.categoriesText}>Lingerie</Text>
                  <Text style={styles.categoriesText1}>218</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      {/* <View style={styles.footerContainer}>
        <TouchableOpacity>
          <Feather name="home" size={24} color={COLORS.primary} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="heart-outline" size={24} color={COLORS.primary} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="list-outline" size={24} color={COLORS.primary} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Feather name="shopping-bag" size={24} color={COLORS.primary} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="person-outline" size={24} color={COLORS.onBackground} />
        </TouchableOpacity>
      </View> */}
    </SafeAreaView>
  );
};

export default FullProfile;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: COLORS.background,
    color: COLORS.onBackground,
  },
  container: {
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 400,
  },
  activityContainer: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  profileImage: {
    width: 40,
    height: 40,
    borderWidth: 4,
    borderColor: COLORS.background,
    borderRadius: 20,
  },
  myActivityContainer: {
    width: 115,
    height: 35,
    backgroundColor: COLORS.primary,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  myActivityText: {
    fontSize: 16,
    fontWeight: '500',
    color: COLORS.onPrimary,
  },

  iconContainer: {
    height: 35,
    width: 35,
    backgroundColor: COLORS.secondary,
    borderRadius: 17,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 15,
  },
  iconImage: {
    height: 15,
    width: 15,
  },
  userName: {
    marginTop: 22,
    fontSize: 28,
    fontWeight: '700',
  },
  AnnouncementContainer: {
    marginTop: 12,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: 70,
    backgroundColor: COLORS.secondary,
    borderRadius: 10,
  },

  AnnouncementText: {
    fontSize: 14,
    fontWeight: '700',
  },
  AnnouncementText1: {
    fontSize: 10,
    fontWeight: '400',
  },
  arrowContainer: {
    height: 30,
    width: 30,
    backgroundColor: COLORS.primary,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 27,
  },
  viewedText: {
    marginTop: 18,
    fontSize: 21,
    fontWeight: '700',
  },
  viewedContainer: {
    marginTop: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  viewedImage: {
    height: 50,
    width: 50,
    borderWidth: 4,
    borderColor: COLORS.background,
    borderRadius: 25,
  },
  orderText: {
    marginTop: 25,
    fontSize: 21,
    fontWeight: '700',
  },
  orderContainer: {
    marginTop: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  orderNameContainer: {
    //width:118,
    height: 35,
    backgroundColor: COLORS.primaryContainer,
    borderRadius: 25,
    paddingHorizontal: 20,
    textAlign: 'center',
    justifyContent: 'center',
  },
  orderName: {
    fontSize: 16,
    fontWeight: '500',
    color: COLORS.primary,
  },
  reciveNotification: {
    position: 'relative',
    height: 14,
    width: 14,
    backgroundColor: COLORS.outline,
    borderRadius: 7,
    left: 214,
    bottom: 35,
    shadowColor: COLORS.shadow,
    shadowRadius: 18,
    elevation: 25,
  },
  listNotification: {
    position: 'absolute',
    height: 8,
    width: 8,
    backgroundColor: COLORS.primary,
    borderRadius: 4,
    top: 35,
    left: 283,
  },
  story: {
    fontSize: 21,
    fontWeight: '700',
    marginTop: 28,
  },
  storyContainer: {
    marginTop: 5,
  },
  storyImage: {
    height: 175,
    width: 104,
  },
  liveTag: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: COLORS.outline,
    color: 'white',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 6,
    fontSize: 12,
    fontWeight: 'bold',
  },
  footerContainer: {
    //position:'absolute',
    marginTop: 19,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: COLORS.surfaceVariant,
    borderTopWidth: 1,
    paddingTop: 14,
    paddingBottom: 46,
    paddingHorizontal: 24,
    bottom: 0,
    left: 0,
    right: 0,
  },
  newItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 25,
  },
  seeAllContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: -10,
  },
  arrowContainer1: {
    height: 30,
    width: 30,
    backgroundColor: COLORS.primary,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
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
  itemContainer: {
    marginTop: 10,
    width: 140,
    height: 204,
  },
  itemImage: {
    height: 130,
    width: 130,
    borderColor: COLORS.background,
    borderWidth: 4,
    borderRadius: 10,
  },
  itemText1: {
    fontSize: 12,
    fontWeight: '400',
    paddingTop: 7,
  },
  itemPrice: {
    fontSize: 17,
    fontWeight: '700',
  },
  populatMainContainer: {
    marginTop: -19,
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
    marginLeft: 10,
  },
  popularImage: {
    width: 93,
    height: 103,
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
  categoriesMainContainer: {
    marginTop: -6,
  },
  categoriesContainer: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  categoriesContainerItems: {
    height: 192,
    backgroundColor: COLORS.background,
    borderRadius: 10,
    width: '48%',
    shadowColor: COLORS.shadow,
    shadowRadius: 8,
    elevation: 5,
    justifyContent: 'space-around',
    paddingHorizontal: 7,
  },
  categoriesContainerItemsData: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  categoriesImage: {
    height: 75,
    width: 75,
  },
  categoriesText: {
    fontSize: 17,
    fontWeight: '700',
  },
  categoriesText1: {
    backgroundColor: COLORS.inverseOnSurface,
    paddingHorizontal: 10,
    borderRadius: 10,
    fontSize: 12,
    fontWeight: '700',
  },
});
