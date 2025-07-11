import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ImageBackground,
  FlatList,
} from 'react-native';
import Images from '../../assets/Images';
import { Button } from 'react-native-paper';
import { useRef, useState } from 'react';
import { COLORS, SIZES } from '../../constants/themes';
import { useNavigation } from '@react-navigation/native';
import { RouteName } from '../../navigation/RouteName';
import TabNavigator from '../../navigation/TabNavigator';

const story = [
  {
    image: Images.storyImg1,
  },
  {
    image: Images.storyImg1,
  },
  {
    image: Images.storyImg1,
  },
  {
    image: Images.storyImg1,
  },
  {
    image: Images.storyImg1,
  },
  {
    image: Images.storyImg1,
  },
];

const StoryDots = () => {
  const navigation = useNavigation();

  const [currentIndex, setCurrentIndex] = useState(1);

  const handleOnScroll = event => {
    const index = Math.round(event.nativeEvent.contentOffset.x / SIZES.width);

    setCurrentIndex(index);
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <FlatList
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        data={story}
        onScroll={handleOnScroll}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate(RouteName.STORY_DOTS_TAB_SCREEN)}
          >
            <ImageBackground source={item.image} style={styles.storyImage} />
          </TouchableOpacity>
        )}
      />

      <Text style={styles.dot1} />

      <Text style={styles.dot2} />

      <View style={styles.dotContainer}>
        {story.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dotDeactive,
              currentIndex === index && styles.dotActive,
            ]}
          />
        ))}
      </View>

      <Text style={styles.backgroundBottom} />
      {/* <TabNavigator/> */}
    </SafeAreaView>
  );
};

export default StoryDots;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: 20,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  storyImage: {
    resizeMode: 'contain',
    width: SIZES.width - 40,
    height: SIZES.height - 170,
    borderRadius: 50,
  },
  dotContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 84,
  },
  dotDeactive: {
    height: 10,
    width: 10,
    backgroundColor: COLORS.primaryContainer,
    borderRadius: 5,
    marginLeft: 15,
  },
  dotActive: {
    height: 10,
    width: 40,
    backgroundColor: COLORS.primary,
    marginLeft: 15,
    borderRadius: 5,
  },
  dot1: {
    position: 'absolute',
    height: 23,
    width: 23,
    backgroundColor: COLORS.background,
    borderColor: COLORS.primary,
    borderWidth: 2,
    borderRadius: 11,
    marginBottom: 350,
    marginLeft: 35,
  },
  dot2: {
    position: 'absolute',
    height: 23,
    width: 23,
    backgroundColor: COLORS.primary,
    borderColor: COLORS.background,
    borderWidth: 2,
    borderRadius: 11,
    marginBottom: 515,
    marginRight: 255,
  },
  backgroundBottom: {
    position: 'absolute',
    height: 240,
    width: 340,
    backgroundColor: COLORS.elevation.level4,
    opacity: 0.7,
    right: 0,
    bottom: 0,
  },
});
