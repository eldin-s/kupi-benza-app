import { StatusBar } from "expo-status-bar";
import { ScrollView, Text, View } from "react-native";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import Hero from "../../components/home/hero/hero";

export default function App() {
  return (
    <SafeAreaView className="bg-bgColor h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <Hero />
      </ScrollView>
    </SafeAreaView>
  );
}
