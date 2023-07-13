import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { useContext } from "react";
import { ImageContext } from "../contexts/ImageContext";
import PageWrapper from "./PageWrapper";
import { useNavigation } from "@react-navigation/native";
import LoadingOverlay from "../components/LoadingOverlay";

const PreviewPhoto = () => {
  const { imageData } = useContext(ImageContext);
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();

  const handleSave = async () => {
    try {
      setIsLoading(true);

      const formData = new FormData();
      formData.append("image", {
        base64: imageData.base64Image,
        type: "image/jpeg",
        name: "image.jpg",
      });
       // Send the photo to the API and extract the text and handwriting
       const response = await fetch("https://ed07353ce622.ngrok.app/single", {
         method: "POST",
         headers: { "Content-Type": "multipart/form-data" },
         body: formData,
       });
       if (!response.ok) {
         throw new Error("Network response was not ok");
        }
      const data = await response.json();
      console.log('DATA', data)
       // Do something with the data
       setIsLoading(false);
       // Navigate to the success screen
       navigation.navigate("Success", {
         extractedText: data,
       });
    } catch (error) {
      throw new Error(`error in sendImage ${error}`)
    }
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: imageData.previewImage }} style={styles.photo} />
      <TouchableOpacity style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}>Save Image</Text>
      </TouchableOpacity>
      <LoadingOverlay isVisible={isLoading} />
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

export default PageWrapper(PreviewPhoto);
