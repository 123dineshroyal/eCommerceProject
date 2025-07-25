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



const RewardProgress = () => {

    const navigation = useNavigation();

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
                <TouchableOpacity style={styles.activeRewardTextContain}>
                    <Text style={styles.activeRewardText}>Active Rewards</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.progressTexContaint}>
                    <Text style={styles.progressText}>Progress</Text>
                </TouchableOpacity>
            </View>




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
                        </View>
                        <Text style={styles.voucherText3}>First Purchase</Text>
                        <Text style={styles.voucherDescription1}>Lorem ipsum dolor sit amet,{'\n'} consetetur sadipscing elitr,{'\n'}  sed diam nonumy eirmod{'\n'}  tempor invidunt ut labore</Text>

                    </View>

                    <View style={styles.progressContain}>
                        <ImageBackground source={Images.item1} style={styles.voucherBackground3}>
                            <View style={styles.iconContain}>
                                <View style={styles.subIconContain}>
                                    <Entypo
                                        name="heart"
                                        size={25}
                                        color={COLORS.primary}
                                    />

                                </View>
                            </View>
                        </ImageBackground>
                        <Text style={styles.voucherText4}>Loyal Customer</Text>
                        <Text style={styles.voucherDescription1}>Lorem ipsum dolor sit amet,{'\n'} consetetur sadipscing elitr,{'\n'}  sed diam nonumy eirmod{'\n'}  tempor invidunt ut labore</Text>


                    </View>
                </View>
            </View>

        </SafeAreaView>
    )
}
export default RewardProgress;

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
        alignItems: 'center'
    },
    activeRewardText: {
        fontSize: 15,
        fontWeight: '500',
        color: COLORS.primary,

    },
    progressTexContaint: {
        backgroundColor: COLORS.primaryContainer,
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

    progressContainer: {
        marginTop: 25,
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
        lineHeight: 18,
    },
    voucherBackground: {
        height: 39,
        width: 38,
        backgroundColor: COLORS.primary,
        paddingLeft: 1,
        paddingTop: 1,
    },
    progressContainer1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        // width: SIZES.width * 0.40,
        //borderWidth: 1
    },
    voucherBackground3: {
        height: 76,
        width: 76
    },
})