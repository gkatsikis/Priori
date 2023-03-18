import React from "react";
import {
  Text,
  StyleSheet,
  View,
  Button,
  TouchableOpacity,
  FlatList,
} from "react-native";

const NavBar = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("Profile")}
        style={styles.touchableOp}
      >
        <Text>Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("List")}
        style={styles.touchableOp}
      >
        <Text>Go to List</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginBottom: 10,
    marginTop: 10,
  },
  touchableOp: {
    backgroundColor: "lightblue",
    padding: 10,
    borderRadius: 10,
    margin: 0,
    marginLeft: 10,
    marginRight: 10,
  },
});

export default NavBar;
