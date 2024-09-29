import { useState } from "react";
import { View, Text, TextInput, ActivityIndicator, Image } from "react-native";
import PrimaryButton from "../ui/primary-button";
import { useController, useForm } from "react-hook-form";
import { login } from "../../app/(auth)/apiAuth";
import { useRouter } from "expo-router";
import benzbg from "../../assets/images/mercedes-bg.jpg";

const SignupForm = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const router = useRouter();

  const handleFormSubmit = async (data) => {
    try {
      setError("");
      setLoading(true);

      const response = await login(data);

      if (response.error) {
        setError(response.error);
      }
    } catch (err) {
      console.log(err.message);
      setError("Prijava je neuspešna! Proverite podatke i probajte ponovo.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <View className="flex justify-center items-center bg-bgShade rounded-lg shadow-lg overflow-hidden">
      <View className="p-6 w-full">
        {error !== "" && (
          <Text className="text-center text-red-400">{error}</Text>
        )}

        <Text className="text-3xl font-psemibold text-primary text-center mb-6">
          Prijavi se
        </Text>

        <View>
          {/* Name input */}
          <View className="relative mb-4">
            <Text className="block text-white mb-1">Ime i Prezime:</Text>
            <Input
              control={control}
              name="email"
              placeholder="Unesite ime i prezime"
              keyboardType="text"
              // autoCapitalize="none"
              rules={{
                required: "Ime i prezime je obavezno.",
              }}
            />
            {errors.email && (
              <Text className="absolute -bottom-5 right-0 text-red-400">
                {errors.email.message}
              </Text>
            )}
          </View>

          {/* Email Input */}
          <View className="relative mb-4">
            <Text className="block text-white mb-1">Email:</Text>
            <Input
              control={control}
              name="email"
              placeholder="Unesite vaš email"
              placeholderTextColor="#fff"
              keyboardType="email-address"
              autoCapitalize="none"
              rules={{
                required: "Email je obavezan.",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Unesite validan email.",
                },
              }}
            />
            {errors.email && (
              <Text className="absolute -bottom-5 right-0 text-red-400">
                {errors.email.message}
              </Text>
            )}
          </View>

          {/* Password Input */}
          <View className="relative mb-4">
            <Text className="block text-white mb-1">Lozinka:</Text>
            <Input
              control={control}
              name="password"
              placeholder="Unesite vašu lozinku"
              placeholderTextColor="#fff"
              secureTextEntry={true}
              rules={{
                required: "Lozinka je obavezna.",
                minLength: {
                  value: 8,
                  message: "Lozinka mora imati najmanje 8 karaktera.",
                },
              }}
            />
            {errors.password && (
              <Text className="absolute -bottom-5 right-0 text-red-400">
                {errors.password.message}
              </Text>
            )}
          </View>

          <PrimaryButton
            text="Prijavi se"
            onPress={handleSubmit(handleFormSubmit)}
          >
            {loading ? (
              <ActivityIndicator size="small" color="#FFFFFF" />
            ) : (
              <Text className="text-white text-lg">Prijavi se</Text>
            )}
          </PrimaryButton>
        </View>

        <Text className="text-center text-white mt-4 font-pregular">
          Već ste registrovani?{" "}
          <Text
            className="text-primary underline"
            onPress={() => router.push("/(auth)/log-in")}
          >
            Prijavi se
          </Text>
        </Text>
      </View>

      {/* Background Image */}
      <Image
        source={benzbg}
        style={{ width: "100%", height: 250 }}
        resizeMode="cover"
      />
    </View>
  );
};

export default SignupForm;

const Input = ({
  name,
  control,
  placeholder,
  secureTextEntry,
  keyboardType = "default",
  autoCapitalize = "none",
  rules,
}) => {
  const {
    field,
    fieldState: { error },
  } = useController({
    control,
    defaultValue: "",
    name,
    rules, // Pass the validation rules here
  });

  return (
    <View>
      <TextInput
        value={field.value}
        onChangeText={field.onChange}
        placeholder={placeholder}
        placeholderTextColor="#fff"
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        autoCapitalize={autoCapitalize}
        className="w-full p-3 border border-gray-300 rounded-md bg-bgColor text-white"
      />
    </View>
  );
};
