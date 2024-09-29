import { StyleSheet, Text, View } from "react-native";
import React from "react";
import SigninForm from "../../components/auth/signin-form";

const LogIn = () => {
  return (
    <View className="bg-bgColor min-h-full p-4 justify-center">
      <SigninForm />
    </View>
  );
};

export default LogIn;
