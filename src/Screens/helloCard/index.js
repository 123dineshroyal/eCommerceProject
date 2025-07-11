import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  FlatList,
  ImageBackground,
} from 'react-native';
import themes, { COLORS, SIZES } from '../../constants/themes';
import Images from '../../assets/Images';
import { useNavigation } from '@react-navigation/native';
//import { SafeAreaView } from 'react-native-safe-area-context';
import { useRef, useState } from 'react';
import { RouteName } from '../../navigation/RouteName';

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
            onPress={() => navigation.navigate(RouteName.READY_CARD_SCREEN)}
          >
            <Text style={styles.helloText}>{item.title}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() =>
              navigation.navigate(RouteName.MAXIMUM_ATTEMPTS_SCREEN)
            }
          >
            <Text style={styles.helloSubText}>{item.description}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    
     <ImageBackground source={Images.loginBackground} style={styles.backgroundImage}>

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
 backgroundImage:{
  flex:1,
  padding:20,
 },
  slide: {
    width: SIZES.width-40,
    height: SIZES.height-40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  helloContainer:{
    shadowColor: COLORS.shadow,
    shadowRadius: 5,
    elevation: 3,
    backgroundColor: COLORS.background,
    borderRadius: 30,
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
    marginHorizontal:35,
    lineHeight: 27,
  },
  helloTextContainer: {
    justifyContent: 'center',
    alignItems:'center',
    marginTop: 10,
    padding:16,
    marginBottom:40,
  },
  bottomCircleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomCircle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    backgroundColor: COLORS.primaryContainer,
    marginLeft: 15,
   // marginBottom:49
  },
  bottomCircleActive: {
    height: 20,
    width: 20,
    borderRadius: 10,
    backgroundColor: COLORS.primary,
    marginLeft: 15,
  },
}
);

export default HelloCard;
