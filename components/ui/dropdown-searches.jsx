import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";

const DropdownSearches = ({
  setOdGodine,
  setDoGodine,
  setVrstaGoriva,
  setOdCene,
  setDoCene,
  setKaroserija,
}) => {
  const currentYear = new Date().getFullYear();

  const getPriceOptions = () => {
    const priceOptions = [];
    for (let price = 2000; price < 10000; price += 2000) {
      priceOptions.push(
        <Picker.Item key={price} label={`${price}`} value={price} />
      );
    }
    for (let price = 10000; price <= 50000; price += 5000) {
      priceOptions.push(
        <Picker.Item key={price} label={`${price}`} value={price} />
      );
    }
    return priceOptions;
  };

  return (
    <View className="mt-6">
      <View style={styles.row}>
        <View style={styles.flexItem}>
          <Picker
            selectedValue=""
            onValueChange={(value) => setOdGodine(value)}
            style={styles.picker}
          >
            <Picker.Item label="Od godine" value="" />
            {Array.from({ length: currentYear - 1989 }, (_, i) => 1990 + i).map(
              (year) => (
                <Picker.Item key={year} label={`${year}`} value={year} />
              )
            )}
          </Picker>
        </View>

        <View style={styles.flexItem}>
          <Picker
            selectedValue=""
            onValueChange={(value) => setDoGodine(value)}
            style={styles.picker}
          >
            <Picker.Item label="Do godine" value="" />
            {Array.from({ length: currentYear - 1989 }, (_, i) => 1990 + i).map(
              (year) => (
                <Picker.Item key={year} label={`${year}`} value={year} />
              )
            )}
          </Picker>
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.flexItem}>
          <Picker
            selectedValue=""
            onValueChange={(value) => setVrstaGoriva(value)}
            style={styles.picker}
          >
            <Picker.Item label="Vrsta goriva" value="" />
            <Picker.Item label="Benzin" value="Benzin" />
            <Picker.Item label="Dizel" value="Dizel" />
            <Picker.Item label="Hibrid" value="Hibrid" />
            <Picker.Item label="Električni" value="Električni" />
          </Picker>
        </View>

        <View style={styles.flexItem}>
          <Picker
            selectedValue=""
            onValueChange={(value) => setKaroserija(value)}
            style={styles.picker}
          >
            <Picker.Item label="Karoserija" value="" />
            <Picker.Item label="Sedan" value="Sedan" />
            <Picker.Item label="Hatchback" value="Hatchback" />
            <Picker.Item label="Karavan" value="Karavan" />
            <Picker.Item label="Kupe" value="Kupe" />
            <Picker.Item label="Kabrio" value="Kabrio" />
            <Picker.Item label="Suv" value="Suv" />
          </Picker>
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.flexItem}>
          <Picker
            selectedValue=""
            onValueChange={(value) => setOdCene(value)}
            style={styles.picker}
          >
            {getPriceOptions()}
          </Picker>
        </View>

        <View style={styles.flexItem}>
          <Picker
            selectedValue=""
            onValueChange={(value) => setDoCene(value)}
            style={styles.picker}
          >
            {getPriceOptions()}
          </Picker>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginVertical: 4,
  },
  flexItem: {
    flex: 1,
    margin: 5,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "gray",
    overflow: "hidden",
  },
  picker: {
    // height: 50,
    backgroundColor: "#ffffff",
    padding: 10,
  },
});

export default DropdownSearches;
