import { Text, TouchableOpacity, View } from "react-native";
import Camera from "../../../assets/images/icon-camera.svg";
export const Button = () => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: "#000000",
        height: 60,
        borderRadius: 24,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
      }}
    >
      <View
        style={{
          marginLeft: 22,
          marginRight: 2,
        }}
      >
        <Camera />
      </View>
      <View
        style={{
          width: 299,
          display: "flex",
        }}
      >
        <Text
          style={{
            fontFamily: "rubik-black",
            color: "white",
            fontSize: 17,
            textAlign: "center",
          }}
        >
          IDENTIFY YOUR VEHICLE
        </Text>
      </View>
    </TouchableOpacity>
  );
};
