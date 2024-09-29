import { View, Text, Image } from "react-native";

const CarCard = ({ listing }) => {
  const {
    car_images = [],
    model = "",
    power = "",
    car_state = "",
    production_year = "",
    price = "",
  } = listing || {};

  return (
    <View className="w-full bg-bgShade rounded-2xl mb-6">
      {/* Car Image */}
      <View className="rounded-t-2xl w-full h-[350px]">
        {car_images[0] && (
          <Image
            source={{ uri: car_images[0] }}
            className="rounded-t-2xl w-full h-full"
            resizeMode="cover"
          />
        )}
      </View>

      <View className="p-4">
        <Text className="text-white font-pmedium pb-3">{model}</Text>
        <View className="h-px bg-gray-300" />

        <View className="flex-row gap-2 pt-2 items-start justify-between">
          <View className="flex-row space-x-2">
            <Text className="text-white">
              {production_year}
              <Text>. god</Text>
            </Text>

            {car_state === "Novo" && (
              <Text className="bg-primary px-2 rounded-md font-psemibold tracking-wider text-white">
                NOVO
              </Text>
            )}
            <Text className="text-white">
              {power} <Text>ks</Text>
            </Text>
          </View>

          <Text className="text-white justify-self-end">
            Cena {" \n"} <Text className="font-bold text-primary">UPIT</Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default CarCard;
