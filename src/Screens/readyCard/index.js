import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
  ImageBackground,
} from 'react-native';
import themes, { SIZES } from '../../constants/themes';
import Images from '../../assets/Images';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS } from '../../constants/themes';
import { useState } from 'react';
import { Button } from 'react-native-paper';
import { RouteName } from '../../navigation/RouteName';
import { useNavigation } from '@react-navigation/native';

const slide = [
  {
    id: '1',
    image: Images.ready,
    title: 'Ready?',
    discription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: '2',
    image: Images.ready,
    title: 'Ready?',
    discription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: '3',
    image: Images.ready,
    title: 'Ready?',
    discription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: '4',
    image: Images.ready,
    title: 'Ready?',
    discription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
];

const readyCard = () => {
  const navigation = useNavigation();

  const [currentIndex, setCurrentIndex] = useState(3);

  const handleScroll = event => {
    const index = Math.round(event.nativeEvent.contentOffset.x / SIZES.width);

    setCurrentIndex(index);
  };

  const renderItems = ({ item }) => (
    <View style={styles.slide}>
      <View style={styles.readyContainer}>
        <Image source={Images.ready} style={styles.readyImage} />
        <View style={styles.readyTextContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate(RouteName.HOME_TAB)}
          >
            <Text style={styles.readyText}>Ready?</Text>
          </TouchableOpacity>
          <Text style={styles.readySubText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
        </View>

        <Button
          mode="contained"
          labelStyle={styles.startButtonText}
          onPress={() => navigation.navigate(RouteName.HELLO_CARD_SCREEN)}
          style={styles.startButton}
          contentStyle={{ paddingVertical: 5 }}
        >
          Let's Start
        </Button>
      </View>
    </View>
  );

  return (
    <ImageBackground
      source={Images.loginBackground}
      style={styles.backgroundImage}
    >
      <FlatList
        data={slide}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
        renderItem={renderItems}
        onScroll={handleScroll}
      />

      <View style={styles.bottomCircleContainer}>
        {slide.map((_, index) => (
          <View
            key={index}
            style={[
              styles.bottomCircle,
              currentIndex === index && styles.bottomCircleActive,
            ]}
          />
        ))}
      </View>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    padding: 20,
  },
  slide: {
    width: SIZES.width - 40,
    height: SIZES.height - 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  readyContainer: {
    shadowColor: COLORS.shadow,
    shadowRadius: 5,
    elevation: 5,
    backgroundColor: COLORS.background,
    borderRadius: 30,
  },
  readyImage: {
    height: 338,
    width: 'auto',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  readyTextContainer: {
    alignItems: 'center',
    marginTop: 46,
  },
  readyText: {
    fontSize: 28,
    fontWeight: 700,
  },
  readySubText: {
    marginTop: 12,
    fontSize: 19,
    fontWeight: 300,
    marginHorizontal: 45,
    lineHeight: 27,
  },
  bottomCircleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    textAlign: 'center',
    //  marginBottom: 40,
  },
  bottomCircle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    backgroundColor: COLORS.primaryContainer,
    marginLeft: 15,
  },
  bottomCircleActive: {
    height: 20,
    width: 20,
    borderRadius: 10,
    backgroundColor: COLORS.primary,
    marginLeft: 15,
  },
  startButton: {
    width: 201,
    backgroundColor: COLORS.primary,
    marginTop: 30,
    marginHorizontal: 62,
    marginBottom: 30,
  },
  startButtonText: {
    fontSize: 22,
    fontWeight: '300',
    color: COLORS.onPrimary,
  },
});
export default readyCard;
