import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    Image,
    TouchableOpacity,
    Modal
} from 'react-native';
import Images from '../../assets/Images';
import { COLORS, SIZES } from '../../constants/themes';
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import { Button } from 'react-native-paper';



const ChatStartingQuestion1 = () => {

    const navigation = useNavigation();

    const [modalVisible, setModalVisible] = useState(false);
    const [orderIssueModalVisible, setOrderIssueModalVisible] = useState(false);
    const [selectedOrderModalVisible, setSelectedOrderModalVisible] = useState(false);



    const ChatHandler = () => {
        setModalVisible(true);
    };

    const OrderIssueHandler = () => {
        setOrderIssueModalVisible(true);
    };

    const SelectedOrderHandler = () => {
        setSelectedOrderModalVisible(true);
    };

    return (
        <SafeAreaView style={styles.mainContainer}>
            <View style={styles.botContainer}>
                <View style={styles.botContain}>
                    <Image source={Images.bot} style={styles.botImage} />
                </View>
                <View>
                    <Text style={styles.botText}>Chat Bot</Text>
                    <Text style={styles.customerText}>Customer Care Service</Text>
                </View>
            </View>

            <View style={styles.chatContainer}>
                <Text style={styles.chatText}>Hello, Amanda! Welcome to Customer Care Service. We will be happy to help you. Please, provide us more details about your issue before we can start.</Text>

            </View>

            <View style={styles.bottomTab}>
                <View style={styles.bottomTabContain}>
                    <TouchableOpacity onPress={ChatHandler}>
                        <Text style={styles.messegeText}>Message</Text>
                    </TouchableOpacity>
                    <View style={styles.tabIcon}>
                        <Feather name="image" size={30} color={COLORS.primary} />
                        <Image source={Images.menu1} style={styles.menuImage} />
                    </View>
                </View>
            </View>


            {/* Your Issue Modal */}
            <Modal
                animationType='slide'
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}

            >
                <View style={styles.modalBackground}>
                    <View style={styles.chatContainer1}>
                        <View style={styles.chatContain1}>
                            <Text style={styles.chatText1}>
                                What's your issue?
                            </Text>
                        </View>

                        <View style={styles.issueContainer}>
                            <TouchableOpacity style={styles.orderIssueContain}>
                                <View style={styles.checkIcon}>
                                    <Entypo name="check" size={14} color={COLORS.background} />
                                </View>
                                <Text style={styles.issueText}>Order Issues</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.orderIssue1}>
                                <Text style={styles.issueText1}>Item Quality</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.orderIssue2}>
                                <Text style={styles.issueText1}>Payment Issues</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.orderIssue3}>
                                <Text style={styles.issueText1}>Technical Assistance</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.orderIssue4}>
                                <Text style={styles.issueText1}>Other</Text>
                            </TouchableOpacity>

                            <View style={styles.buttonContain}>
                                <Button
                                    mode="contained"
                                    labelStyle={styles.nextButtonText1}
                                    style={styles.nextButtonContainer1}
                                    onPress={OrderIssueHandler}
                                >
                                    Next
                                </Button>
                                <TouchableOpacity style={styles.crossIcon} onPress={() => setModalVisible(false)}>
                                    <Entypo name="cross" size={21} color={COLORS.background} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                </View>
            </Modal>


            {/* Order Issue Modal */}
            <Modal
                animationType='slide'
                transparent={true}
                visible={orderIssueModalVisible}
                onRequestClose={() => setOrderIssueModalVisible(false)}

            >
                <View style={styles.modalBackground}>
                    <View style={styles.chatContainer1}>
                        <View style={styles.chatContain1}>
                            <Text style={styles.chatText1}>
                                Order Issues
                            </Text>
                        </View>

                        <View style={styles.issueContainer}>
                            <TouchableOpacity style={styles.orderIssueContain1}>
                                <View style={styles.checkIcon}>
                                    <Entypo name="check" size={14} color={COLORS.background} />
                                </View>
                                <Text style={styles.issueText}>I didn't recieve my parcel</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.orderIssue5}>
                                <Text style={styles.issueText1}>I want to cancel my order</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.orderIssue5}>
                                <Text style={styles.issueText1}>I want to return my order</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.orderIssue5}>
                                <Text style={styles.issueText1}>Package was damaged</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.orderIssue4}>
                                <Text style={styles.issueText1}>Other</Text>
                            </TouchableOpacity>

                            <View style={styles.buttonContain}>
                                <Button
                                    mode="contained"
                                    labelStyle={styles.nextButtonText1}
                                    style={styles.nextButtonContainer1}
                                    onPress={SelectedOrderHandler}
                                >
                                    Next
                                </Button>
                                <TouchableOpacity style={styles.crossIcon} onPress={() => setOrderIssueModalVisible(false)}>
                                    <Entypo name="cross" size={21} color={COLORS.background} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                </View>
            </Modal>

            {/* Selected Order Modal */}
            <Modal
                animationType='slide'
                transparent={true}
                visible={selectedOrderModalVisible}
                onRequestClose={() => setSelectedOrderModalVisible(false)}

            >
                <View style={styles.modalBackground}>
                    <View style={styles.chatContainer1}>
                        <View style={styles.chatContain1}>
                            <Text style={styles.chatText1}>
                                Select one of your orders
                            </Text>
                        </View>

                        <View style={styles.selectedContainer}>
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



                                        <TouchableOpacity style={styles.selectButtonContainer}>
                                            <Text style={styles.selectButtonText}>Selected</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>


                            <View style={styles.deliveredContainer}>
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
                                            <Text style={styles.itemText}>2 items</Text>
                                        </View>
                                    </View>
                                    <Text style={styles.deliveryText}>Standard Delivery</Text>

                                    <View style={styles.packedContainer1}>
                                        <Text style={styles.packedText}>Delivered</Text>

                                        <View style={styles.checkIcon1}>
                                            <Entypo name="check" size={14} color={COLORS.background} />
                                        </View>

                                        <TouchableOpacity style={styles.selectButtonContainer1}>
                                            <Text style={styles.selectButtonText1}>Select</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>



                            <View style={styles.buttonContain}>
                                <Button
                                    mode="contained"
                                    labelStyle={styles.nextButtonText1}
                                    style={styles.nextButtonContainer1}
                                //onPress={OrderIssueHandler}
                                >
                                    Next
                                </Button>
                                <TouchableOpacity style={styles.crossIcon} onPress={() => setSelectedOrderModalVisible(false)}>
                                    <Entypo name="cross" size={21} color={COLORS.background} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                </View>
            </Modal>
        </SafeAreaView>
    )
}
export default ChatStartingQuestion1;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: COLORS.background,
        paddingTop: 20
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
        height: 18,
        width: 18
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
    modalBackground: {
        flex: 1,
        //backgroundColor: COLORS.onTertiary,
        justifyContent: 'flex-end',
        marginBottom: 30
    },
    chatContainer1: {
        backgroundColor: COLORS.background,
        borderRadius: 15,
        marginHorizontal: 14
    },
    chatContain1: {
        height: 80,
        backgroundColor: COLORS.onSurface,
        borderWidth: 2,
        borderColor: COLORS.onSurface,
        borderTopLeftRadius: 15,
        borderTopEndRadius: 15,
    },
    chatText1: {
        fontSize: 22,
        fontWeight: '700',
        paddingTop: 26,
        paddingLeft: 20,
    },
    selectedContainer: {
        paddingHorizontal: 13,
        paddingTop: 14,
        paddingBottom: 10,

    },
    issueContainer: {
        paddingHorizontal: 20,
        paddingTop: 14,
        paddingBottom: 10,

    },
    orderIssueContain: {
        marginTop: 7,
        backgroundColor: COLORS.primary,
        flexDirection: 'row',
        height: 40,
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderRadius: 10,
        width: SIZES.width * 0.35,
        paddingHorizontal: 10
    },
    orderIssueContain1: {
        marginTop: 7,
        backgroundColor: COLORS.primary,
        flexDirection: 'row',
        height: 40,
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderRadius: 10,
        width: SIZES.width * 0.53,
        paddingHorizontal: 10
    },
    issueText: {
        fontSize: 14,
        fontWeight: '500',
        color: COLORS.background,
    },
    orderIssue1: {
        marginTop: 7,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: COLORS.primary,
        paddingHorizontal: 10,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        width: SIZES.width * .28
    },
    orderIssue2: {
        marginTop: 7,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: COLORS.primary,
        paddingHorizontal: 10,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        width: SIZES.width * .35
    },
    orderIssue3: {
        marginTop: 7,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: COLORS.primary,
        paddingHorizontal: 10,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        width: SIZES.width * .43
    },
    orderIssue4: {
        marginTop: 7,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: COLORS.primary,
        paddingHorizontal: 10,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        width: SIZES.width * .18
    },
    orderIssue5: {
        marginTop: 7,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: COLORS.primary,
        paddingHorizontal: 10,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        width: SIZES.width * 0.47
    },
    issueText1: {

        fontSize: 14,
        fontWeight: '500',
        color: COLORS.primary,


    },
    checkIcon: {
        height: 22,
        width: 22,
        backgroundColor: COLORS.primary,
        borderRadius: 11,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
        // marginLeft: 10,
        borderWidth: 2,
        borderColor: COLORS.background
    },
    checkIcon1: {
        height: 22,
        width: 22,
        backgroundColor: COLORS.primary,
        borderRadius: 11,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 35,

    },
    buttonContain: {
        marginTop: 9,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    nextButtonText1: {
        fontSize: 16,
        fontWeight: '300',
    },
    nextButtonContainer1: {
        borderRadius: 10,
        height: 40,
        width: SIZES.width * 0.73
    },
    crossIcon: {
        height: 26,
        width: 26,
        backgroundColor: COLORS.primary,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    shippedContainer: {
        // marginTop: 16,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: COLORS.primary,
        borderRadius: 10,
        padding: 2,
        height: 101
    },
    deliveredContainer: {
        marginTop: 9,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',

        borderRadius: 10,
        padding: 2,
        height: 101
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
        marginLeft: 55,
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
    selectButtonText: {
        fontSize: 16,
        fontWeight: '500',
        marginBottom: 4,
        color: COLORS.background,
        paddingHorizontal: 10,


    },
    selectButtonContainer: {
        borderRadius: 10,
        height: 30,
        backgroundColor: COLORS.primary,
        justifyContent: 'center',
        alignItems: 'center'
    },
    selectButtonText1: {
        fontSize: 16,
        fontWeight: '500',
        marginBottom: 4,
        color: COLORS.primary,
        paddingHorizontal: 15,


    },
    selectButtonContainer1: {
        borderRadius: 10,
        height: 30,
        backgroundColor: COLORS.background,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: COLORS.primary
    },

})