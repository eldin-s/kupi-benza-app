import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Parking = () => {
  return (
    <SafeAreaView className="bg-bgColor min-h-full p-4 justify-center">
      <Text className="text-white text-center">Izgradnja u toku</Text>
    </SafeAreaView>
  );
};

export default Parking;
