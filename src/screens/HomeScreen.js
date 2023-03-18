import React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import NavBar from "../components/NavBar";

const HomeScreen = (props) => {


  return (
    <View>
      <NavBar />
      <Text style={styles.text}>HomeScreen</Text>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("List")}
        style={styles.touchableOp}
      >
        <Text>Go to List</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("Profile")}
        style={styles.touchableOp}
      >
        <Text>Go to Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    textAlign: "center",
    verticalMargin: 10,
  },
  touchableOp: {
    marginVertical: 10,
  },
});

export default HomeScreen;
