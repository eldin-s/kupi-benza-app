import { ScrollView } from "react-native";
import React from "react";
import SearchCard from "./search-card";
import { SafeAreaView } from "react-native-safe-area-context";
import Slider from "./slider";

const Hero = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <SearchCard />
        <Slider />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Hero;
