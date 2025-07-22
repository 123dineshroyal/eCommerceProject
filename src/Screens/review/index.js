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
    TextInput,

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



const Review = () => {

    const navigation = useNavigation();

    const [modalVisible, setModalVisible] = useState(false);

    const [comment, setComment] = useState('');

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

                <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate(RouteName.REVIEW_DONE_SCREEN)}>
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
                    <View style={styles.reviewContainer1}>
                        <View style={styles.reviewContain}>
                            <Text style={styles.reviewText}>
                                Review
                            </Text>
                        </View>

                        <View style={styles.reviewData}>
                            <View style={styles.userImageContain}>
                                <Image source={Images.receive1} style={styles.receiveImage1} />
                                <View>
                                    <Text style={styles.reviewOrderText1}>Lorem ipsum dolor sit amet consectetur.</Text>
                                    <Text style={styles.reviewOrderText2}>Order #92287157</Text>
                                </View>
                            </View>

                            <View style={styles.ratingContain}>
                                <Entypo
                                    name="star-outlined"
                                    size={35}
                                    color={COLORS.onErrorContainer}
                                />
                                <Entypo
                                    name="star-outlined"
                                    size={35}
                                    color={COLORS.onErrorContainer}
                                />
                                <Entypo
                                    name="star-outlined"
                                    size={35}
                                    color={COLORS.onErrorContainer}
                                />
                                <Entypo
                                    name="star-outlined"
                                    size={35}
                                    color={COLORS.onErrorContainer}
                                />
                                <Entypo
                                    name="star-outlined"
                                    size={35}
                                    color={COLORS.onErrorContainer}
                                />
                            </View>

                            <TextInput
                                style={styles.commentInput}
                                placeholder='Your comment'
                                value={comment}
                                onChangeText={setComment}
                                placeholderTextColor={COLORS.onBackground}
                            />

                            <Button
                                mode="contained"
                                labelStyle={styles.sayItButtonText}
                                onPress={() => setModalVisible(false)}
                                style={styles.sayItButtonContainer}
                            >
                                Say it!
                            </Button>
                        </View>
                    </View>
                </View>
            </Modal>
        </SafeAreaView>
    )
}
export default Review;

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
        justifyContent: 'flex-end',
    },
    reviewContainer1: {
        backgroundColor: COLORS.background,
        borderTopLeftRadius: 15,
        borderTopEndRadius: 15,
    },
    reviewContain: {
        height: 80,
        backgroundColor: COLORS.onSurface,
        borderWidth: 2,
        borderColor: COLORS.onSurface,
        borderTopLeftRadius: 15,
        borderTopEndRadius: 15,
    },
    reviewText: {
        fontSize: 22,
        fontWeight: '700',
        paddingTop: 26,
        paddingLeft: 20,
    },
    reviewData: {
        padding: 20
    },
    userImageContain: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    receiveImage1: {
        height: 42,
        width: 42,
        borderRadius: 20,
        borderWidth: 2,
        borderColor: COLORS.background,
        elevation: 5,
        resizeMode: 'contain',
    },
    reviewOrderText1: {
        fontSize: 12,
        fontWeight: '400',
        marginLeft: 7,
    },
    reviewOrderText2: {
        fontSize: 14,
        fontWeight: '700',
        marginLeft: 7,
    },
    ratingContain: {
        marginTop: 17,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    commentInput: {
        height: 100,
        marginTop: 20,
        backgroundColor: COLORS.primaryContainer,
        borderRadius: 10,
        fontSize: 16,
        fontWeight: '500',
        color: COLORS.onBackground,
        paddingBottom: 60,
        paddingLeft: 10
    },
    sayItButtonContainer: {
        marginTop: 20,
        borderRadius: 10
    },
    sayItButtonText: {
        fontSize: 16,
        fontWeight: '300'
    },
})