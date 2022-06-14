import { View, Image, TouchableOpacity } from "react-native";
import CloseIcon from "../../../assets/images/icon-close.svg";
export const ImageViewer = ({
  uri,
  closeImageViewer,
}: {
  uri: string;
  closeImageViewer: () => void;
}) => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        backgroundColor: "#F6C62D",
      }}
    >
      <View style={{ paddingTop: 58, paddingLeft: 26 }}>
        <TouchableOpacity
          onPress={() => {
            closeImageViewer();
          }}
        >
          <CloseIcon />
        </TouchableOpacity>
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
