import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import { Header } from "./src/components/Header";
import CloseIcon from "./assets/images/icon-close.svg";
import { ParkingCard } from "./src/components/ParkingCard";
import { Button } from "./src/components/Button";
import * as SplashScreen from "expo-splash-screen";
import Geocoder from "react-native-geocoding";
const apiKey = "AIzaSyD80EzHhyTX-JMyPyrhBiygJY4RXFv7qus";
import Data from "./data.json";
Geocoder.init(apiKey);
import { useCallback, useEffect, useState } from "react";
import { BackgroundMap } from "./src/components/BackgroundMap";
export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  const { parkingLotAddress } = Data;
  let [fontsLoaded] = useFonts({
    "rubik-black": require("./assets/fonts/Rubik-Black.ttf"),
    "rubik-regular": require("./assets/fonts/Rubik-Regular.ttf"),
    "rubik-medium": require("./assets/fonts/Rubik-Medium.ttf"),
    "rubik-bold": require("./assets/fonts/Rubik-Bold.ttf"),
    "gt-america-bold": require("./assets/fonts/gt-america-bold.ttf"),
  });
  const [mapRegion, setmapRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();
        const latt = await getLatFromAddress();
        setmapRegion((data) => ({
          ...data,
          latitude: latt!.lat,
          longitude: latt!.lng,
        }));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }
    prepare();
  }, []);

  const getLatFromAddress = async () => {
    try {
      const json = await Geocoder.from(parkingLotAddress);
      return json.results[0].geometry.location;
    } catch (error) {
      console.warn(error);
    }
  };

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!fontsLoaded || !appIsReady) {
    return null;
  }
  return (
    <View onLayout={onLayoutRootView}>
      {/* MAP */}
      <BackgroundMap mapRegion={mapRegion} />
      {/* OVERLAY */}
      <View style={styles.overlay} />
      {/* Main View */}
      <View style={styles.container}>
        <View style={styles.closeButtonContainer}>
          <CloseIcon />
        </View>
        <View style={styles.headerContainer}>
          <Header />
        </View>
        <ParkingCard />
        <View style={styles.buttonContainer}>
          <Button />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  overlay: {
    backgroundColor: "#F6C62D",
    position: "absolute",
    opacity: 0.75,
    padding: "100%",
  },
  closeButtonContainer: {
    marginTop: 58,
  },
  headerContainer: {
    marginLeft: 8,
    marginTop: 34,
    width: 311,
  },
  buttonContainer: {
    marginTop: 24,
    marginBottom: 43 - 16,
  },
});
