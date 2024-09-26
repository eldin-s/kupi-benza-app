import { Text, TouchableOpacity } from "react-native";
import React from "react";

const OutlineButton = ({ text }) => {
  return (
    <TouchableOpacity className="border border-primary p-4 rounded-2xl w-full my-5 flex items-center">
      <Text className="font-bold tracking-wider text-white">{text}</Text>
    </TouchableOpacity>
  );
};

export default OutlineButton;
