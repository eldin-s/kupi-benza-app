import { Image, ImageBackground, Text, View } from "react-native";
import highquality from "../../../assets/images/icons/high-quality.png";
import gwagon from "../../../assets/images/cars/g-wagon.png";
import shape from "../../../assets/images/shape2.png";
import OutlineButton from "../../ui/outline-button";

const DisplayCard2 = () => {
  return (
    <ImageBackground
      className="py-2 bg-bgShade rounded-2xl flex-row gap-2 bg-no-repeat bg-right-top overflow-hidden my-2"
      source={shape}
      resizeMode="cover"
    >
      <View className="relative items-center justify-center">
        <Image
          source={highquality}
          className="w-20 h-20 absolute -z-1 left-16 top-4"
          resizeMode="contain"
        />
        <Image source={gwagon} className="w-36 h-20" resizeMode="contain" />
      </View>

      <View className="">
        <Text className="text-white text-2xl font-psemibold">Garancija</Text>
        <Text className="text-white">
          Garancija na sva nova vozila {"\n"}od 2 do 5 godina.
        </Text>

        <OutlineButton text="Saznajte više" />
      </View>
    </ImageBackground>
  );
};

export default DisplayCard2;
