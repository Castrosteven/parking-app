import { Text, View } from "react-native";
export const Header = () => {
  return (
    <View>
      <View
        style={{
          marginLeft: 8,
          marginTop: 34,
          width: 311,
        }}
      >
        <Text
          style={{
            fontFamily: "rubik-black",
            fontSize: 20,
            lineHeight: 23.7,
          }}
        >
          NICE! YOUR MONTHLY PARKING IS CONFIRMED.
        </Text>
        <Text
          style={{
            fontFamily: "rubik-regular",
            fontSize: 13,
            color: "#00000099",
            lineHeight: 18,
            paddingTop: 8,
          }}
        >
          Your reservation details are below.
        </Text>
      </View>
    </View>
  );
};
