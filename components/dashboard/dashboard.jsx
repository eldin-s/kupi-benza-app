import { ActivityIndicator, FlatList, Text, View } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { getListingsForUser } from "./apiDashboard";
import { SafeAreaView } from "react-native-safe-area-context";
import CarCard from "../ui/car-card";

const Dashboard = ({ userId }) => {
  const [listings, setListings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getListings = useCallback(async () => {
    try {
      const data = await getListingsForUser(userId);
      setListings(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.error("err", error);
    }
  }, [userId]);

  useEffect(() => {
    getListings();
  }, [getListings]);

  if (isLoading) {
    return (
      <View>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (listings.length === 0)
    return (
      <View>
        <Text className="text-center text-2xl text-white">
          Nemate nijedan oglas. Kliknite na Dodaj Oglas da bi ste dodali novii
        </Text>
      </View>
    );

  return (
    <SafeAreaView>
      <FlatList
        data={listings}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <CarCard listing={item} />}
        ListEmptyComponent={() => <Text>Nema objava</Text>}
      />
    </SafeAreaView>
  );
};

export default Dashboard;
