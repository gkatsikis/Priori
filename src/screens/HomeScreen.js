import React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import NavBar from "../components/NavBar";

const HomeScreen = (props) => {


  return (
    <View>
      <NavBar />
      <Text style={styles.text}>HomeScreen</Text>
      
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    textAlign: "center",
    verticalMargin: 10,
  },
});

export default HomeScreen;
