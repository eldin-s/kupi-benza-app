import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons"; //
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import glb from "../../../assets/images/cars/GLB_35.png";
import gls from "../../../assets/images/cars/gls.png";
import amg from "../../../assets/images/AMG-Logo.png";
import OutlineButton from "../../ui/outline-button";

const images = [
  {
    src: glb,
    name: "GLB",
    description:
      "Oduševljava do sedam ljudi: Novi Mercedes-AMG GLB 35 4MATIC otvara vam svet SUV-ova performansi. I u isto vreme, nudi mnogo prostora i fleksibilnosti za vaše ideje.",
    engine: "AMG 2,0-litarski četvorocilindrični motor sa turbopunjačem",
    power: "225kw/302ks",
    transmission: "AMG SPEEDSHIFT DCT 8G",
  },
  {
    src: gls,
    name: "GLS",
    description:
      "Pritisnite start da oživite V8 motor od 603 konjske snage i pustite ga da buči kroz 4 podešene izduvne cevi. Inteligentni pogon na sva četiri točka, samostabilizujuće vešanje i crvene kočione čeljusti.",
    engine: "AMG V8",
    power: "450kw/603ks",
    transmission: "AMG SPEEDSHIFT DCT 8G",
  },
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <View className="mt-6 mx-4">
      {/* Logo */}
      <Image source={amg} className="w-40 h-10 pt-10" resizeMode="contain" />

      {/* Car Name and Description */}
      <Text className="text-white text-3xl py-2 font-pregular">
        Mercedes Benz{" "}
        <Text className="text-white text-3xl font-pbold">
          {images[currentIndex].name}
        </Text>
      </Text>
      <Text className="text-sm font-pregular text-white text-center py-4">
        {images[currentIndex].description}
      </Text>

      {/* Car Info: Engine, Power, Transmission */}
      <View className="space-y-4 flex-row items-center gap-2 flex-wrap justify-center">
        <View className="items-center">
          <MaterialCommunityIcons
            name="engine-outline"
            size={32}
            color="#ff4605"
          />
          <Text className="text-center text-sm font-psemibold text-white">
            {images[currentIndex].engine}
          </Text>
        </View>
        <View className="items-center">
          <SimpleLineIcons name="speedometer" size={30} color="#ff4605" />
          <Text className="text-center text-sm font-psemibold text-white">
            {images[currentIndex].power}
          </Text>
        </View>
        <View className="items-center">
          <Ionicons name="settings-outline" size={32} color="#ff4605" />
          <Text className="text-center text-sm font-psemibold text-white">
            {images[currentIndex].transmission}
          </Text>
        </View>
      </View>

      <Image
        source={images[currentIndex].src}
        className="w-full h-28"
        resizeMode="contain"
      />

      <View className="flex-row items-center justify-center gap-4 h-fit">
        <TouchableOpacity onPress={prevSlide}>
          <MaterialIcons name="keyboard-arrow-left" size={24} color="white" />
        </TouchableOpacity>

        <Text className="text-white font-pbold">GLE</Text>

        <Image
          source={images[currentIndex].src}
          resizeMode="contain"
          className="w-20 h-20"
        />

        <TouchableOpacity onPress={nextSlide}>
          <MaterialIcons name="keyboard-arrow-right" size={24} color="white" />
        </TouchableOpacity>
      </View>

      <OutlineButton text="ZATRAŽITE PONUDU" />
    </View>
  );
};

export default Slider;
