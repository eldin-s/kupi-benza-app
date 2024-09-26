import { Image, Text, View } from "react-native";
import amg from "../../../assets/images/AMG-Logo.png";

const Track = () => {
  return (
    <View className="mx-4 my-4">
      <View className="bg-bgShade items-center justify-between flex-row gap-1 p-1 flex-wrap rounded-2xl">
        <Text className="font-pregular text-white text-lg">Svi Modeli</Text>
        <View className="p-2 border border-primary rounded-2xl">
          <Image source={amg} resizeMode="contain" className="w-24 h-6" />
        </View>
        <Text className="text-lg text-white tracking-widest font-pregular">
          MAYBACH
        </Text>
      </View>
    </View>
  );
};

export default Track;
