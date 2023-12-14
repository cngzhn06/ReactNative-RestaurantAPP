import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

export default function ResultDetail({ result }) {
  return (
    <View>
      <Image
        style={styles.image}
        source={result.image_url ? { uri: result.image_url } : null}
      />
      <Text style={styles.title}>{result.name}</Text>
      <Text style={styles.rating}>
        {result.rating} Yıldız, {result.review_count} Değerlendirme
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 240,
    height: 120,
    marginHorizontal:10,
    borderRadius: 15,
    marginBottom:5
  },
  title: {
    fontSize: 18,
    margin: 5,
    textAlign: "center",
    fontWeight: "600",
  },
  rating: {
    fontSize: 15,
    textAlign: "center",
    fontWeight: "400",
  },
});
