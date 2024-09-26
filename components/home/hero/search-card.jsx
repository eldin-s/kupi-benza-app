import { Text, View, Pressable, Image } from "react-native";
import { useState } from "react";
import mercedesLogo from "../../../assets/images/Mercedes-Logo.png";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import DropdownSearches from "../../ui/dropdown-searches";
import PrimaryButton from "../../ui/primary-button";
import sside from "../../../assets/images/cars/s-side.png";
import gside from "../../../assets/images/cars/g-side.png";
import gleside from "../../../assets/images/cars/gle-side.png";

const SearchCard = () => {
  const [carState, setCarState] = useState("Sve");
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <View className="bg-gray-300 rounded-2xl mb-6 mx-4">
      <View className="items-center justify-center flex-row">
        <Pressable onPress={() => setCarState("Sve")}>
          <View className="items-center justify-center">
            <Text
              className={`${
                carState === "Sve" ? "text-primary" : "text-black"
              } font-pregular px-10 py-4 w-full flex items-center justify-center text-lg`}
            >
              Sve
            </Text>
          </View>
        </Pressable>
        <Pressable onPress={() => setCarState("Novo")}>
          <View className="items-center justify-center">
            <Text
              className={`${
                carState === "Novo" ? "text-primary" : "text-black"
              } font-pregular border-x-[0.5px] px-10 py-4 w-full flex items-center justify-center text-lg`}
            >
              Novo
            </Text>
          </View>
        </Pressable>
        <Pressable onPress={() => setCarState("Polovno")}>
          <View className="items-center justify-center">
            <Text
              className={`${
                carState === "Polovno" ? "text-primary" : "text-black"
              } font-pregular px-7 py-4 w-full flex items-center justify-center text-lg`}
            >
              Polovno
            </Text>
          </View>
        </Pressable>
      </View>

      <View className="py-8 px-4 rounded-2xl mb-2 bg-white text-black relative ">
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
          <Text className="px-4 text-xl font-medium text-primary">GLA</Text>
          <Text className="text-primary text-xl absolute right-6">
            <MaterialIcons name="keyboard-arrow-down" size={24} />
          </Text>
        </Pressable>

        {isOpen && (
          <View className="absolute bottom-0 left-0 right-0 z-20 -translate-y-full mx-4 mt-2 bg-white border border-primary rounded-lg shadow-lg">
            <Pressable className="px-4 py-2">
              <Text>GLE</Text>
            </Pressable>
            <Pressable className="px-4 py-2">
              <Text>G-SQUARED</Text>
            </Pressable>
            <Pressable className="px-4 py-2">
              <Text>S-Class 550</Text>
            </Pressable>
          </View>
        )}

        <DropdownSearches />

        <PrimaryButton />

        <View className="items-center border-[0.5px] rounded-2xl overflow-hidden mt-2">
          <Text className="w-full border-r bg-primary px-2 py-4 rounded-s-xl text-white font-semibold text-sm text-center">
            BRZA PRETRAGA
          </Text>
          <View className="flex-row items-end gap-3 mt-4 pb-4">
            <Image source={sside} className="h-7 w-28" resizeMode="contain" />
            <Image source={gside} className="h-9 w-28" resizeMode="contain" />
            <Image source={gleside} className="h-9 w-28" resizeMode="contain" />
          </View>
        </View>
      </View>
    </View>
  );
};

export default SearchCard;
