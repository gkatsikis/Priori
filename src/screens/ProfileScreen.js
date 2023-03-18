import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ProfileScreen = () => {
    return (
        <View>
        <Text style={styles.text}>Profile</Text>
        </View>
    );
    }

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
        textAlign: "center",
        verticalMargin: 10,
        color: "range",
    },
});

export default ProfileScreen;
