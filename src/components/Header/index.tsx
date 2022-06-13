import { StyleSheet, Text, View } from "react-native";
export const Header = () => {
  return (
    <View>
      <Text style={styles.topText}>
        NICE! YOUR MONTHLY PARKING IS CONFIRMED.
      </Text>
      <Text style={styles.bottomText}>Your reservation details are below.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  topText: { fontFamily: "rubik-black", fontSize: 20, lineHeight: 23.7 },
  bottomText: {
    fontFamily: "rubik-regular",
    fontSize: 13,
    color: "#00000099",
    lineHeight: 18,
    paddingTop: 8,
  },
});
