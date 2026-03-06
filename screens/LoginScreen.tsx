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

const LoginScreen: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();

  const handleLogin = async () => {
    const success = await login(email, password);
    if (!success) {
      setError("Invalid credentials");
    }
  };

  return (
    <ScreenContainer>
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
      <Button onPress={handleLogin}>
        <ButtonText>Login</ButtonText>
      </Button>
      <HStack justifyContent="center">
        <Text>Don't have an account?</Text>
        <Button variant="link" onPress={() => {}}>
          <ButtonText>Sign Up</ButtonText>
        </Button>
      </HStack>
    </ScreenContainer>
  );
};

export default LoginScreen;
