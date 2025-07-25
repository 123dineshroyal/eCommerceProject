import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    ScrollView
} from 'react-native';
import { COLORS } from '../../constants/themes';
import Entypo from 'react-native-vector-icons/Entypo';


const ChooseYourCountry = () => {
    return (
        <SafeAreaView style={styles.mainContainer}>
            <Text style={styles.settingText}>Settings</Text>
            <Text style={styles.countryText}>Country</Text>

            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.selectedCountryName}>
                    <Text style={styles.indiaText}>India</Text>
                    <View style={styles.checkIcon}>
                        <Entypo name="check" size={14} color={COLORS.background} />
                    </View>
                </View>

                <View>
                    <Text style={styles.elphabet}>A</Text>
                    <Text style={styles.counteryAName}>Afghanistan</Text>
                    <Text style={styles.counteryAName}>Albania</Text>
                    <Text style={styles.counteryAName}>Algeria</Text>
                    <Text style={styles.counteryAName}>Andorra</Text>
                    <Text style={styles.counteryAName}>Angola</Text>
                    <Text style={styles.counteryAName}>Antigua and Barbuda</Text>
                    <Text style={styles.counteryAName}>Argentina</Text>
                    <Text style={styles.counteryAName}>Armenia</Text>
                    <Text style={styles.counteryAName}>Aruba</Text>
                    <Text style={styles.counteryAName}>Australia</Text>
                    <Text style={styles.counteryAName}>Austria</Text>
                    <Text style={styles.counteryAName}>Azerbaijan</Text>
                </View>

                  <View>
                    <Text style={styles.elphabet}>B</Text>
                    <Text style={styles.counteryAName}>Bahamas</Text>
                    <Text style={styles.counteryAName}>Bahrain</Text>
                    <Text style={styles.counteryAName}>Bangladesh</Text>
                    <Text style={styles.counteryAName}>Barbados</Text>
                    <Text style={styles.counteryAName}>Belarus</Text>
                    <Text style={styles.counteryAName}>Belgium</Text>
                    <Text style={styles.counteryAName}>Belize</Text>
                    <Text style={styles.counteryAName}>Benin</Text>
                    <Text style={styles.counteryAName}>Bhutan</Text>
                    <Text style={styles.counteryAName}>Bolivia</Text>
                    <Text style={styles.counteryAName}>Botswana</Text>
                    <Text style={styles.counteryAName}>Brunei</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default ChooseYourCountry;

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
    countryText: {
        fontSize: 16,
        fontWeight: '500'
    },
    selectedCountryName: {
        marginTop: 25,
        height: 40,
        backgroundColor: COLORS.primaryContainer,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    indiaText: {
        fontSize: 16,
        fontWeight: '300',
        color: COLORS.primary,
        paddingLeft: 15
    },
    checkIcon: {

        height: 22,
        width: 22,
        backgroundColor: COLORS.primary,
        borderRadius: 11,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
        borderWidth: 2,
        borderColor: COLORS.background,

    },
    elphabet: {
        backgroundColor: COLORS.secondary,
        fontSize: 16,
        fontWeight: '600',
        width: 52,
        paddingVertical: 3,
        textAlign: 'center',
        marginTop: 20,
    },
    counteryAName:{
        marginTop:20,
        fontSize:16,
        fontWeight:'300',
    }
})