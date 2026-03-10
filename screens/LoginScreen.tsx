import React, { useState } from "react";
import {
  VStack,
  HStack,
  Input,
  InputField,
  Button,
  ButtonText,
  Text,
  Heading,
} from "@gluestack-ui/themed";
import { useAuth } from "../contexts/AuthContext";
import ScreenContainer from "../components/ScreenContainer";
import * as Sentry from "@sentry/react-native";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import {
  GoogleSignin,
  statusCodes,
} from "@react-native-google-signin/google-signin";

const LoginScreen: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();

  GoogleSignin.configure({
    webClientId:
      "924582918952-iuen3agqqertomh9a8qqj3iqo5i86jr9.apps.googleusercontent.com",
  });

  const signInWithGoogle = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log("userInfo", userInfo);
      const { idToken } = userInfo.data;
      // console.log("Google Sign-In successful, idToken:", idToken);

      // Send idToken to your backend for verification
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log("Cancelled");
      } else {
        console.log(error);
      }
    }
  };

  const handleLogin = async () => {
    try {
      setError("Mouse");
      Sentry.captureException("Mouse");
      setError("");

      setLoading(true);
      const success = await login(email, password);
      // if (!success) {
      //   setError("Invalid credentials");
      // }
    } catch (err) {
      const message = err instanceof Error ? err.message : "Login failed";
      setError(message);
      Sentry.captureException(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScreenContainer>
      <VStack space="lg" justifyContent="center">
        <Heading>Login</Heading>
        <Input>
          <InputField
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
        </Input>
        <Input>
          <InputField
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </Input>
        {error ? <Text color="$red500">{error}</Text> : null}
        <Button onPress={handleLogin} isDisabled={loading}>
          <ButtonText>{loading ? "Logging in..." : "Login"}</ButtonText>
        </Button>
        <HStack justifyContent="center" backgroundColor="$amber100">
          {/* <Text>Don't have an account?</Text>
          <Button variant="link" onPress={() => {}}>
            <ButtonText>Sign Up</ButtonText>
          </Button> */}

          {/* <Button
            title="Try!"
            onPress={() => {
              Sentry.captureException(new Error("Last error"));
            }}
          /> */}

          <TouchableOpacity
            style={[styles.button && styles.disabled]}
            // onPress={onPress}
            // disabled={disabled}
            activeOpacity={0.8}
            onPress={signInWithGoogle}
          >
            <Image
              source={{
                uri: "https://developers.google.com/identity/images/g-logo.png",
              }}
              style={styles.logo}
            />
            <Text style={styles.text}>Sign in with Google</Text>
          </TouchableOpacity>
        </HStack>
      </VStack>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 4,
    paddingVertical: 12,
    paddingHorizontal: 16,
    elevation: 2,
    marginTop: 200,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
  },
  disabled: { opacity: 0.6 },
  logo: { width: 20, height: 20, marginRight: 12 },
  text: { color: "#3c4043", fontSize: 16, fontWeight: "500" },
});

export default LoginScreen;
