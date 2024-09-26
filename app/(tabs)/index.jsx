import { StatusBar } from "expo-status-bar";
import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Hero from "../../components/home/hero/hero";
import Facts from "../../components/home/facts/facts";
import Cards from "../../components/home/cards/cards";
import Track from "../../components/home/track/track";

export default function App() {
  return (
    <SafeAreaView className="bg-bgColor h-full flex-1">
      <ScrollView>
        <View>
          <Hero />
          <Facts />
          <Cards />
          <Track />
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#0f141e" style="light" />
    </SafeAreaView>
  );
}
