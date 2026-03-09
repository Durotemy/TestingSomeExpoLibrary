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

const LoginScreen: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();

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
        <HStack justifyContent="center">
          <Text>Don't have an account?</Text>
          <Button variant="link" onPress={() => {}}>
            <ButtonText>Sign Up</ButtonText>
          </Button>

          <Button
            title="Try!"
            onPress={() => {
              Sentry.captureException(new Error("Last error"));
            }}
          />
        </HStack>
      </VStack>
    </ScreenContainer>
  );
};

export default LoginScreen;
