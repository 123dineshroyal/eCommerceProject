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
import Fontisto from 'react-native-vector-icons/Fontisto';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';



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

const product = [
    {
        image: Images.product1,
    },
    {
        image: Images.product2,
    },
    {
        image: Images.product3,
    },
    {
        image: Images.product4,
    },
    {
        image: Images.product5,
    },
    {
        image: Images.product1,
    },
    {
        image: Images.product2,
    },
    {
        image: Images.product3,
    },
    {
        image: Images.product4,
    },
];

const ProfileVoucherReminder = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.mainContainer}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.container}>
                    <View style={styles.activityContainer}>
                        <Image source={Images.profile1} style={styles.profileImage} />
                        <TouchableOpacity style={styles.myActivityContainer}
                        onPress={() => navigation.navigate(RouteName.SETTINGS_SCREEN)}
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

                    <View style={styles.rewardContainer}>
                        <View style={styles.reminder}>
                            <View style={styles.rewardContain}>
                                <FontAwesome5
                                    name="shopping-bag"
                                    size={25}
                                    color={COLORS.customColor6}
                                />

                            </View>
                        </View>
                        <View style={styles.rewardContain1}>
                            <Text style={styles.rewardText1}>Your voucher will expire in 3 days</Text>
                            <Text style={styles.rewardText2}>Lorem ipsum dolor sit amet, consetetur sadipscing{'\n'}elitr, sed diam nonumy eirmod tempor invidunt</Text>
                        </View>

                    </View>

                    <Text style={styles.viewedText}>Recently viewed</Text>

                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        {viewed.map((item, index) => (
                            <TouchableOpacity style={styles.viewedContainer}>
                                <Image source={item.image} style={styles.viewedImage} />
                            </TouchableOpacity>
                        ))}
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
                        <Text style={styles.reciveNotification} />
                    </View>

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

                    <View style={styles.flashSaleMainContainer}>
                        <View style={styles.flashSaleTextContainer}>
                            <Text style={styles.flashSaleText}>Flash Sale</Text>
                            <View style={styles.flashSaleTimeContainer}>
                                <Fontisto name="stopwatch" color={COLORS.primary} size={19} />
                                <Text style={styles.time}>00</Text>
                                <Text style={styles.time}>36</Text>
                                <Text style={styles.time}>58</Text>
                            </View>
                        </View>

                        <View style={styles.flashSale}>
                            <View style={styles.flashContain}>
                                <View>
                                    <Image source={Images.flash1} style={styles.flashImage} />
                                    <Text style={styles.salePercent}>-20%</Text>
                                </View>
                                <View>
                                    <Image source={Images.flash2} style={styles.flashImage} />
                                    <Text style={styles.salePercent}>-20%</Text>
                                </View>
                                <View>
                                    <Image source={Images.flash3} style={styles.flashImage} />
                                    <Text style={styles.salePercent}>-20%</Text>
                                </View>
                            </View>
                            <View style={styles.flashContain}>
                                <View>
                                    <Image source={Images.flash4} style={styles.flashImage} />
                                    <Text style={styles.salePercent}>-20%</Text>
                                </View>
                                <View>
                                    <Image source={Images.flash5} style={styles.flashImage} />
                                    <Text style={styles.salePercent}>-20%</Text>
                                </View>
                                <View>
                                    <Image source={Images.flash6} style={styles.flashImage} />
                                    <Text style={styles.salePercent}>-20%</Text>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={styles.topProductMainContainer}>
                        <Text style={styles.productext}>Top Products</Text>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                            {product.map((item, index) => (
                                <TouchableOpacity style={styles.topProductContainer}>
                                    <Image source={item.image} style={styles.productImage} />
                                </TouchableOpacity>
                            ))}
                        </ScrollView>
                    </View>

                    <View style={styles.justForYouMainContainer}>
                        <Text style={styles.justForYouText}>
                            Just For You <Icon name="star" color={COLORS.primary} size={14} />
                        </Text>

                        <View style={styles.justForYou}>
                            <TouchableOpacity style={styles.justForYouContainer}>
                                <Image source={Images.just1} style={styles.justImage} />
                                <Text style={styles.justsubText}>
                                    Lorem ipsum dolor sit {'\n'}amet consectetur
                                </Text>
                                <Text style={styles.justPrice}>$17,00</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.justForYouContainer}>
                                <Image source={Images.just2} style={styles.justImage} />
                                <Text style={styles.justsubText}>
                                    Lorem ipsum dolor sit {'\n'}amet consectetur
                                </Text>
                                <Text style={styles.justPrice}>$17,00</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.justForYou}>
                            <TouchableOpacity style={styles.justForYouContainer}>
                                <Image source={Images.just3} style={styles.justImage} />
                                <Text style={styles.justsubText}>
                                    Lorem ipsum dolor sit {'\n'}amet consectetur
                                </Text>
                                <Text style={styles.justPrice}>$17,00</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.justForYouContainer}>
                                <Image source={Images.just4} style={styles.justImage} />
                                <Text style={styles.justsubText}>
                                    Lorem ipsum dolor sit {'\n'}amet consectetur
                                </Text>
                                <Text style={styles.justPrice}>$17,00</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.justForYou}>
                            <TouchableOpacity style={styles.justForYouContainer}>
                                <Image source={Images.just5} style={styles.justImage} />
                                <Text style={styles.justsubText}>
                                    Lorem ipsum dolor sit {'\n'}amet consectetur
                                </Text>
                                <Text style={styles.justPrice}>$17,00</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.justForYouContainer}>
                                <Image source={Images.just6} style={styles.justImage} />
                                <Text style={styles.justsubText}>
                                    Lorem ipsum dolor sit {'\n'}amet consectetur
                                </Text>
                                <Text style={styles.justPrice}>$17,00</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
            {/* <TabNavigator/> */}
        </SafeAreaView>
    );
};

export default ProfileVoucherReminder;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: COLORS.background,
    },
    container: {
        marginLeft: 20,
        marginRight: 20,
        // marginBottom: 400,
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
        backgroundColor: COLORS.primaryContainer,
        borderRadius: 17,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 15,
    },
    iconImage: {
        height: 15,
        width: 17,
    },
    userName: {
        marginTop: 22,
        fontSize: 28,
        fontWeight: '700',
    },

    viewedText: {
        marginTop: 18,
        fontSize: 21,
        fontWeight: '700',
    },
    viewedContainer: {
        marginTop: 12,
        marginLeft: 19,
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
        position: 'absolute',
        height: 14,
        width: 14,
        backgroundColor: COLORS.outline,
        borderRadius: 7,
        left: 214,
        bottom: 25,
        borderWidth: 2,
        borderColor: COLORS.background
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
    flashSaleMainContainer: {
        marginTop: 28,
    },
    flashSaleTextContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    flashSaleText: {
        fontSize: 21,
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
        paddingLeft: 7,
        backgroundColor: COLORS.inverseOnSurface,
        marginLeft: 7,
        borderRadius: 3,
    },
    flashSale: {
        marginTop: 6,
    },
    flashContain: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
    },
    flashImage: {
        width: 99,
        height: 103,
        borderRadius: 9,
        borderWidth: 5,
        borderColor: COLORS.background,
        shadowColor: COLORS.shadow,
        shadowRadius: 8,
        elevation: 5,
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
        marginLeft: 55,
    },
    topProductMainContainer: {
        marginTop: 35,
    },
    productext: {
        fontSize: 21,
        fontWeight: '700',
    },
    topProductContainer: {
        marginTop: 10,
        paddingHorizontal: 10,
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
    justForYouMainContainer: {
        marginTop: 34,
    },
    justForYouText: {
        fontSize: 21,
        fontWeight: '700',
    },
    justForYouContainer: {
        marginTop: 15,
    },
    justImage: {
        width: 168,
        height: 177,
        borderRadius: 9,
        borderColor: COLORS.background,
        borderWidth: 5,
        shadowColor: COLORS.shadow,
        shadowRadius: 8,
        elevation: 5,
    },
    justsubText: {
        marginTop: 7,
        fontSize: 12,
        fontWeight: '400',
    },
    justPrice: {
        marginTop: 3,
        fontSize: 17,
        fontWeight: '700',
    },
    justForYou: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    rewardContainer: {
        marginTop: 12,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    rewardContain: {
        height: 60,
        width: 60,
        borderRadius: 30,
        backgroundColor: COLORS.background,
        borderWidth: 2,
        borderColor: COLORS.customColor6,
        justifyContent: 'center',
        alignItems: 'center'
    },
    reminder: {
        height: 70,
        width: 70,
        borderRadius: 35,
        backgroundColor: COLORS.customColor6,

        justifyContent: 'center',
        alignItems: 'center'
    },
    checkIcon: {
        position: 'absolute',
        height: 22,
        width: 22,
        backgroundColor: COLORS.primary,
        borderRadius: 11,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
        // marginLeft: 10,
        borderWidth: 2,
        borderColor: COLORS.background,
        left: 35,
        bottom: 40
    },
    rewardContain1: {
        marginLeft: 10,
    },
    rewardText1: {
        fontSize: 14,
        fontWeight: '700',
    },
    rewardText2: {
        fontSize: 11,
        fontWeight: '400',
        lineHeight: 16
    },
});
