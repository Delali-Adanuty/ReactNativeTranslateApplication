import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import {View, Text} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import globalStyles from './styles';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from '@/app/tab';
import { Provider } from 'react-redux';
import store from '@/store/store'

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {

  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    DMSans: require('../assets/fonts/DMSans-Regular.ttf'),
    DMSansBold: require('../assets/fonts/DMSans-Bold.ttf')
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <NavigationContainer independent={true}>
        <Tabs/>
      </NavigationContainer>
    </Provider>
  );
}
