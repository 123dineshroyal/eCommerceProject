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
import { RouteName } from '../../navigation/RouteName';


const viewed = [
  {
    image:Images.viewed1
  },
  {
    image:Images.viewed2
  },
  {
    image:Images.viewed3
  },
  {
    image:Images.viewed4
  },
  {
    image:Images.viewed5
  },
  {
    image:Images.viewed1
  },
  {
    image:Images.viewed2
  },
  {
    image:Images.viewed3
  },
  {
    image:Images.viewed4
  },
  
]

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

const Profile = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.activityContainer}>
          <Image source={Images.profile1} style={styles.profileImage} />
          <TouchableOpacity
            style={styles.myActivityContainer}
            onPress={() => navigation.navigate(RouteName.READY_CARD_SCREEN)}
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
            <SimpleLineIcons name="settings" size={18} color={COLORS.primary} />
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
            onPress={() => navigation.navigate(RouteName.FULL_PROFILE_SCREEN)}
          >
            <MaterialCommunityIcons
              name="arrow-right"
              size={22}
              color={COLORS.onPrimary}
            />
          </TouchableOpacity>
        </View>

        <Text style={styles.viewedText}>Recently viewed</Text>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {viewed.map((item,index) =>(
            <TouchableOpacity  style={styles.viewedContainer}>
                 <Image source={item.image} style={styles.viewedImage} />
            </TouchableOpacity>
          ))

          }
        </ScrollView>

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
      </View>
{/* 
      <View style={styles.footerContainer}>
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

export default Profile;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  container: {
    paddingHorizontal:20
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
    marginLeft:19,
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
    position: 'relative',
    height: 8,
    width: 8,
    backgroundColor: COLORS.primary,
    borderRadius: 4,
    bottom:30,
    left: 286,
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
    marginTop: 19,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: COLORS.surfaceVariant,
    borderTopWidth: 1,
    paddingTop: 14,
    paddingBottom: 46,
    paddingHorizontal: 24,
    bottom: 0,
  },
});
