import React, { Component } from "react";
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from "react-native";

export default class WriteStoryScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.input} placeholder="Title of the Story" placeholderTextColor="black" />
        <TextInput style={styles.input} placeholder="Author of the Story" placeholderTextColor="black" />
        <TextInput style={styles.storyInput} placeholder="Story" placeholderTextColor="black" multiline={true} />
        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
    },

    input: {
        height: 40,
        width: 300,
        borderColor: 'black',
        borderWidth: 2,
        fontWeight: "bold",
        marginLeft: 790,
        marginTop: 100,
        color: 'black',
        outline: 'none',
    },

    storyInput: {
        height: 120,
        width: 300,
        borderColor: 'black',
        borderWidth: 2,
        marginLeft: 790,
        marginTop: 100,
        color: 'black',
        textAlignVertical: "center",
        outline: 'none',
    },

    button: {
        alignSelf: "center",
        width: 115,
        height: 40,
        borderRadius: 10,
        borderColor: "black",
        marginTop: 20,
        backgroundColor: "black"
    },

    buttonText: {
        alignSelf: "center",
        color: "pink",
        fontWeight: "bold",
        justifyContent: "center",
        alignItems: "center",
        textAlignVertical: "center",
        marginTop: 9
    }
  });