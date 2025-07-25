import {
    View,
    Text,
    SafeAreaView,
    TouchableOpacity,
    StyleSheet,
    Image,
    TextInput
} from 'react-native';
import Images from '../../assets/Images';
import { COLORS } from '../../constants/themes';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { Button } from 'react-native-paper';
import { RouteName } from '../../navigation/RouteName';
import FontAwesome from 'react-native-vector-icons/FontAwesome';



const SettingsProfile = () => {


    const navigation = useNavigation();

    const [userName, setUserName] = useState('Romina');
    const [email, setEmail] = useState('gmail@example.com');
    const [password, setPassword] = useState('123456789022')

    return (
        <SafeAreaView style={styles.mainContainer}>
            <Text style={styles.settingText}>Settings</Text>
            <Text style={styles.profileText}>Your Profile</Text>

            <Image source={Images.profile1} style={styles.profileImage} />

            <View style={styles.pencilIcon}>
                <FontAwesome name="pencil" size={18} color={COLORS.background} />

            </View>    

            <View style={styles.inputContain}>
                <TextInput
                    value={userName}
                    onChangeText={setUserName}
                    placeholder='Enter User Name'
                    style={styles.nameInput}
                />

                <TextInput
                    value={email}
                    onChangeText={setEmail}
                    placeholder='Enter Email'
                    style={styles.nameInput}
                />

                <TextInput
                    value={password}
                    onChangeText={setPassword}
                    placeholder='Enter Password'
                    style={styles.nameInput}
                    secureTextEntry={true}
                />
            </View>

            <Button
                mode="contained"
                labelStyle={styles.saveChangesButtonText}
                onPress={() => navigation.navigate(RouteName.SETTINGS_ADD_CARD_SCREEN)}
                style={styles.saveChangesButtonContainer}
            >
                Save Changes
            </Button>
        </SafeAreaView>
    )
}
export default SettingsProfile;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        padding: 20,
        backgroundColor: COLORS.background,
    },
    settingText: {
        fontSize: 28,
        fontWeight: '700',
    },
    profileText: {
        marginTop: 10,
        fontSize: 16,
        fontWeight: '600'
    },
    profileImage: {
        height: 110,
        width: 110,
        marginTop: 18,
        borderWidth: 5,
        borderRadius: 55,
        elevation: 5,
        borderColor: COLORS.background,
    },
    inputContain: {
        marginTop: 10,
    },
    nameInput: {
        marginTop: 10,
        height: 50,
        backgroundColor: COLORS.primaryContainer,
        borderRadius: 10,
        fontSize: 17,
        fontWeight: '400',
        paddingLeft: 20,
    },
    saveChangesButtonContainer: {
        borderRadius: 10,
        position: 'absolute',
        bottom: 20,
        left: 20,
        right: 20,
    },
    saveChangesButtonText: {
        fontSize: 16,
        color: COLORS.onPrimary,
        fontWeight: '300',
    },
    pencilIcon:{
        position:'absolute',
        height:30,
        width:30,
        borderRadius:15,
        backgroundColor:COLORS.primary,
        borderWidth:2,
        borderColor:COLORS.background,
        justifyContent:'center',
        alignItems:'center',
        left:105,
        top:110

    }
})