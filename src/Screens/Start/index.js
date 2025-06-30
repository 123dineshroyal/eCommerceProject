import {StyleSheet,
   View,
   Text,
   SafeAreaView,
   Image,
   TouchableOpacity
   } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Images from '../../assets/Images';
import { useNavigation } from '@react-navigation/native';
import themes, { COLORS, SIZES } from '../../constants/themes';

const Start = () => {
  
  const navigation = useNavigation();
  
  return (
   <SafeAreaView style={styles.container}>
    <View style={styles.mainContainer}>
      <View style={styles.imageContainer}>
        <Image source={Images.shoppe} style={styles.shoppeImage}/>
      </View>
      <View style={styles.shoppeContainer}>
        <Text style={styles.shoppeText}>Shoppe</Text>
        <Text style={styles.shoppeSubText}>Beautiful eCommerce UI Kit {'\n'} for your online store</Text>
      </View>  
      <TouchableOpacity style={styles.startedButton} onPress={() => navigation.navigate('createAccountScreen')}>
        <Text style={styles.staredButtonText}>Let's get started</Text>
      </TouchableOpacity>
      <View style={styles.existContainer}>
        <Text style={styles.accountExistText}>I already have an account</Text>
        <TouchableOpacity style={styles.nextArrow}>
          <Icon name='arrow-forward' size={20} color='white'/>
        </TouchableOpacity>
      </View>
      {/* <Text style={styles.bottomBar}/> */}
    </View>
   </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:COLORS.primaryColor,
  },
  mainContainer:{
    alignItems:'center',
    justifyContent:'center',
  },
  imageContainer:{
    justifyContent:'center',
    alignItems:'center',
    marginTop:200,
    height:134,
    width:134,
    borderColor:COLORS.textColor2,
    borderWidth:SIZES.baseBorder,
    borderRadius:100,
    backgroundColor:COLORS.textColor2,
    shadowColor:COLORS.darkBlack,
    shadowRadius: 8,
    elevation: 5,
  },
  shoppeImage:{
    width:81.4,
    height:92,
  },
  shoppeContainer:{
    marginTop:24,
    justifyContent:'center',
    textAlign:'center'
  },
  shoppeText:{
    fontSize:52,
    fontWeight:'700',
    left:28

  },
  shoppeSubText:{
    fontSize:19,
    fontWeight:SIZES.baseWeight,
    lineHeight:33,
    left:10,
    marginTop:10
  },
  startedButton:{
    width:335,
    height:61,
    backgroundColor:COLORS.secondryColor,
    borderRadius:SIZES.baseRadius,
    justifyContent:'center',
    alignItems:'center',
    marginTop:140
  },
  staredButtonText:{
    fontSize:22,
    color:COLORS.textColor2,
    fontWeight:SIZES.baseWeight,
  },
  existContainer:{
    marginTop:18,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
  },
  accountExistText:{
    fontSize:15,
    fontWeight:SIZES.baseWeight,
  },
  nextArrow:{
    height:30,
    width:30,
    borderColor:COLORS.secondryColor,
    borderWidth:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:COLORS.secondryColor,
    borderRadius:30,
    marginLeft:12
  },
  bottomBar:{
    width:134,
    height:5,
    backgroundColor:COLORS.textColor1,
    marginTop:28,
    borderRadius:4
  }
});

export default Start;
