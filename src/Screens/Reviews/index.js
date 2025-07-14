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
import { COLORS } from '../../constants/themes';
import Entypo from 'react-native-vector-icons/Entypo';

const Reviews = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <Text style={styles.reviewText}>Reviews</Text>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.ratingUpload}>
          <Image source={Images.rating2} style={styles.ratingImage} />
          <View style={styles.ratingContain}>
            <Text style={styles.name}>Veronika</Text>
            <View style={styles.starContainer1}>
              <Entypo name="star" size={20} color={COLORS.onErrorContainer} />
              <Entypo name="star" size={20} color={COLORS.onErrorContainer} />
              <Entypo name="star" size={20} color={COLORS.onErrorContainer} />
              <Entypo name="star" size={20} color={COLORS.onErrorContainer} />
              <Entypo
                name="star-outlined"
                size={20}
                color={COLORS.onErrorContainer}
              />
            </View>
            <Text style={styles.ratingDescription}>
              Lorem ipsum dolor sit amet, consetetur sadipscing{'\n'}elitr, sed
              diam nonumy eirmod tempor invidunt ut{'\n'}labore et dolore magna
              aliquyam erat, sed diam{'\n'}voluptua. At vero eos et accusam et
              justo duo{'\n'}
              dolores et ea rebum
            </Text>
          </View>
        </View>

        <View style={styles.ratingUpload}>
          <Image source={Images.rating2} style={styles.ratingImage} />
          <View style={styles.ratingContain}>
            <Text style={styles.name}>Veronika</Text>
            <View style={styles.starContainer1}>
              <Entypo name="star" size={20} color={COLORS.onErrorContainer} />
              <Entypo name="star" size={20} color={COLORS.onErrorContainer} />
              <Entypo name="star" size={20} color={COLORS.onErrorContainer} />
              <Entypo name="star" size={20} color={COLORS.onErrorContainer} />
              <Entypo name="star" size={20} color={COLORS.onErrorContainer} />
            </View>
            <Text style={styles.ratingDescription}>
              Lorem ipsum dolor sit amet, consetetur sadipscing{'\n'}elitr, sed
              diam nonumy eirmod tempor invidunt ut{'\n'}labore et dolore magna
              aliquyam erat, sed diam{'\n'}voluptua. At vero eos et accusam et
              justo duo{'\n'}
              dolores et ea rebum
            </Text>
          </View>
        </View>

        <View style={styles.ratingUpload}>
          <Image source={Images.rating2} style={styles.ratingImage} />
          <View style={styles.ratingContain}>
            <Text style={styles.name}>Veronika</Text>
            <View style={styles.starContainer1}>
              <Entypo name="star" size={20} color={COLORS.onErrorContainer} />
              <Entypo name="star" size={20} color={COLORS.onErrorContainer} />
              <Entypo name="star" size={20} color={COLORS.onErrorContainer} />
              <Entypo name="star" size={20} color={COLORS.onErrorContainer} />
              <Entypo name="star" size={20} color={COLORS.onErrorContainer} />
            </View>
            <Text style={styles.ratingDescription}>
              Lorem ipsum dolor sit amet, consetetur sadipscing{'\n'}elitr, sed
              diam nonumy eirmod tempor invidunt ut{'\n'}labore et dolore magna
              aliquyam erat, sed diam{'\n'}voluptua. At vero eos et accusam et
              justo duo{'\n'}
              dolores et ea rebum
            </Text>
          </View>
        </View>

        <View style={styles.ratingUpload}>
          <Image source={Images.rating2} style={styles.ratingImage} />
          <View style={styles.ratingContain}>
            <Text style={styles.name}>Veronika</Text>
            <View style={styles.starContainer1}>
              <Entypo name="star" size={20} color={COLORS.onErrorContainer} />
              <Entypo name="star" size={20} color={COLORS.onErrorContainer} />
              <Entypo name="star" size={20} color={COLORS.onErrorContainer} />
              <Entypo name="star" size={20} color={COLORS.onErrorContainer} />
              <Entypo name="star" size={20} color={COLORS.onErrorContainer} />
            </View>
            <Text style={styles.ratingDescription}>
              Lorem ipsum dolor sit amet, consetetur sadipscing{'\n'}elitr, sed
              diam nonumy eirmod tempor invidunt ut{'\n'}labore et dolore magna
              aliquyam erat, sed diam{'\n'}voluptua. At vero eos et accusam et
              justo duo{'\n'}
              dolores et ea rebum
            </Text>
          </View>
        </View>

        <View style={styles.ratingUpload}>
          <Image source={Images.rating2} style={styles.ratingImage} />
          <View style={styles.ratingContain}>
            <Text style={styles.name}>Veronika</Text>
            <View style={styles.starContainer1}>
              <Entypo name="star" size={20} color={COLORS.onErrorContainer} />
              <Entypo name="star" size={20} color={COLORS.onErrorContainer} />
              <Entypo name="star" size={20} color={COLORS.onErrorContainer} />
              <Entypo name="star" size={20} color={COLORS.onErrorContainer} />
              <Entypo name="star" size={20} color={COLORS.onErrorContainer} />
            </View>
            <Text style={styles.ratingDescription}>
              Lorem ipsum dolor sit amet, consetetur sadipscing{'\n'}elitr, sed
              diam nonumy eirmod tempor invidunt ut{'\n'}labore et dolore magna
              aliquyam erat, sed diam{'\n'}voluptua. At vero eos et accusam et
              justo duo{'\n'}
              dolores et ea rebum
            </Text>
          </View>
        </View>

        <View style={styles.ratingUpload}>
          <Image source={Images.rating2} style={styles.ratingImage} />
          <View style={styles.ratingContain}>
            <Text style={styles.name}>Veronika</Text>
            <View style={styles.starContainer1}>
              <Entypo name="star" size={20} color={COLORS.onErrorContainer} />
              <Entypo name="star" size={20} color={COLORS.onErrorContainer} />
              <Entypo name="star" size={20} color={COLORS.onErrorContainer} />
              <Entypo name="star" size={20} color={COLORS.onErrorContainer} />
              <Entypo name="star" size={20} color={COLORS.onErrorContainer} />
            </View>
            <Text style={styles.ratingDescription}>
              Lorem ipsum dolor sit amet, consetetur sadipscing{'\n'}elitr, sed
              diam nonumy eirmod tempor invidunt ut{'\n'}labore et dolore magna
              aliquyam erat, sed diam{'\n'}voluptua. At vero eos et accusam et
              justo duo{'\n'}
              dolores et ea rebum
            </Text>
          </View>
        </View>

        <View style={styles.ratingUpload}>
          <Image source={Images.rating2} style={styles.ratingImage} />
          <View style={styles.ratingContain}>
            <Text style={styles.name}>Veronika</Text>
            <View style={styles.starContainer1}>
              <Entypo name="star" size={20} color={COLORS.onErrorContainer} />
              <Entypo name="star" size={20} color={COLORS.onErrorContainer} />
              <Entypo name="star" size={20} color={COLORS.onErrorContainer} />
              <Entypo name="star" size={20} color={COLORS.onErrorContainer} />
              <Entypo name="star" size={20} color={COLORS.onErrorContainer} />
            </View>
            <Text style={styles.ratingDescription}>
              Lorem ipsum dolor sit amet, consetetur sadipscing{'\n'}elitr, sed
              diam nonumy eirmod tempor invidunt ut{'\n'}labore et dolore magna
              aliquyam erat, sed diam{'\n'}voluptua. At vero eos et accusam et
              justo duo{'\n'}
              dolores et ea rebum
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Reviews;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: COLORS.background,
  },
  reviewText: {
    fontSize: 28,
    fontWeight: '700',
    paddingBottom: 6,
  },
  ratingUpload: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ratingImage: {
    height: 45,
    width: 45,
    borderWidth: 3,
    borderColor: COLORS.background,
    borderRadius: 22,
    shadowColor: COLORS.shadow,
    shadowRadius: 10,
    elevation: 5,
    resizeMode: 'stretch',
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
  },
  ratingDescription: {
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 18,
    marginTop: 10,
  },
  ratingContain: {
    marginLeft: 10,
  },
  starContainer1: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 3,
    marginLeft: -3,
  },
});
