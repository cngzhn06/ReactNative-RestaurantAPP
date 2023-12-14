import { Image, StyleSheet, Text, View, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import yelp from "../api/yelp";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
export default function SingleRestoran({ route }) {
  const [result, setResult] = useState(null);

  const id = route.params.id;

  const getResult = async (id) => {
    const response = await yelp.get(`${id}`);
    setResult(response.data);
  };

  useEffect(() => {
    getResult(id);
  }, []);

  // belli bi süre bekleyince data geliyor o yüzden böyle bir koşul var
  if (!result) {
    return null;
  }

  return (
    <View>
      <Text style={styles.title}>{result.name}</Text>
      <Text style={styles.phone}>{result.phone}</Text>
      <View style={styles.icons}>
        {result.is_closed ? (
          <>
            {" "}
            <MaterialIcons name="food-bank" size={44} color="black" />
            <FontAwesome name="close" size={44} color="black" />{" "}
          </>
        ) : (
          <>
            <MaterialIcons name="food-bank" size={44} color="black" />
            <FontAwesome name="check" size={44} color="black" />
          </>
        )}
      </View>

      <FlatList
        data={result.photos}
        renderItem={({ item }) => {
          return <Image style={styles.image} source={{ uri: item }} />;
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 180,
    margin: 15,
    borderRadius: 30,
  },
  title: {
    alignSelf: "center",
    fontSize: 25,
    fontWeight: "bold",
    marginVertical: 10,
  },
  phone: {
    alignSelf: "center",
    fontSize: 20,
  },
  icons: {
    alignSelf:'center',
    flexDirection:'row',
  }
});
