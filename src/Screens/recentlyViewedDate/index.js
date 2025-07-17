import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import Images from '../../assets/Images';
import { COLORS, SIZES } from '../../constants/themes';
import { Calendar } from 'react-native-calendars';
import { useState } from 'react';
//import { Directions } from 'react-native-gesture-handler';
import Entypo from 'react-native-vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';
import { RouteName } from '../../navigation/RouteName';

const RecentlyViewedDate = () => {
  const navigation = useNavigation();
  const [selectedDate, setSelectedDate] = useState('2025-04-18');

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Text style={styles.recentlyText}>Recently viewed</Text>

      <View style={styles.calenderContainer}>
        <Calendar
          renderArrow={direction => (
            <View style={styles.arrow}>
              <Entypo
                name={direction === 'left' ? 'chevron-left' : 'chevron-right'}
                size={20}
                color={COLORS.primary}
              />
            </View>
          )}
          dayComponent={({ date, state }) => {
            return (
              <View style={styles.dayContainer}>
                <Text style={styles.dayText}>{date.day}</Text>
              </View>
            );
          }}
          style={styles.calendar}
          current={selectedDate}
          onDayPress={day => setSelectedDate(day.dateString)}
          monthFormat={'MMMM'}
          hideExtraDays={true}
          firstDay={1}
          hideDayNames={true}
          markedDates={{
            [selectedDate]: {
              // customStyles:{
              //   container:{
              //     backgroundColor:COLORS.primaryContainer,
              //     borderRadius:5
              //   },
              //   text:{
              //     color:COLORS.primary,
              //   }
              // }
              selected: true,
              selectedColor: COLORS.primaryContainer,
              selectedTextColor: COLORS.primary,
            },
          }}
        />
        <TouchableOpacity style={styles.upIcon} onPress={() => navigation.navigate(RouteName.RECENTLY_VIEWED_DATE_CHOSEN_SCREEN)}>
          <Entypo name="chevron-up" size={25} color={COLORS.primary} />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.discountContainer1}>
          <View style={styles.discount}>
            <TouchableOpacity style={styles.discountProduct}>
              <Image source={Images.just2} style={styles.discountImage} />
              <Text style={styles.discountText1}>
                Lorem ipsum dolor sit {'\n'}amet consectetur
              </Text>
              <Text style={styles.discountPrice}>$17,00</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.discountProduct}>
              <Image source={Images.sale1} style={styles.discountImage} />
              <Text style={styles.discountText1}>
                Lorem ipsum dolor sit {'\n'}amet consectetur
              </Text>
              <Text style={styles.discountPrice}>$17,00</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.discount}>
            <TouchableOpacity style={styles.discountProduct}>
              <Image source={Images.sale2} style={styles.discountImage} />
              <Text style={styles.discountText1}>
                Lorem ipsum dolor sit {'\n'}amet consectetur
              </Text>
              <Text style={styles.discountPrice}>$17,00</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.discountProduct}>
              <Image source={Images.item2} style={styles.discountImage} />
              <Text style={styles.discountText1}>
                Lorem ipsum dolor sit {'\n'}amet consectetur
              </Text>
              <Text style={styles.discountPrice}>$17,00</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.discount}>
            <TouchableOpacity style={styles.discountProduct}>
              <Image source={Images.sale4} style={styles.discountImage} />
              <Text style={styles.discountText1}>
                Lorem ipsum dolor sit {'\n'}amet consectetur
              </Text>
              <Text style={styles.discountPrice}>$17,00</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.discountProduct}>
              <Image source={Images.just3} style={styles.discountImage} />
              <Text style={styles.discountText1}>
                Lorem ipsum dolor sit {'\n'}amet consectetur
              </Text>
              <Text style={styles.discountPrice}>$17,00</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default RecentlyViewedDate;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: COLORS.background,
  },
  recentlyText: {
    fontSize: 28,
    fontWeight: '700',
  },
  calenderContainer: {
    marginTop: 14,
  },
  calendar: {
    borderWidth: 2,
    borderRadius: 20,
    borderColor: COLORS.background,
    elevation: 10,
  },
  arrow: {
    backgroundColor: COLORS.primaryContainer,
    borderRadius: 15,
    height: 30,
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: -5,
  },
  dayContainer: {
    backgroundColor: COLORS.elevation.level1,
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 5,
  },
  dayText: {
    fontSize: 15,
    fontWeight: '700',
  },
  todayDate: {
    backgroundColor: COLORS.primaryContainer,
    color: COLORS.primary,
    fontSize: 15,
    fontWeight: '700',
  },
  upIcon: {
    position: 'absolute',
    height: 30,
    width: 30,
    backgroundColor: COLORS.background,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    marginTop: 240,
    marginLeft: SIZES.width * 0.4,
  },
  discountContainer1: {
    marginTop: 10,
  },
  sliderIcon: {
    transform: [{ rotate: '-90deg' }],
  },
  discountContain: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    //marginBottom:15,
  },
  discountText: {
    fontSize: 21,
    fontWeight: '700',
  },
  discountImage: {
    width: 168,
    height: 177,
    borderRadius: 9,
    borderColor: COLORS.background,
    borderWidth: 5,
    shadowColor: COLORS.shadow,
    shadowRadius: 8,
    elevation: 5,
    //resizeMode:'stretch'
  },
  discountText1: {
    marginTop: 7,
    fontSize: 12,
    fontWeight: '400',
  },
  discountPrice: {
    marginTop: 3,
    fontSize: 17,
    fontWeight: '700',
  },
  discount: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  discountProduct: {
    marginTop: 18,
  },
});
