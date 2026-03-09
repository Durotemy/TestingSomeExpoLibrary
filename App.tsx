// import React from "react";
// import { StatusBar } from "expo-status-bar";
// import { AuthProvider } from "./contexts/AuthContext";
// import { AppProvider } from "./contexts/AppContext";
// import AppNavigator from "./navigation/AppNavigator";
// import { GluestackUIProvider } from "@gluestack-ui/themed";
// import { config } from "@gluestack-ui/config";
// import { SafeAreaProvider } from "react-native-safe-area-context";

// export default function App() {
//   return (
//     <SafeAreaProvider>
//       <GluestackUIProvider config={config}>
//         <AuthProvider>
//           <AppProvider>
//             <AppNavigator />
//             <StatusBar style="auto" />
//           </AppProvider>
//         </AuthProvider>
//       </GluestackUIProvider>
//     </SafeAreaProvider>
//   );
// }

import React from "react";
import { StatusBar } from "expo-status-bar";
import { AuthProvider } from "./contexts/AuthContext";
import { AppProvider } from "./contexts/AppContext";
import AppNavigator from "./navigation/AppNavigator";
import { GluestackUIProvider } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";
import { SafeAreaProvider } from "react-native-safe-area-context";
import * as Sentry from "@sentry/react-native";

Sentry.init({
  dsn: "https://2fc0d2ea7da0dae3ee760158e58f5169@o4511003312848896.ingest.us.sentry.io/4511003315929088",
  sendDefaultPii: true,
  enableLogs: true,
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1,
  integrations: [
    Sentry.mobileReplayIntegration(),
    Sentry.feedbackIntegration(),
  ],
});

export default Sentry.wrap(function App() {
  return (
    <SafeAreaProvider>
      <GluestackUIProvider config={config}>
        <AuthProvider>
          <AppProvider>
            <AppNavigator />
            <StatusBar style="auto" />
          </AppProvider>
        </AuthProvider>
      </GluestackUIProvider>
    </SafeAreaProvider>
  );
});
