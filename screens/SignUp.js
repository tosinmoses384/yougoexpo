import React from 'react';
//import {useSelector, useDispatch} from 'react-redux';
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
  StatusBar,
  FlatList,
} from 'react-native';
// import {Toast} from 'native-base';
import AllButton from '../components/AllButtons';
import TextComponent from '../components/TextComponent';
//import {registerUser, closeError, closeSuccess} from '../actions/Actions';
//import SuccessModals from '../components/Modals/SuccessModal';
//import ErrorModal from '../components/Modals/ErrorModals';

const {height} = Dimensions.get('screen'); // to get screen dimension (width and height)

const SignUp = props => {
  // redux selector
  // const {registration, registrationMessage, regError, isError} = useSelector(
  //   state => state,
  // );
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [number, setNumber] = useState('');
  // const [password, setPassword] = useState('');
  // const [eye, setEye] = useState(false);
  //const [modal, setModal] = useState(registration);
  //const dispatch = useDispatch();
  //const userData = {name, email, phone: number, password};

  // const handleRegDone = () => {
  //   dispatch(closeSuccess(false));
  //   navigation.navigate('Login');
  // };

  return (
    <SafeAreaView style={styles.container}>

      <StatusBar barStyle="light-content" backgroundColor="#522E92" />

      <View style={{marginTop: 94}}>

        <View style={styles.image}>
          <Image source={require('../assets/logo.png')} />
        </View>

        <View>
          <Text style={styles.text}>SIGN UP</Text>
        </View>

        <View style={styles.form}>

          <View>
            <TextComponent label="Full Name"
             //getText={name => setName(name)} 
              />
          </View>

          <View>
            <TextComponent label="Email" 
               //getText={email => setEmail(email)} 
                 />
          </View>

          <View>
            <TextComponent
              label="Phone Number"
              //getText={number => setNumber(number)}
            />
          </View>

          <View>
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

        </View>

      </View>

      <View style={styles.bottom}>

        <AllButton
          style={{textAlign: 'center'}}
          title="sign up"

          // handlePress={() => {
          //   dispatch(registerUser(userData));
          // }}
          
          status={true}
        />

        <View style={styles.linkGroup}>

          <Text>Already Have an account?</Text>

          <TouchableOpacity>
            <Text
              style={styles.link2}

              //onPress={() => navigation.navigate('Login')}

              onPress = {() => {
                props.navigation.navigate({routeName: 'Login'});
              }}

              >
              Sign In
            </Text>
          </TouchableOpacity>

        </View>

      </View>

      {/* <SuccessModals modalVisible={registration} handleRegDone={handleRegDone}>
        <Text>{registrationMessage}</Text>
      </SuccessModals> */}

      {/* <ErrorModal
        modalVisible={isError}
        handleOutside={() => {
          dispatch(closeError(false));
        }}
        handleClose={() => {
          dispatch(closeError(false));
        }}>

        <View>
          <FlatList
            data={regError}
            keyExtractor={item => item.param}
            renderItem={({item}) => {
              return (
                <View>
                  <Text style={styles.textIn}>{item.msg}</Text>
                </View>
              );
            }}
          />
        </View>

      </ErrorModal> */}

    </SafeAreaView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    paddingHorizontal: 17,
    justifyContent: 'space-between',
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
    alignSelf: 'center',
    height: '65%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
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
  err: {
    flexDirection: 'row',
  },
  textIn: {
    fontWeight: '600',
    fontSize: 17,
    textAlign: 'center',
    color: '#F98383',
    paddingTop: 9,
  },
});
