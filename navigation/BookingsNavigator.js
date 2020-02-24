import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import InitialScreen from '../screens/InitialHomeScreen';
import TheHomeScreen from '../screens/Home';
import  TheSignUp from '../screens/SignUp';
import TheSignIn from '../screens/Login';
//import TheWallet from '../screens/Wallet';
import TheNotification from '../screens/Notification';

const BookingsNavigator = createStackNavigator({
    MainSignIn: TheSignIn,
    MainSignUp: TheSignUp,
    Firstscreen: InitialScreen,
    MainHomeScreen: {
        screen: TheHomeScreen
    },
    MainNotification: {
        screen: TheNotification
    }
    // MainWallet: {
    //     screen: TheWallet
    // }
    
});

export default createAppContainer(BookingsNavigator);