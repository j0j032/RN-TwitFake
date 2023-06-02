import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";
import React from "react";
import { useSearchParams } from "expo-router";

const Authenticate = () => {
  const [code, setCode] = React.useState("");
  const { email } = useSearchParams();

  const onConfirm = () => {
    console.warn("Authenticate", { email, code });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Enter Email password</Text>

      <TextInput placeholder="EmailCode" value={code} onChangeText={setCode} style={styles.input} />

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
