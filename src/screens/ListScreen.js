import React from 'react'
import { Text, StyleSheet, View, Button, TouchableOpacity, FlatList } from 'react-native'

const ListScreen = ({ navigation }) => {

    let tasks = [
        { name: "Study", key: "1" },
        { name: "Work", key: "2" },
        { name: "Play", key: "3" },
        { name: "Sleep", key: "4" },
        { name: "Eat", key: "5" },
        { name: "Paint", key: "6" },
    ]


    return (
        <View>
            <Text style={styles.text}>PrioriTies</Text>
            <FlatList
                keyExtractor={(item) => item.key}
                data={tasks}
                renderItem={({ item }) => {
                    return <Text style={styles.textStyle}>{item.name}</Text>
                }}
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
})

export default ListScreen