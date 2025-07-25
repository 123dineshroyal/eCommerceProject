import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    Image,
    ScrollView,
    ImageBackground,

} from 'react-native';
import Images from '../../assets/Images';
import { COLORS, SIZES } from '../../constants/themes';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { useNavigation } from '@react-navigation/native';
import { RouteName } from '../../navigation/RouteName';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Entypo from 'react-native-vector-icons/Entypo';
import { Scroll } from 'lucide-react-native';
import { useState } from 'react';



const MyVouchers = () => {

    const navigation = useNavigation();

    const [activeTab, setActiveTab] = useState('active');

    return (
        <SafeAreaView style={styles.mainContainer}>
            <View style={styles.activityContainer}>
                <Image source={Images.profile1} style={styles.profileImage} />
                <Text style={styles.voucherText}>Vouchers</Text>

                <TouchableOpacity style={styles.iconContainer1}>
                    <Image source={Images.icon3} style={styles.iconImage} />
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
                <Text style={styles.listNotification} />
            </View>

            <View style={styles.buttonContainer}>

                <TouchableOpacity
                    style={[
                        styles.tabButton,
                        activeTab === 'active' && styles.activeTabButton,
                    ]}
                    onPress={() => setActiveTab('active')}>
                    <Text
                        style={[
                            styles.tabText,
                            activeTab === 'active' && styles.activeTabText,
                        ]}>
                        Active Rewards
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[
                        styles.tabButton,
                        activeTab === 'progress' && styles.activeTabButton,
                    ]}
                    onPress={() => setActiveTab('progress')}>
                    <Text
                        style={[
                            styles.tabText,
                            activeTab === 'progress' && styles.activeTabText,
                        ]}>
                        Progress
                    </Text>
                </TouchableOpacity>
            </View>

            {activeTab === 'active' ? (
                <View style={styles.voucherContainer}>
                    <View style={styles.voucher2}>
                        <View style={styles.voucherValidity}>
                            <Text style={styles.voucherText2}>Voucher</Text>
                            <View style={styles.limitContain}>
                                <Text style={styles.limitText}>3 days left</Text>
                                <View style={styles.voucherTime1}>
                                    <Text style={styles.timeText}>Valid Until 4.21.20</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.borderBottom1} />

                        <View style={styles.giftContain}>
                            <FontAwesome5
                                name="shopping-bag"
                                size={20}
                                color={COLORS.primary}
                            />
                            <Text style={styles.giftText}>First Purchase</Text>
                        </View>
                        <View style={styles.voucherDiscount}>
                            <Text style={styles.discountText}>
                                5% off for your next order
                            </Text>
                            <TouchableOpacity
                                style={styles.applyButtonContainer}
                                onPress={() => navigation.navigate(RouteName.PROFILE_VOUCHER_REMINDER_SCREEN)}
                            >
                                <Text style={styles.applyButtonText}>Collected</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.circle5} />
                        <View style={styles.circle2} />
                        <View style={styles.circle6} />
                        <View style={styles.circle4} />
                    </View>


                    <View style={styles.voucher1}>
                        <View style={styles.voucherValidity}>
                            <Text style={styles.voucherText1}>Voucher</Text>
                            <View style={styles.voucherTime}>
                                <Text style={styles.timeText}>Valid Until 5.16.20</Text>
                            </View>
                        </View>
                        <View style={styles.borderBottom} />

                        <View style={styles.giftContain}>
                            <FontAwesome6 name="gift" size={20} color={COLORS.primary} />
                            <Text style={styles.giftText}>Gift From Customer Care</Text>
                        </View>
                        <View style={styles.voucherDiscount}>
                            <Text style={styles.discountText}>
                                15% off your next purchase
                            </Text>
                            <TouchableOpacity
                                style={styles.applyButtonContainer}
                                onPress={() => navigation.navigate(RouteName.PROFILE_VOUCHER_REMINDER_SCREEN)}
                            >
                                <Text style={styles.applyButtonText}>Collected</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.circle1} />
                        <View style={styles.circle2} />
                        <View style={styles.circle3} />
                        <View style={styles.circle4} />
                    </View>


                    <View style={styles.voucher1}>
                        <View style={styles.voucherValidity}>
                            <Text style={styles.voucherText1}>Voucher</Text>
                            <View style={styles.voucherTime}>
                                <Text style={styles.timeText}>Valid Until 5.16.20</Text>
                            </View>
                        </View>
                        <View style={styles.borderBottom} />

                        <View style={styles.giftContain}>
                            <Entypo name="heart" size={20} color={COLORS.primary} />
                            <Text style={styles.giftText}>Loyal Customer</Text>
                        </View>
                        <View style={styles.voucherDiscount}>
                            <Text style={styles.discountText}>
                                10% off your next purchase
                            </Text>
                            <TouchableOpacity
                                style={styles.applyButtonContainer}
                                onPress={() => navigation.navigate(RouteName.PROFILE_VOUCHER_REMINDER_SCREEN)}
                            >
                                <Text style={styles.applyButtonText}>Collected</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.circle1} />
                        <View style={styles.circle2} />
                        <View style={styles.circle3} />
                        <View style={styles.circle4} />
                    </View>
                </View>

            ) : (

                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.progressContainer}>
                        <View style={styles.progressContainer1}>
                            <View style={styles.progressContain}>
                                <View style={styles.iconContain}>
                                    <View style={styles.subIconContain}>
                                        <FontAwesome5
                                            name="shopping-bag"
                                            size={25}
                                            color={COLORS.primary}
                                        />

                                    </View>
                                    <View style={styles.checkIcon}>
                                        <Entypo name="check" size={14} color={COLORS.background} />
                                    </View>
                                </View>
                                <Text style={styles.voucherText3}>First Purchase</Text>
                                <Text style={styles.voucherDescription1}>Lorem ipsum dolor sit amet,{'\n'} consetetur sadipscing elitr,{'\n'}  sed diam nonumy eirmod{'\n'}  tempor invidunt ut labore</Text>

                            </View>

                            <View style={styles.progressContain}>
                                <View style={styles.voucherBackground}>
                                    <View style={styles.iconContain}>
                                        <View style={styles.subIconContain}>
                                            <Entypo
                                                name="heart"
                                                size={25}
                                                color={COLORS.primary}
                                            />

                                        </View>

                                    </View>
                                </View>
                                <Text style={styles.voucherText4}>Loyal Customer</Text>
                                <Text style={styles.voucherDescription1}>Lorem ipsum dolor sit amet,{'\n'} consetetur sadipscing elitr,{'\n'}  sed diam nonumy eirmod{'\n'}  tempor invidunt ut labore</Text>

                            </View>
                        </View>

                        <View style={styles.progressContainer1}>
                            <View style={styles.progressContain}>
                                <View style={styles.voucherBackground1}>
                                    <View style={styles.iconContain}>
                                        <View style={styles.subIconContain}>
                                            <Entypo
                                                name="star"
                                                size={25}
                                                color={COLORS.primary}
                                            />

                                        </View>
                                    </View>
                                </View>
                                <Text style={styles.voucherText3}>Review Maker</Text>
                                <Text style={styles.voucherDescription1}>Lorem ipsum dolor sit amet,{'\n'} consetetur sadipscing elitr,{'\n'}  sed diam nonumy eirmod{'\n'}  tempor invidunt ut labore</Text>

                            </View>

                            <View style={styles.progressContain}>

                                <View style={styles.iconContain}>
                                    <View style={styles.subIconContain}>
                                        <Entypo
                                            name="cloud"
                                            size={25}
                                            color={COLORS.primary}
                                        />

                                    </View>
                                </View>


                                <Text style={styles.voucherText3}>Big Soul</Text>
                                <Text style={styles.voucherDescription1}>Lorem ipsum dolor sit amet,{'\n'} consetetur sadipscing elitr,{'\n'}  sed diam nonumy eirmod{'\n'}  tempor invidunt ut labore</Text>

                            </View>
                        </View>

                        <View style={styles.progressContainer1}>
                            <View style={styles.progressContain}>
                                <View style={styles.iconContain}>
                                    <View style={styles.subIconContain}>
                                        <FontAwesome6
                                            name="shirt"
                                            size={25}
                                            color={COLORS.primary}
                                        />

                                    </View>
                                </View>
                                <Text style={styles.voucherText3}>T-Shirt Collector</Text>
                                <Text style={styles.voucherDescription1}>Lorem ipsum dolor sit amet,{'\n'} consetetur sadipscing elitr,{'\n'}  sed diam nonumy eirmod{'\n'}  tempor invidunt ut labore</Text>

                            </View>

                            <View style={styles.progressContain}>

                                <ImageBackground source={Images.voucherbackground1} style={styles.voucherBackground3}>
                                    <View style={styles.iconContain}>
                                        <View style={styles.subIconContain}>
                                            <FontAwesome6
                                                name="face-smile"
                                                size={25}
                                                color={COLORS.primary}
                                            />

                                        </View>
                                    </View>
                                </ImageBackground>

                                <Text style={styles.voucherText3}>10+ Orders</Text>
                                <Text style={styles.voucherDescription1}>Lorem ipsum dolor sit amet,{'\n'} consetetur sadipscing elitr,{'\n'}  sed diam nonumy eirmod{'\n'}  tempor invidunt ut labore</Text>

                            </View>
                        </View>
                    </View>
                </ScrollView>
            )}
        </SafeAreaView>
    )
}
export default MyVouchers;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        padding: 20,
        backgroundColor: COLORS.background,
    },
    activityContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    profileImage: {
        width: 44,
        height: 44,
        borderWidth: 4,
        borderColor: COLORS.background,
        borderRadius: 20,
        elevation: 5,
    },
    voucherText: {
        fontSize: 21,
        fontWeight: '700',
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
    iconContainer1: {
        height: 35,
        width: 35,
        backgroundColor: COLORS.primary,
        borderRadius: 17,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 15,
    },
    iconImage: {
        height: 15,
        width: 17,
    },
    listNotification: {
        position: 'absolute',
        height: 8,
        width: 8,
        backgroundColor: COLORS.primary,
        borderRadius: 4,
        bottom: 30,
        right: 68,
    },
    buttonContainer: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 10,
        alignItems: 'center',
    },
    activeRewardTextContain: {
        backgroundColor: COLORS.primaryContainer,
        paddingVertical: 6,
        width: SIZES.width * 0.4,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    activeRewardText: {
        fontSize: 15,
        fontWeight: '500',
        color: COLORS.primary,

    },
    progressTexContaint: {
        backgroundColor: COLORS.secondary,
        paddingVertical: 6,
        width: SIZES.width * 0.4,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    progressText: {
        fontSize: 15,
        fontWeight: '500',
        color: COLORS.onBackground,

    },
    voucherContainer: {
        marginTop: 6,
    },
    voucher1: {
        height: 115,
        borderColor: COLORS.primary,
        borderWidth: 2,
        borderRadius: 10,
        marginTop: 15,
    },
    voucher2: {
        height: 115,
        borderColor: COLORS.customColor5,
        borderWidth: 2,
        borderRadius: 10,
        marginTop: 15,
    },
    voucherValidity: {
        marginTop: 6,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 20,
        paddingRight: 10,
    },
    voucherText1: {
        fontSize: 18,
        fontWeight: '700',
        color: COLORS.primary,
    },
    voucherText2: {
        fontSize: 18,
        fontWeight: '700',
        color: COLORS.customColor6,
    },
    voucherTime: {
        backgroundColor: COLORS.secondary,
        paddingVertical: 2,
        paddingHorizontal: 5,
        borderRadius: 3,
    },
    voucherTime1: {
        backgroundColor: COLORS.customColor5,
        paddingVertical: 2,
        paddingHorizontal: 5,
        borderRadius: 3,
    },
    timeText: {
        fontSize: 11,
        fontWeight: '500',
        textAlign: 'center',
    },
    borderBottom: {
        marginTop: 3,
        height: 1,
        borderStyle: 'dashed',
        borderColor: COLORS.primary,
        borderBottomWidth: 1
    },
    borderBottom1: {
        marginTop: 3,
        height: 1,
        borderStyle: 'dashed',
        borderColor: COLORS.customColor5,
        borderBottomWidth: 1
    },
    giftContain: {
        marginTop: 20,
        flexDirection: 'row',
        paddingLeft: 20,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    giftText: {
        fontSize: 17,
        fontWeight: '700',
        paddingLeft: 10,
    },
    voucherDiscount: {
        paddingLeft: 20,
        paddingRight: 10,
        marginTop: 3,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    discountText: {
        fontSize: 12,
        fontWeight: '600',
    },
    applyButtonText: {
        fontSize: 14,
        color: COLORS.background,
        fontWeight: '500',
        paddingHorizontal: 20,
    },
    applyButtonContainer: {
        borderRadius: 8,
        backgroundColor: COLORS.primary,
        height: 24,
        justifyContent: 'center',
        alignItems: 'center',
    },
    circle1: {
        position: 'absolute',
        height: 30,
        width: 30,
        borderColor: COLORS.primary,
        borderWidth: 2,
        borderRadius: 15,
        backgroundColor: COLORS.background,
        left: -17,
        marginTop: 42,
        // zIndex:1
    },
    circle2: {
        position: 'absolute',
        height: 32,
        width: 32,
        backgroundColor: COLORS.background,
        left: -34,
        marginTop: 41,
    },
    circle3: {
        position: 'absolute',
        height: 30,
        width: 30,
        borderColor: COLORS.primary,
        borderWidth: 2,
        borderRadius: 15,
        backgroundColor: COLORS.background,
        right: -17,
        marginTop: 42,
    },
    circle4: {
        position: 'absolute',
        height: 32,
        width: 32,
        backgroundColor: COLORS.background,
        right: -34,
        marginTop: 41,
    },
    circle5: {
        position: 'absolute',
        height: 30,
        width: 30,
        borderColor: COLORS.customColor5,
        borderWidth: 2,
        borderRadius: 15,
        backgroundColor: COLORS.background,
        left: -17,
        marginTop: 42,
        // zIndex:1
    },
    circle6: {
        position: 'absolute',
        height: 30,
        width: 30,
        borderColor: COLORS.customColor5,
        borderWidth: 2,
        borderRadius: 15,
        backgroundColor: COLORS.background,
        right: -17,
        marginTop: 42,
    },
    limitContain: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    limitText: {
        fontSize: 11,
        fontWeight: '500',
        color: COLORS.customColor6,
        marginRight: 10
    },
    progressContainer: {
        marginTop: 14,
        marginHorizontal: 12,
    },
    progressContain: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    iconContain: {
        height: 70,
        width: 70,
        borderRadius: 35,
        borderWidth: 3,
        borderColor: COLORS.background,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.background,
        elevation: 5,
        shadowRadius: 35,
        shadowColor: COLORS.shadow

    },
    subIconContain: {
        height: 60,
        width: 60,
        borderRadius: 30,
        borderColor: COLORS.primary,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    voucherText3: {
        fontSize: 15,
        fontWeight: '700',
        marginTop: 16
    },
    voucherText4: {
        fontSize: 15,
        fontWeight: '700',
        marginTop: 46
    },
    voucherDescription1: {
        fontSize: 11,
        fontWeight: '400',
        lineHeight: 18
    },
    voucherBackground: {
        height: 39,
        width: 38,
        backgroundColor: COLORS.primary,
        paddingLeft: 1,
        paddingTop: 1
    },
    progressContainer1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 13,
    },
    voucherBackground1: {
        width: 39,
        height: 75,
        backgroundColor: COLORS.primary,
        paddingTop: 2
    },
    voucherBackground3: {
        height: 73,
        width: 73,
        justifyContent: 'center',
        alignItems: 'center'
    },
    tabButton: {
        paddingVertical: 6,
        width: SIZES.width * 0.4,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.secondary

    },
    tabText: {
        color: COLORS.onBackground,
        fontWeight: '500',
        fontSize: 15
    },
    activeTabButton: {
        backgroundColor: COLORS.primaryContainer,
        borderRadius: 20,

    },
    activeTabText: {
        color: COLORS.primary,

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
        bottom: 45
    },

})