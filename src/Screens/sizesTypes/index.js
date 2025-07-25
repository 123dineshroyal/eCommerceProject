import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    FlatList

} from 'react-native';
import { COLORS } from '../../constants/themes';
import { useState } from 'react';
import Entypo from 'react-native-vector-icons/Entypo';


const SizesTypes = () => {

    const currency = ['US', 'EU', 'UK'];

    const [selectedLanguage, setSelectedLanguage] = useState('US');

    const renderItem = ({ item }) => {
        const isSelected = selectedLanguage === item;

        return (
            <TouchableOpacity
                style={[styles.item, isSelected && styles.selectedItem]}
                onPress={() => setSelectedLanguage(item)}
            >
                <Text style={styles.text}>{item}</Text>
                <View style={[styles.circle, isSelected && styles.selectedCircle]} >
                    <Entypo name="check" size={14} color={isSelected && COLORS.background || COLORS.tertiaryContainer} />
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <SafeAreaView style={styles.mainContainer}>
            <Text style={styles.settingText}>Settings</Text>
            <Text style={styles.sizesText}>Sizes</Text>

            <View style={styles.sizes}>
                <FlatList
                    data={currency}
                    renderItem={renderItem}
                    keyExtractor={(item) => item}
                />
            </View>


        </SafeAreaView>
    )
}
export default SizesTypes;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        padding: 20,
        backgroundColor: COLORS.background
    },
    settingText: {
        fontSize: 28,
        fontWeight: '800',
    },
    sizesText: {
        fontSize: 16,
        fontWeight: '500'
    },
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: COLORS.secondary,
        paddingHorizontal: 16,
        marginBottom: 10,
        borderRadius: 10,
        height: 40

    },
    selectedItem: {
        backgroundColor: COLORS.primaryContainer,
    },
    text: {
        fontSize: 16,
        fontWeight: '600'
    },
    circle: {
        width: 22,
        height: 22,
        borderRadius: 11,
        borderWidth: 2,
        borderColor: COLORS.background,
        backgroundColor: COLORS.tertiaryContainer,
        justifyContent: 'center',
        alignItems: 'center'

    },
    selectedCircle: {
        backgroundColor: COLORS.primary,
    },
    sizes: {
        marginTop: 25
    }
})