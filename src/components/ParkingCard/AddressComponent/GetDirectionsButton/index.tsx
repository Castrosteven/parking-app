import { StyleSheet, Text, TouchableOpacity } from "react-native";
import DirrectionIcon from "../../../../../assets/images/s-icon-directions.svg";
export const GetDirectionsButton = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <DirrectionIcon />
      <Text style={styles.text}>GET DIRECTIONS</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
  },
  text: {
    color: "#118AA3",
    letterSpacing: 1,
    fontFamily: "rubik-bold", //700 Bold
    paddingLeft: 8,
  },
});
