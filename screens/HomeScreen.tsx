import React from "react";
import {
  VStack,
  Text,
  Button,
  ButtonText,
  Heading,
} from "@gluestack-ui/themed";
import { useApp } from "../contexts/AppContext";
import { useAuth } from "../contexts/AuthContext";
import ScreenContainer from "../components/ScreenContainer";

const HomeScreen: React.FC = () => {
  const { state, setCounter } = useApp();
  const { logout, user } = useAuth();

  return (
    <ScreenContainer>
      <VStack space="lg" justifyContent="center" flex={1}>
        <Heading>Welcome, {user?.email}</Heading>
        <Text>Counter: {state.counter}</Text>
        <Button onPress={() => setCounter(state.counter + 1)}>
          <ButtonText>Increment</ButtonText>
        </Button>
        <Button onPress={() => setCounter(state.counter - 1)}>
          <ButtonText>Decrement</ButtonText>
        </Button>
        <Button onPress={logout}>
          <ButtonText>Logout</ButtonText>
        </Button>
      </VStack>
    </ScreenContainer>
  );
};

export default HomeScreen;
