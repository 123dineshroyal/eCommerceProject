import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    Image
} from 'react-native';
import Images from '../../assets/Images';
import { COLORS } from '../../constants/themes';

const About = () => {
    return (
        <SafeAreaView style={styles.mainContainer}>
            <View style={styles.imageContain}>
                <Image source={Images.shoppe} style={styles.shopeeImage} />
            </View>
            <Text style={styles.aboutText}>About Shoppe</Text>
            <Text style={styles.aboutDescription}>Shoppe - Shopping UI kit" is likely a user interface (UI) kit designed to facilitate the development of e-commerce or shopping-related applications. UI kits are collections of pre-designed elements, components, and templates that developers and designers can use to create consistent and visually appealing user interfaces.</Text>
            <Text style={styles.aboutText1}>If you need help or you have any questions, feel free to contact me by email.</Text>
            <Text style={styles.emailText}>hello@mydomain.com</Text>
        </SafeAreaView>
    )
}
export default About;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        padding: 20,
        backgroundColor: COLORS.background,
    },
    imageContain: {
        marginTop: 90,
        justifyContent: 'center',
        alignItems: 'center',
    },
    shopeeImage: {
        width: 81,
        height: 92,
    },
    aboutText: {
        marginTop: 103,
        fontSize: 28,
        fontWeight: '700',
    },
    aboutDescription:{
        marginTop:16,
        fontSize:16,
        fontWeight:'300',
        fontFamily:'Nunito Sans',
        lineHeight:27,
        paddingRight:5,
    },
    aboutText1:{
        marginTop:30,
        fontSize:16,
        fontWeight:'300',
        fontFamily:'Nunito Sans',
        lineHeight:27,
        paddingRight:5,
    },
    emailText:{
        marginTop:10,
        fontSize:17,
        fontWeight:'700',
    }
})