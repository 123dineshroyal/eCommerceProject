import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    Image,
    ScrollView,
    Modal,
} from 'react-native';
import Images from '../../assets/Images';
import { COLORS } from '../../constants/themes';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import { RouteName } from '../../navigation/RouteName';
import { useState } from 'react';
import { Button } from 'react-native-paper';



const SettingFull = () => {

    const navigation = useNavigation();

    const [modalVisible, setModalVisible] = useState(false)

    const DeleteHandler = () => {
        setModalVisible(true);
    }

    return (
        <SafeAreaView style={styles.mainContainer}>
            <Text style={styles.settingText}>Settings</Text>

            <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={styles.personalText}>Personal</Text>

                <View style={styles.personalContainer}>
                    <View style={styles.profileContain}>
                        <Text style={styles.profileText}>Profile</Text>
                        <TouchableOpacity onPress={() => navigation.navigate(RouteName.SETTINGS_PROFILE_SCREEN)}>
                            <AntDesign name="right" size={20} color={COLORS.onBackground} />

                        </TouchableOpacity>
                    </View>

                    <View style={styles.profileContain}>
                        <Text style={styles.profileText}>Shipping Address</Text>
                        <TouchableOpacity>
                            <AntDesign name="right" size={20} color={COLORS.onBackground} />

                        </TouchableOpacity>
                    </View>

                    <View style={styles.profileContain}>
                        <Text style={styles.profileText}>Payment methods</Text>
                        <TouchableOpacity>
                            <AntDesign name="right" size={20} color={COLORS.onBackground} />

                        </TouchableOpacity>
                    </View>
                </View>

                <Text style={styles.personalText}>Shop</Text>

                <View style={styles.personalContainer}>
                    <View style={styles.profileContain}>
                        <Text style={styles.profileText}>Country</Text>
                        <View style={styles.shopContain}>
                            <Text style={styles.innerText}>Vietnam</Text>
                            <TouchableOpacity>
                                <AntDesign name="right" size={20} color={COLORS.onBackground} />

                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.profileContain}>
                        <Text style={styles.profileText}>Currency</Text>

                        <View style={styles.shopContain}>
                            <Text style={styles.innerText}>$ USD</Text>
                            <TouchableOpacity>
                                <AntDesign name="right" size={20} color={COLORS.onBackground} />

                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.profileContain}>
                        <Text style={styles.profileText}>Sizes</Text>
                        <View style={styles.shopContain}>
                            <Text style={styles.innerText}>UK</Text>
                            <TouchableOpacity>
                                <AntDesign name="right" size={20} color={COLORS.onBackground} />

                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.profileContain}>
                        <Text style={styles.profileText}>Terms and Conditions</Text>

                        <TouchableOpacity>
                            <AntDesign name="right" size={20} color={COLORS.onBackground} />

                        </TouchableOpacity>

                    </View>
                </View>

                <Text style={styles.personalText}>Account</Text>


                <View style={styles.personalContainer}>
                    <View style={styles.profileContain}>
                        <Text style={styles.profileText}>Language</Text>
                        <View style={styles.shopContain}>
                            <Text style={styles.innerText}>English</Text>
                            <TouchableOpacity>
                                <AntDesign name="right" size={20} color={COLORS.onBackground} />

                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.profileContain}>
                        <Text style={styles.profileText}>About Slada</Text>


                        <TouchableOpacity>
                            <AntDesign name="right" size={20} color={COLORS.onBackground} />

                        </TouchableOpacity>

                    </View>


                </View>

                <TouchableOpacity onPress={DeleteHandler}>
                    <Text style={styles.deleteText}>Delete My Account</Text>
                </TouchableOpacity>

                <View style={styles.sladaContain}>
                    <Text style={styles.sladaText}>Slada</Text>
                    <Text style={styles.versionText}>Version 1.0 April, 2020</Text>
                </View>

            </ScrollView>


            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalBackground}>
                    <View style={styles.deleteContainer}>
                        <Text style={styles.DeleteText}>You are going to delete
                        </Text>
                        <Text style={styles.deleteText1}>your account</Text>
                        <Text style={styles.restoreText}>
                            You won't be able to restore your data
                        </Text>

                        <View style={styles.buttonContainer}>
                            <Button
                                mode="contained"
                                labelStyle={styles.cancleButtonText}
                                style={styles.cancleButtonContainer}
                                onPress={() => setModalVisible(false)}
                            >
                                Cancel
                            </Button>

                            <Button
                                mode="contained"
                                labelStyle={styles.deleteButtonText}
                                style={styles.deleteButtonContainer}
                                onPress={() => setModalVisible(false)}
                            >
                                Delete
                            </Button>
                        </View>

                        <View style={styles.outsideContainer}>
                            <View style={styles.middleContainer}>
                                <View style={styles.innerContainer}>
                                    <Text style={styles.innerText1}>!</Text>
                                </View>
                            </View>
                        </View>

                    </View>
                </View>
            </Modal>


        </SafeAreaView>
    )
}

export default SettingFull;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        padding: 20,
        backgroundColor: COLORS.background
    },
    settingText: {
        fontSize: 28,
        fontWeight: '700',
    },
    personalText: {
        fontSize: 20,
        fontWeight: '800',
        marginTop: 30,
    },
    personalContainer: {
        marginTop: 12,
    },
    profileContain: {
        marginTop: 21,
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 42,
        borderBottomWidth: 1,
        borderColor: COLORS.surface

    },
    profileText: {
        fontSize: 16,
        fontWeight: '600'
    },
    shopContain: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    innerText: {
        fontSize: 15,
        fontWeight: '400',
        paddingRight: 15,
    },
    deleteText: {
        marginTop: 44,
        color: COLORS.customColor6,
        fontSize: 13,
        fontWeight: '600',
    },
    sladaContain: {
        marginTop: 31,
    },
    sladaText: {
        fontSize: 20,
        fontWeight: '800',
    },
    versionText: {
        fontSize: 12,
        fontWeight: '400'
    },
    modalBackground: {
        flex: 1,
        backgroundColor: COLORS.onTertiary,
        justifyContent: 'center',
    },
    deleteContainer: {
        backgroundColor: COLORS.background,
        borderRadius: 10,
        marginHorizontal: 14,
        height: 225,
        justifyContent: 'center',
        alignItems: 'center',
    },
    DeleteText: {
        fontSize: 20,
        fontWeight: '700',
        marginTop: 50
    },
    deleteText1: {
        fontSize: 20,
        fontWeight: '700',
    },
    restoreText: {
        marginTop: 7,
        fontSize: 13,
        fontWeight: '600',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 23
    },
    cancleButtonContainer: {
        backgroundColor: COLORS.onBackground,
        borderRadius: 10,
        paddingHorizontal: 10,
    },
    cancleButtonText: {
        fontSize: 16,
        fontWeight: 300,
    },
    deleteButtonContainer: {
        backgroundColor: COLORS.customColor6,
        borderRadius: 10,
        paddingHorizontal: 10,
        marginLeft: 15
    },
    deleteButtonText: {
        fontSize: 16,
        fontWeight: 300,
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
        marginBottom: 215,
        // marginLeft: 150,
    },
    middleContainer: {
        height: 50,
        width: 50,
        backgroundColor: COLORS.errorContainer,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    innerContainer: {
        height: 22,
        width: 22,
        backgroundColor: COLORS.tertiaryContainer,
        borderRadius: 11,
        justifyContent: 'center',
        alignItems: 'center',
    },
    innerText1: {
        color: COLORS.background,
    },
})