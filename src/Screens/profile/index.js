import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    FlatList
} from 'react-native'
import {COLORS, SIZES} from '../../constants/themes';
import Images from '../../assets/Images';
import { SafeAreaView } from 'react-native-safe-area-context';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Profile = () =>{
    return(
        <SafeAreaView>
            <View style={styles.container}>
                <View style={styles.activityContainer}>
                        <Image source={Images.profile1} style={styles.profileImage}/>
                    <TouchableOpacity style={styles.myActivityContainer}>
                        <Text style={styles.myActivityText}>My Activity</Text>
                    </TouchableOpacity>

                        
                            <TouchableOpacity style={styles.iconContainer}>
                                <Image source={Images.icon1} style={styles.iconImage}/>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.iconContainer}>
                                <Image source={Images.icon2} style={styles.iconImage}/>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.iconContainer}>
                                <SimpleLineIcons name='settings' size={18} color={COLORS.secondryColor}/>
                            </TouchableOpacity>
                        
                    
                </View>
                <Text style={styles.userName}>Hello, Romina!</Text>
                <View style={styles.AnnouncementContainer}>
                    <View>
                        <Text style={styles.AnnouncementText}>Announcement</Text>
                        <Text style={styles.AnnouncementText1}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.{'\n'} Maecenas hendrerit luctus libero ac vulputate.</Text>
                    </View>
                    <TouchableOpacity style={styles.arrowContainer}>
                        <MaterialCommunityIcons name='arrow-right' size={22} color={COLORS.textColor2}/>
                    </TouchableOpacity>
                </View>

                <Text style={styles.viewedText}>Recently viewed</Text>

                <View style={styles.viewedContainer}>
                    <Image source={Images.viewed1} style={styles.viewedImage}/>
                    <Image source={Images.viewed2} style={styles.viewedImage}/>
                    <Image source={Images.viewed3} style={styles.viewedImage}/>
                    <Image source={Images.viewed4} style={styles.viewedImage}/>
                    <Image source={Images.viewed5} style={styles.viewedImage}/>

                </View>

                <Text style={styles.orderText}>My Orders</Text>

            </View>
        </SafeAreaView>
    )
}

export default Profile;

const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        backgroundColor:COLORS.primaryColor,
    },
    container:{
        marginLeft:20,
        marginRight:20
    },
    activityContainer:{
        marginTop:30,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    
    profileImage:{
        width:40,
        height:40,
        borderWidth:4,
        borderColor:COLORS.textColor2,
        borderRadius:20,
    },
    myActivityContainer:{
        width:115,
        height:35,
        backgroundColor:COLORS.secondryColor,
        borderRadius:25,
        alignItems:'center',
        justifyContent:'center'
    },
    myActivityText:{
        fontSize:16,
        fontWeight:'500',
        color:COLORS.textColor2
    },
    
    iconContainer:{
        height:35,
        width:35,
        backgroundColor:COLORS.whiteSmoke,
        borderRadius:17,
        justifyContent:'center',
        alignItems:'center',
        marginLeft:15
    },
    iconImage:{
        height:15,
        width:15,
    },
    userName:{
        marginTop:22,
        fontSize:28,
        fontWeight:'700',
    },
    AnnouncementContainer:{
        marginTop:12,
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:'center',
        height:70,
        backgroundColor:COLORS.whiteSmoke,
        borderRadius:10,
    },
   
    AnnouncementText:{
        fontSize:14,
        fontWeight:'700'
    },
    AnnouncementText1:{
        fontSize:10,
        fontWeight:'400'
    },
    arrowContainer:{
        height:30,
        width:30,
        backgroundColor:COLORS.secondryColor,
        borderRadius:15,
        justifyContent:'center',
        alignItems:'center',
        marginTop:27
    },
    viewedText:{
        marginTop:18,
        fontSize:21,
        fontWeight:'700'
    },
    viewedContainer:{
        marginTop:12,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    viewedImage:{
        height:50,
        width:50,
        borderWidth:4,
        borderColor:COLORS.textColor2,
       borderRadius:25,
    },
    orderText:{
        marginTop:25,
        fontSize:21,
        fontWeight:'700'
    }
})