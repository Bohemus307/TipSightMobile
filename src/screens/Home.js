import React, { useContext, useRef } from 'react';
import { StyleSheet, Text, Pressable, View } from 'react-native';
import TakePhoto from '../components/TakePhoto';
import { ImageContext } from "../contexts/ImageContext";
import * as FileSystem from "expo-file-system";
import PageWrapper from './PageWrapper';
import { useNavigation } from "@react-navigation/native";

export const HomeScreen = () => {
  const { setImageData } = useContext(ImageContext);
  const cameraRef = useRef(null);
  const navigation = useNavigation();
  
  const handleCapture = async () => {
    if (cameraRef.current) {
      const options = { quality: 0.5, base64: true };
      const data = await cameraRef.current.takePictureAsync(options);

      const base64Image = await FileSystem.readAsStringAsync(data.uri, {
        encoding: FileSystem.EncodingType.Base64,
      });

      setImageData({ previewImage: data.uri, base64Image });
      navigation.navigate('Preview');
    }
  };

  return (
    <View style={styles.container}>
      <TakePhoto ref={cameraRef} onReady={() => setCameraReady(true)} />
      <View style={styles.captureContainer}>
        <Pressable
          style={styles.button}
          onPress={handleCapture}
        >
          <Text style={styles.buttonLabel}>Take Photo</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#000",
  },
  button: {
    borderRadius: 10,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  buttonLabel: {
    //color: "#fff",
    fontSize: 16,
  },
  captureContainer: {
    position: "absolute",
    bottom: 0,
    alignSelf: "center",
    backgroundColor: "#fff",
    borderRadius: 50,
    padding: 15,
    marginBottom: 30,
  },
});

export default PageWrapper(HomeScreen);