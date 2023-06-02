import { View, Text, TextInput, Pressable, StyleSheet, Alert } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import { login } from "../../lib/api/auth";
import { useMutation } from "@tanstack/react-query";

const Login = () => {
  const [email, setEmail] = React.useState("");
  const router = useRouter();

  const { mutateAsync } = useMutation({
    mutationFn: login,
    onSuccess: () => router.push({ pathname: "/authenticate", params: { email } }),
  });

  const onSignIn = async () => {
    try {
      await mutateAsync({ email });
    } catch (error: any) {
      Alert.alert("Error", error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Sign in or create an account</Text>

      <TextInput placeholder="Email" value={email} onChangeText={setEmail} style={styles.input} />

      <Pressable style={styles.button} onPress={onSignIn}>
        <Text style={styles.buttonText}>Sign in</Text>
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

export default Login;
