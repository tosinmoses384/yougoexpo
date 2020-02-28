import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import InitialScreen from '../screens/InitialHomeScreen';
import TheHomeScreen from '../screens/Home';
import  TheSignUp from '../screens/SignUp';
import TheSignIn from '../screens/Login';
import TheWallet from '../screens/Wallet';
import TheHistory from '../screens/History';
import TheCarsScreen from '../screens/CarsScreen';
//import TheNotification from '../screens/Notification';

const BookingsNavigator = createStackNavigator({
    MainSignIn: TheSignIn,
    MainSignUp: TheSignUp,
    Firstscreen: InitialScreen,
    MainHomeScreen: {
        screen: TheHomeScreen
    },
    MainWallet: {
        screen: TheWallet
    },
    MainHistory:  {
        screen: TheHistory
    },
    MainCarsScreen: {
        screen: TheCarsScreen
    }
    // MainNotification: {
    //     screen: TheNotification
    // }
    
    
});

export default createAppContainer(BookingsNavigator);