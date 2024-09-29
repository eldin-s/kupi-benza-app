import { StyleSheet, Text, View } from "react-native";
import React from "react";
import SignupForm from "../../components/auth/signup-form";

const SignUp = () => {
  return (
    <View className="bg-bgColor min-h-full p-4 justify-center">
      <SignupForm />
    </View>
  );
};

export default SignUp;
