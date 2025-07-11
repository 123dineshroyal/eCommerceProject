import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ScrollView,
  TextInput,
} from 'react-native';
import Images from '../../assets/Images';
import { COLORS } from '../../constants/themes';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { RouteName } from '../../navigation/RouteName';


const items = [
  {
    image: Images.just5,
    description: 'Lorem ipsum dolor sit amet consectetur.',
    price: '$125,00',
  },
  {
    image: Images.item1,
    description: 'Lorem ipsum dolor sit amet consectetur.',
    price: '$32,00',
  },
  {
    image: Images.item2,
    description: 'Lorem ipsum dolor sit amet consectetur.',
    price: '$21,00',
  },
  {
    image: Images.item2,
    description: 'Lorem ipsum dolor sit amet consectetur.',
    price: '$125,00',
  },
];


const Search = () => {
  const [search, setSearch] = useState('');
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.searchContainer}>
        <Text style={styles.searchText}>Search</Text>
        <View style={styles.searchInputContain}>
          <TextInput
            value={search}
            onChangeText={setSearch}
            placeholderTextColor={COLORS.surfaceVariant}
            style={styles.searchInput}
          />
          <TouchableOpacity onPress={() =>navigation.navigate(RouteName.SEARCH_RESULT_SCREEN)}>
            <MaterialCommunityIcons
              name="camera-outline"
              size={20}
              color={COLORS.primary}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.searchHistoryContainer}>
        <Text style={styles.searchHistoryText}>Search history</Text>
        <TouchableOpacity style={styles.deleteIcon}>
          <MaterialCommunityIcons
            name="delete"
            color={COLORS.error}
            size={20}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.historyItem}>
        <Text style={styles.historyData}>Socks</Text>
        <Text style={styles.historyData}>Red Dress</Text>
        <Text style={styles.historyData}>Sunglasses</Text>
      </View>

      <View style={styles.historyItem1}>
        <Text style={styles.historyData}>Mustard Pants</Text>
        <Text style={styles.historyData}>80-s Skirt</Text>
      </View>

      <Text style={styles.recommendationsText}>Recommendations</Text>

      <View style={styles.historyItem}>
        <Text style={styles.historyData}>Skirt</Text>
        <Text style={styles.historyData}>Accessories</Text>
        <Text style={styles.historyData}>Black T-Shirt</Text>
      </View>

      <View style={styles.historyItem1}>
        <Text style={styles.historyData}>Jeans</Text>
        <Text style={styles.historyData}>White Shoes</Text>
      </View>

      <Text style={styles.discoverText}>Discover</Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {items.map((item, index) => (
          <View style={styles.itemContainer}>
            <TouchableOpacity>
              <Image source={item.image} style={styles.itemImage} />
              <Text style={styles.itemText1}>{item.description}</Text>
              <Text style={styles.itemPrice}>{item.price}</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Search;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: COLORS.background,
  },
  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  searchText: {
    fontSize: 28,
    fontWeight: '700',
  },
  searchInputContain: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.primaryContainer,
    borderRadius: 20,
    backgroundColor: COLORS.background,
    paddingHorizontal: 10,
    height: 40,
    width: '70%',
  },
  searchHistoryContainer: {
    marginTop: 11,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  searchHistoryText: {
    fontSize: 18,
    fontWeight: '500',
  },
  deleteIcon: {
    height: 35,
    width: 35,
    borderRadius: 17,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.inverseOnSurface,
  },
  historyItem: {
    marginTop: 26,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  historyItem1: {
    marginTop: 6,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  historyData: {
    fontSize: 17,
    fontWeight: '500',
    backgroundColor: COLORS.inverseOnSurface,
    alignItems: 'center',
    paddingVertical: 7,
    paddingHorizontal: 15,
    borderRadius: 10,
    marginLeft: 5,
  },
  recommendationsText: {
    marginTop: 31,
    fontSize: 18,
    fontWeight: '500',
  },
  discoverText: {
    fontSize: 21,
    fontWeight: 700,
    marginTop: 32,
  },
   itemContainer: {
    marginTop: 10,
    width: 140,
    height: 204,
    marginLeft:5
  },
  itemImage: {
    height: 140,
    width: 140,
    borderColor: COLORS.background,
    borderWidth: 6,
    borderRadius: 10,
     shadowColor: COLORS.shadow,
    shadowRadius: 8,
    elevation: 5,
   
  },
  itemText1: {
    fontSize: 12,
    fontWeight: '400',
    paddingTop: 7,
  },
  itemPrice: {
    fontSize: 17,
    fontWeight: '700',
  },
});
