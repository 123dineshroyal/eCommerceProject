import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    Image,
    Modal,
    TextInput,
    ScrollView
} from 'react-native';
import Images from '../../assets/Images';
import { COLORS, SIZES } from '../../constants/themes';
import Feather from 'react-native-vector-icons/Feather';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native-paper';
import { RouteName } from '../../navigation/RouteName';
import Entypo from 'react-native-vector-icons/Entypo';



const SettingsAddCard = () => {

    const navigation = useNavigation();

    const [modalVisible, setModalVisible] = useState(false);

    const [editCardModalVisible, setEditCardModalVisible] = useState(false)

    const [showCard, setShowCard] = useState(true);

    const [cardHolder, setCardHolder] = useState('Romina')
    const [cardNumber, setCardNumber] = useState('**** **** **** 1579')
    const [valid, setValid] = useState('12 / 22')
    const [cvv, setCvv] = useState('209')

    const MethodSettingHandler = () => {
        setModalVisible(true);
    };

    const EditCradHandler = () => {
        setEditCardModalVisible(true);
    }

    return (
        <SafeAreaView style={styles.mainContainer}>
            <Text style={styles.settingText}>Settings</Text>
            <TouchableOpacity onPress={() => navigation.navigate(RouteName.PAYMENT_METHOD_HISTORY_SCREEN)}>
                <Text style={styles.methodText}>Payment Methods</Text>
            </TouchableOpacity>



            {showCard === true ? (

                <View style={styles.cardContain1}>
                    <View style={styles.card2}>
                        <View style={styles.card1}>
                            <Image source={Images.card1} style={styles.cardImage} />
                            <TouchableOpacity style={styles.settingIcon} onPress={MethodSettingHandler}>
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

            ) : (

                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <View style={styles.cardContain1}>
                        <View style={styles.card2}>
                            <View style={styles.card1}>
                                <Image source={Images.card1} style={styles.cardImage} />
                                <TouchableOpacity style={styles.settingIcon} onPress={MethodSettingHandler}>
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
                                <TouchableOpacity style={styles.settingIcon} onPress={EditCradHandler}>
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

            )}

            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalBackground}>
                    <View style={styles.addCardContainer}>
                        <View style={styles.addCard}>
                            <Text style={styles.addCardText}>Add Card</Text>
                        </View>

                        <View style={styles.editAddCardContainer}>
                            <View style={styles.cardHolderContain}>
                                <Text style-={styles.holderText}>Card Holder</Text>
                                <TextInput
                                    style={styles.holderInput}
                                    placeholder='Required'
                                />
                            </View>

                            <View style={styles.cardNumberContain1}>
                                <Text style-={styles.holderText}>Card Number</Text>
                                <TextInput
                                    style={styles.holderInput}
                                    placeholder='Required'
                                />
                            </View>

                            <View style={styles.validContainer}>
                                <View>
                                    <Text style-={styles.holderText}>Valid</Text>
                                    <TextInput
                                        style={styles.validInput}
                                        placeholder='Required'
                                    />
                                </View>
                                <View>
                                    <Text style-={styles.holderText}>CVV</Text>
                                    <TextInput
                                        style={styles.validInput}
                                        placeholder='Required'
                                    />
                                </View>
                            </View>

                            <Button
                                mode="contained"
                                labelStyle={styles.saveChangesButtonText}
                                onPress={() => setModalVisible(false)}
                                style={styles.saveChangesButtonContainer}
                            >
                                Save Changes
                            </Button>

                        </View>


                    </View>


                </View>
            </Modal>



            <Modal
                animationType="fade"
                transparent={true}
                visible={editCardModalVisible}
                onRequestClose={() => setEditCardModalVisible(false)}
            >
                <View style={styles.modalBackground}>
                    <View style={styles.addCardContainer}>
                        <View style={styles.addCard}>
                            <Text style={styles.addCardText}>Add Card</Text>
                        </View>

                        <View style={styles.editAddCardContainer}>
                            <View style={styles.cardHolderContain}>
                                <Text style-={styles.holderText}>Card Holder</Text>
                                <TextInput
                                    style={styles.holderInput}
                                    placeholder='Required'
                                    value={cardHolder}
                                    onChangeText={setCardHolder}
                                />
                            </View>

                            <View style={styles.cardNumberContain1}>
                                <Text style-={styles.holderText}>Card Number</Text>
                                <TextInput
                                    style={styles.holderInput}
                                    placeholder='Required'
                                    value={cardNumber}
                                    onChangeText={setCardNumber}
                                />
                            </View>

                            <View style={styles.validContainer}>
                                <View>
                                    <Text style-={styles.holderText}>Valid</Text>
                                    <TextInput
                                        style={styles.validInput}
                                        placeholder='Required'
                                        value={valid}
                                        onChangeText={setValid}
                                    />
                                </View>
                                <View>
                                    <Text style-={styles.holderText}>CVV</Text>
                                    <TextInput
                                        style={styles.validInput}
                                        placeholder='Required'
                                        value={cvv}
                                        onChangeText={setCvv}
                                    />
                                </View>
                            </View>

                            <Button
                                mode="contained"
                                labelStyle={styles.saveChangesButtonText}
                                onPress={() => setEditCardModalVisible(false)}
                                style={styles.saveChangesButtonContainer}
                            >
                                Save Changes
                            </Button>

                        </View>


                    </View>


                </View>
            </Modal>
        </SafeAreaView>
    )
}
export default SettingsAddCard;

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
    modalBackground: {
        flex: 1,
        backgroundColor: COLORS.onTertiary,
        justifyContent: 'flex-end',
    },
    addCardContainer: {
        backgroundColor: COLORS.background,

        borderTopLeftRadius: 15,
        borderTopEndRadius: 15,
    },
    addCard: {
        height: 80,
        backgroundColor: COLORS.onSurface,
        borderWidth: 2,
        borderColor: COLORS.onSurface,
        borderTopLeftRadius: 15,
        borderTopEndRadius: 15,
    },
    addCardText: {
        fontSize: 22,
        fontWeight: '700',
        paddingTop: 26,
        paddingLeft: 20,

    },
    editAddCardContainer: {
        padding: 20,
    },
    cardHolderContain: {
        marginTop: 5,
    },
    holderText: {
        fontSize: 13,
        fontWeight: '600',
    },
    holderInput: {
        height: 37,
        backgroundColor: COLORS.elevation.level3,
        borderRadius: 10,
        marginTop: 3,
        paddingLeft: 10,
        fontSize: 16,
        fontWeight: '500',
    },
    cardNumberContain1: {
        marginTop: 20
    },
    validContainer: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    validInput: {
        height: 37,
        backgroundColor: COLORS.elevation.level3,
        borderRadius: 10,
        marginTop: 3,
        paddingLeft: 10,
        fontSize: 16,
        fontWeight: '500',
        width: SIZES.width * 0.44
    },
    saveChangesButtonContainer: {
        borderRadius: 10,
        marginTop: 20

    },
    saveChangesButtonText: {
        fontSize: 16,
        color: COLORS.onPrimary,
        fontWeight: '300',
    },
    card3: {
        backgroundColor: COLORS.errorContainer,
        width: SIZES.width * 0.75,
        //height:'100%',
        paddingHorizontal: 20,
        borderRadius: 10,
        marginRight: 20
    },
})