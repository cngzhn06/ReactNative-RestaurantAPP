import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

export default function SearchBar({term, onTermChange , onTermSubmit}) {
  return (
    <View style={styles.backgroundStyle}>
      <Ionicons
        style={styles.iconStyle}
        name="search-circle"
        size={35}
        color="black"
      />
      <TextInput
        style={styles.inputStyle}
        placeholder="Ara"
        autoCorrect={false}
        autoCapitalize="none"
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: "lightgray",
    flexDirection: "row",
    margin: 10,
    height: 45,
    alignItems: "center",
    borderRadius: 20,
  },
  iconStyle: {
    marginHorizontal: 15,
  },
  inputStyle: {
    flex: 1,
    fontSize: 20,
  },
});
