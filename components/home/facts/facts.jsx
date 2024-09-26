import { Image, Text, View } from "react-native";
import amg from "../../../assets/images/AMG-Logo.png";

const Facts = () => {
  return (
    <View className="mt-9 px-4">
      <View className="flex-row items-center justify-between gap-5 bg-bgColor pb-6">
        <Text className="text-white font-pregular text-2xl">
          DA LI STE {"\n"}
          <Text className="text-primary font-pbold ">ZNALI?</Text>
        </Text>

        <View className="border-r border-primary w-1 h-full"></View>

        <Image source={amg} resizeMode="contain" className="w-32 h-8" />
      </View>

      <View className="my-10">
        <Text className="text-white text-xl font-psemibold">
          Da li ste znali da je{" "}
          <Text className="text-primary">AMG tjunirao i</Text>
          <Text className="text-primary">dizel kombi</Text>
        </Text>

        <View className="flex-row items-center justify-center gap-2">
          <View className="w-2 h-2 border border-primary rounded-full"></View>
          <View className="w-2 h-2 border border-primary rounded-full bg-primary"></View>
          <View className="w-2 h-2 border border-primary rounded-full"></View>
        </View>
      </View>
      <View className="bg-[#19212f] rounded-full w-[400px] h-[450px] absolute -z-10 left-0 bottom-10 -translate-x-32 translate-y-4"></View>
    </View>
  );
};

export default Facts;
