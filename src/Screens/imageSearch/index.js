import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import Images from '../../assets/Images';
import { COLORS, SIZES } from '../../constants/themes';
import Feather from 'react-native-vector-icons/Feather';

const ImageSearch = () => {
  return (
    <ImageBackground source={Images.searchImg} style={styles.backgroundImg}>
      <View style={styles.imageContainer}>
        <Feather name="image" size={40} color={COLORS.background} />
        <Text style={styles.cameraIcon} />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.galleryText}>Gallery</Text>
        <Text style={styles.cameraText}>Camera</Text>
      </View>
    </ImageBackground>
  );
};
export default ImageSearch;

const styles = StyleSheet.create({
  backgroundImg: {
    height: '100%',
    width: SIZES.width,
    resizeMode: 'contain',
    justifyContent: 'flex-end',
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginLeft: 48,
    marginBottom: 14,
  },
  cameraIcon: {
    height: 70,
    width: 70,
    backgroundColor: COLORS.primary,
    borderRadius: 35,
    borderWidth: 6,
    borderColor: COLORS.background,
    marginLeft: 76,
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginLeft: 48,
    marginBottom: 8,
  },
  galleryText: {
    fontSize: 16,
    fontWeight: '500',
  },
  cameraText: {
    fontSize: 16,
    fontWeight: '700',
    marginLeft: 76,
  },
});
