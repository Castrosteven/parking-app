import { Alert, StyleSheet, View } from "react-native";
import { Button } from "../Button";
import { Header } from "../Header";
import { ParkingCard } from "../ParkingCard";
import CloseIcon from "../../../assets/images/icon-close.svg";

export const MainScreen = ({ onPress }: { onPress: () => void }) => {
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
        <Button onPress={onPress} />
      </View>
    </View>
  );
};
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
    marginTop: 58 - 16,
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
