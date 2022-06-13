import { StyleSheet, Text, View } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { Header } from "./src/components/Header";
import CloseIcon from "./assets/images/icon-close.svg";
import { ParkingCard } from "./src/components/ParkingCard";
export default function App() {
  let [fontsLoaded] = useFonts({
    "rubik-black": require("./assets/fonts/Rubik-Black.ttf"),
    "rubik-regular": require("./assets/fonts/Rubik-Regular.ttf"),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <View style={styles.container}>
      <View
        style={{
          marginTop: 58,
        }}
      >
        <CloseIcon />
      </View>
      <Header />
      <ParkingCard />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6C62D",
    padding: 16,
  },
});
