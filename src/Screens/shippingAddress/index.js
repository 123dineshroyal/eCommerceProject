import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    Image,
    TextInput
} from 'react-native';
import Images from 'react-native';
import { COLORS } from '../../constants/themes';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Button } from 'react-native-paper';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { RouteName } from '../../navigation/RouteName';



const ShippingAddress = () => {

    const navigation = useNavigation();

    const [address, setAddress] = useState('Romina');
    const [city, setCity] = useState('Banglore');
    const [postCode, setPostCode] = useState('188886');
    const [phoneNumber, setPhoneNumber] = useState('1234567890')

    return (
        <SafeAreaView style={styles.mainContainer}>
            <Text style={styles.settingText}>Settings</Text>
            <Text style={styles.methodText}>Payment Methods</Text>

            <View style={styles.shippingAddressContainer}>
                <Text style={styles.countryText}>Country</Text>
                <View style={styles.countryContain}>
                    {/* <Text style={styles.countryName}>Choose your country</Text> */}
                    <Text style={styles.countryName}>Vietnam</Text>

                    <TouchableOpacity style={styles.arrowContainer}>
                        <MaterialCommunityIcons
                            name="arrow-right"
                            size={22}
                            color={COLORS.onPrimary}
                        />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.shippingAddressContainer}>
                <Text style={styles.address}>Address</Text>
                <TextInput
                    style={styles.inputStyle}
                    placeholder='Required'
                    placeholderTextColor={COLORS.customColor7}
                    value={address}
                    onChangeText={setAddress}
                />
            </View>

            <View style={styles.shippingAddressContainer}>
                <Text style={styles.address}>Town / City</Text>
                <TextInput
                    style={styles.inputStyle}
                    placeholder='Required'
                    placeholderTextColor={COLORS.customColor7}
                    value={city}
                    onChangeText={setCity}
                />
            </View>

            <View style={styles.shippingAddressContainer}>
                <Text style={styles.address}>Postcode</Text>
                <TextInput
                    style={styles.inputStyle}
                    placeholder='Required'
                    placeholderTextColor={COLORS.customColor7}
                    value={postCode}
                    onChangeText={setPostCode}
                />
            </View>

            <View style={styles.shippingAddressContainer}>
                <Text style={styles.address}>Phone Number</Text>
                <TextInput
                    style={styles.inputStyle}
                    placeholder='Required'
                    placeholderTextColor={COLORS.customColor7}
                    value={phoneNumber}
                    onChangeText={setPhoneNumber}
                />
            </View>

            <Button
                mode="contained"
                labelStyle={styles.saveChangesButtonText}
                onPress={() => navigation.navigate(RouteName.CHOOSE_YOUR_COUNTRY_SCREEN)}
                style={styles.saveChangesButtonContainer}
            >
                Save Changes
            </Button>

        </SafeAreaView>
    )
}
export default ShippingAddress;

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
    shippingAddressContainer: {
        marginTop: 25,
    },
    countryText: {
        fontSize: 13,
        fontWeight: '600',
    },
    countryName: {
        fontSize: 20,
        fontWeight: '700',
        color: COLORS.primary,
        marginTop: 2,
    },
    arrowContainer: {
        height: 30,
        width: 30,
        backgroundColor: COLORS.primary,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    countryContain: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    address: {
        fontSize: 13,
        fontWeight: '600',
    },
    inputStyle: {
        height: 37,
        backgroundColor: COLORS.elevation.level3,
        borderRadius: 10,
        marginTop: 4,
        fontSize: 16,
        fontWeight: '500',
        paddingHorizontal: 10
    },
    saveChangesButtonContainer: {
        position: 'absolute',
        borderRadius: 10,
        marginTop: 20,
        bottom: 20,
        left: 20,
        right: 20

    },
    saveChangesButtonText: {
        fontSize: 16,
        color: COLORS.onPrimary,
        fontWeight: '300',
    },
})
