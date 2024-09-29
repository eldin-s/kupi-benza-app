import { Text, TouchableOpacity } from "react-native";

const PrimaryButton = ({ children, onPress }) => {
  return (
    <TouchableOpacity
      className="bg-primary p-4 rounded-2xl w-full my-2 flex items-center"
      onPress={onPress}
    >
      <Text className="font-bold tracking-wider text-white">{children}</Text>
    </TouchableOpacity>
  );
};

export default PrimaryButton;
