import { Alert, StyleSheet, View } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import Geocoder from "react-native-geocoding";
import Data from "./data.json";
import { useCallback, useEffect, useState } from "react";
import { BackgroundMap } from "./src/components/BackgroundMap";
import { MainScreen } from "./src/components/MainScreen";
import { CameraView } from "./src/components/CameraView";
import { Camera } from "expo-camera";
const apiKey = "AIzaSyD80EzHhyTX-JMyPyrhBiygJY4RXFv7qus";
Geocoder.init(apiKey);

export default function App() {
  const [startCamera, setStartCamera] = useState(false);
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
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!fontsLoaded || !appIsReady) {
    return null;
  }

  const __startCamera = () => {
    setStartCamera(true);
  };
  const __closeCamera = () => {
    setStartCamera(false);
  };

  if (startCamera) {
    return <CameraView onPress={__closeCamera} />;
  } else {
    return (
      <View onLayout={onLayoutRootView}>
        <BackgroundMap mapRegion={mapRegion} />
        {/* OVERLAY */}
        <View style={styles.overlay} />
        {/* Main View */}
        <MainScreen onPress={__startCamera} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  overlay: {
    backgroundColor: "#F6C62D",
    position: "absolute",
    opacity: 0.75,
    padding: "100%",
  },
});
