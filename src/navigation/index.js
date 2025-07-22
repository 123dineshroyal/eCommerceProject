import { NavigationContainer } from '@react-navigation/native';

import React from 'react';
import start from '../Screens/Start';
import createAccount from '../Screens/createAccount';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../Screens/Login';
import Password from '../Screens/Password';
import passwordTyping from '../Screens/passwordTyping';
import wrongPassword from '../Screens/wrongPassword';
import passwordRecovery from '../Screens/passwordRecovery';
import passwordRecoveryCode from '../Screens/passwordRecovery_Code';
import newPassord from '../Screens/newPassword';
import maximumAttempts from '../Screens/maximumAttempts';
import helloCard from '../Screens/helloCard';
import readyCard from '../Screens/readyCard';
import profile from '../Screens/profile';
import fullProfile from '../Screens/fullProfile';
import { RouteName } from './RouteName';
import shop from '../Screens/shop';
import flashsaleLive from '../Screens/flashSaleLive';
import flashSale from '../Screens/flashSale';
import flashSaleFull from '../Screens/flashSaleFull';
import live from '../Screens/live';
import storyProductStyle01 from '../Screens/storyProductStyle01';
import storyDots from '../Screens/storyDots';
import storyDotsTab from '../Screens/storyDotsTab';
import storyProductStyle02 from '../Screens/storyProductStyle02';
import storyBanner from '../Screens/storyBanner';
import TabNavigator from './TabNavigator';
import ShopClothing from '../Screens/shopClothing';
import ShopClothingOnScroll from '../Screens/shopClothingOnScroll';
import CategoriesFilter from '../Screens/categoriesFilter';
import Search from '../Screens/search';
import SearchResult from '../Screens/searchResult';
import ImageSearch from '../Screens/imageSearch';
import ImageSearchResults from '../Screens/imageSearchResults';
import Filter from '../Screens/filter';
import Product from '../Screens/product';
import ProductSale from '../Screens/productSale';
import ProductFull from '../Screens/productFull';
import ProductVariations from '../Screens/productVariations';
import Reviews from '../Screens/Reviews';
import WishList from '../Screens/wishlist';
import WishListEmpty from '../Screens/wishListEmpty';
import RecentlyViewed from '../Screens/recentlyViewed';
import RecentlyViewedDateChosen from '../Screens/recentlyViewedDateChosen';
import RecentlyViewedDate from '../Screens/recentlyViewedDate';
import Cart from '../Screens/Cart';
import CartEmptyShownFromWishList from '../Screens/cartEmptyshownFromWishlist';
import CartEmptyShownFromPopular from '../Screens/cartEmptyShownFromPopular';
import Payment from '../Screens/payment';
import AddVoucher from '../Screens/addVoucher';
import VoucherAdded from '../Screens/voucherAdded';
import EditShippingAddress from '../Screens/editShippingAddress';
import ChoosePaymentMethodCard1 from '../Screens/choosePaymentMethod1Card';
import ChoosePaymentMethodCard2 from '../Screens/choosePaymentMethod2Card';
import PaymentInProgress from '../Screens/paymentInProgress';
import ClouldNotProceedPayment from '../Screens/couldn\'tProceedPayment';
import YourCardBeenCharged from '../Screens/yourCardBeenCharged';
import ToReceive from '../Screens/toReceive';
import ReviewOption from '../Screens/reviewOption';
import ProfileToReceiveNotification from '../Screens/profileToReceiveNotification';
import ToReceiveProgress from '../Screens/toReceiveProgress';
import ToReceiveAttemptIsNotSuccessful from '../Screens/toReceiveAttemptIsNotSuccessful';
import DeliveryAttempNotification from '../Screens/deliveryAttemptNotification';
import Delivered from '../Screens/Delivered';
import MyActivity from '../Screens/myActivity';
import History from '../Screens/history';
import Review from '../Screens/review';
import ReviewDone from '../Screens/reviewDone';
import ChatStartingQuestion1 from '../Screens/chatStartingQuestion1';

const Stack = createStackNavigator();

const RootNavigator = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>








        

        <Stack.Screen name={RouteName.CHAT_STARTING_QUESTION1} component={ChatStartingQuestion1} />

        <Stack.Screen name={RouteName.START_SCREEN} component={start} />

        <Stack.Screen
          name={RouteName.CREATE_ACCOUNT_SCREEN}
          component={createAccount}
        />

        <Stack.Screen name={RouteName.LOGIN_SCREEN} component={Login} />

        <Stack.Screen name={RouteName.PASSWORD_SCREEN} component={Password} />

        <Stack.Screen
          name={RouteName.PASSWORD_TYPING_SCREEN}
          component={passwordTyping}
        />

        <Stack.Screen
          name={RouteName.WRONG_PASSWORD_SCREEN}
          component={wrongPassword}
        />

        <Stack.Screen
          name={RouteName.PASSWORD_RECOVERY_SCREEN}
          component={passwordRecovery}
        />

        <Stack.Screen
          name={RouteName.PASSWORD_RECOVERY_CODE_SCREEN}
          component={passwordRecoveryCode}
        />

        <Stack.Screen
          name={RouteName.NEW_PASSWORD_SCREEN}
          component={newPassord}
        />

        <Stack.Screen
          name={RouteName.MAXIMUM_ATTEMPTS_SCREEN}
          component={maximumAttempts}
        />

        <Stack.Screen
          name={RouteName.HELLO_CARD_SCREEN}
          component={helloCard}
        />

        <Stack.Screen
          name={RouteName.READY_CARD_SCREEN}
          component={readyCard}
        />

        <Stack.Screen name={RouteName.HOME_TAB} component={TabNavigator} />

        {/* <Stack.Screen
          name={RouteName.FULL_PROFILE_SCREEN}
          component={fullProfile}
        /> */}

        {/* <Stack.Screen name={RouteName.SHOP_SCREEN} component={shop} /> */}

        {/* <Stack.Screen 
          name={RouteName.FLASH_SALE_FULL_SCREEN}
          component={flashSaleFull}
        /> */}

        {/* <Stack.Screen name={RouteName.LIVE_SCREEN} component={live} /> */}

        {/* <Stack.Screen
          name={RouteName.STORY_DOTS_SCREEN}
          component={storyDots}
        /> */}

        <Stack.Screen name={RouteName.PROFILE_SCREEN} component={profile} />

        <Stack.Screen
          name={RouteName.FLASH_SALE_LIVE_SCREEN}
          component={flashsaleLive}
        />

        <Stack.Screen
          name={RouteName.FLASH_SALE_SCREEN}
          component={flashSale}
        />

        <Stack.Screen
          name={RouteName.STORY_DOTS_TAB_SCREEN}
          component={storyDotsTab}
        />

        <Stack.Screen
          name={RouteName.STORY_PRODUCT_STYLE01_SCREEN}
          component={storyProductStyle01}
        />

        <Stack.Screen
          name={RouteName.STORY_BANNER_SCREEN}
          component={storyBanner}
        />

        <Stack.Screen
          name={RouteName.STORY_PRODUCT_STYLE02_SCREEN}
          component={storyProductStyle02}
        />

        <Stack.Screen
          name={RouteName.SHOP_CLOTHING_SCREEN}
          component={ShopClothing}
        />

        <Stack.Screen
          name={RouteName.SHOP_CLOTHING_ON_SCROLL_SCREEN}
          component={ShopClothingOnScroll}
        />

        <Stack.Screen
          name={RouteName.CATEGORIES_FILTER_SCREEN}
          component={CategoriesFilter}
        />

        <Stack.Screen name={RouteName.SEARCH_SCREEN} component={Search} />

        <Stack.Screen
          name={RouteName.SEARCH_RESULT_SCREEN}
          component={SearchResult}
        />

        {/* <Stack.Screen
          name={RouteName.IMAGE_SEARCH_SCREEN}
          component={ImageSearch}
        /> */}

        <Stack.Screen
          name={RouteName.IMAGE_SEARCH_RESULTS}
          component={ImageSearchResults}
        />

        <Stack.Screen name={RouteName.FILTER_SCREEN} component={Filter} />

        <Stack.Screen name={RouteName.PRODUCT_SCREEN} component={Product} />

        <Stack.Screen
          name={RouteName.PRODUCT_SALE_SCREEN}
          component={ProductSale}
        />

        <Stack.Screen
          name={RouteName.PRODUCT_FULL_SCREEN}
          component={ProductFull}
        />

        <Stack.Screen
          name={RouteName.PRODUCT_VARIATIONS_SCREEN}
          component={ProductVariations}
        />

        <Stack.Screen name={RouteName.REVIEWS_SCREEN} component={Reviews} />

        <Stack.Screen name={RouteName.WISHLIST_SCREEN} component={WishList} />

        <Stack.Screen
          name={RouteName.WISHLIST_EMPTY_SCREEN}
          component={WishListEmpty}
        />

        <Stack.Screen
          name={RouteName.RECENTLY_VIEWED_SCREEN}
          component={RecentlyViewed}
        />

        <Stack.Screen
          name={RouteName.RECENTLY_VIEWED_DATE_SCREEN}
          component={RecentlyViewedDate}
        />

        <Stack.Screen
          name={RouteName.RECENTLY_VIEWED_DATE_CHOSEN_SCREEN}
          component={RecentlyViewedDateChosen}
        />

        <Stack.Screen name={RouteName.CART_SCREEN} component={Cart} />

        <Stack.Screen
          name={RouteName.CART_EMPTY_SHOWN_FROM_WISHLIST_SCREEN}
          component={CartEmptyShownFromWishList}
        />

        <Stack.Screen
          name={RouteName.CART_EMPTY_SHOWN_FROM_POPULAR_SCREEN}
          component={CartEmptyShownFromPopular}
        />

        <Stack.Screen name={RouteName.PAYMENT_SCREEN} component={Payment} />

        <Stack.Screen
          name={RouteName.ADD_VOUCHER_SCREEN}
          component={AddVoucher}
        />

        <Stack.Screen
          name={RouteName.VOUCHER_ADDED_SCREEN}
          component={VoucherAdded}
        />

        <Stack.Screen
          name={RouteName.EDIT_SHIPPING_ADDRESS_SCREEN}
          component={EditShippingAddress}
        />

        <Stack.Screen name={RouteName.CHOOSE_PAYMENT_METHOD_1_CARD_SCREEN} component={ChoosePaymentMethodCard1} />

        <Stack.Screen name={RouteName.CHOOSE_PAYMENT_METHOD_2_CARD_SCREEN} component={ChoosePaymentMethodCard2} />

        <Stack.Screen name={RouteName.PAYMENT_IN_PROGRESS_SCREEN} component={PaymentInProgress} />

        <Stack.Screen name={RouteName.COULD_NOT_PROCEED_PAYMENT_SCREEN} component={ClouldNotProceedPayment} />

        <Stack.Screen name={RouteName.YOUR_CARD_BEEN_CHARGED_SCREEN} component={YourCardBeenCharged} />

        <Stack.Screen name={RouteName.TO_RECEIVE_SCREEN} component={ToReceive} />

        <Stack.Screen name={RouteName.REVIEW_OPTION_SCREEN} component={ReviewOption} />

        <Stack.Screen name={RouteName.TO_RECEIVE_PROGRESS_SCREEN} component={ToReceiveProgress} />

        <Stack.Screen name={RouteName.TO_RECEIVE_ATTEMPT_IS_NOT_SUCCESSFUL_SCREEN} component={ToReceiveAttemptIsNotSuccessful} />

        <Stack.Screen name={RouteName.DELIVERY_ATTEMPT_NOTIFICATION_SCREEN} component={DeliveryAttempNotification} />

        <Stack.Screen name={RouteName.PROFILE_TO_RECEIVE_NOTIFICATION_SCREEN} component={ProfileToReceiveNotification} />

        <Stack.Screen name={RouteName.DELIVERED_SCREEN} component={Delivered} />

        <Stack.Screen name={RouteName.MY_ACTIVITY_SCREEN} component={MyActivity} />

        <Stack.Screen name={RouteName.HISTORY_SCREEN} component={History} />

        <Stack.Screen name={RouteName.REVIEW_SCREEN} component={Review} />

        <Stack.Screen name={RouteName.REVIEW_DONE_SCREEN} component={ReviewDone} />


      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
