import { View, Text, ImageBackground } from "react-native";
import React from "react";
import { styles } from "./styles";
import StyledButton from "../StyledButton";

const CarItem = ({ car }) => {
  return (
    <View style={styles.carContainer}>
      <ImageBackground source={car.image} style={styles.image} />
      <View style={styles.titles}>
        <Text style={styles.title}>{car.name}</Text>
        <Text style={styles.subtitle}>
          {car.tagline}
          <Text style={styles.taglineCTA}> {car.taglineCTA}</Text>
        </Text>
      </View>
      <View style={styles.buttonsContainer}>
        <StyledButton
          text="Costum Order"
          type={"primary"}
          textColor="primary"
          onPress={() => alert("hi")}
        />
        <StyledButton
          text="existıng ınventory"
          textColor="primary"
          onPress={() => alert("hello bich")}
        />
      </View>
    </View>
  );
};

export default CarItem;
