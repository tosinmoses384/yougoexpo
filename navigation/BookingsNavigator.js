import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
//import InitialScreen from '../screens/InitialHomeScreen';
import HomeScreen from '../screens/Home';
import  SignUp from '../screens/SignUp';
import Login from '../screens/Login';
import Wallet from '../screens/Wallet';
import History from '../screens/History';
import HistoryDetails from '../screens/HistoryDetails';
import {Ionicons} from '@expo/vector-icons';

const HomeTab = createStackNavigator(
  {
    SignUp: {
      screen: SignUp,
      navigationOptions: {
        header: null
      }
    },

    Login: {
      screen: Login,
      navigationOptions: {
        header: null
      }
    },

    Home: {
      screen: HomeScreen,
      navigationOptions: {
        header: null
      }
    },

    Wallet: {
      screen: Wallet,
      navigationOptions: {
        title: "My Wallet",
        headerStyle: {
          backgroundColor: "#673AB7"
        },
        headerTintColor: "#fff"
      }
    }
  },
  { headerLayoutPreset: "center" }
);

HomeTab.navigationOptions = ({navigation}) => {
    let tabBarVisible = true;
    if (navigation.state.index > 0) {
      tabBarVisible = false;
    }
  
    return {
      tabBarVisible
    };
  };

  const HistoryTab = createStackNavigator(
    {
      History: {
        screen: History,
        navigationOptions: {
          title: 'History',
  
          headerStyle: {
            backgroundColor: '#673AB7',
          },
          headerTintColor: '#fff',
        },
      },
      HistoryDetails: {
        screen: HistoryDetails,
        navigationOptions: {
          title: 'Details',
  
          headerStyle: {
            backgroundColor: '#673AB7',
          },
          headerTintColor: '#fff',
        },
      },
    },
    {headerLayoutPreset: 'center', initialRouteName: 'History'},
  );
  
  const TabNavigator = createBottomTabNavigator(
    {
      Home: {screen: HomeTab},
      History: {screen: HistoryTab}
    },
    {
      defaultNavigationOptions: ({navigation}) => ({
        tabBarIcon: ({focused, horizontal, tintColor}) => {
          const {routeName} = navigation.state;
          let IconComponent = Ionicons;
          let iconName;
          if (routeName === 'Home') {
            iconName = `ios-home`;
            // Sometimes we want to add badges to some icons.
            // You can check the implementation below.
            //   IconComponent = HomeIconWithBadge;
          } else if (routeName === 'History') {
            iconName = 'ios-timer';
          } 
  
          // You can return any component that you like here!
          return <IconComponent name={iconName} size={25} color={tintColor} />;
        },
      }),
      tabBarOptions: {
        activeTintColor: '#673AB7',
        inactiveTintColor: '#BCBCBC',
        style: {
          height: 50,
          borderTopWidth: 1,
          paddingVertical: 5,
          fontFamily: 'Roboto',
        },
      },
    },
  );


// const BookingsNavigator = createStackNavigator({
//     MainSignIn: TheSignIn,
//     MainSignUp: TheSignUp,
//     MainHomeScreen: {
//         screen: TheHomeScreen
//     },
//     //Firstscreen: InitialScreen,
//     MainWallet: {
//         screen: TheWallet
//     }
    
    
    
// });

export default createAppContainer(TabNavigator);