import React from "react";
import { StyleSheet, Text, View } from "react-native";

const SuccessScreen = ({ route }) => {
  const { extractedText } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Successfully processed image!</Text>
      <Text style={styles.text}>{extractedText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 10,
  },
});

export default SuccessScreen;
