import { Image, ImageBackground, Text, View } from "react-native";
import percent from "../../../assets/images/icons/percentage.png";
import glb35 from "../../../assets/images/cars/GLB_35.png";
import shape from "../../../assets/images/shape1.png";
import OutlineButton from "../../ui/outline-button";

const DisplayCard1 = () => {
  const data = [{ key: "Finansiski" }, { key: "Operativni" }];

  return (
    <ImageBackground
      className="py-2 bg-bgShade rounded-2xl flex-row gap-2 bg-no-repeat bg-right-top overflow-hidden my-2"
      source={shape}
      resizeMode="cover"
    >
      <View className="relative items-center justify-center">
        <Image
          source={percent}
          className="w-16 h-16 absolute -z-1 left-16 top-12"
          resizeMode="contain"
        />
        <Image source={glb35} className="w-36 h-20" resizeMode="contain" />
      </View>

      <View className="">
        <Text className="text-white text-2xl font-psemibold">Finansiranje</Text>
        <Text className="text-white font-pregular">
          Nudimo mogucnostu {"\n"}kupovine putem lizinga
        </Text>
        {data.map((item, index) => (
          <View key={index}>
            <Text className="text-white pl-3">{item.key}</Text>
          </View>
        ))}

        <OutlineButton text="Saznajte više" />
      </View>
    </ImageBackground>
  );
};

export default DisplayCard1;
