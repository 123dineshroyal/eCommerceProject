import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  StyleSheet,
  Image,
} from 'react-native';
import Images from '../../assets/Images';
import { COLORS, SIZES } from '../../constants/themes';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native/types_generated/index';
import { RouteName } from '../../navigation/RouteName';

const Live = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Image source={Images.live1} style={styles.liveImage} />
      <View style={styles.liveContainer}>
        <Feather name="eye" size={22} color="black" />
        <Text style={styles.liveMember}>2,530</Text>
        <View style={styles.liveTag}>
          <Text style={styles.dot} />
          <Text style={styles.liveTagText}>Live</Text>
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate(RouteName.FLASH_SALE_FULL_SCREEN)}
        >
          <FontAwesome5 name="forward" size={24} color={COLORS.primary} />
        </TouchableOpacity>

        <Button
          mode="contained"
          labelStyle={styles.shopButtonText}
          style={styles.shopButtonContainer}
        >
          Shop
        </Button>
      </View>
    </SafeAreaView>
  );
};
export default Live;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: COLORS.background,
    justifyContent: 'flex-end',
  },
  liveImage: {
    marginTop: -60,
    resizeMode: 'contain',
    width: SIZES.width,
    height: SIZES.height - 170,
    borderRadius: 20,
  },
  liveContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 27,
    marginBottom: 94,
  },
  liveTag: {
    flexDirection: 'row',
    backgroundColor: COLORS.outline,
    color: 'white',
    borderRadius: 6,
    fontSize: 12,
    fontWeight: '500',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 5,
    width: 40,
  },
  dot: {
    height: 6,
    width: 6,
    borderRadius: 3,
    backgroundColor: COLORS.background,
  },
  liveTagText: {
    color: COLORS.background,
    fontSize: 12,
    fontWeight: '500',
  },
  shopButtonText: {
    fontSize: 16,
    fontWeight: '300',
  },
  shopButtonContainer: {
    width: 120,
    borderRadius: 15,
  },
  liveMember: {
    fontSize: 12,
    fontWeight: '600',
    marginLeft: -24,
  },
});
