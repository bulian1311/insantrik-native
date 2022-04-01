import { ApplicationProvider } from "@ui-kitten/components";
import * as eva from "@eva-design/eva";
import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import { NavigationContainer } from "@react-navigation/native";
import { StoreContext, defaultStore } from "./src/context";
import { StackNavigator } from "./src/navigation";

import { theme } from "./src/theme";

export default function App() {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <NavigationContainer>
        <StoreContext.Provider value={defaultStore}>
          <ThemeProvider theme={theme}>
            <StatusBar style="auto" />
            <StackNavigator />
          </ThemeProvider>
        </StoreContext.Provider>
      </NavigationContainer>
    </ApplicationProvider>
  );
}
