import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  SafeAreaView,
  FlatList
} from 'react-native';
import { COLORS, SIZES } from '../../constants/themes';
import Images from '../../assets/Images';
import { Button } from 'react-native-paper';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { RouteName } from '../../navigation/RouteName';
import TabNavigator from '../../navigation/TabNavigator';


const story = [
  {
    image: Images.storyImg3,
  },
  {
    image: Images.storyImg3,
  },
  {
    image: Images.storyImg3,
  },
  {
    image: Images.storyImg3,
  },
  {
    image: Images.storyImg3,
  },
  {
    image: Images.storyImg3,
  },
];

const StoryBanner = () => {

  const navigation = useNavigation();

  const [currentIndex, setCurrentIndex] = useState(2);

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

      <ImageBackground
        source={Images.bigSale}
        style={styles.bigSaleImage}
        borderRadius={13}
      >
        <Text style={styles.bigSaleText}>Big Sale</Text>
        <Text style={styles.bigSalePersent}>Up to 50%</Text>
        <Text style={styles.saleText1}>Happening {'\n'}Now</Text>
      </ImageBackground>

      <View style={styles.shopContainer}>
        <Text style={styles.shopText}>
          Lorem ipsum dolor sit amet,{'\n'}consectetur adipiscing elit.
        </Text>

        <Button
          mode="contained"
          labelStyle={styles.shopButtonText}
          style={styles.shopButtonContainer}
           onPress={() => navigation.navigate(RouteName.STORY_PRODUCT_STYLE02_SCREEN)}
        >
          Shop
        </Button>
      </View>

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

export default StoryBanner;

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
    height: SIZES.height - 340,
    borderRadius: 50,
  },
  bigSaleImage: {
    height: 130,
    marginTop: -8,
    paddingLeft: 18,
  },
  bigSaleText: {
    marginTop: 5,
    fontSize: 28,
    fontWeight: '500',
    color: COLORS.background,
  },
  bigSalePersent: {
    fontSize: 12,
    fontWeight: '700',
    color: COLORS.background,
  },
  saleText1: {
    marginTop: 38,
    fontSize: 11,
    fontWeight: '700',
    color: COLORS.background,
  },
  shopContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  shopText: {
    fontSize: 12,
    fontWeight: '400',
  },
  shopButtonText: {
    fontSize: 16,
    fontWeight: '300',
  },
  shopButtonContainer: {
    width: 120,
    borderRadius: 15,
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
});
