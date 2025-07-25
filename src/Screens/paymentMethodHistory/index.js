import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    SafeAreaView,
    ScrollView,
} from 'react-native';
import Images from '../../assets/Images';
import { COLORS, SIZES } from '../../constants/themes';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';



const PaymentMethodHistory = () => {

    const navigation = useNavigation();

    const [showCard, setShowCard] = useState(true);

    return (
        <SafeAreaView style={styles.mainContainer}>
            <Text style={styles.settingText}>Settings</Text>
            <Text style={styles.methodText}>Payment Methods</Text>

            {showCard === true ? (

                <View>
                    <View style={styles.cardContain1}>
                        <View style={styles.card2}>
                            <View style={styles.card1}>
                                <Image source={Images.card1} style={styles.cardImage} />
                                <TouchableOpacity style={styles.settingIcon}>
                                    <Feather name="settings" size={20} color={COLORS.primary} />
                                </TouchableOpacity>
                            </View>

                            <View style={styles.cardNumberContain}>
                                <Text style={styles.cardNumber1}>*  *  *  *</Text>
                                <Text style={styles.cardNumber1}>*  *  *  *</Text>
                                <Text style={styles.cardNumber1}>*  *  *  *</Text>
                                <Text style={styles.cardNumber1}>1579</Text>
                            </View>

                            <View style={styles.cardValidityContain}>
                                <Text style={styles.cardUserName}>AMANDA MORGAN</Text>
                                <Text style={styles.cardValidty}>12/22</Text>
                            </View>
                        </View>
                        <TouchableOpacity style={styles.plusContain} onPress={() => setShowCard(false)}>
                            <Text style={styles.plusIcon}>+</Text>
                        </TouchableOpacity>

                    </View>

                    <View style={styles.historyContainer}>
                        <View style={styles.historyContain}>
                            <FontAwesome5
                                name="shopping-bag"
                                size={25}
                                color={COLORS.primary}
                            />
                            <View style={styles.history}>
                                <Text style={styles.dateText}>April,19 2020 12:31</Text>
                                <Text style={styles.orderText}>Order #92287157</Text>
                            </View>
                            <Text style={styles.payment}>-$14,00</Text>
                        </View>

                        <View style={styles.historyContain}>
                            <FontAwesome5
                                name="shopping-bag"
                                size={25}
                                color={COLORS.customColor6}
                            />
                            <View style={styles.history}>
                                <Text style={styles.dateText}>April,19 2020 12:31</Text>
                                <Text style={styles.orderText}>Order #92287157</Text>
                            </View>
                            <Text style={styles.payment1}>-$14,00</Text>
                        </View>


                        <View style={styles.historyContain}>
                            <FontAwesome5
                                name="shopping-bag"
                                size={25}
                                color={COLORS.primary}
                            />
                            <View style={styles.history}>
                                <Text style={styles.dateText}>April,19 2020 12:31</Text>
                                <Text style={styles.orderText}>Order #92287157</Text>
                            </View>
                            <Text style={styles.payment}>-$14,00</Text>
                        </View>


                        <View style={styles.historyContain}>
                            <FontAwesome5
                                name="shopping-bag"
                                size={25}
                                color={COLORS.primary}
                            />
                            <View style={styles.history}>
                                <Text style={styles.dateText}>April,19 2020 12:31</Text>
                                <Text style={styles.orderText}>Order #92287157</Text>
                            </View>
                            <Text style={styles.payment}>-$14,00</Text>
                        </View>

                        <View style={styles.historyContain}>
                            <FontAwesome5
                                name="shopping-bag"
                                size={25}
                                color={COLORS.primary}
                            />
                            <View style={styles.history}>
                                <Text style={styles.dateText}>April,19 2020 12:31</Text>
                                <Text style={styles.orderText}>Order #92287157</Text>
                            </View>
                            <Text style={styles.payment}>-$14,00</Text>
                        </View>

                        <View style={styles.historyContain}>
                            <FontAwesome5
                                name="shopping-bag"
                                size={25}
                                color={COLORS.primary}
                            />
                            <View style={styles.history}>
                                <Text style={styles.dateText}>April,19 2020 12:31</Text>
                                <Text style={styles.orderText}>Order #92287157</Text>
                            </View>
                            <Text style={styles.payment}>-$14,00</Text>
                        </View>
                    </View>

                </View>



            ) : (
                <View>

                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <View style={styles.cardContain1}>
                            <View style={styles.card2}>
                                <View style={styles.card1}>
                                    <Image source={Images.card1} style={styles.cardImage} />
                                    <TouchableOpacity style={styles.settingIcon}>
                                        <Feather
                                            name="settings"
                                            size={20}
                                            color={COLORS.primary}
                                        />
                                    </TouchableOpacity>
                                </View>

                                <View style={styles.cardNumberContain}>
                                    <Text style={styles.cardNumber1}>*  *  *  *</Text>
                                    <Text style={styles.cardNumber1}>*  *  *  *</Text>
                                    <Text style={styles.cardNumber1}>*  *  *  *</Text>
                                    <Text style={styles.cardNumber1}>1579</Text>
                                </View>

                                <View style={styles.cardValidityContain}>
                                    <Text style={styles.cardUserName}>AMANDA MORGAN</Text>
                                    <Text style={styles.cardValidty}>12/22</Text>
                                </View>
                            </View>
                            <View style={styles.selectedCard}>
                                <Entypo name="check" size={14} color={COLORS.background} />
                            </View>
                        </View>

                        <View style={styles.cardContain1}>
                            <View style={styles.card3}>
                                <View style={styles.card1}>
                                    <Image source={Images.Visa1} style={styles.cardImage} />
                                    <TouchableOpacity style={styles.settingIcon}>
                                        <Feather
                                            name="settings"
                                            size={20}
                                            color={COLORS.primary}
                                        />
                                    </TouchableOpacity>
                                </View>

                                <View style={styles.cardNumberContain}>
                                    <Text style={styles.cardNumber1}>*  *  *  *</Text>
                                    <Text style={styles.cardNumber1}>*  *  *  *</Text>
                                    <Text style={styles.cardNumber1}>*  *  *  *</Text>
                                    <Text style={styles.cardNumber1}>1579</Text>
                                </View>

                                <View style={styles.cardValidityContain}>
                                    <Text style={styles.cardUserName}>AMANDA MORGAN</Text>
                                    <Text style={styles.cardValidty}>12/22</Text>
                                </View>
                            </View>

                        </View>



                    </ScrollView>

                    <View style={styles.historyContainer}>
                        <View style={styles.historyContain}>
                            <FontAwesome5
                                name="shopping-bag"
                                size={25}
                                color={COLORS.primary}
                            />
                            <View style={styles.history}>
                                <Text style={styles.dateText}>April,19 2020 12:31</Text>
                                <Text style={styles.orderText}>Order #92287157</Text>
                            </View>
                            <Text style={styles.payment}>-$14,00</Text>
                        </View>

                        <View style={styles.historyContain}>
                            <FontAwesome5
                                name="shopping-bag"
                                size={25}
                                color={COLORS.customColor6}
                            />
                            <View style={styles.history}>
                                <Text style={styles.dateText}>April,19 2020 12:31</Text>
                                <Text style={styles.orderText}>Order #92287157</Text>
                            </View>
                            <Text style={styles.payment1}>-$14,00</Text>
                        </View>


                        <View style={styles.historyContain}>
                            <FontAwesome5
                                name="shopping-bag"
                                size={25}
                                color={COLORS.primary}
                            />
                            <View style={styles.history}>
                                <Text style={styles.dateText}>April,19 2020 12:31</Text>
                                <Text style={styles.orderText}>Order #92287157</Text>
                            </View>
                            <Text style={styles.payment}>-$14,00</Text>
                        </View>


                        <View style={styles.historyContain}>
                            <FontAwesome5
                                name="shopping-bag"
                                size={25}
                                color={COLORS.primary}
                            />
                            <View style={styles.history}>
                                <Text style={styles.dateText}>April,19 2020 12:31</Text>
                                <Text style={styles.orderText}>Order #92287157</Text>
                            </View>
                            <Text style={styles.payment}>-$14,00</Text>
                        </View>

                        <View style={styles.historyContain}>
                            <FontAwesome5
                                name="shopping-bag"
                                size={25}
                                color={COLORS.primary}
                            />
                            <View style={styles.history}>
                                <Text style={styles.dateText}>April,19 2020 12:31</Text>
                                <Text style={styles.orderText}>Order #92287157</Text>
                            </View>
                            <Text style={styles.payment}>-$14,00</Text>
                        </View>

                        <View style={styles.historyContain}>
                            <FontAwesome5
                                name="shopping-bag"
                                size={25}
                                color={COLORS.primary}
                            />
                            <View style={styles.history}>
                                <Text style={styles.dateText}>April,19 2020 12:31</Text>
                                <Text style={styles.orderText}>Order #92287157</Text>
                            </View>
                            <Text style={styles.payment}>-$14,00</Text>
                        </View>
                    </View>
                </View>


            )}


        </SafeAreaView>
    )
}
export default PaymentMethodHistory;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        padding: 20,
        backgroundColor: COLORS.background,
    },
    settingText: {
        fontSize: 28,
        fontWeight: '800',
    },
    methodText: {
        fontSize: 16,
        fontWeight: '500'
    },
    cardContain1: {
        marginTop: 30,
        height: 155,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',


    },
    card2: {
        backgroundColor: COLORS.elevation.level3,
        width: SIZES.width * 0.75,
        //height:'100%',
        paddingHorizontal: 15,
        borderRadius: 10,

    },
    card1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 14
    },
    cardImage: {
        width: 57,
        height: 35,
    },
    settingIcon: {
        height: 35,
        width: 35,
        borderRadius: 17,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.primaryContainer,
    },
    cardNumberContain: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 33
    },
    cardNumber1: {
        fontSize: 12,
        fontWeight: '600',
    },
    cardValidityContain: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 30
    },
    cardUserName: {
        fontSize: 10,
        fontWeight: '600',
    },
    cardValidty: {
        fontSize: 10,
        fontWeight: '600',
    },
    plusContain: {
        backgroundColor: COLORS.primary,
        height: 155,
        width: 45,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    plusIcon: {
        color: COLORS.background,
        fontSize: 20
    },
    card3: {
        backgroundColor: COLORS.errorContainer,
        width: SIZES.width * 0.75,
        //height:'100%',
        paddingHorizontal: 20,
        borderRadius: 10,
        marginRight: 20
    },
    historyContainer: {
        marginTop: 15,
    },
    historyContain: {
        backgroundColor: COLORS.primaryContainer,
        height: 53,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        borderRadius: 13,
        marginTop: 5
    },
    history: {
        marginRight: 90
    },
    dateText: {
        fontSize: 10,
        fontWeight: '600',
    },
    orderText: {
        fontSize: 14,
        fontWeight: '700',
    },
    payment: {
        fontSize: 17,
        fontWeight: '700'
    },
    payment1: {
        fontSize: 17,
        fontWeight: '700',
        color: COLORS.customColor6
    }
})