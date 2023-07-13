import React from "react";
import { View, StyleSheet } from "react-native";
import Header from "./Header";

const PageWrapper = (Component) => {
  return () => {
    return (
      <View style={styles.container}>
        <Header />
        <Component />
      </View>
    );
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
});

export default PageWrapper;
