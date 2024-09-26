import { Text, TouchableOpacity } from "react-native";

const PrimaryButton = () => {
  return (
    <TouchableOpacity className="bg-primary p-4 rounded-2xl w-full my-2 flex items-center">
      <Text className="font-bold tracking-wider text-white">Pretraži</Text>
    </TouchableOpacity>
  );
};

export default PrimaryButton;
