import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Video } from "react-native";
import { Asset } from "expo-asset";
import { AppLoading } from "expo";

const SplashScreen = ({ navigation }) => {
  const [isReady, setIsReady] = useState(false);
  
  useEffect(() => {
    const loadAssetsAsync = async () => {
      await Asset.loadAsync(require("./assets/splash.mp4"));
    };

    loadAssetsAsync().then(() => setIsReady(true));
  }, []);

  if (!isReady) {
    return <AppLoading />;
  }

  const handlePress = () => {
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <Video
        source={require("./assets/TipSight.mp4")}
        rate={1.0}
        isMuted={true}
        resizeMode="cover"
        shouldPlay={true}
        isLooping={false}
        style={styles.video}
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
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  video: {
    flex: 1,
  },
  logo: {
    fontSize: 48,
    fontWeight: "bold",
    marginBottom: 64,
  },
  button: {
    backgroundColor: "#0084ff",
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
  },
});

export default SplashScreen;
