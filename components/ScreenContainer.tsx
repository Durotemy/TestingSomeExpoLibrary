import React from "react";
import { Box } from "@gluestack-ui/themed";
import { ReactNode } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

interface ScreenContainerProps {
  children: ReactNode;
}

const ScreenContainer: React.FC<ScreenContainerProps> = ({ children }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Box flex={1} p="$4">
        {children}
      </Box>
    </SafeAreaView>
  );
};

export default ScreenContainer;
