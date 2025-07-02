import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  FlatList,
} from 'react-native';
import themes, { COLORS, SIZES } from '../../constants/themes';
import Images from '../../assets/Images';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRef, useState } from 'react';

const slide = [
  {
    id: '1',
    image: Images.hello,
    title: 'Hello',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non consectetur turpis. Morbi eu eleifend lacus.',
  },
  {
    id: '2',
    image: Images.hello,
    title: 'Hello',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non consectetur turpis. Morbi eu eleifend lacus.',
  },
  {
    id: '3',
    image: Images.hello,
    title: 'Hello',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non consectetur turpis. Morbi eu eleifend lacus.',
  },
  {
    id: '4',
    image: Images.hello,
    title: 'Hello',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non consectetur turpis. Morbi eu eleifend lacus.',
  },
];

const HelloCard = () => {
  const navigation = useNavigation();

  const [currentIndex, setCurrentIndex] = useState(1);

  const handleScroll = event => {
    const index = Math.round(event.nativeEvent.contentOffset.x / SIZES.width);

    setCurrentIndex(index);
  };

  const renderItems = ({ item }) => (
    <View style={styles.slide}>
      <View style={styles.helloContainer}>
        <Image source={item.image} style={styles.helloImage} />
        <View style={styles.helloTextContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate('ReadyCard-Screen')}
          >
            <Text style={styles.helloText}>{item.title}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('Maximum-Attempts-Screen')}
          >
            <Text style={styles.helloSubText}>{item.description}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Image source={Images.bottomCenter} style={styles.bottomCenter} />
      <Image source={Images.topLeft1} style={styles.topLeft1} />

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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: -50,
    color: COLORS.onBackground,
  },
  topLeft1: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 250,
    height: 312,
  },
  bottomCenter: {
    position: 'absolute',
    height: 420,
    width: 350,
    left: 0,
    top: 270,
  },
  slide: {
    width: SIZES.width,
    height: SIZES.height,
    justifyContent: 'center',
    alignItems: 'center',
  },
  helloContainer: {
    position: 'absolute',
    height: 624,
    top: 75,
    left: 25,
    right: 25,
    shadowColor: COLORS.shadow,
    shadowRadius: 5,
    elevation: 35,
    backgroundColor: COLORS.background,
    borderRadius: 30,
    overflow: 'hidden',
  },
  helloImage: {
    height: 338,
    width: 'auto',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    resizeMode: 'stretch',
  },
  helloText: {
    fontSize: 28,
    fontWeight: 700,
  },
  helloSubText: {
    marginTop: 12,
    fontSize: 19,
    fontWeight: 300,
    marginLeft: 45,
    marginRight: 45,
    lineHeight: 27,
  },
  helloTextContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 46,
  },
  bottomCircleContainer: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    top: 685,
    marginTop: 35,
    left: 115,
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
});

export default HelloCard;
