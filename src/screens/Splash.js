import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Video } from "expo-av";


const SplashScreen = ({ navigation }) => {
  const [videoLoaded, setVideoLoaded] = useState(false);

  const handleVideoLoad = () => {
    setVideoLoaded(true);
  };

  const handlePress = () => {
    navigation.navigate("Take Picture");
  };

  return (
    <View style={styles.container}>
      <Video
        style={styles.video}
        source={require("../assets/images/TipSight.mp4")}
        useNativeControls
        resizeMode="cover"
        isLooping
        shouldPlay
        onReadyForDisplay={handleVideoLoad}
      />
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  video: {
    flex: 1,
    position: "absolute",
    top: 0,
    height: "50%",
    width: "90%"
  },
  button: {
    backgroundColor: "#fff",
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 8,
    marginBottom: 200
  },
  buttonText: {
    color: "black",
    fontSize: 18,
  },
});

export default SplashScreen;
