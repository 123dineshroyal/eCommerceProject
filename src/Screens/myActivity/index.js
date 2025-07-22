import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ImageBackground
} from 'react-native';
import Images from '../../assets/Images';
import { COLORS } from '../../constants/themes';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { RouteName } from '../../navigation/RouteName';



const MyActivity = () => {

  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.receiveContainer}>
        <Image source={Images.receive1} style={styles.receiveImage} />

        <Text style={styles.receiveText}>My Activity</Text>

        <TouchableOpacity style={styles.iconContainer}>
          <Image source={Images.icon1} style={styles.iconImage} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconContainer}>
          <Image source={Images.icon2} style={styles.iconImage} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate(RouteName.HISTORY_SCREEN)}>
          <SimpleLineIcons name="settings" size={18} color={COLORS.primary} />
        </TouchableOpacity>

        <View style={styles.notification} />
      </View>

      <Text style={styles.monthText}>April</Text>

      <View style={styles.totalContainer}>
        <TouchableOpacity style={styles.arrowIcon}>
          <Entypo name="chevron-left" size={23} color={COLORS.primary} />
        </TouchableOpacity>

        <View style={styles.totalContain}>
          <ImageBackground source={Images.total} style={styles.totalImage}>
            <View style={styles.totalTextContain}>
              <Text style={styles.totalText}>Total</Text>
              <Text style={styles.totalAmount}>$365,00</Text>
            </View>
          </ImageBackground>
        </View>

        <TouchableOpacity style={styles.arrowIcon}>
          <Entypo name="chevron-right" size={23} color={COLORS.primary} />
        </TouchableOpacity>
      </View>

      <View style={styles.totalContainer1}>
        <View style={styles.totalContain1}>
          <Text style={styles.totalText1}>Clothing $183,00</Text>
          <Text style={styles.totalText2}>Lingerie $92,00</Text>
        </View>
        <View style={styles.totalContain1}>
          <Text style={styles.totalText3}>Shoes $47,00</Text>
          <Text style={styles.totalText4}>Bags $43,00</Text>
        </View>
      </View>

      <View style={styles.productStepContainer}>
        <View style={styles.productStepContain}>
          <View style={styles.orderStep1}>
            <View style={styles.stepContain}>
              <Text style={styles.stepNumber1}>12</Text>
            </View>
          </View>

          <View style={styles.orderStep1}>
            <View style={styles.stepContain}>
              <Text style={styles.stepNumber1}>7</Text>
            </View>
          </View>

          <View style={styles.orderStep1}>
            <View style={styles.stepContain}>
              <Text style={styles.stepNumber1}>5</Text>
            </View>
          </View>
        </View>

        <View style={styles.productTextContain}>
          <Text style={styles.orderText}>Ordered</Text>
          <Text style={styles.orderText}>Recieved</Text>
          <Text style={styles.orderText}>To Recieve</Text>
        </View>
      </View>

      <Button
        mode="contained"
        labelStyle={styles.orderHistoryButtonText}
        style={styles.orderHistoryButtonContainer}
      >
        Order History
      </Button>
    </SafeAreaView>
  );
};
export default MyActivity;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: COLORS.background,
  },
  receiveContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  receiveImage: {
    height: 44,
    width: 44,
    borderRadius: 20,
    borderWidth: 4,
    borderColor: COLORS.background,
    elevation: 5,
    resizeMode: 'contain',
  },
  receiveText: {
    fontSize: 21,
    fontWeight: '700',
  },
  iconContainer: {
    height: 35,
    width: 35,
    backgroundColor: COLORS.primaryContainer,
    borderRadius: 17,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 15,
  },
  iconImage: {
    height: 15,
    width: 17,
  },
  notification: {
    position: 'absolute',
    height: 8,
    width: 8,
    borderRadius: 4,
    backgroundColor: COLORS.primary,
    right: 66,
    bottom: 34,
  },
  monthText: {
    height: 40,
    backgroundColor: COLORS.secondary,
    borderRadius: 10,
    textAlign: 'center',
    paddingTop: 10,
    color: COLORS.primary,
    fontSize: 18,
    fontWeight: '700',
    marginTop: 25,
  },
  totalContainer: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  arrowIcon: {
    backgroundColor: COLORS.secondary,
    height: 30,
    width: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  totalContain: {
    height: 242,
    width: 242,
    borderRadius: 121,
    backgroundColor: COLORS.background,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  totalImage: {
    height: 213,
    width: 213,
    justifyContent: 'center',
    alignItems: 'center',
  },
  totalTextContain: {
    height: 121,
    width: 121,
    backgroundColor: COLORS.background,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 60,
    elevation: 5
  },
  totalText: {
    fontSize: 16,
    fontWeight: '500',
  },
  totalAmount: {
    fontWeight: '700',
    fontSize: 21
  },
  totalContainer1: {
    marginTop: 7,

  },
  totalContain1: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 9
  },
  totalText1: {
    fontSize: 15,
    fontWeight: 500,
    backgroundColor: COLORS.customColor1,
    color: COLORS.background,
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 15

  },
  totalText2: {
    fontSize: 15,
    fontWeight: 500,
    backgroundColor: COLORS.customColor2,
    color: COLORS.background,
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 15,
    marginLeft: 7,
  },
  totalText3: {
    fontSize: 15,
    fontWeight: 500,
    backgroundColor: COLORS.customColor3,
    color: COLORS.background,
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 15
  },
  totalText4: {
    fontSize: 15,
    fontWeight: 500,
    backgroundColor: COLORS.customColor4,
    color: COLORS.background,
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 15,
    marginLeft: 7,
  },
  productStepContainer: {
    marginTop: 20,
    paddingHorizontal: 32,
  },
  productStepContain: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  orderStep1: {
    height: 80,
    width: 80,
    borderRadius: 40,
    backgroundColor: COLORS.background,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3
  },
  stepContain: {
    height: 50,
    width: 50,
    borderRadius: 40,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  stepNumber1: {
    fontSize: 21,
    fontWeight: '500',
    color: COLORS.background,
  },
  productTextContain: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    marginLeft: 15
  },
  orderText: {
    fontSize: 13,
    fontWeight: '700'
  },
  orderHistoryButtonContainer:{
    marginTop:13,
    borderRadius:10
  },
  orderHistoryButtonText:{
    fontSize:16,
    fontWeight:'300'
  },
});
