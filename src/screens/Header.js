import React, { useContext } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { AppContext } from "../contexts/appContext";

const Header = () => {
  const { appData } = useContext(AppContext);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>{appData.username}</Text>
      </View>
      <View>
        <Text style={styles.subtitle}>
          {'  '}{appData.totalReciepts} photos taken
        </Text>
        <Text style={styles.subtitle}>
          ${appData.totalTips} tips accumulated
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    height: 100,
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 14,
    color: "#9B9B9B",
    paddingVertical: 10
  },
});

export default Header;
