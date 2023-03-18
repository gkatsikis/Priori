import React from 'react'
import { Text, StyleSheet, View, Button, TouchableOpacity, FlatList } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

const NavBar = () => {
    return (
        <View>
            <Button
                <FontAwesomeIcon icon="fa-solid fa-user" />
                onPress={(props) => props.navigation.navigate("Profile")}
                style={styles.buttonStyle}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
        textAlign: "center",
    },
    textStyle: {
        marginVertical: 10,
        textAlign: "center",
    },

    buttonStyle: {
        marginVertical: 10,
        textAlign: "center",
        justifyContent: "space-evenly",
        fontSize: 5,
    }
})

export default NavBar