import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

export default class ReadStoryScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{ alignSelf: "center", fontWeight: "bold" }}>Read Story</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
  });
