import React from "react";
import {
  Text,
  StyleSheet,
  View,
  Button,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Icon } from "react-native-elements";

const NavBar = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        icon={<Icon name="user" type="font-awesome" size={15} color="white" />}
        onPress={() => navigation.navigate("Profile")}
        style={styles.touchableOp}
      >
        <Text>Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("List")}
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
  //   touchableOp: {
  //     backgroundColor: "lightblue",
  //     padding: 10,
  //     borderRadius: 20,
  //     margin: 0,
  //     marginLeft: 10,
  //     marginRight: 10,
  //     color: "white",
  //     fontWeight: "bold",
  //   },
});

export default NavBar;
