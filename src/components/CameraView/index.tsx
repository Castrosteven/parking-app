import { Camera, CameraType, requestCameraPermissionsAsync } from "expo-camera";
import { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ImageViewer } from "../ImageViewer";
import CameraIcon from "../../../assets/images/icon-camera.svg";
import CloseIcon from "../../../assets/images/icon-close.svg";

export const CameraView = ({ onPress }: { onPress: () => void }) => {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [imgFile, setImgFile] = useState<string | null>(null);
  let camera: Camera;
  useEffect(() => {
    (async () => {
      const { status } = await requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);
  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  const takeApicture = async () => {
    if (camera) {
      try {
        const options = { quality: 0.5 };
        const data = await camera.takePictureAsync(options);
        setImgFile(data.uri);
        console.log();
      } catch (error) {}
    }
  };

  return (
    <View style={styles.container}>
      {imgFile !== null ? (
        <ImageViewer uri={imgFile} closeImageViewer={onPress} />
      ) : (
        <Camera
          ref={(ref) => (camera = ref!)}
          style={styles.camera}
          type={CameraType.back}
        >
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={{
                position: "absolute",
                left: 50,
              }}
              onPress={() => {
                onPress();
              }}
            >
              <CloseIcon />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                takeApicture();
              }}
            >
              <CameraIcon width={40} height={40} />
            </TouchableOpacity>
          </View>
          <View></View>
        </Camera>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    height: 50,
    flexDirection: "row",
  },
  button: {},
  text: {
    fontSize: 18,
    color: "black",
  },
});
