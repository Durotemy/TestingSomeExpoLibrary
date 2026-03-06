import React, { createContext, useContext, useState, ReactNode } from "react";

interface AppState {
  // Add your app state here
  counter: number;
}

interface AppContextType {
  state: AppState;
  setCounter: (value: number) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
};

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [state, setState] = useState<AppState>({
    counter: 0,
  });

  const setCounter = (value: number) => {
    setState((prev) => ({ ...prev, counter: value }));
  };

  const value: AppContextType = {
    state,
    setCounter,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
