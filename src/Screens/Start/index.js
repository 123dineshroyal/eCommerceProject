import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Images from '../../assets/Images';
import { useNavigation } from '@react-navigation/native';
import { COLORS } from '../../constants/themes';
import { Button } from 'react-native-paper';
import { RouteName } from '../../navigation/RouteName';

const Start = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contain}>
        <View style={styles.imageContainer}>
          <Image source={Images.shoppe} style={styles.shoppeImage} />
        </View>
      </View>
      <View style={styles.shoppeContainer}>
        <Text style={styles.shoppeText}>Shoppe</Text>
        <Text style={styles.shoppeSubText}>
          Beautiful eCommerce UI Kit{'\n'} for your online store
        </Text>
      </View>

      <Button
        mode="contained"
        labelStyle={styles.staredButtonText}
        style={styles.startedButton}
        onPress={() => navigation.navigate(RouteName.CREATE_ACCOUNT_SCREEN)}
      >
        Let's get started
      </Button>

      <View style={styles.existContainer}>
        <Text style={styles.accountExistText}>I already have an account</Text>
        <TouchableOpacity style={styles.nextArrow}>
          <Icon name="arrow-forward" size={20} color={COLORS.background} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    justifyContent: 'flex-end',
    padding: 20,
  },
  contain: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 134,
    width: 134,
    borderColor: COLORS.background,
    borderWidth: 1,
    borderRadius: 100,
    backgroundColor: COLORS.background,
    shadowColor: COLORS.shadow,
    shadowRadius: 8,
    elevation: 5,
  },
  shoppeImage: {
    width: 81.4,
    height: 92,
  },
  shoppeContainer: {
    marginTop: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  shoppeText: {
    fontSize: 52,
    fontWeight: '700',
  },
  shoppeSubText: {
    fontSize: 19,
    fontWeight: '300',
    lineHeight: 33,
    textAlign: 'center',
    marginTop: 10,
  },
  startedButton: {
    paddingVertical: 10,
    marginTop: 106,
  },
  staredButtonText: {
    fontSize: 18,
    color: COLORS.onPrimary,
    fontWeight: '300',
  },
  existContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 49,
    marginTop: 20,
  },
  accountExistText: {
    fontSize: 15,
    fontWeight: '300',
  },
  nextArrow: {
    height: 30,
    width: 30,
    borderColor: COLORS.primary,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.primary,
    borderRadius: 30,
    marginLeft: 12,
  },
});

export default Start;
