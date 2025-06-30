import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    FlatList
} from 'react-native';
import themes, { SIZES } from '../../constants/themes';
import Images from '../../assets/Images';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS } from '../../constants/themes';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';

const slide = [
    {
        id:'1',
        image:Images.ready,
        title:'Ready?',
        discription:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
     {
        id:'2',
        image:Images.ready,
        title:'Ready?',
        discription:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
     {
        id:'3',
        image:Images.ready,
        title:'Ready?',
        discription:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
     {
        id:'4',
        image:Images.ready,
        title:'Ready?',
        discription:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    }
]

const readyCard = () =>{

    const navigation = useNavigation();

    const [currentIndex,setCurrentIndex] = useState(3);

    const handleScroll = (event) => {
        const index = Math.round(event.nativeEvent.contentOffset.x /SIZES.width);
    
        setCurrentIndex(index);
    };

    const renderItems = ({item}) =>(
        <View style={styles.slide}>
            <View style={styles.readyContainer}>
                <Image source={Images.ready} style={styles.readyImage}/>
                <View style={styles.readyTextContainer}>
                    <TouchableOpacity onPress={() => navigation.navigate('Profile-Screen')}>
                     <Text style={styles.readyText}>Ready?</Text>
                    </TouchableOpacity>
                    <Text style={styles.readySubText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
                </View>

                <TouchableOpacity style={styles.startButton} onPress={() => navigation.navigate('HelloCard-Screen')}>
                    <Text style={styles.startButtonText}>Let's Start</Text>
                </TouchableOpacity>
            </View>
        </View>
    )



    return(
        <SafeAreaView style={styles.mainContainer}>
            <Image source={Images.topLeft1} style={styles.topLeft1}/>
            <Image source={Images.bottomRight} style={styles.bottomRight}/>

            <FlatList
                data={slide}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) =>item.id}
                renderItem={renderItems}
                onScroll={handleScroll}
            />


            <View style={styles.bottomCircleContainer}>
                {
                    slide.map((_, index)=>(
                        <View 
                            key={index}
                            style={[styles.bottomCircle,
                            currentIndex === index && styles.bottomCircleActive
                            ]}
                        />
                    ))
                }
                               
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        backgroundColor:COLORS.primaryColor,
        paddingBottom:-30
    },
    topLeft1:{
        position:'absolute',
        top:0,
        left:0,
        width:250,
        height:312
    },
    bottomRight:{
        position:'absolute',
        height:400,
        width:240,
        bottom:25,
        right:0,
        resizeMode:'stretch'
    },
    slide: {
        width:SIZES.width,
        height:SIZES.height,
        justifyContent:'center',
        alignItems: 'center',
  },
    readyContainer:{
        position:'absolute',
        height:624,
        top:47,
        left:25,
        right:25,
        shadowColor: COLORS.textColor1,
        shadowRadius: 5,
        elevation: 35,
        backgroundColor:COLORS.textColor2,
        borderRadius:30,
        overflow:'hidden'
    },
    readyImage:{
        height:338,
        width:'auto',
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        resizeMode:'stretch'
    },
    readyTextContainer:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:46,
    },
    readyText:{
        fontSize:28,
        fontWeight:700,
    },
    readySubText:{
        marginTop:12,
        fontSize:19,
        fontWeight:300,
        marginLeft:45,
        marginRight:45,
        lineHeight:27
    },
    bottomCircleContainer:{
        position:'absolute',
        flexDirection:'row',
        justifyContent:'center',
        textAlign:'center',
        top:685,
        marginTop:35,
        left:115
    },
    bottomCircle:{
        height:20,
        width:20,
        borderRadius:10,
        backgroundColor:COLORS.lightBlue,
        marginLeft:15,
    },
    bottomCircleActive:{
        height:20,
        width:20,
        borderRadius:10,
        backgroundColor:COLORS.secondryColor,
        marginLeft:15,
    },
    startButton:{
        width:201,
        height:50,
        borderRadius:16,
        backgroundColor:COLORS.secondryColor,
        justifyContent:'center',
        alignItems:'center',
        marginTop:35,
        marginHorizontal:62
    },
    startButtonText:{
        fontSize:22,
        fontWeight:'300',
        color:COLORS.textColor2
    }
});
export default readyCard;