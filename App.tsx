import { StyleSheet, Text, View } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { Header } from "./src/components/Header";
import CloseIcon from "./assets/images/icon-close.svg";
import { ParkingCard } from "./src/components/ParkingCard";
import { Button } from "./src/components/Button";
export default function App() {
  let [fontsLoaded] = useFonts({
    "rubik-black": require("./assets/fonts/Rubik-Black.ttf"),
    "rubik-regular": require("./assets/fonts/Rubik-Regular.ttf"),
    "rubik-medium": require("./assets/fonts/Rubik-Medium.ttf"),
    "rubik-bold": require("./assets/fonts/Rubik-Bold.ttf"),
    "gt-america-bold": require("./assets/fonts/gt-america-bold.ttf"),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6C62D",
    padding: 16,
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
