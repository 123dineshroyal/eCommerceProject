import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    Image,
    ScrollView,
    TouchableOpacity,
    FlatList,
    Modal,

} from 'react-native';
import Images from '../../assets/Images';
import { COLORS } from '../../constants/themes';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { useNavigation } from '@react-navigation/native';
import { RouteName } from '../../navigation/RouteName';
import { Button } from 'react-native-paper';
import { useState } from 'react';
import Entypo from 'react-native-vector-icons/Entypo';

const review = [
    {
        image: Images.popular4,
        description: ' Lorem ipsum dolor sit amet\nconsectetur.',
        orderNumber: 'Order #92287157',
        date: 'April,06',
    },
    {
        image: Images.cart3,
        description: ' Lorem ipsum dolor sit amet\nconsectetur.',
        orderNumber: 'Order #92287157',
        date: 'April,06',
    },
    {
        image: Images.cart2,
        description: ' Lorem ipsum dolor sit amet\nconsectetur.',
        orderNumber: 'Order #92287157',
        date: 'April,06',
    },
    {
        image: Images.item2,
        description: ' Lorem ipsum dolor sit amet\nconsectetur.',
        orderNumber: 'Order #92287157',
        date: 'April,06',
    },
    {
        image: Images.cart1,
        description: ' Lorem ipsum dolor sit amet\nconsectetur.',
        orderNumber: 'Order #92287157',
        date: 'April,06',
    },
    {
        image: Images.sale1,
        description: ' Lorem ipsum dolor sit amet\nconsectetur.',
        orderNumber: 'Order #92287157',
        date: 'April,06',
    },
]



const ReviewDone = () => {

    const navigation = useNavigation();

    const [modalVisible, setModalVisible] = useState(false);

    const ReviewHandler = () => {
        setModalVisible(true);
    };

    return (
        <SafeAreaView style={styles.mainContainer}>
            <View style={styles.receiveContainer}>
                <Image source={Images.receive1} style={styles.receiveImage} />

                <Text style={styles.receiveText}>History</Text>

                <TouchableOpacity style={styles.iconContainer}>
                    <Image source={Images.icon1} style={styles.iconImage} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.iconContainer}>
                    <Image source={Images.icon2} style={styles.iconImage} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate(RouteName.PROFILE_REWARD_SREEN )}>
                    <SimpleLineIcons name="settings" size={18} color={COLORS.primary} />
                </TouchableOpacity>

                <View style={styles.notification} />
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.reviewContainer}>

                    <FlatList
                        data={review}
                        renderItem={({ item }) => (
                            <View style={styles.review1}>
                                <Image source={item.image} style={styles.reviewImage} />

                                <View style={styles.reviewSubContain1}>
                                    <Text style={styles.reviewText1}>
                                        {item.description}
                                    </Text>
                                    <Text style={styles.orderText2}>{item.orderNumber}</Text>

                                    <View style={styles.reviewDate}>
                                        <Text style={styles.date}>{item.date}</Text>

                                        <Button
                                            mode="contained"
                                            labelStyle={styles.reviewButtonText1}
                                            style={styles.reviewButtonContainer1}
                                            onPress={ReviewHandler}

                                        >
                                            Review
                                        </Button>
                                    </View>
                                </View>
                            </View>
                        )}

                    />
                </View>
            </ScrollView>

            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalBackground}>
                    <View style={styles.reviewDoneContainer}>
                        <Text style={styles.doneText}>Done!</Text>
                        <Text style={styles.doneDescription}>Thank you for your review</Text>
                        <TouchableOpacity style={styles.ratingContain} onPress={() => setModalVisible(false)}>
                            <Entypo name="star" size={35} color={COLORS.onErrorContainer} />
                            <Entypo name="star" size={35} color={COLORS.onErrorContainer} />
                            <Entypo name="star" size={35} color={COLORS.onErrorContainer} />
                            <Entypo name="star" size={35} color={COLORS.onErrorContainer} />
                            <Entypo name="star" size={35} color={COLORS.onErrorContainer} />
                        </TouchableOpacity>

                        <View style={styles.outsideContainer}>
                            <View style={styles.middleContainer}>
                                <View style={styles.innerContainer}>
                                    <Entypo name="check" size={14} color={COLORS.background} />
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </Modal>
        </SafeAreaView>
    )
}
export default ReviewDone;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        padding: 20,
        backgroundColor: COLORS.background,
    },
    receiveContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    receiveImage: {
        height: 44,
        width: 44,
        borderRadius: 20,
        borderWidth: 4,
        borderColor: COLORS.background,
        elevation: 5,
        resizeMode: 'contain',
    },
    receiveText: {
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
    iconImage: {
        height: 15,
        width: 17,
    },
    notification: {
        position: 'absolute',
        height: 8,
        width: 8,
        borderRadius: 4,
        backgroundColor: COLORS.primary,
        right: 66,
        bottom: 34,
    },
    reviewContainer: {
        marginTop: 15
    },
    review1: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginTop: 15
    },

    reviewSubContain1: {
        marginLeft: 13,
    },
    reviewImage: {
        height: 101,
        width: 121,
        borderRadius: 8,
        borderWidth: 3,
        borderColor: COLORS.background,
        elevation: 5,
        resizeMode: 'stretch',
    },
    reviewText1: {
        fontSize: 12,
        fontWeight: '400',
    },
    orderText2: {
        fontSize: 14,
        fontWeight: '700',
        marginTop: 5,
    },
    reviewDate: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    date: {
        fontSize: 13,
        fontWeight: '500',
        backgroundColor: COLORS.secondary,
        paddingVertical: 10,
        paddingHorizontal: 28,
        borderRadius: 10,
        marginTop: 4,
    },
    reviewButtonContainer1: {
        borderRadius: 10,
        backgroundColor: COLORS.background,
        borderWidth: 2,
        borderColor: COLORS.primary,
        marginLeft: 6,
    },
    reviewButtonText1: {
        fontSize: 16,
        fontWeight: '500',
        color: COLORS.primary,
    },
    modalBackground: {
        flex: 1,
        backgroundColor: COLORS.onTertiary,
        justifyContent: 'center',
    },
    reviewDoneContainer: {
        backgroundColor: COLORS.background,
        borderRadius: 10,
        marginHorizontal: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    doneText: {
        fontSize: 19,
        fontWeight: '700',
        marginTop: 57
    },
    doneDescription: {
        fontSize: 13,
        fontWeight: '600',
        marginTop: 5
    },
    ratingContain: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 13,
        marginBottom: 38
    },
    outsideContainer: {
        position: 'absolute',
        height: 80,
        width: 80,
        backgroundColor: COLORS.background,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: COLORS.shadow,
        shadowRadius: 8,
        elevation: 5,
        marginBottom: 190,
        // marginLeft: 150,
    },
    middleContainer: {
        height: 50,
        width: 50,
        backgroundColor: COLORS.primaryContainer,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    innerContainer: {
        height: 22,
        width: 22,
        backgroundColor: COLORS.primary,
        borderRadius: 11,
        justifyContent: 'center',
        alignItems: 'center',
    },

})