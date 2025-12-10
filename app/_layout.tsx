import { useFonts } from 'expo-font';
import { Stack } from "expo-router";
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import './global.css';

SplashScreen.preventAutoHideAsync();


export default function RootLayout() {
  const [fontsLoaded, error] = useFonts({
    "Quicksand-Bold": require('../assets/fonts/Quicksand-Bold.ttf'),
    "Quicksand-Medium": require('../assets/fonts/Quicksand-Medium.ttf'),
    "Quicksand-SemiBold": require('../assets/fonts/Quicksand-SemiBold.ttf'),
    "Quicksand-Regular": require('../assets/fonts/Quicksand-Regular.ttf'),
    "Quicksand-Light": require('../assets/fonts/Quicksand-Light.ttf'),

    "Cinzel-Bold": require('../assets/fonts/Cinzel-Bold.ttf'),
    "Cinzel-Medium": require('../assets/fonts/Cinzel-Medium.ttf'),
    "Cinzel-Regular": require('../assets/fonts/Cinzel-Regular.ttf'),

    "GreatVibes": require('../assets/fonts/GreatVibes-Regular.ttf'),
  });

  useEffect(() => {
    if (fontsLoaded || error) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, error]);

  if (!fontsLoaded && !error) {
    return null;
  }

  return <Stack screenOptions={{ headerShown: false }} />;
}
