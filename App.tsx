import { StatusBar } from "expo-status-bar";
import * as eva from "@eva-design/eva";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { ThemeProvider } from "styled-components/native";
import { NavigationContainer } from "@react-navigation/native";
import { StoreContext, defaultStore } from "./src/context";
import { StackNavigator } from "./src/navigation";
import { AssetIconsPack } from "./src/icons";

import { theme } from "./src/theme";

export default function App() {
  return (
    <>
      <IconRegistry icons={[EvaIconsPack, AssetIconsPack]} />
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
    </>
  );
}
