import { Dimensions } from "react-native";

const {width,height} = Dimensions.get('window');

export const COLORS ={

    //Primary Colors
    primaryColor:'#FFFFFF',
    secondryColor:'#004BFE',

    //Text COlors
    textColor1:'#000000',
    textColor2:'#FFFFFF',
    textColor3:'#EC4E4E',
    textColor4:'#FFEBEB',
    textColor5:'#F1AEAE',

    //Input Colors
    black: '#000000',
    lightGray:'#DDD',
    whiteSmoke:'#F8F8F8',
    blue1:'#E5EBFC',
    deepPink:'#FF5790',
    lightBlue:'#C7D6FB',
    gray1:'#D2D2D2',

    //Password Colors
    white2:'#E5EBFC',

    //shadow Colors
    darkBlack:'#000',
    shadowBlack:'rgba(0, 0, 0, 0.8)',

   

}

export const SIZES ={
    //global size
    font:14,

    //padding
    padding:10,
    padding1:20,

    //Redius
    baseRadius:10,
    baseRadius1:20,
    baseRadius2:30,

    //weight
    baseWeight:300,

    //border Width
    baseBorder:1,
    border:2,

    //app Dimension
    width,
    height,

};

const appTheme ={COLORS,SIZES}

export default appTheme;