import { Text, View, Pressable, Image } from "react-native";
import { useState } from "react";
import mercedesLogo from "../../../assets/images/Mercedes-Logo.png";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const SearchCard = () => {
  const [carState, setCarState] = useState("Sve");
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <View className="bg-gray-300 rounded-2xl">
      <View className="items-center justify-center flex-row">
        <Pressable onPress={() => setCarState("Sve")}>
          <View>
            <Text
              className={`${
                carState === "Sve" ? "text-primary" : "text-black"
              } font-pregular px-10 py-4 cursor-pointer w-full flex items-center justify-center text-lg`}
            >
              Sve
            </Text>
          </View>
        </Pressable>
        <Pressable onPress={() => setCarState("Novo")}>
          <View>
            <Text
              className={`${
                carState === "Novo" ? "text-primary" : "text-black"
              } font-pregular px-10 py-4 cursor-pointer w-full flex items-center justify-center text-lg`}
            >
              Novo
            </Text>
          </View>
        </Pressable>
        <Pressable onPress={() => setCarState("Polovno")}>
          <View>
            <Text
              className={`${
                carState === "Polovno" ? "text-primary" : "text-black"
              } font-pregular px-10 py-4 cursor-pointer w-full flex items-center justify-center text-lg`}
            >
              Polovno
            </Text>
          </View>
        </Pressable>
      </View>

      <View className="py-8 px-4 rounded-2xl mb-2 bg-white text-black relative cursor-pointer">
        <Pressable
          className="flex flex-row items-center border rounded-2xl border-primary"
          onPress={toggleDropdown}
        >
          <View className="border-r border-gray-300 w-20 h-16 px-4 py-2">
            <Image
              source={mercedesLogo}
              className="w-12 h-12"
              resizeMode="contain"
            />
          </View>
          <Text className="cursor-pointer px-4 text-xl font-medium text-primary">
            GLA
          </Text>
          <Text className="text-primary text-xl absolute right-6">
            <MaterialIcons name="keyboard-arrow-down" size={24} />
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default SearchCard;
