import { Camera, CameraType, requestCameraPermissionsAsync } from "expo-camera";
import { useEffect, useState } from "react";
import {
  CameraRoll,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { ImageViewer } from "../ImageViewer";

export const CameraView = ({ onPress }: { onPress: () => void }) => {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [imgFile, setImgFile] = useState<string | null>(null);
  const [type, setType] = useState(CameraType.back);
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
        <ImageViewer uri={imgFile} />
      ) : (
        <Camera
          ref={(ref) => (camera = ref!)}
          style={styles.camera}
          type={type}
        >
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                onPress();
              }}
            >
              <Text style={styles.text}> X </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                takeApicture();
              }}
            >
              <Text style={styles.text}> P </Text>
            </TouchableOpacity>
          </View>
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
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: "transparent",
    flexDirection: "row",
    margin: 20,
  },
  button: {
    flex: 0.1,
    alignSelf: "flex-end",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    color: "white",
  },
});
