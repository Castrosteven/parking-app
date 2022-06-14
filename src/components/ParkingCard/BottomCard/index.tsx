import { View, Image, Text } from "react-native";
import ChatIcon from "../../../../assets/images/icon-messages.svg";
export const BottomCard = () => {
  return (
    <View
      style={{
        height: 71,
        backgroundColor: "#F4F6F8",
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <View
        style={{
          marginLeft: 24,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Image
          source={require("../../../../assets/images/profile-picture.jpg")}
          style={{ width: 40, height: 40, borderRadius: 50 }}
        />
        <View style={{ marginLeft: 12 }}>
          <Text style={{ fontFamily: "rubik-medium" }}>Annie W.</Text>
          <Text style={{ color: "#00000080" }}>Owner</Text>
        </View>
      </View>
      <View style={{ marginRight: 24 }}>
        <ChatIcon width={24} height={24} />
      </View>
    </View>
  );
};
