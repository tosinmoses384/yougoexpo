
import React, {useState} from "react";
import { Text, View } from "react-native";
import * as Font from "expo-font";
import { AppLoading } from 'expo';

import BookingsNavigator from './navigation/BookingsNavigator';

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
    'Roboto': require('./assets/fonts/Roboto-Regular.ttf'),
    'Roboto_medium': require('./assets/fonts/Roboto-Medium.ttf')
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (fontLoaded) {

return (
    <BookingsNavigator />
    );
  } else {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
      />
    );
  }
}
