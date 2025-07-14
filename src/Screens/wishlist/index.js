import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    SafeAreaView,
} from 'react-native';
import { COLORS } from '../../constants/themes';

const WishList = () =>{
    return(
        <View>
            <Text>Hello Its Me</Text>
        </View>
    )
}
export default WishList;

const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        padding:20,
        backgroundColor:COLORS.background,
    }
})