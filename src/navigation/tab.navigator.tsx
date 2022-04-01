import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BottomNavigation, BottomNavigationTab } from "@ui-kitten/components";
import { HomeScreen, CartScreen } from "../screens";

const { Navigator, Screen } = createBottomTabNavigator();

const BottomTabBar = ({ navigation, state }: any) => (
  <BottomNavigation
    selectedIndex={state.index}
    onSelect={(index) => navigation.navigate(state.routeNames[index])}
  >
    <BottomNavigationTab title="Home" />
    <BottomNavigationTab title="Cart" />
  </BottomNavigation>
);

export const TabNavigator = () => (
  <Navigator
    screenOptions={{ headerShown: false }}
    tabBar={(props) => <BottomTabBar {...props} />}
  >
    <Screen name="Home" component={HomeScreen} />
    <Screen name="Cart" component={CartScreen} />
  </Navigator>
);
