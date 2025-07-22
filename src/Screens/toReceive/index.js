import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import Images from '../../assets/Images';
import { COLORS } from '../../constants/themes';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { Button } from 'react-native-paper';
import Entypo from 'react-native-vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';
import { RouteName } from '../../navigation/RouteName';

const ToReceive = () => {

  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.receiveContainer}>
        <Image source={Images.receive1} style={styles.receiveImage} />
        <View>
          <Text style={styles.receiveText}>To Recieve</Text>
          <Text style={styles.orderText}>My Orders</Text>
        </View>

        <TouchableOpacity style={styles.iconContainer}>
          <Image source={Images.icon1} style={styles.iconImage} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconContainer}>
          <Image source={Images.icon2} style={styles.iconImage} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate(RouteName.REVIEW_OPTION_SCREEN)}>
          <SimpleLineIcons name="settings" size={18} color={COLORS.primary} />
        </TouchableOpacity>

        <View style={styles.notification} />
      </View>

      <View style={styles.packedContainer}>
        <View style={styles.imageContainer}>
          <View style={styles.imageContain}>
            <Image source={Images.item1} style={styles.image1} />
            <Image source={Images.sale3} style={styles.image1} />
          </View>
          <Image source={Images.recive3} style={styles.image2} />
        </View>

        <View style={styles.orderContainer}>
          <View style={styles.orderContain}>
            <Text style={styles.orderText1}>Order #92287157</Text>
            <View style={styles.itemContain}>
              <Text style={styles.itemText}>3 items</Text>
            </View>
          </View>
          <Text style={styles.deliveryText}>Standard Delivery</Text>

          <View style={styles.packedContainer1}>
            <Text style={styles.packedText}>Packed</Text>

            <Button
              mode="contained"
              labelStyle={styles.trackButtonText}
              style={styles.trackButtonContainer}
            >
              Track
            </Button>
          </View>
        </View>
      </View>

      <View style={styles.shippedContainer}>
        <View style={styles.imageContainer}>
          <View style={styles.imageContain}>
            <Image source={Images.receive4} style={styles.image1} />
            <Image source={Images.receive5} style={styles.image1} />
          </View>
          <View style={styles.imageContain}>
            <Image source={Images.receive6} style={styles.image1} />
            <Image source={Images.receive7} style={styles.image1} />
          </View>
        </View>

        <View style={styles.orderContainer}>
          <View style={styles.orderContain}>
            <Text style={styles.orderText1}>Order #92287157</Text>
            <View style={styles.itemContain}>
              <Text style={styles.itemText}>4 items</Text>
            </View>
          </View>
          <Text style={styles.deliveryText}>Standard Delivery</Text>

          <View style={styles.packedContainer1}>
            <Text style={styles.packedText}>Shipped</Text>

            <Button
              mode="contained"
              labelStyle={styles.trackButtonText}
              style={styles.trackButtonContainer}
            >
              Track
            </Button>
          </View>
        </View>
      </View>

      <View style={styles.shippedContainer}>
        <View style={styles.imageContainer}>
          <View style={styles.imageContain}>
            <Image source={Images.recieve8} style={styles.image3} />
            <Image source={Images.receive9} style={styles.image3} />
          </View>
        </View>

        <View style={styles.orderContainer}>
          <View style={styles.orderContain}>
            <Text style={styles.orderText1}>Order #92287157</Text>
            <View style={styles.itemContain}>
              <Text style={styles.itemText}>2 items</Text>
            </View>
          </View>
          <Text style={styles.deliveryText}>Standard Delivery</Text>

          <View style={styles.packedContainer1}>
            <Text style={styles.packedText}>Shipped</Text>

            <View style={styles.checkIcon}>
              <Entypo name="check" size={14} color={COLORS.background} />
            </View>

            <Button
              mode="contained"
              labelStyle={styles.reviewButtonText}
              style={styles.reviewButtonContainer}
            >
              Review
            </Button>
          </View>
        </View>
      </View>

      <View style={styles.shippedContainer}>
        <View style={styles.imageContainer}>
          <View style={styles.imageContain}>
            <Image source={Images.bages2} style={styles.image1} />
            <Image source={Images.lingerie3} style={styles.image1} />
          </View>
          <View style={styles.imageContain}>
            <Image source={Images.hoodies2} style={styles.image1} />
            <Image source={Images.hoodies1} style={styles.image1} />
          </View>
        </View>

        <View style={styles.orderContainer}>
          <View style={styles.orderContain}>
            <Text style={styles.orderText1}>Order #92287157</Text>
            <View style={styles.itemContain}>
              <Text style={styles.itemText}>2 items</Text>
            </View>
          </View>
          <Text style={styles.deliveryText}>Standard Delivery</Text>

          <View style={styles.packedContainer1}>
            <Text style={styles.packedText}>Shipped</Text>

            <View style={styles.checkIcon}>
              <Entypo name="check" size={14} color={COLORS.background} />
            </View>

            <Button
              mode="contained"
              labelStyle={styles.reviewButtonText}
              style={styles.reviewButtonContainer}
            >
              Review
            </Button>
          </View>
        </View>
      </View>

      <View style={styles.shippedContainer}>
        <View style={styles.imageContainer}>
          <View style={styles.imageContain}>
            <Image source={Images.sale6} style={styles.image4} />
          </View>
        </View>

        <View style={styles.orderContainer}>
          <View style={styles.orderContain}>
            <Text style={styles.orderText1}>Order #92287157</Text>
            <View style={styles.itemContain}>
              <Text style={styles.itemText}>2 items</Text>
            </View>
          </View>
          <Text style={styles.deliveryText}>Standard Delivery</Text>

          <View style={styles.packedContainer1}>
            <Text style={styles.packedText}>Shipped</Text>

            <View style={styles.checkIcon}>
              <Entypo name="check" size={14} color={COLORS.background} />
            </View>

            <Button
              mode="contained"
              labelStyle={styles.reviewButtonText}
              style={styles.reviewButtonContainer}
            >
              Review
            </Button>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default ToReceive;

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
    height: 40,
    width: 40,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: COLORS.background,
    elevation: 5,
    resizeMode: 'contain',
  },
  receiveText: {
    fontSize: 21,
    fontWeight: '700',
  },
  orderText: {
    fontSize: 14,
    fontWeight: '500',
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
    width: 15,
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
  packedContainer: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
 imageContainer: {
    height: 90,
    width: 90,
    borderWidth: 2,
    borderColor: COLORS.background,
    elevation: 5,
    borderRadius: 8,
    paddingHorizontal: 2,
    backgroundColor: COLORS.background,
  },
  image1: {
    height: 40,
    width: 39,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: COLORS.background,
    elevation: 2,
  },
  image2: {
    height: 39,
    width: 83,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: COLORS.background,
    marginTop: 5,
    marginRight: 3,
    elevation: 2,
  },
  imageContain: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  orderContain: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  orderText1: {
    fontSize: 14,
    fontWeight: '700',
  },
  itemContain: {
    backgroundColor: COLORS.secondary,
    paddingVertical: 2,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginLeft: 70,
  },
  itemText: {
    fontSize: 13,
    fontWeight: '500',
  },
  deliveryText: {
    fontSize: 14,
    fontWeight: '500',
    marginTop: 3,
  },
  orderContainer: {
    marginLeft: 10,
  },
  trackButtonText: {
    fontSize: 16,
    fontWeight: '500',
  },
  trackButtonContainer: {
    borderRadius: 10,
  },
  packedContainer1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  packedText: {
    fontSize: 18,
    fontWeight: '700',
  },
  shippedContainer: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  reviewButtonText: {
    fontSize: 16,
    fontWeight: '500',
    color: COLORS.primary,
  },
  reviewButtonContainer: {
    borderRadius: 10,
    backgroundColor: COLORS.background,
    borderWidth: 2,
    borderColor: COLORS.primary,
  },
  image3: {
    height: 85,
    width: 39,
    borderRadius: 8,
    elevation: 2,
  },
  checkIcon: {
    height: 22,
    width: 22,
    backgroundColor: COLORS.primary,
    borderRadius: 11,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 30,
  },
  image4: {
    height: 82,
    width: 83,
    borderRadius: 8,
    marginTop: 2,
  },
});
