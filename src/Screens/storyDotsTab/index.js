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
          <ImageBackground source={item.image} style={styles.storyImage} />
        )}
      />

      <View style={styles.buttonContainer}>
        <Image source={Images.storyImg5} style={styles.storyImage1} />
        <Button
          mode="contained"
          labelStyle={styles.shopButtonText}
          style={styles.shopButtonContainer}
          onPress={() =>
            navigation.navigate(RouteName.STORY_PRODUCT_STYLE01_SCREEN)
          }
        >
          Shop
        </Button>
      </View>

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
    marginBottom: 400,
    marginLeft: 135,
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
  buttonContainer: {
    position: 'absolute',
    height: 200,
    width: 147,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 208,
    backgroundColor: COLORS.background,
    borderRadius: 15,
  },
  storyImage1: {
    width: 138,
    height: 142,
    borderColor: COLORS.background,
    borderWidth: 3,

    borderRadius: 10,
    resizeMode: 'contain',
  },
  shopButtonText: {
    fontSize: 16,
    fontWeight: '300',
  },
  shopButtonContainer: {
    width: 130,
    borderRadius: 15,
    marginTop: 4,
  },
});
