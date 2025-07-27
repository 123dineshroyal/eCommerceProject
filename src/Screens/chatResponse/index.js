import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
    SafeAreaView,
    ScrollView,
} from 'react-native';
import Images from '../../assets/Images';
import { COLORS, SIZES } from '../../constants/themes';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';
import { RouteName } from '../../navigation/RouteName';



const ChatResponse = () => {

    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.mainContainer}>
            <View style={styles.botContainer}>
                <View style={styles.botContain}>
                    <Image source={Images.chatUser} style={styles.botImage} />
                </View>
                <View>
                    <Text style={styles.botText}>Maggy Lee</Text>
                    <Text style={styles.customerText}>Customer Care Service</Text>
                </View>
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.chatContainer}>
                    <Text style={styles.chatText}>Hello, Amanda! Welcome to Customer Care Service. We will be happy to help you. Please, provide us more details about your issue before we can start.</Text>

                    <View style={styles.orderIssueContainer}>
                        <View style={styles.orderIssueContain}>
                            <View style={styles.checkIcon}>
                                <Entypo name="check" size={14} color={COLORS.background} />
                            </View>
                            <Text style={styles.orderIssueText}>Order Issues</Text>
                        </View>
                        <Image source={Images.chatUser1} style={styles.userImage} />
                    </View>

                    <View style={styles.orderReciveContainer}>
                        <View style={styles.checkIcon}>
                            <Entypo name="check" size={14} color={COLORS.background} />
                        </View>
                        <Text style={styles.orderIssueText}>I didn't recieve my parcel</Text>
                    </View>

                    <View style={styles.shippedContainer}>
                        <View style={styles.imageContainer}>
                            <View style={styles.imageContain}>
                                <Image source={Images.receive4} style={styles.image1} />
                                <Image source={Images.receive5} style={styles.image1} />
                            </View>
                            <View style={styles.imageContain}>
                                <Image source={Images.receive6} style={styles.image1} />
                                <Image source={Images.receive7} style={styles.image1} />
                            </View>
                        </View>

                        <View style={styles.orderContainer}>
                            <View style={styles.orderContain}>
                                <Text style={styles.orderText1}>Order #92287157</Text>
                                <View style={styles.itemContain}>
                                    <Text style={styles.itemText}>3 items</Text>
                                </View>
                            </View>
                            <Text style={styles.deliveryText}>Standard Delivery</Text>

                            <View style={styles.packedContainer1}>
                                <Text style={styles.packedText}>Shipped</Text>
                            </View>
                        </View>
                    </View>

                    <Text style={styles.chatText1}>Hello, Amanda! I'm Maggy, your personal assistant from Customer Care Service. Let me go through your order and check its current status. Wait a moment please.</Text>

                    <Text style={styles.customerText1}>Hello, Maggy! Sure!</Text>

                    <Text style={styles.chatText1}>Thank you for waiting Amanda! I just checked your order status and seems like there was a problem on our end. We are really sorry about that. You will receive your parcel within 2 days.</Text>


                </View>
            </ScrollView>

            <View style={styles.bottomTab}>
                <View style={styles.bottomTabContain}>
                    <TouchableOpacity onPress={() => navigation.navigate(RouteName.CHAT_VOUCHER_SCREEN)}>
                        <Text style={styles.messegeText}>Message</Text>
                    </TouchableOpacity>
                    <View style={styles.tabIcon}>
                        <Feather name="image" size={30} color={COLORS.primary} />
                        <Image source={Images.menu1} style={styles.menuImage} />
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}
export default ChatResponse;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        paddingTop: 20,
        paddingBottom: 70,
        backgroundColor: COLORS.background,
    },
    botContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingHorizontal: 20


    },
    botContain: {
        height: 44,
        width: 44,
        borderRadius: 20,
        borderWidth: 4,
        backgroundColor: COLORS.primaryContainer,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: COLORS.background,
        elevation: 5

    },
    botImage: {
        height: 40,
        width: 40
    },
    botText: {
        fontSize: 20,
        fontWeight: '700',
        color: COLORS.primary,
        marginLeft: 8,
    },
    customerText: {
        fontSize: 14,
        fontWeight: '500',
        marginLeft: 8,
    },
    chatContainer: {
        flex: 1,
        marginTop: 12,
        backgroundColor: COLORS.secondary,
        padding: 20,

    },
    chatText: {
        backgroundColor: COLORS.primaryContainer,
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 10,
        fontSize: 12,
        fontWeight: '400',
        lineHeight: 19,
        width: SIZES.width * .54,
    },
    bottomTab: {
        position: 'absolute',
        height: 80,
        backgroundColor: COLORS.primaryContainer,
        bottom: 0,
        left: 0,
        right: 0,

    },
    bottomTabContain: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 17

    },
    messegeText: {
        fontSize: 16,
        fontWeight: '500',
        color: COLORS.primary
    },
    tabIcon: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

    },
    menuImage: {
        height: 26,
        width: 26,
        marginLeft: 16
    },
    orderIssueContainer: {
        marginTop: 23,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    orderIssueContain: {
        height: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.primary,
        width: 150,
        borderRadius: 10
    },
    checkIcon: {
        height: 22,
        width: 22,
        borderWidth: 2,
        borderRadius: 11,
        backgroundColor: COLORS.primary,
        borderColor: COLORS.background,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10
    },
    orderIssueText: {
        fontSize: 14,
        fontWeight: '500',
        color: COLORS.background,
    },
    userImage: {
        height: 40,
        width: 40,
        borderWidth: 2,
        borderRadius: 20,
        borderColor: COLORS.background,
        elevation: 5,
        marginLeft: 10
    },
    orderReciveContainer: {
        height: 40,
        marginTop: 8,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.primary,
        borderRadius: 10,
        width: SIZES.width * 0.6,
        marginLeft: 70
    },
    shippedContainer: {
        marginTop: 8,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: COLORS.primary,
        borderRadius: 10,
        padding: 2,
        height: 101,
        width: SIZES.width * 0.76,
        marginLeft: 34
    },
    imageContainer: {
        height: 92,
        width: 92,
        borderWidth: 4,
        borderColor: COLORS.background,
        elevation: 5,
        borderRadius: 8,
        paddingHorizontal: 2,
        backgroundColor: COLORS.background,
    },
    image1: {
        height: 40,
        width: 39,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: COLORS.background,
        elevation: 2,
    },
    imageContain: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    orderContainer: {
        marginLeft: 10,
    },
    orderContain: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    orderText1: {
        fontSize: 14,
        fontWeight: '700',
    },
    itemContain: {
        backgroundColor: COLORS.secondary,
        paddingVertical: 2,
        paddingHorizontal: 10,
        borderRadius: 5,

    },
    itemText: {
        fontSize: 13,
        fontWeight: '500',
    },
    deliveryText: {
        fontSize: 14,
        fontWeight: '500',
        marginTop: 3,
    },
    packedContainer1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    packedText: {
        fontSize: 18,
        fontWeight: '700',
    },
    typingText: {
        fontSize: 12,
        fontWeight: '500',
        color: COLORS.primary,
        marginLeft: 100,
    },
    chatText1: {
        backgroundColor: COLORS.primary,
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 10,
        fontSize: 12,
        fontWeight: '400',
        lineHeight: 19,
        width: SIZES.width * .54,
        marginTop: 10,
        color: COLORS.background,
    },
    customerText1: {
        fontSize: 12,
        fontWeight: '400',
        backgroundColor: COLORS.background,
        marginTop: 10,
        paddingVertical: 8,
        paddingHorizontal: 20,
        borderRadius: 10,
        width: SIZES.width * 0.39,
        alignSelf: 'flex-end',

    }

})