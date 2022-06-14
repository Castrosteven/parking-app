import { View, Image } from "react-native";
import CloseIcon from "../../../assets/images/icon-close.svg";
export const ImageViewer = ({ uri }: { uri: string }) => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        backgroundColor: "#F6C62D",
      }}
    >
      <View style={{ paddingTop: 58, paddingLeft: 26 }}>
        <CloseIcon />
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          flex: 1,
        }}
      >
        <Image
          style={{
            width: 350,
            height: 600,
          }}
          source={{
            uri,
          }}
        />
      </View>
    </View>
  );
};
