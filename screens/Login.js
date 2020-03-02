import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import AllButton from '../components/AllButtons';
import TextComponent from '../components/TextComponent';
//import TokenModal from '../components/Modals/TokenModal';
//import {withNavigation} from 'react-navigation';
//import {useDispatch, useSelector} from 'react-redux';
//import {UserLogin, closeError} from '../actions/Actions';
//import ErrorModal from '../components/Modals/ErrorModals';

const Login = props => {
  // const [modal, setModal] = useState(false);
  // const [eye, setEye] = useState(false);
  // const [password, setPassword] = useState('');
  // const [login, setLogin] = useState('');

  // redux selector
  //const {logError, isError, isLogged, userData} = useSelector(state => state);

  // if (isLogged === true) {
  //   navigation.navigate('Home');
  // }

  //const dispatch = useDispatch();
  //const UserData = {email: login, password};
  return (
    <SafeAreaView style={styles.container}>

      <StatusBar barStyle="light-content" backgroundColor="#522E92" />

      <View style={styles.container2}>

        <View style={{marginTop: 94}}>

          <View style={styles.image}>
            <Image source={require('../assets/logo.png')} />
          </View>

          <View>
            <Text style={styles.text}>SIGN IN</Text>
          </View>

          <View style={styles.form}>

            <View style={{marginBottom: 46}}>
              <TextComponent
                label="Phone Number/Email"
                //getText={text => setLogin(text)}
              />
            </View>

            <View style={{marginBottom: 19}}>
              <TextComponent
                label="Password"
                // show={!eye}
                // eye={!eye ? 'eye' : 'eye-with-line'}
                // handlePassword={() => {
                //   setEye(!eye);
                // }}
                //getText={password => setPassword(password)}
              />
            </View>

            <TouchableOpacity 
                //onPress={() => setModal(!modal)}
                >
              <Text style={styles.link}>Forgot Password?</Text>
            </TouchableOpacity>

          </View>
          
        </View>
        
        <View style={styles.bottom}>

          <AllButton
            style={{textAlign: 'center'}}
            title="sign in"
            status={true}
            //handlePress={() => dispatch(UserLogin(UserData))}

            onPress = {() => {
              props.navigation.navigate({routeName: 'Home'});
            }}

          />

          <View style={styles.linkGroup}>

            <Text>Don't Have an account?</Text>

            <TouchableOpacity>
              <Text
                style={styles.link2}
                //onPress={() => navigation.navigate('SignUp')}

                onPress = {() => {
                  props.navigation.navigate({routeName: 'SignUp'});
                }}

                >
                Sign Up
              </Text>
            </TouchableOpacity>

            {/* <TokenModal
              modalVisible={modal}
              handleOutside={() => {
                setModal(false);
              }}
              swipe={() => {
                setModal(false);
              }}
            /> */}

          </View>

        </View>

      </View>

      {/* <ErrorModal
        modalVisible={isError}
        handleOutside={() => {
          dispatch(closeError(false));
        }}
        handleClose={() => {
          dispatch(closeError(false));
        }}>
        <Text style={styles.textIn}>{logError}</Text>
      </ErrorModal> */}

    </SafeAreaView>
  );
};

//export default withNavigation(Login);
export default Login;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    marginHorizontal: 1,
  },
  container2: {
    display: 'flex',
    flex: 1,
    justifyContent: 'space-between',
    // marginHorizontal: 57,
  },
  image: {display: 'flex', alignItems: 'center'},
  text: {
    fontWeight: 'bold',
    fontSize: 17,
    color: '#2C2C2C',
    textAlign: 'center',
    marginHorizontal: 15,
  },
  form: {
    // width: wp('100%'),
    // maxWidth: 400,
    alignSelf: 'center',
  },
  bottom: {
    marginBottom: 22,
    alignItems: 'center',
  },
  linkGroup: {
    paddingTop: 10,
    textAlign: 'center',
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  link: {
    color: '#673AB7',
    fontSize: 14,
    fontWeight: '500',
  },
  link2: {
    color: '#673AB7',
    fontSize: 18,
    marginHorizontal: 4,
    fontWeight: 'bold',
  },
  textIn: {
    fontWeight: '600',
    fontSize: 17,
    textAlign: 'center',
    color: '#F98383',
    paddingTop: 9,
  },
});
