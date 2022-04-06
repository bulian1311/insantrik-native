import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  BottomNavigation,
  BottomNavigationTab,
  Icon,
} from "@ui-kitten/components";
import {
  HomeScreen,
  CartScreen,
  ExploreScreen,
  AccountScreen,
} from "../screens";

const { Navigator, Screen } = createBottomTabNavigator();

const BottomTabBar = ({ navigation, state }: any) => (
  <BottomNavigation
    selectedIndex={state.index}
    onSelect={(index) => navigation.navigate(state.routeNames[index])}
  >
    <BottomNavigationTab icon={(p) => <Icon {...p} name="home" />} />
    <BottomNavigationTab icon={(p) => <Icon {...p} name="search" />} />
    <BottomNavigationTab icon={(p) => <Icon {...p} name="shopping-cart" />} />
    <BottomNavigationTab icon={(p) => <Icon {...p} name="person" />} />
  </BottomNavigation>
);

export const TabNavigator = () => (
  <Navigator
    screenOptions={{ headerShown: false }}
    tabBar={(props) => <BottomTabBar {...props} />}
  >
    <Screen name="Home" component={HomeScreen} />
    <Screen name="Explore" component={ExploreScreen} />
    <Screen name="Cart" component={CartScreen} />
    <Screen name="Account" component={AccountScreen} />
  </Navigator>
);
