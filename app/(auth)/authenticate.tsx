import { View, Text, TextInput, Pressable, StyleSheet, Alert } from "react-native";
import React from "react";
import { useRouter, useSearchParams } from "expo-router";
import { authenticate } from "../../lib/api/auth";
import { useMutation } from "@tanstack/react-query";

const Authenticate = () => {
  const [emailToken, setemailToken] = React.useState("");
  const { email } = useSearchParams();
  const router = useRouter();

  const { mutateAsync } = useMutation({
    mutationFn: authenticate,
    onSuccess: () => router.push({ pathname: "/" }),
  });

  const onConfirm = async () => {
    if (typeof email !== "string") throw new Error("Email is not a string");
    try {
      await mutateAsync({ email, emailToken });
    } catch (error: any) {
      Alert.alert("Error", error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Enter Email password</Text>

      <TextInput placeholder="EmailemailToken" value={emailToken} onChangeText={setemailToken} style={styles.input} />

      <Pressable style={styles.button} onPress={onConfirm}>
        <Text style={styles.buttonText}>Send Password</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    justifyContent: "center",
    padding: 24,
  },
  label: {
    fontSize: 24,
    marginVertical: 5,
    color: "gray",
  },
  error: {
    marginVertical: 5,
    color: "red",
  },
  input: {
    borderColor: "gray",
    borderWidth: StyleSheet.hairlineWidth,
    padding: 10,
    fontSize: 20,
    marginVertical: 5,
    borderRadius: 10,
  },
  button: {
    backgroundColor: "#1C9BF0",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginVertical: 5,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default Authenticate;
