import React, { useState, useRef } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import LoadingOverlay from "../components/LoadingOverlay";
import { useContext } from "react";
import { ImageContext } from "../contexts/ImageContext";

const PreviewPhoto = ({ navigation }) => {
  const { imageData } = useContext(ImageContext);
  const [isLoading, setIsLoading] = useState(false);
  
  const handleSave = async () => {
    try {
        // Send image to API for processing
        sendPhotoToAPI();
    } catch (error) {
      throw new Error(`error in sendImage ${error}`)
    }
  };

  const sendPhotoToAPI = async () => {
    setIsLoading(true);
    // Send the photo to the API and extract the text and handwriting
    // Here we would make an API call using the `photo` state variable
    console.log("SEND IT!!!!!!");
    setIsLoading(false);
    // Navigate to the success screen
    navigation.navigate("Success", { extractedText: 'Hello World' });
  };



  return (
    <View style={styles.container}>
      <Image source={{ uri: imageData.previewImage }} style={styles.photo} />
      <TouchableOpacity style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}>Save Image</Text>
      </TouchableOpacity>
      {/* <LoadingOverlay isVisible={isLoading} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "white",
  },
  photo: {
    flex: 1,
  },
  canvas: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    margin: 20,
    borderRadius: 5,
    padding: 10,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default PreviewPhoto;
