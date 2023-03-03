import React from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";

const LoadingOverlay = ({ isVisible }) => {
  return (
    <View style={[styles.overlay, isVisible ? styles.visible : styles.hidden]}>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    justifyContent: "center",
    alignItems: "center",
  },
  visible: {
    zIndex: 999,
  },
  hidden: {
    zIndex: -999,
  },
});

export default LoadingOverlay;
