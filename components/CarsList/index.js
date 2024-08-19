import { View, Text, FlatList, Dimensions } from "react-native";
import React from "react";
import { styles } from "./styles";
import cars from "./cars";
import CarItem from "../Caritem";

const CarsList = () => {
  return (
    <View style={styles.container}>
      <FlatList
        scrollIndicator={false}
        data={cars}
        renderItem={({ item }) => <CarItem car={item} />}
        keyExtractor={(item) => item.id}
        snapToAlignment="start"
        decelerationRate={"fast"}
        snapToInterval={Dimensions.get("window").height}
      />
    </View>
  );
};

export default CarsList;
