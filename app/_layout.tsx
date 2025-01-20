import { SplashScreen, Stack } from "expo-router";
import "./globals.css";
import { useFonts } from "expo-font";
import { useEffect } from "react";

export default function RootLayout() {
  const [fontsLoaded, error] = useFonts({
    "Rubik-Bold": require("../assets/fonts/Rubik-Bold.ttf"),
    "Rubik-Medium": require("../assets/fonts/Rubik-Medium.ttf"),
    "Rubik-Regular": require("../assets/fonts/Rubik-Regular.ttf"),
    "Rubik-SemiBold": require("../assets/fonts/Rubik-SemiBold.ttf"),
    "Rubik-Light": require("../assets/fonts/Rubik-Light.ttf"),
    "Rubik-ExtraBold": require("../assets/fonts/Rubik-ExtraBold.ttf"),
  });

  useEffect(() => {
    // prevent the splash screen from hiding automatically
    SplashScreen.preventAutoHideAsync();

    if (fontsLoaded) {
      // hide the splash screen when fonts are loaded
      SplashScreen.hideAsync();
    } else if (error) {
      // Handle font loading error
      console.error("Error loading fonts:", error);
      SplashScreen.hideAsync(); // Hide splash screen even if fonts fail to load
    }
  }, [fontsLoaded, error]);

  if (!fontsLoaded) {
    // prevent rendering of the app while fonts are loading
    return null;
  }

  return <Stack screenOptions={{headerShown:false}} />;
}
