import { Text, View } from "react-native";
import React from "react";
import DisplayCard1 from "./display-card1";
import DisplayCard2 from "./display-card2";

const Cards = () => {
  return (
    <View className="mx-4">
      <DisplayCard1 />
      <DisplayCard2 />
    </View>
  );
};

export default Cards;
