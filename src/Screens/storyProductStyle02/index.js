import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  Image,
  FlatList,
} from 'react-native';
import { COLORS, SIZES } from '../../constants/themes';
import Images from '../../assets/Images';
import { Button } from 'react-native-paper';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import TabNavigator from '../../navigation/TabNavigator';
import { RouteName } from '../../navigation/RouteName';

const story = [
  {
    image: Images.storyImg4,
  },
  {
    image: Images.storyImg4,
  },
  {
    image: Images.storyImg4,
  },
  {
    image: Images.storyImg4,
  },
  {
    image: Images.storyImg4,
  },
  {
    image: Images.storyImg4,
  },
];

const StoryProductStyle02 = () => {

  const navigation = useNavigation();

  const [currentIndex, setCurrentIndex] = useState(3);

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

      <View style={styles.cardContainer}>
        <Image source={Images.storyImg6} style={styles.cardImage} />
        <View>
          <Text style={styles.cardText}>
            Lorem ipsum dolor sit amet{'\n'}consectetur.
          </Text>
          <Button
            mode="contained"
            labelStyle={styles.shopButtonText}
            style={styles.shopButtonContainer}
            onPress={()=>navigation.navigate(RouteName.SHOP_CLOTHING_SCREEN)}
            
          >
            Shop
          </Button>
        </View>
      </View>
      {/* <TabNavigator/> */}
    </SafeAreaView>
  );
};

export default StoryProductStyle02;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: 20,
    justifyContent: 'flex-end',
    //alignItems: 'center',
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
    marginBottom: 40,
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
  shopButtonText: {
    fontSize: 16,
    fontWeight: '300',
  },
  shopButtonContainer: {
    borderRadius: 15,
    marginTop: 29,
  },
  cardContainer: {
    position: 'absolute',
    width: 315,
    flexDirection: 'row',
    backgroundColor: COLORS.background,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 7,
    borderColor: COLORS.background,
    marginHorizontal: 40,
    marginBottom: 125,
  },
  cardImage: {
    width: 133,
    height: 108,
  },
  cardText: {
    fontSize: 12,
    fontWeight: '400',
  },
});
