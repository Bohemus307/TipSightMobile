import React from "react";
import { StyleSheet, Text, View } from "react-native";
import PageWrapper from "./PageWrapper";
import { useRoute } from "@react-navigation/native";
const SuccessScreen = () => {
  const route = useRoute();
  const { extractedText } = route.params;
  console.log('TEXT', extractedText);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Successfully processed image!</Text>
      <Text style={styles.text}>temp text...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white"
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 10,
  },
});

export default PageWrapper(SuccessScreen);
